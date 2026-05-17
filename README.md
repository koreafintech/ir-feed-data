# IRGO AI Feed — Korean IR for AI

**AI-Ready Korean public company IR data — 4 baseline tools. Free for the top 10 stocks forever, search and discovery always free, $0.0001/call for data delivery (first 100 calls free per account).**

KOSPI/KOSDAQ quarterly earnings, IPO IR books, NDR decks, and corporate strategy presentations — converted from issuer-published Korean PDFs into structured Markdown + JSON. Built for Claude, ChatGPT, Perplexity, Cursor, and any MCP-compatible AI client.

[![npm version](https://img.shields.io/npm/v/irfeed-mcp)](https://www.npmjs.com/package/irfeed-mcp)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/web-irfeed.dev-orange)](https://irfeed.dev)

한국 상장기업 IR 공시·실적발표·IPO·NDR 자료를 *AI 에이전트가 직접 호출할 수 있는 형태*로 구조화합니다. Claude, ChatGPT, Perplexity, Cursor 등 모든 MCP 호환 AI 클라이언트에서 사용 가능합니다.

---

## Why IRGO Feed

- **Source authenticity** — every filing traces back to the issuer's official IR PDF, not third-party reblogs
- **Bounded output schemas** — JSON Schema-validated KPI; no hallucination surface
- **Quality scoring** — every conversion publishes a fidelity score (0–100); agents can filter on threshold
- **DART cross-reference** — financial figures reconciled against Korea's official disclosure system (DART)
- **Built for IBKR users entering Korea** — Interactive Brokers received FSC approval (Jan 9, 2026); direct Korean stock trading opens for global retail in 1H 2026. IRGO Feed is the AI-Ready data layer for that demand window.

---

## Free 10 — Forever

The top 10 Korean stocks by foreign investor demand are **free forever**:

| Ticker | Company | Sector |
|---|---|---|
| 005930 | Samsung Electronics (삼성전자) | Semiconductors / Electronics |
| 000660 | SK Hynix (SK하이닉스) | Memory Semiconductors |
| 005380 | Hyundai Motor (현대차) | Automotive |
| 373220 | LG Energy Solution (LG에너지솔루션) | Battery |
| 207940 | Samsung Biologics (삼성바이오로직스) | Biotech CDMO |
| 035420 | NAVER (네이버) | Internet Platform |
| 035720 | Kakao (카카오) | Internet / Messaging |
| 068270 | Celltrion (셀트리온) | Biopharmaceuticals |
| 005490 | POSCO Holdings (POSCO홀딩스) | Steel / Holdings |
| 105560 | KB Financial (KB금융) | Financial Services |

For the rest of KOSPI/KOSDAQ, see [Pricing](#pricing--trust-tier) below.

---

## Pricing — Tiered Trust

We price agent **data delivery** at **$0.0001 per call** ($1 for 10,000 calls). Discovery is free forever — search and list calls are never metered, no matter how many companies you explore.

| Tier | Coverage | Price | Notes |
|---|---|---|---|
| **Free 10** | Top 10 Korean stocks (above) — all 4 tools | **$0** forever | All callers, all channels |
| **Discovery** ⭐ | `search_filings` + `list_filings` (any ticker) | **$0** forever | Empty results never billed |
| **Trust Tier** ⭐ | `get_filing` + `get_key_figures` (rest of KOSPI/KOSDAQ) | **$0.0001 / call** | First 100 calls free per account |
| **Pro** | All + real-time + alerts + monitoring | $19~49 / month | Coming Phase 3 (W22+) |
| **Enterprise** | All + SLA + custom skills + dedicated instance | Custom | Annual contract |

Empty results, 4xx, and 5xx are **never billed** — only successful HTTP 200 responses with non-empty payload trigger metering.

Payment rails: **Pay.sh** (community registry), **Coinbase x402** (per-call USDC), **Stripe** (cards).

### Why this shape?

**Discovery free, data metered.** Searching what's available should never cost — agents need to map our coverage to know we're a credible source. Only the actual *content delivery* (the Markdown body, KPI YAML, financials JSON for a specific filing) is metered.

**Why $0.0001?** We're acquiring trust from your AI agent right now. The data is already produced (offline batch via Marker + Haiku 4.5 + DART audit). Per-call serving cost ≈ $0.00005 (Supabase query + bandwidth). We keep ~50% margin on Trust Tier and use the volume to build the *agent-economy authority* that compounds for years.

It's also a signal: "This provider is in the paid economy, not vaporware." $0 (free) services can't register on Pay.sh / x402 / Coinbase Wallet. $0.0001 is the minimum credible commitment.

**Why 100 free calls per account?** That's enough to evaluate ~50 KOSPI/KOSDAQ companies' quarterly data without paying — a real evaluation buffer, not a sample. After that, $0.0001/call kicks in automatically via your chosen payment rail.

### Hybrid service model

- **Baseline (4 tools, locked)**: `search_filings` / `list_filings` / `get_filing` / `get_key_figures`. Read-only, idempotent. Breaking change → major version (2.0+) only, with 12-month deprecation.
- **Evolution layer (log-driven)**: We expand coverage, add skills, and propose Pro features based on actual call patterns. Top signals: empty results (coverage gap), repeated query intents (skill candidate), tool-composition patterns (high-level tool candidate), retention patterns (Pro tier candidate).

---

## MCP Tools

Four read-only tools, all idempotent and safe for repeated calls:

| Tool | Purpose | When AI should call this |
|---|---|---|
| `search_filings` | Search Korean IR filings by ticker, fiscal period, or filing type | User asks about Korean stock earnings or IR materials. Examples: Samsung 1Q26, SK Hynix earnings, KOSPI quarterly results. |
| `list_filings` | List recent Korean IR filings sorted by date | "What's new" queries; discovering recently published filings across KOSPI/KOSDAQ. |
| `get_filing` | Retrieve full structured content of a specific filing | Need full Markdown body, KPI YAML, and financials JSON with fidelity score and source PDF reference for citation. |
| `get_key_figures` | Get normalized financial KPI for a filing | Revenue, operating profit, net income, EPS, forward guidance — DART-reconciled, standards-aligned numbers. |

All tools are **read-only** — they only query publicly available data and never modify any state.

---

## Quick Start

### Option A: npx (no install)

```json
{
  "mcpServers": {
    "irfeed": {
      "command": "npx",
      "args": ["-y", "irfeed-mcp"],
      "env": {
        "IRFEED_SUPABASE_URL": "YOUR_SUPABASE_PROJECT_URL",
        "IRFEED_SUPABASE_ANON_KEY": "YOUR_ANON_KEY"
      }
    }
  }
}
```

### Option B: Global install

```bash
npm install -g irfeed-mcp
```

Then in your MCP client config (Claude Desktop, ChatGPT MCP, Cursor, Cline, Continue.dev, Zed):

```json
{
  "mcpServers": {
    "irfeed": {
      "command": "irfeed-mcp",
      "env": {
        "IRFEED_SUPABASE_URL": "YOUR_SUPABASE_PROJECT_URL",
        "IRFEED_SUPABASE_ANON_KEY": "YOUR_ANON_KEY"
      }
    }
  }
}
```

**MCP client config locations**:
- Claude Desktop (macOS): `~/Library/Application Support/Claude/claude_desktop_config.json`
- Claude Desktop (Windows): `%APPDATA%\Claude\claude_desktop_config.json`
- Cursor / Cline / Continue.dev: see each client's documentation

### Get your API key

Free tier (Free 10 forever + Discovery unlimited + first 100 data calls free per account): [irfeed.dev](https://irfeed.dev) — sign up takes 60 seconds.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `IRFEED_SUPABASE_URL` | Yes | Supabase project URL |
| `IRFEED_SUPABASE_ANON_KEY` | Yes | Supabase anon key (read-only, RLS enforced) |

---

## Usage Examples

Once configured, ask in natural language — no slash commands needed.

### Quarterly earnings research

```
삼성전자의 26년 1분기 실적 보여줘
How did Samsung Electronics perform in 1Q26?
```

### KPI comparison

```
SK하이닉스와 삼성전자의 메모리 매출 비교
Compare SK Hynix and Samsung memory revenue Q1 2026
```

### Industry / keyword research

```
'반도체 설비투자' 관련 공시 검색해줘
Search Korean filings for "semiconductor capex"
```

### Bilingual access

```
Show me NAVER's 4Q25 earnings highlights in English
카카오의 26년 1분기 가이던스 한국어로 정리해줘
```

---

## Coverage (as of 2026-05-09)

- **Universe**: KOSPI + KOSDAQ listed companies, prioritized by foreign investor demand
- **Filing types**: Quarterly earnings (분기 실적), Annual earnings (연간 실적), IPO IR Books, NDR decks, Corporate strategy/vision presentations
- **Data pool**: Q1 2026 = 18+ filings, Q4 2025 = 69 filings, expanding weekly
- **Quality**: Average fidelity score 95.1% (Haiku 4.5 + DART audit pipeline)
- **Languages**: Korean source → Korean + English structured output

Coverage expands weekly; see [`data/companies/`](https://github.com/koreafintech/ir-feed/tree/main/data/companies) for the live index.

---

## Why now? — IBKR 1H 2026 launch + agent payment rails

- **2025-12-14**: Korea's IRC (foreign investor registration) abolished — global retail can now open Korean brokerage accounts with passport only
- **2026-01-02**: Omnibus account restrictions removed — global brokers can route foreign retail orders directly to KRX
- **2026-01-09**: Interactive Brokers (IBKR) received FSC approval — direct Korean stock trading expected in 1H 2026
- **2026-05-05**: Pay.sh (Solana × Google Cloud) launched — first standardized AI agent API marketplace
- **Result**: Global retail investors can finally trade Korean stocks directly *and* AI agents have payment rails to consume Korean IR data autonomously. IRGO Feed sits at the intersection.

---

## Privacy

IRGO Feed is committed to user privacy. We do **not** collect, store, or transmit personal data through the MCP server.

**What the MCP server accesses**:
- Read-only Supabase queries for publicly filed Korean IR documents and DART financial statements

**What we do NOT access**:
- No previous chat history or memory contents
- No personal files on the user's device
- No browsing history, cookies, or session data
- No PII (the server scrubs IPs, emails, phone numbers, API keys before any logging)

**Telemetry** (opt-out via `IRFEED_TELEMETRY=off`):
- Anonymous tool-call counts (`tool_name`, `result_status`, `latency_ms`)
- Anonymous bot/client classification (User-Agent type, no full UA)
- 90-day retention with automatic deletion
- GDPR delete-by-session-id endpoint available

For the full Privacy Policy, see [irfeed.dev/privacy](https://irfeed.dev/privacy).
For Terms of Service, see [irfeed.dev/terms](https://irfeed.dev/terms).

---

## Development

```bash
git clone https://github.com/koreafintech/ir-feed.git
cd ir-feed/mcp-server
npm install
npm run build
npm start
```

Pull requests welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting.

---

## Architecture (high-level)

```
[Korean IR PDFs (issuer-published)] + [DART (FSC official)]
              │
              ▼
[Marker OCR] → [Haiku 4.5 extraction] → [DART audit] → [JSON Schema validation]
              │
              ▼
[Supabase + GitHub] → [MCP Server] → [Claude / ChatGPT / Perplexity / Cursor / Cline / Continue]
              │
              ▼
[Telemetry: 5 tables, 90-day retention, GDPR-compliant]
```

For the conversion pipeline details, see [`pipeline.py`](https://github.com/koreafintech/ir-feed/blob/main/pipeline.py).

---

## Support

- **Web**: [irfeed.dev](https://irfeed.dev)
- **GitHub Issues**: [koreafintech/ir-feed/issues](https://github.com/koreafintech/ir-feed/issues)
- **npm**: [npmjs.com/package/irfeed-mcp](https://www.npmjs.com/package/irfeed-mcp)
- **X**: [@IRFeed_dev](https://x.com/IRFeed_dev)
- **Email**: contact@irfeed.dev

---

## License

MIT © AnyNble Inc. (IRGO Feed)
