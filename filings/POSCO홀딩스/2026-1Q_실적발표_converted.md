```yaml
---
title: "POSCO홀딩스 2026년 1분기 실적발표"
company: "POSCO홀딩스"
doc_type: "실적발표"
publish_date: "2026-04-30"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: ""
ticker_us: ""
english_name: "POSCO Holdings"
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-04-30T00:00:00+09:00"

key_figures:
  dart_revenue_annual:
    value: "690,948.9"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_operating_profit_annual:
    value: "18,270.6"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_net_income_annual:
    value: "5,044.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_assets:
    value: "1,051,924.4"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_liabilities:
    value: "428,147.5"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_equity:
    value: "623,776.9"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  # ── 연결 손익 (단위: 억원, 연결 기준) ──
  revenue:
    value: "17,876"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.97
    note: "전분기(Q4 2025) 16,841억원 대비 +1,035억원, 전년동기(Q1 2025) 17,437억원 대비 +439억원"

  operating_profit:
    value: "707"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.97
    note: "전분기(Q4 2025) 13억원 대비 +694억원; 전년동기(Q1 2025) 568억원 대비 +139억원"

  operating_margin:
    value: "4.0"
    unit: "%"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.97
    note: "전분기 0.1% → Q1 2026 4.0% (+3.9%p QoQ); 전년동기 3.3% 대비 +0.7%p YoY"

  net_income:
    value: "543"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.95
    note: "본문 표에서 '운이익'(순이익으로 추정)에 해당; Q1 2025 344억원, Q4 2025 △311억원 대비 흑자 전환"

  ebitda:
    value: "1,762"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.95
    note: "전분기(Q4 2025) 1,041억원 대비 +721억원; Q1 2025 1,591억원 대비 +171억원"

  # ── 재무구조 ──
  posco_holdings_net_debt_or_balance:
    value: "15,364"
    unit: "억원"
    basis: "포스코홀딩스 별도 추정"
    period: "Q1 2026"
    confidence: 0.80
    note: "표 '자부구조' 항목 '포스코홀딩스' 수치; Q1 2025 11,694억원, Q4 2025 12,900억원. 구체적 항목명 원본 확인 필요 ⚠️ 원본 확인 필요 [Stage 4 교정]"

  debt_ratio:
    value: "24.2"
    unit: "%"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.85
    note: "표상 '운부채비율'(부채비율로 추정); Q1 2025 19.0%, Q4 2025 20.7% 대비 +3.5%p QoQ. 정확한 항목명 원본 확인 필요 ⚠️ 원본 확인 필요 [Stage 4 교정]"

  # ── 사업부문별 매출 (단위: 억원, 연결) ──
  revenue_by_segment:
    steel:
      value: "14,964"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "Q1 2025 15,112억원, Q4 2025 14,521억원; 전분기 대비 +443억원"
    posco_standalone:
      value: "8,935"
      unit: "억원"
      basis: "포스코㈜ 별도"
      period: "Q1 2026"
      confidence: 0.96
      note: "철강 부문 내 포스코㈜ 단독 매출; Q1 2025 8,968억원, Q4 2025 8,298억원"
    overseas_steel:
      value: "4,588"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "해외철강(에외정강) 부문; Q1 2025 5,085억원, Q4 2025 4,735억원"
    battery_materials:
      value: "979"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.88
      note: "이차전지소재 부문; Q1 2025 930억원, Q4 2025 644억원; 전분기 대비 +335억원 ⚠️ 원본 확인 필요 [Stage 4 교정: 포스코퓨처엠(758) + 포스코아르헨티나(28) + 포스코필바라(84) = 870억원 ≠ 979억원, 121억원 차이 미설명]"
    posco_future_m:
      value: "758"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코퓨처엠(이차전지소재 자회사); Q1 2025 845억원, Q4 2025 558억원"
    posco_argentina:
      value: "28"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코아르헨티나(리튬); Q1 2025 12억원, Q4 2025 19억원"
    posco_pilbara_ls:
      value: "84"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코필라리들솔루션(리튬); Q1 2025 41억원, Q4 2025 11억원"
    infrastructure:
      value: "13,859"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.80
      note: "인프라 부문; Q1 2025 13,176억원, Q4 2025 13,314억원 ⚠️ 원본 확인 필요 [Stage 4 교정: 본문 표에서 세부 항목(포스코인터내셔널, 포스코이엔씨 등) 분석 중단됨, 표 끝부분 절단됨]"
    posco_international:
      value: "8,410"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코인터내셔널; Q1 2025 8,154억원, Q4 2025 7,828억원; 투자수익에도 일부 반영"
    posco_enc:
      value: "1,680"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코이엔㈜; Q1 2025 1,814억원, Q4 2025 1,815억원"
    infrastructure_segment_revenue_detail_posco_international_value:
      value: "N/A"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0
      note: "[Stage 4 교정: 누락 항목 추가] 원본 표 절단으로 인한 미기재"
    infrastructure_segment_revenue_detail_posco_enc_value:
      value: "N/A"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0
      note: "[Stage 4 교정: 누락 항목 추가] 원본 표 절단으로 인한 미기재"

  # ── 사업부문별 영업이익 (단위: 억원, 연결) ──
  operating_profit_by_segment:
    steel:
      value: "345"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "Q1 2025 453억원, Q4 2025 254억원; 영업이익률 약 2.3% (345/14,964, 추정)"
    posco_standalone:
      value: "213"
      unit: "억원"
      basis: "포스코㈜ 별도"
      period: "Q1 2026"
      confidence: 0.96
      note: "Q1 2025 346억원, Q4 2025 337억원; 전분기 대비 감소"
    overseas_steel:
      value: "87"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "해외철강; Q1 2025 68억원, Q4 2025 △111억원; 흑자 전환"
    battery_materials:
      value: "-7"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.88
      note: "이차전지소재; Q1 2025 △98억원, Q4 2025 △157억원 → 적자 대폭 축소; 수익성 개선 추세 ⚠️ 원본 확인 필요 [Stage 4 교정: 포스코퓨처엠(18) + 포스코아르헨티나(-18) + 포스코필바라(-3) = -3억원 ≠ -7억원, -4억원 차이 미설명]"
    posco_future_m:
      value: "18"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코퓨처엠; Q1 2025 17억원, Q4 2025 △52억원 → 흑자 전환"
    posco_argentina:
      value: "-18"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코아르헨티나; Q1 2025 △54억원, Q4 2025 △55억원 → 적자 폭 축소"
    posco_pilbara_ls:
      value: "-3"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코필라리들솔루션; Q1 2025 △49억원, Q4 2025 △46억원 → 적자 대폭 축소"
    infrastructure:
      value: "405"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "인프라 부문; Q1 2025 304억원, Q4 2025 △10억원 → 흑자 전환; 실적 회복 주도"
    posco_international:
      value: "358"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코인터내셔널; Q1 2025 270억원, Q4 2025 266억원"
    posco_enc:
      value: "53"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.96
      note: "포스코이엔㈜; Q1 2025 24억원, Q4 2025 △190억원 → 흑자 전환"

  # ── 부문별 합계와 연결 합계 간 조정 ──
  segment_reconciliation_adjustment_explanation:
    value: "N/A"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0
    note: "[Stage 4 교정: 누락 항목 추가] 철강(14,964) + 이차전지소재(979) + 인프라(13,859) = 29,802억원 >> 연결매출 17,876억원. 부문별 합계와 연결 합계 간 내부거래 제거 반영되어야 하나 정확한 조정액 미기재 ⚠️ 원본 확인 필요"

  # ── 주주환원 ──
  shareholder_return:
    total_shareholder_return_3yr:
      value: "3,455"
      unit: "억원"
      period: "2023~2025년 누계"
      confidence: 0.95
      note: "배당 2,273억원 + 자사주 소각 1,183억원; 원문 '3.5조원'과 단위 불일치 가능성 [원본 확인 필요] — 본문 표기상 3,455억원 vs 본문 설명 '3.5조원' 간 오류 추정, 원본 재확인 필요"
    dividend_3yr:
      value: "2,273"
      unit: "억원"
      period: "2023~2025년 누계"
      confidence: 0.90
      note: "중기배당정책 이행; 연 배당 10,000원/주 기준; 원문 '2.3조원'과 단위 불일치 가능성 [원본 확인 필요]"
    share_buyback_cancellation_3yr:
      value: "1,183"
      unit: "억원"
      period: "2023~2025년 누계"
      confidence: 0.90
      note: "보유 자사주 4% 소각(2024~2025년); 원문 '1.2조원'과 단위 불일치 가능성 [원본 확인 필요]"
    share_buyback_2026:
      value: "6,351"
      unit: "억원"
      period: "2026년"
      confidence: 0.95
      status: "완료"
      note: "잔여분 2% 소각 완료(2026.3.1 기준); '24~'26년 총 6% 분할 소각 정책의 마지막 트랜치"

  # ── 전략/투자 ──
  jsw_jv:
    jv_capacity:
      value: "600"
      unit: "만톤/연"
      period: "준공 후"
      confidence: 0.95
      note: "인도 오디샤주 고로 기반 일관제철소; 2026.4.20 본계약 체결; 착공 후 48개월, 2031년 준공 목표"
    jv_equity_structure:
      value: "50:50"
      unit: "지분율"
      confidence: 0.97
      note: "POSCO홀딩스 : JSW 각 50%; 자기자본 30%, 차입 70% 조달 구조"
    p_arg_lisi_acquisition:
      value: "950"
      unit: "억원"
      period: "2026.4.7 완료"
      confidence: 0.95
      note: "LISI사 보유 아르헨티나 염호 광권 100% 인수; 리튬 매장량(resource) 158만톤 추가"
    sk_bank_lithium_contract:
      value: "2.5"
      unit: "만톤"
      period: "2026~2028년"
      confidence: 0.90
      note: "SK온(추정) 리튬 장기공급계약; 최대 규모; P-ARG 장기 고객 확보"

english_summary:
  title: "POSCO Holdings Q1 2026 Earnings Results"
  one_liner: >
    Revenue KRW 1.7876T (+2.5% YoY, +6.1% QoQ), Operating profit KRW 70.7B
    (+24.5% YoY, +5,338% QoQ), Operating margin 4.0% (vs. 3.3% Q1 2025).
  highlights:
    - "Q1 2026 consolidated revenue KRW 1.7876 trillion, operating profit KRW 70.7 billion (OPM 4.0%), net income KRW 54.3 billion — significant recovery from near-breakeven Q4 2025."
    - "Battery materials segment narrowed operating loss to KRW -0.7 billion (vs. KRW -15.7B in Q4 2025), driven by improved lithium operations at P-ARG (CP1 ramp-up, ~70% utilization in March) and POSCO Future M turning to profit (KRW +1.8B)."
    - "Infrastructure segment recovered strongly to KRW 40.5B operating profit (vs. KRW -1.0B in Q4 2025), led by POSCO International (KRW 35.8B) and POSCO E&C returning to profit (KRW 5.3B)."
    - "Signed JV agreement with JSW (India) on 2026.4.20 for a 6M tpa integrated steel mill in Odisha, targeting 2031 commissioning; 50:50 equity split, 30% equity / 70% debt financing."
    - "Completed 2% treasury share cancellation (KRW 635.1B) in March 2026, completing the 3-year 6% phased cancellation program (2024–2026, total ~KRW 1.8T)."
    - "HyREX transition site development approved by Ministry of Land (2026.3.27); ~1.35M m² public waters in Pohang designated for future hydrogen reduction steelmaking."
    - "New electric arc furnace (2.5M tpa, world's largest scale) at Gwangyang slated for commissioning in June 2026 (Q2 2026)."
  key_figures_en:
    revenue: "KRW 1.7876 trillion (consolidated, +2.5% YoY, +6.1% QoQ)"
    operating_profit: "KRW 70.7 billion (consolidated, OPM 4.0%, +0.7%p YoY)"
    net_income: "KRW 54.3 billion (consolidated, vs. net loss KRW -31.1B in Q4 2025)"
    ebitda: "KRW 176.2 billion (consolidated, +69.3% QoQ)"
    steel_segment_revenue: "KRW 1.4964 trillion (operating profit KRW 34.5B)"
    battery_materials_segment_revenue: "KRW 97.9 billion (operating loss KRW -0.7B, significantly improved)"
    infrastructure_segment_revenue: "KRW 1.3859 trillion (operating profit KRW 40.5B)"
    total_shareholder_return_2023_2025: "KRW 345.5 billion cumulative (dividend KRW 227.3B + buyback cancellation KRW 118.3B) [unit discrepancy vs. body text — see note]"
  outlook: >
    POSCO Holdings expects continued improvement in battery materials profitability
    as P-ARG (CP1) production scales up and spreads recover; the JSW India JV and
    Gwangyang EAF commissioning are expected to provide additional growth drivers
    from H2 2026 and 2031, respectively.
---
```

---

# POSCO HOLDINGS
## 2026년 1분기 실적 발표

**공시일: 2026년 4월 30일**

---

# DISCLAIMER

본 프레젠테이션은 회사의 경영실적, 재무성과, 주요 사업활동에 관한 정보를 주주, 투자자 및 이해관계자에게 제공하기 위해 작성된 자료입니다. 본 자료에 포함된 재무 및 운영 정보는 작성 시점에 이용 가능한 자료를 기반으로 하고 있으며, 향후 감사 조정, 시장 상황 변화 등 여러 요인에 따라 변경될 수 있습니다.

본 자료는 수신자가 회사에 대한 잠재적 투자 여부를 검토하는 데 참고자료로 제공되는 것이며, 회사는 본 자료 또는 그 내용의 정확성·완전성에 대해 명시적 또는 묵시적 보증을 제공하지 않습니다.

---

# Q1 2026 연결 경영실적

## 이차전지소재 수익성 개선과 인프라 손익 회복으로 실적 개선

> **[맥락 주석]** Q1 2026 실적의 핵심 개선 요인은 두 가지: ① 이차전지소재 부문 적자 대폭 축소(Q4 2025 △157억원 → Q1 2026 △7억원), ② 인프라 부문 흑자 전환(Q4 2025 △10억원 → Q1 2026 +405억원). 철강 부문 영업이익은 오히려 Q1 2025(453억원) 대비 감소(345억원).

### 연결 손익 요약 (단위: 억원, 연결 기준)

| 구분 | Q1 2025 | Q4 2025 | Q1 2026 | QoQ 증감 | YoY 증감 |
|------|--------:|--------:|--------:|---------:|---------:|
| 매출액 | 17,437 | 16,841 | 17,876 | +1,035 | +439 |
| 영업이익 | 568 | 13 | 707 | +694 | +139 |
| 영업이익률 | 3.3% | 0.1% | 4.0% | +3.9%p | +0.7%p |
| 순이익¹⁾ | 344 | △311 | 543 | +854 | +199 |

> ¹⁾ 원문에서 '운이익'으로 표기 — '순이익'(지배주주 귀속 또는 연결 당기순이익)으로 추정. 정확한 항목명 **[원본 확인 필요]**

### 재무구조 요약 (단위: 억원, 연결 기준)

| 구분 | Q1 2025 | Q4 2025 | Q1 2026 | QoQ 증감 |
|------|--------:|--------:|--------:|---------:|
| 포스코홀딩스 [원본 확인 필요]¹⁾ | 11,694 | 12,900 | 15,364 | +2,464 |
| EBITDA | 1,591 | 1,041 | 1,762 | +721 |
| 부채비율 [원본 확인 필요]²⁾ | 19.0% | 20.7% | 24.2% | +3.5%p |

> ¹⁾ ⚠️ '포스코홀딩스' 항목이 부채총액, 순차입금 등 어떤 재무지표인지 원본 확인 필요 [Stage 4 교정]
> ²⁾ ⚠️ '운부채비율' 원문을 부채비율로 추정; 정확한 항목명 원본 확인 필요 [Stage 4 교정]
>
> **※ Q1 2026 참고:** (금리) 1.7조원, (달러) 144억원 — 환율·금리 민감도 관련 수치로 추정

---

## 부문별 실적 (단위: 억원, 연결 기준)

> **[맥락 주석]** 아래 표에서 '운이익'은 원문 표기를 그대로 유지하였으며, 순이익 또는 세전이익으로 추정됨. 부문별 합계와 연결 합계 간에는 내부거래 제거 및 연결조정이 반영되어 있음. 포스코인터내셔널은 투자수익에도 일부 반영됨(각주 1 참조).

### 매출액 (단위: 억원, 연결)

| 부문 | Q1 2025 | Q4 2025 | Q1 2026 | QoQ | YoY |
|------|--------:|--------:|--------:|----:|----:|
| **연결 합계** | **17,437** | **16,841** | **17,876** | **+1,035** | **+439** |
| **철강** | **15,112** | **14,521** | **14,964** | **+443** | **△148** |
| ∟ 포스코㈜ | 8,968 | 8,298 | 8,935 | +637 | △33 |
| ∟ 해외철강¹⁾ | 5,085 | 4,735 | 4,588 | △147 | △497 |
| **이차전지소재** | **930** | **644** | **979** | **+335** | **+49** |
| ∟ 포스코퓨처엠²⁾ | 845 | 558 | 758 | +200 | △87 |
| ∟ 포스코아르헨티나(리튬) | 12 | 19 | 28 | +9 | +16 |
| ∟ 포스코필바라리튬솔루션 | 41 | 11 | 84 | +73 | +43 |
| **인프라** | **13,176** | **13,314** | **13,859** | **+545** | **+683** |
| ∟ 포스코인터내셔널²⁾ | 8,154 | 7,828 | 8,410 | +582 | +256 |
| ∟ 포스코이엔㈜ | 1,814 | 1,815 | 1,680 | △135 | △134 |

> ¹⁾ 해외철강: 포스코인도네시아(PTPI), 포스코베트남, 포스코러시아 등
> ²⁾ 포스코퓨처엠은 양극재·산화광 수직통합, 포스코인터내셔널은 LNG 및 자원개발 병행 사업
>
> **[Stage 4 교정]** ⚠️ 이차전지소재 부문 합계 재검증 필요: 개별 합계(758+28+84=870억원) ≠ 부문 합계(979억원), 121억원 차이 미설명

### 영업이익(운이익) (단위: 억원, 연결)

| 부문 | Q1 2025 | Q4 2025 | Q1 2026 | QoQ | YoY | 영업이익률(Q1 2026) |
|------|--------:|--------:|--------:|----:|----:|----:|
| **연결 합계** | **568** | **13** | **707** | **+694** | **+139** | **4.0%** |
| **철강** | **453** | **254** | **345** | **+91** | **△108** | **2.3%** |
| ∟ 포스코㈜ | 346 | 337 | 213 | △124 | △133 | 2.4% |
| ∟ 해외철강 | 68 | △111 | 87 | +198 | +19 | 1.9% |
| **이차전지소재** | **△98** | **△157** | **△7** | **+150** | **+91** | **△0.7%** |
| ∟ 포스코


---

## DART 연결재무제표 (POSCO홀딩스, 2025년)
<!-- source: OpenDART API | ground_truth: true -->

| 계정 | 금액(억원) | 출처 |
|------|--------:|------|
| 매출액 | 690,948.9 | DART |
| 영업이익 | 18,270.6 | DART |
| 당기순이익 | 5,044.0 | DART |
| 자산총계 | 1,051,924.4 | DART |
| 부채총계 | 428,147.5 | DART |
| 자본총계 | 623,776.9 | DART |
---

> **⚠️ 본 문서 이용 시 유의사항**
>
> 본 Markdown 문서는 원본 IR자료(PDF)를 AI 분석 목적으로 자동 변환한 것입니다.
> 변환 과정에서 수치의 누락, 오류, 맥락 손실이 발생할 수 있으므로,
> 투자 판단 등 중요한 의사결정 시 반드시 원본 자료를 참고하시기 바랍니다.
>
> 원본 저작권은 해당 기업에 있으며, 본 변환본은 정보 접근성 향상을 위한
> 구조화 데이터로서 원본의 상업적 재배포를 목적으로 하지 않습니다.
>
> 원본 출처: [IRGO](https://m.irgo.co.kr) | 변환일: 2026-05-08 | 파서 버전: v2.0.0
