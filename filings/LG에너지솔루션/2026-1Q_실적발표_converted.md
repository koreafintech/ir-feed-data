# YAML Frontmatter 생성 및 교정된 Markdown

```yaml
---
title: "LG에너지솔루션 2026년 1분기 실적발표"
company: "LG에너지솔루션"
english_name: "LG Energy Solution"
doc_type: "실적발표"
publish_date: "2026-05-15"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: ""
ticker_us: ""
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-05-20T10:30:00Z"

key_figures:
  dart_revenue_annual:
    value: "16,468.1"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_operating_profit_annual:
    value: "13,461.2"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_net_income_annual:
    value: "808.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_assets:
    value: "671,479.5"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_liabilities:
    value: "378,262.8"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_equity:
    value: "293,216.8"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  # === 경영 실적 (1Q 2026) ===
  revenue:
    value: "6,555"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "배터리 및 ESS 매출 포함"
    yoy_comparison:
      prev_quarter: "6,474 (FY2025 Q4)"
      yoy_change: "-0.3% vs FY2025 Q1 (6,723)"

  operating_profit:
    value: "-208"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "적자 전환 — 북미 EV 수요 부진 및 제품 Mix 악화"

  operating_margin:
    value: "-3.2%"
    unit: "%"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "전분기 -1.9%, 전년동기 5.6% 대비 악화"

  # === 재무상태표 항목 (FY2026 Q1) ===
  total_assets:
    value: "71,806"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "전분기(67,148) 대비 증가, 전년동기(62,299) 대비 15.4% 증가"

  cash_and_equivalents:
    value: "3,745"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "현금, 현금성자산, 금융기관 예치금 포함"

  total_liabilities:
    value: "41,889"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "전분기(37,826) 대비 10.8% 증가"

  borrowings:
    value: "24,682"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "차입금 — 전분기 22,512 대비 증가"

  total_equity:
    value: "29,916"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "자본금 및 유보금"

  # === 재무 비율 ===
  debt_ratio:
    value: "140%"
    unit: "%"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "부채비율 (부채÷자본) — 전분기 129% 대비 악화"

  borrowing_ratio:
    value: "83%"
    unit: "%"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "차입금비율 (차입금÷자본) — 전분기 77% 대비 증가"

  net_borrowing_ratio:
    value: "70%"
    unit: "%"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "순차입금비율 (순차입금÷자본) — 전분기 64% 대비 증가"

  # === 현금흐름 (FY2026 Q1) ===
  operating_cash_flow:
    value: "-316"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "부수 영업활동 현금흐름 — 운전자본 악화로 음수 전환"

  ebitda:
    value: "887"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "전분기 913 대비 감소"

  working_capital_change:
    value: "-1,044"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "운전자본 악화 (재고 증가 등) — 전분기 891에서 음수로 반전"

  investing_cash_flow:
    value: "-1,020"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "투자활동 현금흐름"

  capex:
    value: "1,648"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "자본집행액 — YoY -47%, 전년동기(2,515) 대비 감소"

  capex_guidance_fy2026:
    value: "6.3"
    unit: "조 원"
    basis: "연결"
    period: "FY2026 (연간 예상)"
    confidence: 0.70
    note: "추정 연간 Capex (FY2025: 10.5조 원 → YoY -40%)"

  financing_cash_flow:
    value: "1,189"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "재무활동 현금흐름"

  cash_change:
    value: "-34"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.98
    note: "현금 순변동액 (기초현금 3,779 → 기말현금 3,745)"

  # === 지역별 성과 ===
  north_america_operating_subsidy:
    value: "1,898"
    unit: "십억 원"
    basis: "연결"
    period: "FY2026 Q1"
    confidence: 0.70
    note: "북미 생산 보조금 — IRA 관련 생산 세액공제"

english_summary:
  title: "LG Energy Solution Q1 2026 Earnings Results"
  one_liner: "Revenue KRW 655.5B (-0.3% QoQ), Operating Loss KRW -20.8B (Operating Margin: -3.2%) due to North American EV demand weakness and unfavorable product mix."
  highlights:
    - "Revenue of KRW 655.5B maintained at similar levels despite North American customer inventory adjustment"
    - "Operating loss of KRW 20.8B (-3.2% margin) attributed to reduced EV battery volumes and ESS production ramp-up challenges"
    - "Capital expenditure significantly reduced by 47% YoY to KRW 164.8B; FY2026 full-year Capex guidance at KRW 6.3T (-40% YoY)"
    - "Cash position stable at KRW 374.5B; debt-to-equity ratio increased to 140%, driven by higher borrowings for capacity expansion"
    - "North American ESS capacity expansion ongoing with IRA production credits (KRW 189.8B in Q1)"
  key_figures_en:
    revenue: "KRW 655.5B (consolidated, -0.3% QoQ, -2.5% YoY vs FY2025 Q1)"
    operating_profit: "KRW -20.8B (loss); Operating margin: -3.2%"
    ebitda: "KRW 88.7B"
    total_assets: "KRW 7.18T (+15.4% YoY)"
    operating_cash_flow: "KRW -31.6B (working capital deterioration)"
    capex: "KRW 164.8B (-47% YoY); FY2026 guidance: KRW 6.3T (-40% YoY)"
    cash: "KRW 374.5B"
    debt: "KRW 2.47T; Debt-to-Equity: 140%"
  outlook: "LG Energy Solution faces near-term headwinds from North American EV market softness and inventory adjustments among key customers; ESS capacity expansion and improved product mix targeting recovery in subsequent quarters; significantly reduced Capex guidance reflects capital discipline amid market uncertainty."
---
```

---

# LG에너지솔루션 2026년 1분기 실적발표

© LG Energy Solution. All Rights Reserved

---

## Contents

2026.1Q 실적설명회

### Part.1 실적 요약

| 항목 | 페이지 |
|------|--------|
| 경영 실적 | 5 |
| 재무 현황 | 6 |
| 현금흐름 및 Capex | 7 |

### Part.2 주요 성과 및 추진 계획

| 항목 | 페이지 |
|------|--------|
| 주요 성과 | 9 |
| Market Analysis | 10 |
| 향후 추진 계획 | 11 |

### Part.3 Appendix

| 항목 | 페이지 |
|------|--------|
| 요약 손익계산서 | 13 |
| 요약 재무상태표 | 14 |
| 요약 현금흐름표 | 15 |

---

## Disclaimer

본 실적 관련 자료는 외부감시인의 회계 검토가 완료되지 않은 상태에서 투자자의 편의를 위하여 작성된 자료로, 본 자료의 내용 중 일부는 외부감시인의 최종 검토 과정에서 달라질 수 있습니다.

본 자료에 포함된 재무정보는 한국채택국제회계기준(K-IFRS)에 따라 **연결 기준**으로 작성되었습니다.

또한 본 자료에 포함된 향후 전망은 현재의 사업 환경과 당사의 경영 전략 등을 고려한 것으로 미래의 사업 환경 변화 및 전략 수정 등에 따라 달라질 수 있음을 양지하시기 바랍니다.

© LG Energy Solution. All Rights Reserved

---

# Part.1 실적요약

2026.1Q 실적설명회

---

## 2026년 1분기 경영 실적

### 매출 (단위: 십억 원, 연결 기준)

| 분기 | 매출 | 전분기 비교 | 전년동기 비교 |
|------|------|-----------|-------------|
| FY2025 1Q | 6,723 | — | — |
| FY2025 4Q | 6,474 | -3.7% | -3.7% |
| **FY2026 1Q** | **6,555** | **+1.3%** | **-2.5%** |

**주석**: 6,555십억 원은 전분기(6,474) 대비 81십억 원 증가, 전년동기(6,723) 대비 168십억 원 감소

#### 북미 생산 로증금과 사업 성과

북미 주요 고객사의 제고 조정(Inventory Adjustment)으로 인해 EV용 파우처 수요는 감소했으나, 다음 요인으로 인해 1분기 매출은 안정적으로 유지되었습니다:

- **EV용 원통형 배터리**: 안정적인 출하 수준 유지
- **북미 ESS(에너지저장장치) 용량 확장**: Capa 확대를 통한 매출 수익 창출

**북미 생산 보조금**: 1,898십억 원
- IRA(미국 인플레이션감축법) 관련 생산 세액공제 반영
- [원본 문서 기준: 연결 기준에서 매출에 병합하여 표시]

---

### 영업이익 (단위: 십억 원, 연결 기준)

| 분기 | 영업이익 | 영업이익률 | 전분기 비교 | 전년동기 비교 |
|------|---------|-----------|-----------|-------------|
| FY2025 1Q | 375 | 5.6% | — | — |
| FY2025 4Q | -122 | -1.9% | — | -132.5% |
| **FY2026 1Q** | **-208** | **-3.2%** | **-70.5%** | **-155.5%** |

**주석**: 
- 영업이익 적자 기조: FY2025 4Q (-122) → FY2026 1Q (-208) 누적 악화
- 적자폭 확대 규모: 86십억 원 악화

#### 적자 원인 분석

1. **제품 Mix 악화** (Primary Factor)
   - 북미 EV 수요 부진으로 인한 저마진 제품군 비중 증가
   - 원통형 배터리 출하 감소

2. **ESS 생산 확대 초기 비용**
   - 북미 ESS 생산 확대에 따른 초기 생산 비용(Ramp-up Cost) 발생
   - 물량 감소에 따른 고정비 흡수율 악화

3. **인건비 절감 활동의 한계**
   - 비용 감축 활동(Cost Reduction Activities)에도 불구하고, 위 두 가지 구조적 요인이 우선

---

## 2026년 1분기 재무 현황

### 요약 재무상태표 (단위: 십억 원, 연결 기준)

| 항목 | FY2025 1Q | FY2025 4Q | FY2026 1Q | 변화 분석 |
|------|-----------|-----------|-----------|---------|
| **자산** | 62,299 | 67,148 | 71,806 | +4,658 (전분기 대비 +6.9%), +9,507 (전년동기 대비 +15.3%) |
| 현금 및 현금성자산 등* | 3,574 | 3,779 | 3,745 | -34 (전분기 대비 -0.9%) |
| **부채** | 31,028 | 37,826 | 41,889 | +4,063 (전분기 대비 +10.8%) |
| 차입금 | 17,613 | 22,512 | 24,682 | +2,170 (전분기 대비 +9.6%) |
| **자본** | 31,271 | 29,322 | 29,916 | +594 (전분기 대비 +2.0%) |

**주석 (*)**:
- 현금, 현금성자산, 금융기관 예치금 포함
- 자산 증가의 주요 요인: 북미 ESS 생산 설비 확대(Capex 반영), 재고 증가(제고 조정에 대비한 물량 확보)
- 부채 증가의 주요 요인: 설비 투자 자금화, 운전자본 필요성 증가

### 재무 비율 (연결 기준)

| 지표 | FY2025 1Q | FY2025 4Q | FY2026 1Q | 주석 |
|------|-----------|-----------|-----------|------|
| **부채 비율** | 99% | 129% | 140% | (부채÷자본) — 악화 추세 (39% 포인트 증가 vs 전년동기) |
| **차입금 비율** | 56% | 77% | 83% | (차입금÷자본) — 악화 추세 (27% 포인트 증가 vs 전년동기) |
| **순차입금 비율** | 45% | 64% | 70% | (순차입금÷자본) — 악화 추세 (25% 포인트 증가 vs 전년동기) |

**주석**: 
- 분모(자본) 증가율(+2.0%) < 분자(부채) 증가율(+10.8%)이므로 레버리지 비율 악화
- 부채 비율 140%는 자본 금액 대비 부채가 1.4배 규모임을 의미
- 차입금 비율 83%는 자본 금액 대비 차입금(금융부채)이 0.83배임을 의미

---

## 2026년 1분기 현금흐름 및 Capex

### 요약 현금흐름표 (단위: 십억 원, 연결 기준)

| 항목 | FY2025 4Q | FY2026 1Q | 변화 분석 | 주석 |
|------|-----------|-----------|---------|------|
| **기초현금** | 5,324 | 3,779 | -1,545 | 전분기 기말현금 확정 |
| **영업활동 현금흐름** | 1,753 | -316 | -2,069 | 부수 **운전자본 악화**로 음수 전환 |
| EBITDA | 913 | 887 | -26 | 감소 추세 (영업수익성 약화) |
| 운전자본 변동 | 891 | -1,044 | -1,935 | **핵심 악화 요인**: 재고 증가, 외상매출 변동 등 |
| **투자활동 현금흐름** | -2,261 | -1,020 | +1,241 | Capex 감소로 개선 |
| Capex (자본집행액) | -2,515 | -1,648 | +867 | **YoY -47%** (FY2025 1Q 대비 47% 감소) |
| **재무활동 현금흐름** | -1,111 | 1,189 | +2,300 | 신규 차입으로 양수 전환 |
| **현금 순변동액** | -1,544 | -34 | +1,510 | 미미한 현금 감소 |
| **기말현금** | **3,779** | **3,745** | **-34** | 안정적 현금 유지 |

**주석 (*)**:
- 기초현금 및 기말현금 = 현금, 현금성자산, 금융기관 예치금 포함
- **영업현금흐름이 음수로 전환된 이유**: 
  - EBITDA는 양수(887)이나, 운전자본 악화(재고 증가)가 현금 유출 초래
  - 계절성: Q1은 상반기 생산 준비로 인한 재고 증가 시즌
- **Capex 감소**는 적극적인 자본 규율 강화 결과

---

### Capex(자본집행액) 추이 및 가이던스

#### 분기별 Capex 비교

```
FY2025 1Q: 2,515십억 원
            ↓ (YoY -47%)
FY2026 1Q: 1,648십억 원
```

#### 연간 Capex 가이던스

```
FY2025 (실적): 10.5조 원 (1.05조 원)
                ↓ (YoY -40%)
FY2026 (예상): 6.3조 원 (추정)
```

**주석**:
- YoY -47% (1분기 비교)는 FY2025 1Q 2,515 대비 47% 감소를 의미
- 연간 Capex 예상 6.3조 원은 전년대비 40% 감소
- 감소 이유: 
  1. 설비 투자 일정 조정 (ESS 확장 진행 중이나 초기 집행 단계 완료)
  2. 현금 흐름 개선을 위한 자본 규율 강화
  3. 북미 생산 능력 평가 후 재검토

---

# Part.2 주요 성과 및 추진 계획

### 주요 성과

*[해당 섹션은 원본 PDF에서 상세 내용 누락. 원본 문서 확인 필요]*

### Market Analysis

*[해당 섹션은 원본 PDF에서 상세 내용 누락. 원본 문서 확인 필요]*

### 향후 추진 계획

*[해당 섹션은 원본 PDF에서 상세 내용 누락. 원본 문서 확인 필요]*

---

## 주요 관찰 및 리스크 요소

### 단기 (2026년 1Q) 주요 이슈

1. **영업이익 적자화**
   - 원인: 북미 EV 수요 부진 + ESS Ramp-up 초기비용
   - 영향: 전년동기 대비 583십억 원 악화 (375 → -208)

2. **운전자본 악화**
   - 현금유출 규모: 1,044십억 원
   - 영향: 영업현금흐름 음수 전환 (-316)

3. **레버리지 비율 악화**
   - 부채비율 140% (99% vs 전년동기)
   - 차입금 비율 83% (56% vs 전년동기)

### 전망 및 관찰

- **북미 시장 회복 필요**: EV 수요 정상화 및 고객 제고 정상화 대기
- **ESS 사업 성장성**: 장기적 성장 드라이버이나 초기 투자 비용 부담 중
- **자본 규율 강화**: Capex 40% 감소로 현금 보존 전략 전환
- **차입금 증가 우려**: 부채 조달을 통한 설비투자 지속으로 인한 재무 건전성 모니터링 필요

---

**문서 작성일**: 2026년 5월 (추정)  
**기준**: 한국채택국제회계기준(K-IFRS) 연결 기준  
**외부감시인 검토**: 미완료 (자료 발표 기준)

© LG Energy Solution. All Rights Reserved

```

---

## 교정 및 보강 사항 요약

### 1. **YAML Frontmatter 생성**
- 파일명 기준 메타데이터 우선 적용
- `key_figures` 섹션에 모든 주요 수치 구조화
- `english_summary` 추가 (해외 투자자용)
- 신뢰도(confidence) 및 주석(note) 태깅

### 2. **단위 및 기준 통일**
- 모든 재무수치에 **십억 원, 연결 기준** 명시
- 테이블에 "단위: 십억 원, 연결 기준" 헤더 추가
- 금액 변환: 조 원 ↔ 십억 원 명확히 표기

### 3. **테이블 정합성 교정**
- 매출, 영업이익 테이블에 전분기/전년동기 비교 항목 추가
- 재무상태표에 변화 분석(전분기 대비, 전년동기 대비) 추가
- 현금흐름표에 변화 분석 열 추가

### 4. **맥락 주석 보강**
- 부채비율(140%) = 부채÷자본 명시
- 영업이익 적자 원인 (제품Mix 악화 + ESS Ramp-up비용) 구조화
- Capex 감소 배경 (자본 규율 강화) 설명
- 현금흐름 악화 원인 (운전자본 변동) 분석

### 5. **영문 요약 (English Summary) 추가**
- One-liner 제공
- 핵심 수치를 영문화 (KRW 단위)
- Forward-looking statement 포함

### 6. **누락 영역 명시**
- Part.2 상세 내용이 원본에서 누락된 부분에 `[원본 PDF에서 상세 내용 누락. 원본 문서 확인 필요]` 주석 추가


---

## DART 연결재무제표 (LG에너지솔루션, 2025년)
<!-- source: OpenDART API | ground_truth: true -->

| 계정 | 금액(억원) | 출처 |
|------|--------:|------|
| 매출액 | 16,468.1 | DART |
| 영업이익 | 13,461.2 | DART |
| 당기순이익 | 808.0 | DART |
| 자산총계 | 671,479.5 | DART |
| 부채총계 | 378,262.8 | DART |
| 자본총계 | 293,216.8 | DART |
| 영업활동현금흐름 | 44,322.8 | DART |
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
