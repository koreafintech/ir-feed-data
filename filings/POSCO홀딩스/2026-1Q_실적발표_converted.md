```yaml
---
title: "POSCO홀딩스 2026년 1분기 실적발표"
company: "POSCO홀딩스"
english_name: "POSCO HOLDINGS"
doc_type: "실적발표"
publish_date: "2026-04-30"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: "005490"
ticker_us: ""
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-04-30T00:00:00Z"

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
  consolidated_revenue:
    value: "17,876"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.99
    note: "전분기(Q4 2025) 16,841억원 대비 +1,035억원(+6.1%) | Stage 4 교정"
    
  consolidated_operating_profit:
    value: "707"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.99
    note: "영업이익률 4.0%, 전분기(Q4 2025) 13억원 대비 +694억원 | Stage 4 교정"
    
  consolidated_net_profit:
    value: "N/A"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0
    note: "⚠️ 원본 확인 필요 - missing field"
    
  operating_margin:
    value: "4.0"
    unit: "%"
    period: "Q1 2026"
    confidence: 0.99
    note: "전분기 대비 +3.9%p"
    
  consolidated_ebitda:
    value: "1,762"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0.99
    note: "전분기(Q4 2025) 1,041억원 대비 +721억원(+69.3%)"

  tax_expense:
    value: "N/A"
    unit: "억원"
    basis: "연결"
    period: "Q1 2026"
    confidence: 0
    note: "⚠️ 원본 확인 필요 - missing field"

  earnings_per_share:
    value: "N/A"
    unit: "원/주"
    period: "Q1 2026"
    confidence: 0
    note: "⚠️ 원본 확인 필요 - missing field"

  # 사업부문별 매출액 (Q1 2026 기준) - Stage 4 교정
  revenue_by_segment:
    steel_division:
      value: "14,964"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.95
      note: "⚠️ 원본 확인 필요 - 세그먼트 합계 검증 실패(부문 세분화 재확인 필요) | Stage 4 교정"
      sub_segments:
        posco:
          value: "8,935"
          unit: "억원"
          basis: "포스코 별도"
          period: "Q1 2026"
          confidence: 0.99
          note: "포스코 기업 단독 실적"
        posco_future_m:
          value: "930"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "포스코퓨처엠(이차전지소재) 매출"
        posco_international_steel:
          value: "845"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "포스코인터내셔널 철강부문"
        unallocated_or_eliminations:
          value: "4,254"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0
          note: "⚠️ 원본 확인 필요 - 부문별 합계와의 차이 분석 필요"
          
    infrastructure_division:
      value: "13,859"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.95
      note: "⚠️ 원본 확인 필요 - 세그먼트 합계 검증 실패(약 3,769억원 누락 또는 다른 사업부문 포함) | Stage 4 교정"
      sub_segments:
        posco_international:
          value: "8,410"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "포스코인터내셔널 주요 사업"
        posco_en:
          value: "1,680"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "포스코이엔"
        other_infrastructure:
          value: "3,769"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0
          note: "⚠️ 원본 확인 필요 - 기타 인프라부문 세분화 항목"

  # 사업부문별 영업이익 (Q1 2026 기준) - Stage 4 교정
  operating_profit_by_segment:
    steel_division:
      value: "345"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.92
      note: "⚠️ 원본 확인 필요 - 부문별 합산 재검증 필요(세부 내역 불일치) | Stage 4 교정"
      sub_segments:
        posco:
          value: "213"
          unit: "억원"
          basis: "포스코 별도"
          period: "Q1 2026"
          confidence: 0.99
          note: "전분기(Q4 2025) 337억원 대비 -124억원"
        posco_future_m:
          value: "-7"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "이차전지소재 손실 축소, 전분기 -157억원 대비 개선"
        posco_international_steel:
          value: "18"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "국제철강 부문"
        unallocated_or_eliminations_op:
          value: "121"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0
          note: "⚠️ 원본 확인 필요 - 부문별 합계와의 차이"
          
    infrastructure_division:
      value: "405"
      unit: "억원"
      basis: "연결"
      period: "Q1 2026"
      confidence: 0.95
      note: "⚠️ 원본 확인 필요 - 부문별 합산 재검증 필요 | Stage 4 교정"
      sub_segments:
        posco_international:
          value: "358"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "전분기 266억원 대비 +92억원(+34.6%)"
        posco_en:
          value: "53"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0.99
          note: "전분기 -190억원 대비 대폭 개선"
        other_infrastructure_op:
          value: "-6"
          unit: "억원"
          basis: "연결"
          period: "Q1 2026"
          confidence: 0
          note: "⚠️ 원본 확인 필요 - 기타 인프라부문 영업이익"

  # 주주환원 관련 지표
  shareholder_return:
    total_return_2023_2025:
      value: "3.5"
      unit: "조원"
      period: "2023-2025년"
      confidence: 0.99
      note: "배당 2.3조원 + 자사주 소각 1.2조원"
    
    dividend_2023_2025:
      value: "2.3"
      unit: "조원"
      period: "2023-2025년"
      confidence: 0.99
      note: "중기배당정책 이행액"
      sub_items:
        dividend_per_share_policy:
          value: "10,000"
          unit: "원/주"
          period: "3년간"
          confidence: 0.99
          note: "목표 배당액 기준"
        dividend_payout_ratio:
          value: "76"
          unit: "%"
          period: "2023-2025년"
          confidence: 0.99
          note: "연결배당상황 실현율"
    
    share_buyback:
      value: "1.8"
      unit: "조원"
      period: "2024-2026년 계획"
      confidence: 0.99
      note: "6% 3년 분할 소각 계획"
      sub_items:
        completed_buyback_2024_2025:
          value: "1.2"
          unit: "조원"
          period: "2024-2025년"
          confidence: 0.99
          note: "4% 소각 완료"
        planned_buyback_2026:
          value: "0.6"
          unit: "조원"
          period: "2026년"
          confidence: 0.99
          note: "잔여 2% 소각 예정(6,351억원)"

  # JSW JV 사업
  jsw_jv_project:
    equity_structure:
      value: "50:50"
      basis: "포스코 vs JSW"
      confidence: 0.99
      note: "동등 지분구조"
    
    production_capacity:
      value: "600"
      unit: "만톤"
      basis: "연산"
      period: "완공 후"
      confidence: 0.99
      note: "고급강 생산 능력"
    
    completion_schedule:
      value: "2031"
      unit: "년"
      confidence: 0.95
      note: "최종 준공 예정, 착공 후 48개월 공기"
    
    investment_structure:
      equity_ratio: "30%"
      debt_ratio: "70%"
      confidence: 0.99
      note: "자기자본 vs 차입금 비율"

  # 전기로 사업
  electric_arc_furnace:
    production_capacity:
      value: "250"
      unit: "만톤"
      basis: "연산"
      location: "광양"
      confidence: 0.99
      note: "세계 최대 수준 신규 전기로, 2026년 6월 가동 예정"

  # 리튬 사업 (자회사)
  lithium_subsidiaries:
    posco_arg_q1_2026:
      revenue:
        value: "-18"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "손실, 전분기 -55억원 대비 개선"
      operating_profit:
        value: "28"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "전분기 19억원 대비 +9억원"
      cp1_operation:
        status: "상업생산 본격화"
        capacity_march: "70%"
        confidence: 0.99
        note: "3월 기동률 70%대 달성"
      sk_battery_contract:
        value: "2.5"
        unit: "만톤"
        period: "2026-2028년"
        confidence: 0.99
        note: "최대 규모 계약 체결"
      argentina_lithium_mine:
        acquisition_date: "2026-04-07"
        equity_stake: "100%"
        resource_addition:
          value: "158"
          unit: "만톤"
          basis: "lithium resource"
          confidence: 0.95
          note: "LIS사 보유 광권 인수, 약 950억원"
      cp2_schedule:
        value: "2026"
        unit: "년 10월"
        confidence: 0.95
        note: "2단계 가동 예정"
    
    posco_pls_q1_2026:
      revenue:
        value: "-3"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "손실, 전분기 -46억원 대비 대폭 개선(+72%)"
      operating_profit:
        value: "84"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "전분기 11억원 대비 +73억원(+664%)"
    
    posco_hyc_q1_2026:
      revenue:
        value: "1"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "2023년 7월 준공 이후 첫 분기 영업 흑자 기록"
      operating_profit:
        value: "44"
        unit: "억원"
        basis: "연결"
        period: "Q1 2026"
        confidence: 0.99
        note: "전분기 42억원 대비 +2억원"

  # 비교 분석 (전년동기)
  yoy_comparison:
    revenue_q1_2025_vs_q1_2026:
      q1_2025: "17,437"
      q1_2026: "17,876"
      unit: "억원"
      change: "+439"
      change_pct: "+2.5%"
      confidence: 0.99
    
    operating_profit_q1_2025_vs_q1_2026:
      q1_2025: "568"
      q1_2026: "707"
      unit: "억원"
      change: "+139"
      change_pct: "+24.5%"
      confidence: 0.99

english_summary:
  title: "POSCO HOLDINGS Q1 2026 Earnings Results"
  one_liner: "Revenue KRW 1.79 trillion (+2.5% YoY), Operating profit KRW 70.7 billion (+24.5% YoY) on improved battery material profitability and infrastructure segment recovery"
  
  highlights:
    - "Battery materials division (POSCO Future M) losses significantly narrowed to KRW -7 billion from KRW -157 billion in Q4 2025, marking turning point in profitability"
    - "Infrastructure division operating profit surged to KRW 40.5 billion from negative KRW -1 billion in prior quarter (+415 billion), driven by POSCO International strong performance (KRW 35.8 billion)"
    - "Signed binding JSW Joint Venture Agreement for 6-million-ton integrated steel plant in India with 50:50 equity structure, targeting 2031 completion; represents strategic shift from export to local production capacity"
    - "POSCO aRG battery material facility achieved 70% operation rate in March 2026, entering full commercial production; secured 250,000-ton lithium carbonate contract with SK Battery (2026-2028)"
    - "Gwangyang electric arc furnace (2.5-million-ton annual capacity, world-class scale) commencing operation in June 2026, accelerating low-carbon steel production transition"
    - "Completed KRW 1.2 trillion share buyback (4%) during 2024-2025 per capital allocation plan; remaining 2% to be cancelled by March 2026 under three-year program (2024-2026)"
  
  key_figures_en:
    revenue_consolidated: "KRW 1.79 trillion (consolidated, +2.5% YoY)"
    operating_profit: "KRW 70.7 billion (+24.5% YoY), operating margin 4.0% (+3.9%p QoQ)"
    ebitda: "KRW 176.2 billion (+69.3% QoQ)"
    
    segment_performance:
      steel_division_revenue: "KRW 1.50 trillion (84% of total)"
      steel_division_operating_profit: "KRW 34.5 billion"
      infrastructure_division_revenue: "KRW 1.39 trillion (77% of total)"
      infrastructure_division_operating_profit: "KRW 40.5 billion (swing from -KRW 1 billion in Q4 2025)"
    
    shareholder_returns:
      total_return_2023_2025: "KRW 3.5 trillion (dividends KRW 2.3T + share cancellation KRW 1.2T)"
      dividend_payout_ratio: "76% of targeted mid-term dividend policy"
      remaining_buyback_2026: "KRW 635 billion (2% share cancellation by March 2026)"
  
  outlook: "Company expects continued profitability improvement from POSCO aRG ramp-up, JSW India JV execution (commissioning 2031), and low-carbon production capacity expansion via electric arc furnace and HyREX transition, positioning POSCO for sustainable long-term growth in advanced steels and clean energy materials markets."

---
```

---

# POSCO HOLDINGS
## 2026년 1분기 실적 발표

**발표일**: 2026년 4월 30일

---

# DISCLAIMER

본 프레젠테이션은 회사의 경영실적, 재무성과, 주요 사업활동에 관한 정보를 주주, 투자자 및 이해관계자에게 제공하기 위해 작성된 자료입니다. 본 자료에 포함된 재무 및 운영 정보는 작성 시점에 이용 가능한 자료를 기반으로 하고 있으며, 향후 감사 조정, 시장 상황 변화 등 여러 요인에 따라 변경될 수 있습니다.

또한 본 프레젠테이션에는 회사 및 회사가 영위하는 산업의 사업 방향, 재무성과 및 전망 등에 관한 미래예측진술이 포함되어 있습니다. 이러한 진술은 역사적 사실이 아니며, 현재의 판단, 기대 및 전망이 기반하고 있어 불확실성과 위험 요소가 존재합니다. 실제 결과는 경영환경, 시장여건 변화 등 다양한 요인에 의해 본 자료에서 제시된 미래예측진술과 실질적으로 다를 수 있습니다.

본 자료는 수신자가 회사에 대한 잠재적 투자 여부를 검토하는 데 참고자료로 제공되는 것이며, 회사는 본 자료 또는 그 내용의 정확성·완정성에 대해 명시적 또는 묵시적 보증을 제공하지 않습니다. 또한 본 자료의 이용과 관련하여 발생할 수 있는 어떠한 손해에 대해서도 책임을 부담하지 않습니다.

---

# Q1 2026 연결 경영실적

## 이차전지소재 수익성 개선과 인프라 부문 회복

### 수익성 지표 (연결 기준)

| 항목 | Q1 2025 | Q4 2025 | Q1 2026 | 전분기대비 변화 |
|------|---------|---------|---------|-----------------|
| **매출액** | 17,437억원 | 16,841억원 | **17,876억원** | **+1,035억원 (+6.1%)** |
| **영업이익** | 568억원 | 13억원 | **707억원** | **+694억원 (+5,338%)** |
| **영업이익률** | 3.3% | 0.1% | **4.0%** | **+3.9%p** |
| **EBITDA** | 1,591억원 | 1,041억원 | **1,762억원** | **+721억원 (+69.3%)** |

**주석**: 
- 매출액: Q1 2026 17,876억원(연결기준), Q1 2025 대비 +439억원(+2.5%)
- 영업이익: Q4 2025의 극저점(13억원)에서 회복하여 Q1 2026 707억원으로 개선, Q1 2025(568억원) 대비 +139억원(+24.5%)
- 영업이익률: 전분기(0.1%)에서 4.0%로 비약적 개선, 년간동기(Q1 2025: 3.3%) 대비 +0.7%p
- EBITDA: 분기 간 변동성이 있으나 Q1 2026에 1,762억원으로 회복
- ⚠️ 세그먼트 합계 산술 재검증 필요: 현재 자료에서 매출액 세그먼트 합(28,823억원)과 연결매출(17,876억원) 간 차이 발생 | Stage 4 교정

---

## 사업부문별 실적 분석

### 철강부문 실적

| 항목 | Q4 2025 | Q1 2026 | 전분기대비 |
|------|---------|---------|-----------|
| **매출액** | - | **14,964억원** | - |
| **영업이익** | - | **345억원** | - |

**철강부문 세부 구성** (Q1 2026):

| 회사/부문 | 매출액 | 영업이익 | 비고 |
|-----------|--------|---------|------|
| 포스코 | 8,935억원 | 213억원 | Q4 2025 영업이익 337억원 대비 -124억원 |
| 포스코퓨처엠 | 930억원 | -7억원 | Q4 2025 -157억원 대비 +150억원 개선 |
| 포스코인터내셔널 철강 | 845억원 | 18억원 | 국제철강사업 |
| **기타/제거** | **4,254억원** | **121억원** | ⚠️ 원본 확인 필요 |
| **합계** | **14,964억원** | **345억원** | **Stage 4 교정: 세부 내역 검증 필요** |

**주석**:
- ⚠️ 세부 항목 합계(8,935 + 930 + 845 = 10,710억원) ≠ 부문 합계(14,964억원): 약 4,254억원 차이
- 포스코퓨처엠의 손실 축소가 주요 개선 요인
- 포스코 본사는 철강가격 하락의 영향으로 영업이익 감소

---

### 인프라부문 실적

| 항목 | Q4 2025 | Q1 2026 | 전분기대비 |
|------|---------|---------|-----------|
| **매출액** | - | **13,859억원** | - |
| **영업이익** | -10억원 | **405억원** | **+415억원** |

**인프라부문 세부 구성** (Q1 2026):

| 회사/부문 | 매출액 | 영업이익 | 비고 |
|-----------|--------|---------|------|
| 포스코인터내셔널 | 8,410억원 | 358억원 | Q4 2025 266억원 대비 +92억원(+34.6%) |
| 포스코이엔 | 1,680억원 | 53억원 | Q4 2025 -190억원 대비 +243억원 개선 |
| **기타/제거** | **3,769억원** | **-6억원** | ⚠️ 원본 확인 필요 |
| **합계** | **13,859억원** | **405억원** | **Stage 4 교정: 세부 항목 누락 검증** |

**주석**:
- ⚠️ 세부 항목 합계(8,410 + 1,680 = 10,090억원) ≠ 부문 합계(13,859억원): 약 3,769억원 차이
- 포스코인터내셔널의 강한 성과가 부문 전체 수익성 개선을 주도
- 포스코이엔의 대폭 개선은 Q4 2025의 -190억원 손실에서 회복된 것으로 분석

---

## 주요 사업 추진 현황

### 1. 이차전지 소재 사업

#### POSCO aRG (아르헨티나 리튬 사업)

**Q1 2026 경영실적**:
- 매출액: -18억원 (손실)
- 영업이익: 28억원
- CP1 기동률: 3월 70%대 달성 (상업생산 본격화 진입)

**주요 성과**:
- SK Battery와 최대 규모 계약 체결 (2026-2028년, 2.5만톤 리튬카보네이트 공급)
- 2026년 4월 7일 아르헨티나 LIS사 보유 광권 100% 인수 (약 950억원)
  - 추가 리튬 자원: 158만톤
- CP2(2단계) 가동 예정: 2026년 10월

#### POSCO PLS (폴란드 리튬 사업)

**Q1 2026 경영실적**:
- 매출액: -3억원 (손실)
- 영업이익: 84억원
- 전분기(-46억원) 대비 +72% 개선

#### POSCO HyC (수소환원선철)

**Q1 2026 경영실적**:
- 매출액: 1억원
- 영업이익: 44억원 (전분기 42억원 대비 +2억원)
- 2023년 7월 준공 이후 **첫 분기 영업 흑자 달성**

**주석**: 이차전지 소재 3개 자회사의 영업이익 합계(28 + 84 + 44 = 156억원) 강세 | Stage 4 교정

---

### 2. JSW 인도 합작투자 프로젝트

**사업 개요**:
- 파트너: JSW Steel (인도)
- 지분 구조: 50:50 동등 지분
- 위치: 인도 (구체적 지역 TBD)
- 생산 규모: 600만톤/년 고급강 생산 능력
- 투자 구조: 자기자본 30%, 차입금 70%
- 완공 예정: 2031년 (착공 후 48개월 공기)

**전략적 의의**: 
- 철강 수출 중심에서 현지 생산 진입으로 경영 다변화
- 글로벌 고급강 시장 개척

---

### 3. 광양 전기로 사업

**프로젝트 개요**:
- 위치: 광양 제철소
- 생산 규모: 250만톤/년 (세계 최대 수준 신규 전기로)
- 가동 예정: 2026년 6월
- 특징: 저탄소 강재 생산, 환경 친화적

---

### 4. 주주환원 정


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
> 원본 출처: [IRGO](https://m.irgo.co.kr) | 변환일: 2026-05-09 | 파서 버전: v2.0.0
