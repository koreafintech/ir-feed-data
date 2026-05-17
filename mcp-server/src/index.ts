#!/usr/bin/env node
/**
 * IRFeed MCP Server
 *
 * Claude Desktop에서 한국 상장기업 IR 데이터에 접근하기 위한 MCP 서버
 *
 * 제공 Tools:
 * - list_filings    : IR 공시 목록 조회 (필터: 회사명, 날짜, 종류)
 * - get_filing      : 특정 공시 상세 조회
 * - search_filings  : 공시 내용 전문 검색
 * - get_key_figures : 기업의 핵심 재무 수치 조회
 *
 * DB 컬럼 매핑 (2026-04-09 실제 스키마 기준):
 * - companies: corp_name, stock_code, sector, corp_name_en, market
 * - ir_documents: doc_type, published_at, title, period, meta(jsonb)
 * - dart_financials: fiscal_year, quarter, consolidated(jsonb), separate(jsonb)
 *
 * 환경변수:
 * - IRFEED_SUPABASE_URL           : Supabase 프로젝트 URL (기본값 내장)
 * - IRFEED_SUPABASE_ANON_KEY      : Supabase anon 키 (읽기 전용, RLS 적용, 권장)
 * - IRFEED_SUPABASE_SERVICE_KEY   : Supabase service_role 키 (폴백)
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";

// ─── EPIPE 핸들러 (v0.1.6 추가, 2026-05-12) ────────────────────────────────
// Claude Desktop이 stdio 파이프를 먼저 닫은 뒤 서버가 응답 write를 시도할 때
// EPIPE/ERR_STREAM_DESTROYED가 uncaughtException으로 떠서 프로세스가 죽는 이슈
// (4/17, 4/30 로그 확인). 클라이언트 정상 종료 신호로 간주하고 조용히 무시.
// 그 외 예외는 기존 동작대로 throw하여 가시성 유지.
process.on("uncaughtException", (err: any) => {
  if (err && (err.code === "EPIPE" || err.code === "ERR_STREAM_DESTROYED")) {
    return;
  }
  throw err;
});
process.stdout.on("error", (err: any) => {
  if (err && err.code !== "EPIPE") throw err;
});
process.stderr.on("error", (err: any) => {
  if (err && err.code !== "EPIPE") throw err;
});

// ─── 환경변수 ────────────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.IRFEED_SUPABASE_URL;
// anon key 우선 사용 (RLS 적용, 읽기 전용), service key는 폴백
const SUPABASE_KEY =
  process.env.IRFEED_SUPABASE_ANON_KEY ??
  process.env.IRFEED_SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error(
    "[IRFeed MCP] 오류: IRFEED_SUPABASE_URL 과 IRFEED_SUPABASE_ANON_KEY (또는 IRFEED_SUPABASE_SERVICE_KEY) 환경변수가 필요합니다."
  );
  process.exit(1);
}

// ─── Supabase 클라이언트 ──────────────────────────────────────────────────────
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
  global: { headers: { "User-Agent": "irfeed-mcp/0.1.5" } },
});

// ─── 보안 유틸리티 ──────────────────────────────────────────────────────────
/** PostgREST ilike 와일드카드 이스케이프 (%_) */
function escapeLike(input: string): string {
  return input.replace(/[%_\\]/g, (c) => `\\${c}`);
}

// ─── 입력 스키마 정의 (Zod) ──────────────────────────────────────────────────

const ListFilingsSchema = z.object({
  company_name: z.string().optional().describe("회사명 (예: 삼성전자, LG에너지솔루션)"),
  ticker: z.string().optional().describe("종목코드 6자리 (예: 005930)"),
  filing_type: z
    .enum(["earnings", "business_report", "semi_annual", "quarterly", "other"])
    .optional()
    .describe("공시 유형 (doc_type)"),
  from_date: z
    .string()
    .optional()
    .describe("조회 시작일 (YYYY-MM-DD 형식)"),
  to_date: z
    .string()
    .optional()
    .describe("조회 종료일 (YYYY-MM-DD 형식)"),
  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .default(10)
    .describe("최대 조회 건수 (1~50, 기본 10)"),
  offset: z.number().int().min(0).max(10000).default(0).describe("페이지 오프셋 (최대 10,000)"),
});

const GetFilingSchema = z.object({
  filing_id: z.string().uuid().describe("공시 고유 ID (UUID)"),
});

const SearchFilingsSchema = z.object({
  query: z.string().min(2).describe("검색어 (최소 2자 이상)"),
  company_name: z.string().optional().describe("특정 회사로 검색 범위 제한"),
  filing_type: z
    .enum(["earnings", "business_report", "semi_annual", "quarterly", "other"])
    .optional(),
  limit: z.number().int().min(1).max(20).default(5).describe("최대 결과 수"),
});

const GetKeyFiguresSchema = z.object({
  company_name: z
    .string()
    .optional()
    .describe("회사명 (ticker 또는 company_name 중 하나 필수)"),
  ticker: z.string().optional().describe("종목코드 6자리"),
  period: z
    .string()
    .optional()
    .describe("기간 (예: 2024Q4, 2024, 2024H1)"),
  metrics: z
    .array(
      z.enum([
        "revenue",        // 매출액
        "operating_profit", // 영업이익
        "net_income",     // 당기순이익
        "operating_margin", // 영업이익률
        "eps",            // 주당순이익
        "roe",            // 자기자본이익률
        "debt_ratio",     // 부채비율
        "dividend_yield", // 배당수익률
      ])
    )
    .optional()
    .describe("조회할 재무 지표 (미지정 시 전체)"),
});

// ─── MCP Tool 정의 ────────────────────────────────────────────────────────────
const TOOLS: Tool[] = [
  {
    name: "list_filings",
    description:
      "한국 상장기업의 IR 공시 목록을 조회합니다. 회사명, 종목코드, 공시 유형, 날짜 범위로 필터링 가능합니다. " +
      "예: 삼성전자의 최근 실적발표 공시 5건 조회",
    inputSchema: {
      type: "object" as const,
      properties: {
        company_name: { type: "string", description: "회사명 (예: 삼성전자)" },
        ticker: { type: "string", description: "종목코드 6자리 (예: 005930)" },
        filing_type: {
          type: "string",
          enum: ["earnings", "business_report", "semi_annual", "quarterly", "other"],
          description: "공시 유형 (earnings=실적발표, business_report=사업보고서, other=기타)",
        },
        from_date: { type: "string", description: "조회 시작일 (YYYY-MM-DD)" },
        to_date: { type: "string", description: "조회 종료일 (YYYY-MM-DD)" },
        limit: {
          type: "number",
          description: "최대 조회 건수 (1~50, 기본 10)",
          minimum: 1,
          maximum: 50,
          default: 10,
        },
        offset: { type: "number", description: "페이지 오프셋", default: 0 },
      },
    },
    annotations: {
      title: "List IR Filings",
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  {
    name: "get_filing",
    description:
      "특정 공시의 상세 내용을 조회합니다. 제목, 유형, 기간, 메타 정보 등을 제공합니다. " +
      "list_filings로 filing_id를 먼저 확인하세요.",
    inputSchema: {
      type: "object" as const,
      properties: {
        filing_id: { type: "string", description: "공시 고유 ID (UUID)" },
      },
      required: ["filing_id"],
    },
    annotations: {
      title: "Get Filing Details",
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  {
    name: "search_filings",
    description:
      "공시 제목을 검색합니다. 특정 키워드로 공시를 찾을 수 있습니다. " +
      "예: '반도체' 검색, '실적' 검색",
    inputSchema: {
      type: "object" as const,
      properties: {
        query: { type: "string", description: "검색어 (최소 2자)" },
        company_name: { type: "string", description: "특정 회사로 범위 제한 (선택)" },
        filing_type: {
          type: "string",
          enum: ["earnings", "business_report", "semi_annual", "quarterly", "other"],
        },
        limit: {
          type: "number",
          description: "최대 결과 수 (1~20, 기본 5)",
          minimum: 1,
          maximum: 20,
          default: 5,
        },
      },
      required: ["query"],
    },
    annotations: {
      title: "Search Filings",
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  {
    name: "get_key_figures",
    description:
      "기업의 핵심 재무 수치를 조회합니다. DART 연결재무제표(consolidated) 기준 데이터입니다. " +
      "예: 삼성전자 2024년 4분기 실적 조회",
    inputSchema: {
      type: "object" as const,
      properties: {
        company_name: { type: "string", description: "회사명" },
        ticker: { type: "string", description: "종목코드 6자리" },
        period: { type: "string", description: "기간 (예: 2024Q4, 2024, 2024H1)" },
        metrics: {
          type: "array",
          items: {
            type: "string",
            enum: [
              "revenue",
              "operating_profit",
              "net_income",
              "operating_margin",
              "eps",
              "roe",
              "debt_ratio",
              "dividend_yield",
            ],
          },
          description: "조회할 재무 지표 (미지정 시 전체)",
        },
      },
    },
    annotations: {
      title: "Get Key Financial Figures",
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
];

// ─── Tool 구현 함수들 ─────────────────────────────────────────────────────────

/**
 * list_filings 구현
 * DB: ir_documents (doc_type, published_at) + companies (corp_name, stock_code, sector)
 */
async function listFilings(params: z.infer<typeof ListFilingsSchema>): Promise<string> {
  const { company_name, ticker, filing_type, from_date, to_date, limit, offset } = params;

  let query = supabase
    .from("ir_documents")
    .select(
      `
      id,
      title,
      doc_type,
      published_at,
      period,
      source,
      meta,
      companies!inner(corp_name, stock_code, sector, market)
    `,
      { count: "exact" }
    )
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  // 필터 적용
  if (company_name) {
    query = query.ilike("companies.corp_name", `%${escapeLike(company_name)}%`);
  }
  if (ticker) {
    query = query.eq("companies.stock_code", ticker);
  }
  if (filing_type) {
    query = query.eq("doc_type", filing_type);
  }
  if (from_date) {
    query = query.gte("published_at", from_date);
  }
  if (to_date) {
    query = query.lte("published_at", to_date);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(`데이터 조회 오류: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return "조건에 맞는 공시를 찾을 수 없습니다. 검색 조건을 완화해 보세요.";
  }

  const result = {
    total: count ?? 0,
    showing: data.length,
    offset,
    filings: data.map((f: Record<string, unknown>) => ({
      id: f.id,
      title: f.title,
      doc_type: f.doc_type,
      published_at: f.published_at,
      period: f.period,
      source: f.source,
      company: f.companies,
    })),
  };

  return JSON.stringify(result, null, 2);
}

/**
 * get_filing 구현
 * DB: ir_documents 전체 + companies 조인
 */
async function getFiling(params: z.infer<typeof GetFilingSchema>): Promise<string> {
  const { filing_id } = params;

  const { data, error } = await supabase
    .from("ir_documents")
    .select(
      `
      id, title, doc_type, published_at, period,
      source, source_url, source_id,
      page_count, language, is_processed, is_public,
      meta,
      companies!inner(corp_name, stock_code, sector, market, corp_name_en)
    `
    )
    .eq("id", filing_id)
    .maybeSingle();

  if (error) {
    throw new Error(`공시 조회 오류: ${error.message}`);
  }

  if (!data) {
    return `ID '${filing_id}'에 해당하는 공시를 찾을 수 없습니다.`;
  }

  return JSON.stringify(data, null, 2);
}

/**
 * search_filings 구현 (제목 검색)
 * DB: ir_documents.title ilike 검색
 */
async function searchFilings(params: z.infer<typeof SearchFilingsSchema>): Promise<string> {
  const { query, company_name, filing_type, limit } = params;

  let dbQuery = supabase
    .from("ir_documents")
    .select(
      `
      id, title, doc_type, published_at, period,
      companies!inner(corp_name, stock_code)
    `
    )
    .ilike("title", `%${escapeLike(query)}%`)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (company_name) {
    dbQuery = dbQuery.ilike("companies.corp_name", `%${escapeLike(company_name)}%`);
  }
  if (filing_type) {
    dbQuery = dbQuery.eq("doc_type", filing_type);
  }

  const { data, error } = await dbQuery;

  if (error) {
    throw new Error(`검색 오류: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return `'${query}' 검색 결과가 없습니다.`;
  }

  const result = {
    query,
    results_count: data.length,
    results: data.map((f: Record<string, unknown>) => ({
      id: f.id,
      title: f.title,
      doc_type: f.doc_type,
      published_at: f.published_at,
      period: f.period,
      company: f.companies,
    })),
  };

  return JSON.stringify(result, null, 2);
}

/**
 * get_key_figures 구현
 * DB: dart_financials (fiscal_year, quarter, consolidated jsonb) + companies 조인
 * consolidated jsonb 안에 재무 수치가 들어있음
 */
async function getKeyFigures(params: z.infer<typeof GetKeyFiguresSchema>): Promise<string> {
  const { company_name, ticker, period, metrics } = params;

  if (!company_name && !ticker) {
    throw new Error("company_name 또는 ticker 중 하나는 필수입니다.");
  }

  // period 파싱 (예: "2024Q4" → fiscal_year=2024, quarter=4)
  let fiscalYear: number | undefined;
  let quarter: number | undefined;
  if (period) {
    const match = period.match(/^(\d{4})(?:Q(\d))?$/i);
    if (match) {
      fiscalYear = parseInt(match[1], 10);
      quarter = match[2] ? parseInt(match[2], 10) : undefined;
    }
  }

  let query = supabase
    .from("dart_financials")
    .select(
      `
      fiscal_year,
      quarter,
      consolidated,
      companies!inner(corp_name, stock_code, sector, market)
    `
    )
    .order("fiscal_year", { ascending: false })
    .order("quarter", { ascending: false })
    .limit(8);

  if (ticker) {
    query = query.eq("companies.stock_code", ticker);
  } else if (company_name) {
    query = query.ilike("companies.corp_name", `%${escapeLike(company_name)}%`);
  }

  if (fiscalYear) {
    query = query.eq("fiscal_year", fiscalYear);
  }
  if (quarter) {
    query = query.eq("quarter", quarter);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`재무 데이터 조회 오류: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return `${company_name || ticker}의 재무 데이터를 찾을 수 없습니다.`;
  }

  // ─── consolidated JSONB에서 재무 수치 추출 ───────────────────────────────────
  // DB 실제 구조: 한국어 계정명 키 { "매출액": { "억원": 3008709, "value": ... } }
  // 여러 가능한 한국어 키를 후보로 지정해 순서대로 시도
  const KR_KEYS: Record<string, string[]> = {
    revenue:          ["매출액", "영업수익", "수익(매출액)"],
    operating_profit: ["영업이익", "영업이익(손실)"],
    net_income:       ["당기순이익", "당기순이익(손실)", "분기순이익", "분기순이익(손실)"],
    asset_total:      ["자산총계"],
    liability_total:  ["부채총계", "자본과부채총계"],
    equity_total:     ["자본총계"],
    operating_cf:     ["영업활동현금흐름"],
  };

  function extractVal(consolidated: Record<string, unknown>, candidates: string[]): number | null {
    for (const key of candidates) {
      const entry = consolidated[key] as Record<string, unknown> | undefined;
      if (entry && typeof entry["억원"] === "number") {
        return entry["억원"] as number;
      }
      // value(원) → 억원 변환 폴백
      if (entry && typeof entry["value"] === "number") {
        return Math.round((entry["value"] as number) / 1e8 * 10) / 10;
      }
    }
    return null;
  }

  const filtered = data.map((row: Record<string, unknown>) => {
    const consolidated = (row.consolidated as Record<string, unknown>) || {};
    // quarter=0 은 연간 데이터를 의미 (DART 관행)
    const q = (row.quarter as number) === 0 ? "연간" : `Q${row.quarter}`;
    const periodStr = `${row.fiscal_year}${q}`;

    // 핵심 수치 추출
    const rev  = extractVal(consolidated, KR_KEYS.revenue);
    const opPr = extractVal(consolidated, KR_KEYS.operating_profit);
    const ni   = extractVal(consolidated, KR_KEYS.net_income);
    const liab = extractVal(consolidated, KR_KEYS.liability_total);
    const eq   = extractVal(consolidated, KR_KEYS.equity_total);

    // 계산 지표
    const opMargin = (rev && opPr) ? Math.round((opPr / rev) * 1000) / 10 : null;
    const debtRatio = (eq && liab) ? Math.round((liab / eq) * 1000) / 10 : null;

    const extractedAll: Record<string, number | null> = {
      revenue:          rev,
      operating_profit: opPr,
      net_income:       ni,
      operating_margin: opMargin,
      debt_ratio:       debtRatio,
      eps:              null,  // DART API별도 — 향후 지원
      roe:              null,  // 계산 가능하나 전기자본 필요
      dividend_yield:   null,  // 별도 데이터 필요
    };

    const targetMetrics = (!metrics || metrics.length === 0)
      ? Object.keys(extractedAll)
      : metrics;

    const result: Record<string, unknown> = {
      period: periodStr,
      fiscal_year: row.fiscal_year,
      quarter: row.quarter,
      company: row.companies,
    };

    targetMetrics.forEach((m) => {
      result[m] = extractedAll[m] ?? null;
    });

    return result;
  });

  const response = {
    company: company_name || ticker,
    period_requested: period || "최근 8개 기간",
    data: filtered,
    units: {
      revenue: "억원",
      operating_profit: "억원",
      net_income: "억원",
      operating_margin: "%",
      debt_ratio: "%",
    },
    note: "DART 연결재무제표 기준. quarter=0은 연간(full-year) 데이터.",
  };

  return JSON.stringify(response, null, 2);
}

// ─── MCP 서버 설정 ────────────────────────────────────────────────────────────
const server = new Server(
  {
    name: "irfeed-mcp-server",
    version: "0.1.5",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool 목록 핸들러
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

// Tool 호출 핸들러
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let result: string;

    switch (name) {
      case "list_filings": {
        const parsed = ListFilingsSchema.parse(args ?? {});
        result = await listFilings(parsed);
        break;
      }

      case "get_filing": {
        const parsed = GetFilingSchema.parse(args ?? {});
        result = await getFiling(parsed);
        break;
      }

      case "search_filings": {
        const parsed = SearchFilingsSchema.parse(args ?? {});
        result = await searchFilings(parsed);
        break;
      }

      case "get_key_figures": {
        const parsed = GetKeyFiguresSchema.parse(args ?? {});
        result = await getKeyFigures(parsed);
        break;
      }

      default:
        throw new Error(`알 수 없는 Tool: ${name}`);
    }

    return {
      content: [
        {
          type: "text" as const,
          text: result,
        },
      ],
    };
  } catch (err) {
    // Zod 검증 오류
    if (err instanceof z.ZodError) {
      const messages = err.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      return {
        content: [{ type: "text" as const, text: `입력값 오류: ${messages}` }],
        isError: true,
      };
    }

    // 기타 오류 — 내부 에러 메시지는 stderr 로그에만, 사용자에게는 일반 메시지
    console.error(`[IRFeed MCP] Tool '${name}' 실행 오류:`, err);
    const safeMessage = err instanceof Error && err.message.startsWith("company_name")
      ? err.message  // Zod-like validation messages are safe
      : "데이터 조회 중 오류가 발생했습니다. 입력값을 확인해 주세요.";
    return {
      content: [
        {
          type: "text" as const,
          text: `오류 발생: ${safeMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// ─── 서버 시작 ────────────────────────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[IRFeed MCP] 서버 v0.1.6 시작됨 (stdio transport)");
}

main().catch((err) => {
  console.error("[IRFeed MCP] 서버 시작 실패:", err);
  process.exit(1);
});
