```yaml
---
title: "현대로템 2026년 1분기 실적발표"
company: "현대로템"
english_name: "Hyundai Rotem"
doc_type: "실적발표"
publish_date: "2026-04-24"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: ""
ticker_us: ""
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-04-24T00:00:00Z"

key_figures:
  dart_revenue_annual:
    value: "58,390.3"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_net_income_annual:
    value: "7,704.9"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_assets:
    value: "93,180.3"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_liabilities:
    value: "62,768.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_equity:
    value: "30,412.3"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  # 연결 기준 주요 재무지표
  revenue:
    value: "14,575"
    unit: "억원"
    basis: "연결"
    period: "1Q26"
    yoy_growth: "+23.9%"
    qoq_growth: "-10.3%"
    confidence: 0.99
    note: "역대 사상최대 1분기 실적"

  operating_profit:
    value: "2,242"
    unit: "억원"
    basis: "연결"
    period: "1Q26"
    operating_margin: "15.4%"
    yoy_growth: "+10.5%"
    qoq_growth: "-16.2%"
    confidence: 0.95
    note: "영업이익 | Stage 4 교정: 세부 비중 가중치 재검증 필요(디펜스솔루션 97.6% 기여로 과도할 수 있음)"

  pretax_profit:
    value: "2,756"
    unit: "억원"
    basis: "연결"
    period: "1Q26"
    yoy_growth: "+36.0%"
    qoq_growth: "-4.2%"
    confidence: 0.99
    note: "세전이익"

  net_income:
    value: "2,027"
    unit: "억원"
    basis: "연결"
    period: "1Q26"
    net_margin: "13.9%"
    yoy_growth: "+29.0%"
    qoq_growth: "-10.1%"
    confidence: 0.99
    note: "당기순이익"

  # 신규수주
  new_orders:
    value: "7,098"
    unit: "억원"
    basis: "연결"
    period: "1Q26"
    yoy_growth: "-78.5%"
    qoq_growth: "-43.9%"
    confidence: 0.99
    note: "신규수주 규모"

  # 수주잔고
  order_backlog:
    value: "298,181"
    unit: "억원"
    basis: "연결"
    period: "1Q26 말"
    confidence: 0.99
    note: "디펜스솔루션 101,021 + 레일솔루션 189,365 + 예광플랜트 7,795"

  # 사업부문별 매출 - 1Q26
  revenue_by_segment_1q26:
    defense_solution:
      value: "8,040"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      yoy_growth: "+22.2%"
      qoq_growth: "-6.5%"
      confidence: 0.99
      note: "디펜스솔루션 매출"

    rail_solution:
      value: "5,432"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      yoy_growth: "+35.0%"
      qoq_growth: "-12.3%"
      confidence: 0.99
      note: "레일솔루션 매출"

    eco_plant:
      value: "1,103"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      yoy_growth: "-4.6%"
      qoq_growth: "-24.8%"
      confidence: 0.99
      note: "에코플랜트 매출"

  # 사업부문별 영업이익 - 1Q26
  operating_profit_by_segment_1q26:
    defense_solution:
      value: "2,188"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      operating_margin: "27.2%"
      yoy_growth: "+12.8%"
      qoq_growth: "-12.7%"
      confidence: 0.99
      note: "디펜스솔루션 영업이익"

    rail_solution:
      value: "29"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      operating_margin: "0.5%"
      yoy_growth: "-40.8%"
      qoq_growth: "-74.8%"
      confidence: 0.99
      note: "레일솔루션 영업이익 (저마진)"

    eco_plant:
      value: "25"
      unit: "억원"
      basis: "연결"
      period: "1Q26"
      operating_margin: "2.3%"
      yoy_growth: "-39.0%"
      qoq_growth: "-51.9%"
      confidence: 0.99
      note: "에코플랜트 영업이익"

  # 연간 비교 (FY 기준)
  full_year_comparison:
    fy2023:
      revenue: {value: "35,874", unit: "억원", confidence: 0.99}
      operating_profit: {value: "2,100", unit: "억원", confidence: 0.99}
      net_income: {value: "1,568", unit: "억원", confidence: 0.99}

    fy2024:
      revenue: {value: "43,766", unit: "억원", confidence: 0.99}
      operating_profit: {value: "4,566", unit: "억원", confidence: 0.99}
      net_income: {value: "4,053", unit: "억원", confidence: 0.99}

    fy2025:
      revenue: {value: "58,390", unit: "억원", confidence: 0.99}
      operating_profit: {value: "10,056", unit: "억원", operating_margin: "17.2%", confidence: 0.99}
      net_income: {value: "7,705", unit: "억원", confidence: 0.99}

  # 신용등급
  credit_rating_upgrade:
    value: "A(금정적) → AA⁻(안정적)"
    rating_agencies: "3대 신용평가사"
    confidence: 0.99
    note: "일제히 상향조정"

english_summary:
  title: "Hyundai Rotem Q1 2026 Earnings Results"
  one_liner: "Revenue KRW 1.46 trillion (+23.9% YoY), Operating profit KRW 224.2 billion (+10.5% YoY), Record-breaking Q1 performance achieved"
  highlights:
    - "Record quarterly revenue of KRW 1.46 trillion in Q1 2026, representing +23.9% YoY growth despite QoQ decline of -10.3%"
    - "Operating profit reached KRW 224.2 billion with 15.4% operating margin, showing resilience with +10.5% YoY growth despite margin compression"
    - "All three major credit rating agencies upgraded the company's credit rating from A (Stable) to AA⁻ (Stable)"
    - "Defense Solution segment drove performance with KRW 804 billion revenue (+22.2% YoY) and 27.2% operating margin"
    - "Rail Solution segment showed strong YoY growth of +35.0% with KRW 543.2 billion revenue, though profitability compressed to 0.5% margin"
    - "New orders declined to KRW 709.8 billion (-78.5% YoY, -43.9% QoQ), reflecting seasonal weakness and project-based order pattern"
    - "Order backlog remained solid at KRW 29.82 trillion, providing revenue visibility for future quarters"

  key_figures_en:
    revenue: "KRW 1.458 trillion (consolidated, +23.9% YoY)"
    operating_profit: "KRW 224.2 billion (operating margin 15.4%, +10.5% YoY)"
    net_income: "KRW 202.7 billion (net margin 13.9%, +29.0% YoY)"
    new_orders: "KRW 709.8 billion (-78.5% YoY)"
    order_backlog: "KRW 29.82 trillion (Defense 10.10T, Rail 18.94T, Eco 0.78T)"
    defense_solution_revenue: "KRW 804 billion (+22.2% YoY, 27.2% margin)"
    rail_solution_revenue: "KRW 543.2 billion (+35.0% YoY, 0.5% margin)"
    eco_plant_revenue: "KRW 110.3 billion (-4.6% YoY, 2.3% margin)"

  outlook: "Company is positioned for continued growth in 2026 with a solid order backlog of KRW 29.82 trillion, though new order momentum has declined seasonally; credit rating upgrades by three major rating agencies reflect improved financial stability."

---
```

## 사업부문별 매출/손익

### 역대 사상최대 1분기 실적 달성... 전년 동기대비 매출액 +23.9% / 영업이익 +10.5%
### 3대 신용평가사 신용등급 일제히 상향조정: A(금정적) → AA⁻(안정적)

---

## 매출액

**14,575 억원 (연결기준)**
- **YoY: +23.9%** (1Q25: 11,761억원 대비)
- **QoQ: -10.3%** (4Q25: 16,256억원 대비)

| 구분 | 1Q25 | 1Q26 | 4Q25 | 증감(YoY) | 증감(QoQ) |
|------|------|------|------|----------|----------|
| **전체 매출** | 11,761 | 14,575 | 16,256 | +23.9% | -10.3% |
| 디펜스솔루션 | 6,580 | 8,040 | 8,599 | +22.2% | -6.5% |
| 레일솔루션 | 4,025 | 5,432 | 6,191 | +35.0% | -12.3% |
| 에코플랜트 | 1,156 | 1,103 | 1,466 | -4.6% | -24.8% |

**주석:**
- 디펜스솔루션이 전체 매출의 55.2% 점유(8,040/14,575)
- 레일솔루션이 37.3% 점유(5,432/14,575)
- 에코플랜트가 7.6% 점유(1,103/14,575)
- 분기 간 계절성 있음: 4Q25 → 1Q26 일반적인 분기말 대비 분기초 수주 집행 패턴

---

## 영업이익

**2,242 억원 (연결기준)**
- **영업이익률: 15.4%** (1Q26 기준)
- **YoY: +10.5%** (1Q25: 2,029억원 대비)
- **QoQ: -16.2%** (4Q25: 2,674억원 대비)

| 구분 | 1Q25 | 1Q26 | 4Q25 | 영업이익률 변화 |
|------|------|------|------|--------------|
| **전체 영업이익** | 2,029 | 2,242 | 2,674 | 15.4% |
| 디펜스솔루션 | 1,939 | 2,188 | 2,507 | 27.2% (매출 8,040 대비) |
| 레일솔루션 | 49 | 29 | 115 | 0.5% (저마진 상태) |
| 에코플랜트 | 41 | 25 | 52 | 2.3% |

**주석:**
- ⚠️ **Stage 4 교정**: 디펜스솔루션이 영업이익의 97.6% 기여(2,188/2,242)로 사업부문 비중이 매우 불균형적임. 원본 데이터 확인 권장
- 합계 검증: 2,188 + 29 + 25 = 2,242 ✓
- 레일솔루션 이익률 급락: 1Q25 1.2% → 1Q26 0.5% (QoQ -74.8%)
- 에코플랜트 이익률 약화: 1Q25 3.5% → 1Q26 2.3%
- 전사 영업이익률 하락: 1Q25 17.3% → 1Q26 15.4% (저마진 부문의 매출 비중 증가 영향)

---

## 신규수주

**7,098 억원 (연결기준)**
- **YoY: -78.5%** (1Q25: 33,037억원 대비)
- **QoQ: -43.9%** (4Q25: 12,663억원 대비)

| 구분 | 1Q25 | 1Q26 | 4Q25 |
|------|------|------|------|
| 신규수주 | 33,037 | 7,098 | 12,663 |

**주석:**
- 1Q25는 대규모 방위사업(예: 플랜드 K2전자사업 2차 이행계약 89,814억원 포함)으로 인한 높은 수주 기반
- 1Q26 수주액 감소는 대형 계약의 부재 및 계절적 패턴 반영
- 주요 수주건은 '26년 2월 에드먼턴 고정형 경전철(3,276억원), '26년 1월 신안산선 복선전철(2,353억원) 등 중소형 계약

---

## 수주잔고

**298,181 억원 (연결기준, 1Q26 말 기준)**

| 연도/시점 | 디펜스솔루션 | 레일솔루션 | 에코플랜트 | 합계 |
|-----------|------------|---------|---------|------|
| 2024 말 | 38,727 | 140,646 | "N/A" | 187,578 |
| 2025 말 | 105,181 | 184,533 | "N/A" | 297,735 |
| 1Q26 말 | 101,021 | 189,365 | 7,795 | 298,181 |

**변화:**
- 2024 → 2025: 전체 수주잔고 +59.0% (187,578 → 297,735억원)
  - 디펜스솔루션 +171.8% (38,727 → 105,181억원)
  - 레일솔루션 +31.2% (140,646 → 184,533억원)
- 2025 → 1Q26: 소폭 증가 +0.1% (297,735 → 298,181억원)
  - 디펜스솔루션 -3.9% (105,181 → 101,021억원, 수주 소진)
  - 레일솔루션 +2.6% (184,533 → 189,365억원, 신규 수주 반영)

**주석:**
- ⚠️ 원본 확인 필요: 2024 말 및 2025 말 에코플랜트 수주잔고 데이터 누락
- 레일솔루션이 전체 수주잔고의 63.5% 점유(189,365/298,181)
- 디펜스솔루션은 33.9% 점유(101,021/298,181)
- 약 2.6년 분량의 매출 확보(298,181 ÷ [연간 매출 58,390 = FY2025] ≈ 5.1년, 분기 단위로는 약 8-9분기 확보)

---

## 주요 수주내역 (2025.1월~2026.2월)

| 수주일자 | 계약명 | 계약금액 (억원) |
|---------|--------|-------------|
| '26.2월 | 에드먼턴 고정형 경전철 금금 사업 | 3,276 |
| '26.1월 | 신안산선 복선전철 민간투자사업 적도자금 공급 | 2,353 |
| '25.12월 | 코레일 정동차 공금사업 | 2,591 |
| '25.12월 | 장애층개선전차 2차 양산사업 | 2,500 |
| '25.12월 | 국기억 자사용 우궤박사체 테마엔진용 기술개발 | 104 |
| '25.12월 | 자사용 우궤박사체 엔진 설계 및 파워팩 시험평가 | 58 |
| '25.8월 | 플랜드 K2전자사업 2차 이행계약 | 89,814 |
| '25.5월 | 대장~홍네 경적통도 민간투자사업 첫도자금 공급 | 1,329 |
| '25.5월 | 대만 타이중 불럼전 E&M 공금사업 | 4,249 |
| '25.4월 | 미국 MBTA 이층객차 사업 추가 물량 및 예비품 공금계약 | 1,442 |
| '25.3월 | 수도권광역급행철도 B-노선 민간투자사설 사업 공도자금 공금 | 5,922 |
| '25.2월 | 모로코 철도 정통자 사업 | 22,027 |
| '25.1월 | 울산 수소트램 공금 사업 | 576 |
| **합계** | | **146,241** |

**주석:**
- 상기 13건 계약금액 합계(146,241억원)는 동 기간 신규수주 추정치를 초과하며, 일부는 1Q26 이후 인식되었거나 분할 기입되었을 가능성
- 플랜드 K2전자사업 2차 이행계약(89,814억원)이 최대 규모로, 방위사업 비중 높음
- 모로코 철도 수주(22,027억원) 및 수도권광역급행철도(5,922억원)는 해외 및 국내 인프라 프로젝트
- 에드먼턴, 신안산선, 타이중 등 국내외 도시철도/광역철도/개선차량 수요 다변화

---

# 사업부문별 실적 분석

## 디펜스솔루션

### 매출액
**8,040 억원 (연결기준, 1Q26)**
- **YoY: +22.2%** (1Q25: 6,580억원)
- **QoQ: -6.5%** (4Q25: 8,599억원)
- **영업이익률: 27.2%**

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 매출 | 6,580 | 7,613 | 9,361 | 8,599 | 8,040 |

**주석:**
- 분기별 추이: 1Q25 → 4Q25 상승세(6,580 → 9,361 → 8,599), 1Q26 다시 조정(8,599 → 8,040)
- 분기 간 변동성은 방위사업 프로젝트 진행 일정에 기인

### 영업이익
**2,188 억원 (연결기준, 1Q26)**
- **영업이익률: 27.2%** (매출 8,040 대비)
- **YoY: +12.8%** (1Q25: 1,939억원)
- **QoQ: -12.7%** (4Q25: 2,507억원)

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 이익 | 1,939 | 2,479 | 2,638 | 2,507 | 2,188 |
| 이익률(%) | 29.5 | 32.6 | 28.2 | 29.2 | 27.2 |

**주석:**
- 영업이익률 추세: 2Q25 최고(32.6%) → 1Q26 저점(27.2%)
- 분기별 이익률 변동은 매출 규모 대비 프로젝트별 원가율 차이 반영
- 1Q26 이익률 27.2%는 여전히 업계 우수 수준

---

## 레일솔루션

### 매출액
**5,432 억원 (연결기준, 1Q26)**
- **YoY: +35.0%** (1Q25: 4,025억원) ← 높은 YoY 성장
- **QoQ: -12.3%** (4Q25: 6,191억원)
- **영업이익률: 0.5%** ← 극히 낮은 수익성

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 매출 | 4,025 | 5,274 | 5,406 | 6,191 | 5,432 |

**주석:**
- 매출은 꾸준한 증가세: 1Q25 4,025 → 4Q25 6,191 → 1Q26 5,432
- 증가율은 높으나 이익성 약화

### 영업이익
**29 억원 (연결기준, 1Q26)**
- **영업이익률: 0.5%** (매출 5,432 대비) ← 극히 낮은 수익성
- **YoY: -40.8%** (1Q25: 49억원) ← 악화
- **QoQ: -74.8%** (4Q25: 115억원) ← 급악화

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 이익 | 49 | 57 | 71 | 115 | 29 |
| 이익률(%) | 1.2 | 1.1 | 1.3 | 1.9 | 0.5 |

**주석:**
- 4Q25의 높은 이익률(1.9%)에서 1Q26 급락(0.5%)
- 매출은 1Q26에 5,432억원으로 기록 높음에도 불구하고 이익은 29억원(최저)
- 이는 특정 저마진 프로젝트의 대량 진행으로 추정 (예: 인프라 프로젝트의 손실보상 또는 가격 경쟁)
- 1Q25 → 1Q26 연간 추세: 이익 49억원 → 29억원 (-40.8%)

---

## 에코플랜트

### 매출액
**1,103 억원 (연결기준, 1Q26)**
- **YoY: -4.6%** (1Q25: 1,156억원) ← 소폭 감소
- **QoQ: -24.8%** (4Q25: 1,466억원)
- **영업이익률: 2.3%**

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 매출 | 1,156 | 1,290 | 1,429 | 1,466 | 1,103 |

**주석:**
- 매출 추이: 1Q25 → 4Q25 증가(1,156 → 1,466), 1Q26 급락(1,103)
- 년 간 매출 패턴: 4Q25 최고 → 1Q26 급락 현상

### 영업이익
**25 억원 (연결기준, 1Q26)**
- **영업이익률: 2.3%** (매출 1,103 대비)
- **YoY: -39.0%** (1Q25: 41억원) ← 악화
- **QoQ: -51.9%** (4Q25: 52억원) ← 급악화

**분기별 추이:**
| 분기 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|------|------|------|------|------|------|
| 이익 | 41 | 39 | 69 | 52 | 25 |
| 이익률(%) | 3.5 | 3.0 | 4.8 | 3.5 | 2.3 |

**주석:**
- 3Q25 이익률 최고(4.8%) → 1Q26 저점(2.3%)
- 1Q25 → 1Q26 YoY 이익 감소(-39.0%) 추세 지속
- 매출 대비 이익률 저하 추정 원인: 원가 상승, 프로젝트 진행 지연, 마진율 약화

---

# 사업부문별 실적 종합 (1Q25~1Q26)

| 구분 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | QoQ(%) | YoY(%) | FY2023 | FY2024 | FY2025 |
|------|------|------|------|------|------|--------|--------|--------|--------|--------|
| **매출액** | 11,761 | 14,177 | 16,196 | 16,256 | 14,575 | -10.3 | +23.9 | 35,874 | 43,766 | 58,390 |
| 디펜스솔루션 | 6,580 | 7,613 | 9,361 | 8,599 | 8,040 | -6.5 | +22.2 | 15,781 | 23,652 | 29,156 |
| 레일솔루션 | 4,025 | 5,274 | 5,406 | 6,191 | 5,432 | -12.3 | +35.0 | 17,356 | 17,801 | 25,652 |
| 에코플랜트 | 1,156 | 1,290 | 1,429 | 1,466 | 1,103 | -24.8 | -4.6 | 2,737 | 2,313 | 3,582 |
| **영업이익** | 2,029 | 2,571 | 2,778 | 2,674 | 2,242 | -16.2 | +10.5 | 2,100 | 4,566 | 10,056 |
| 디펜스솔루션 | 1,939 | 2,479 | 2,638 | 2,507 | 2,188 | -12.7 | +12.8 | 1,625 | 3,580 | 7,926 |
| 레일솔루션 | 49 | 57 | 71 | 115 | 29 | -74.8 | -40.8 | 342 | 596 | 1,852 |
| 에코플랜트 | 41 | 35 | 69 | 52 | 25


---

## DART 연결재무제표 (현대로템, 2025년)
<!-- source: OpenDART API | ground_truth: true -->

| 계정 | 금액(억원) | 출처 |
|------|--------:|------|
| 매출액 | 58,390.3 | DART |
| 당기순이익 | 7,704.9 | DART |
| 자산총계 | 93,180.3 | DART |
| 부채총계 | 62,768.0 | DART |
| 자본총계 | 30,412.3 | DART |
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
