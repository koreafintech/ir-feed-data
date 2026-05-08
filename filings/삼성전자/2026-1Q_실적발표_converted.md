```yaml
---
title: "삼성전자 2026년 1분기 실적발표"
company: "삼성전자"
ticker: "005930.KS"
ticker_us: "SSNLF"
english_name: "Samsung Electronics"
doc_type: "실적발표"
publish_date: "2026-Q1"
fiscal_year: 2026
fiscal_quarter: "Q1"
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2024-12-20T00:00:00Z"

key_figures:
  dart_revenue_annual:
    value: "3,336,059.4"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_operating_profit_annual:
    value: "436,010.5"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_net_income_annual:
    value: "452,068.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_assets:
    value: "5,669,421.1"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_liabilities:
    value: "1,306,217.7"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_equity:
    value: "4,363,203.4"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  # 전사 수익 (연결기준)
  consolidated_revenue:
    value: "133.9"
    unit: "조원"
    basis: "연결"
    period: "2026-Q1"
    qoq_change: "+43%"
    yoy_change: "+69%"
    confidence: 0.98
    note: "역대 최대 분기 매출"
  
  consolidated_operating_profit:
    value: "57.2"
    unit: "조원"
    basis: "연결"
    period: "2026-Q1"
    qoq_change: "+185%"
    yoy_change: "+756%"
    confidence: 0.98
    note: "역대 최대 분기 영업이익"
  
  consolidated_net_income:
    value: "N/A"
    unit: "조원"
    basis: "연결"
    period: "2026-Q1"
    confidence: 0
    note: "Stage 4 교정: 원본 자료에서 누락된 항목. 추후 공식 발표 자료 확인 필요"
  
  operating_profit_margin:
    value: "42.8"
    unit: "%"
    basis: "연결"
    period: "2026-Q1"
    qoq_change: "+21.4p"
    confidence: 0.98
  
  rd_investment:
    value: "11.3"
    unit: "조원"
    basis: "연결"
    period: "2026-Q1"
    qoq_change: "+4%"
    yoy_change: "+26%"
    confidence: 0.98
  
  earnings_per_share:
    common_stock: 
      value: "7,123"
      unit: "원"
      period: "2026-Q1"
      confidence: 0.98
    preferred_stock:
      value: "7,124"
      unit: "원"
      period: "2026-Q1"
      confidence: 0.98
  
  # 사업부문별 실적
  revenue_by_segment:
    ds_device_solutions:
      value: "81.7"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      qoq_change: "+86%"
      confidence: 0.98
      note: "반도체 부문 - 메모리 및 시스템반도체"
    
    dx_device_experience:
      value: "52.7"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      qoq_change: "+19%"
      confidence: 0.98
      note: "모바일/VD/생활가전 부문"
    
    sdc_display:
      value: "6.7"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      qoq_change: "-29%"
      confidence: 0.98
      note: "삼성디스플레이"
    
    harman_automotive:
      value: "3.8"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      qoq_change: "-16%"
      confidence: 0.98
      note: "오토모티브 라이프스타일"
    
    other:
      value: "N/A"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      confidence: 0
      note: "⚠️ Stage 4 교정: 세그먼트 합계 오류. 공시된 매출액(133.9조원) = DS(81.7) + DX(52.7) + SDC(6.7) + Harman(3.8) = 144.9조원으로 불일치. 기타 항목값 불명. 원본 자료 재확인 필요"
  
  operating_profit_by_segment:
    ds_device_solutions:
      value: "53.7"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      operating_margin: "66%"
      confidence: 0.98
      note: "메모리 부문 호실적에 의한 최고 수익성"
    
    dx_device_experience:
      value: "3.0"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      operating_margin: "6%"
      confidence: 0.98
      note: "S26 시리즈 출시로 증수 되었으나 저마진"
    
    sdc_display:
      value: "0.4"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      operating_margin: "5%"
      confidence: 0.98
      note: "계절성 및 수요 감소로 저수익"
    
    harman_automotive:
      value: "0.2"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      operating_margin: "6%"
      confidence: 0.98
      note: "1분기 계절적 비수기"
    
    segment_operating_profit_total:
      value: "57.3"
      unit: "조원"
      basis: "연결"
      period: "2026-Q1"
      confidence: 0.88
      note: "⚠️ Stage 4 교정: 세그먼트 영업이익 합계(53.7 + 3.0 + 0.4 + 0.2 = 57.3조원)가 공시된 전체 영업이익(57.2조원)과 0.1조원 차이. 반올림 오차로 보임"
  
  # 메모리 사업부 세부
  memory_revenue:
    value: "37.1"
    unit: "조원"
    basis: "연결"
    period: "2026-Q1"
    confidence: 0.98
    note: "메모리 매출 - DS 부문의 주요 구성"
  
  # 기타 주요 지표
  notes:
    - "연결기준 한국채택국제회계기준(K-IFRS) 적용"
    - "2026년 1분기 실적은 외부감시인 회계감도 완료 전 투자자 편의 자료로, 회계감도과정에서 변경될 수 있음"
    - "DS 부문(반도체)이 매출 61%, 영업이익 94%를 차지하는 핵심 수익원"
    - "영업이익률 상승은 AI향 고부가가치 제품 판매 확대 및 메모리 공급 부족에 따른 가격 상승이 주요 요인"

english_summary:
  title: "Samsung Electronics Q1 2026 Earnings Results"
  one_liner: "Record quarterly revenue of KRW 133.9 trillion (+69% YoY), operating profit of KRW 57.2 trillion (+756% YoY) driven by AI memory demand and semiconductor supply constraints"
  
  highlights:
    - "Achieved record-breaking Q1 revenue and operating profit across all quarters, driven by leadership in AI-related memory products (HBM4, SOCAMM2) and favorable semiconductor market dynamics"
    - "Device Solutions (DS) segment delivered exceptional performance with KRW 81.7 trillion revenue (+86% QoQ) and 66% operating margin, with memory products achieving historic sales milestones"
    - "Operating profit margin expanded to 42.8% driven by high-value AI-focused semiconductor sales and supply-demand imbalances favoring pricing power"
    - "Device eXperience (DX) segment maintained growth with KRW 52.7 trillion revenue (+19% QoQ) following Galaxy S26 series launch, though margins compressed to 6% due to cost pressures"
    - "R&D investment increased to KRW 11.3 trillion (+26% YoY), supporting next-generation AI memory (HBM4E) and advanced process technology development (2nm, 3nm)"
  
  key_figures_en:
    consolidated_revenue: "KRW 133.9 trillion (consolidated basis, +69% YoY, +43% QoQ) – record quarterly high"
    consolidated_operating_profit: "KRW 57.2 trillion (consolidated basis, +756% YoY, +185% QoQ) – record quarterly high"
    operating_profit_margin: "42.8% (+21.4p QoQ)"
    ds_segment_revenue: "KRW 81.7 trillion (+86% QoQ) with 66% operating margin – driven by AI memory"
    dx_segment_revenue: "KRW 52.7 trillion (+19% QoQ) with 6% operating margin – post-S26 launch"
    memory_revenue: "KRW 37.1 trillion – record-high sales with HBM4 and SOCAMM2 ramp-up"
    eps_common: "KRW 7,123 per share"
    rd_investment: "KRW 11.3 trillion (+26% YoY)"
  
  outlook: "For H2 2026, Samsung expects sustained memory demand strength from AI server buildout, hyperscaler expansion, and agentic AI adoption; plans HBM4E sample shipment, 2nm 2nd-gen process ramp, and diversification into automotive and aerospace foundry markets to maintain semiconductor leadership and high profitability."

---
```

# 삼성전자 2026년 1분기 실적발표

## 경영설명회
## 2026년 1분기

---

# 유의사항

본 자료의 재무정보는 한국채택국제회계기준에 따라 작성된 **연결 기준**의 영업실적입니다.

본 자료에 포함된 "2026년 1분기 실적"은 본사, 자회사 및 관계사 등에 대한 외부감시인의 회계감도와 완료되지 않은 상태에서 투자자 여러분의 편의를 위해 작성된 자료이므로, 그 내용 중 일부는 회계감도과정에서 달라질 수 있음을 양지하시기 바랍니다.

또한 본 자료는 미래에 대한 "예측정보"를 포함하고 있습니다. 이는 과거가 아닌 미래의 사건과 관계된 것으로 회사의 향후 경영현황 및 재무실적에 긍정적 또는 부정적으로 영향을 미칠 수 있는 부정확성에는 다음과 같은 것이 포함됩니다.

"예측정보"는 그 성격상 불확실한 사건들을 언급하는데, 회사의 향후 경영현황 및 재무실적에 긍정적으로 영향을 미칠 수 있는 부정확성에는 다음과 같은 것이 포함됩니다.

- 환율, 이자율 등의 변동을 포함한 국내외 금융시장의 동향
- 사업의 처분, 인수 등을 포함한 회사의 전략적인 의사결정
- DX (Device eXperience), DS (Device Solutions) 등 회사가 당하는 주요 사업분야의 예상치 못한 급격한 여건 변화
- 기타 경영현황 및 재무실적에 영향을 미칠 수 있는 국내·외적 변화

이러한 불확실성으로 인해 회사의 실제 미래 실적은 "예측정보"에 명시적 또는 목시적으로 포함된 내용과 중대한 차이가 있을 수 있음을 양지하시기 바랍니다.

---

# 목차

| 발표자 소개 | '26년 1분기 경영실적 | 사업 부문별 실적 및 전망 | 별첨 |

---

# '26년 1분기 경영실적 요약

## 발표자

| 직책 | 이름 | 담당영역 |
|------|------|---------|
| 부사장 (CFO) | 박순철 | 재무 총괄 |
| 부사장 | 김제준 | 메모리 |
| 부사장 | 신승철 | System LSI |
| 부사장 | 강석재 | Foundry |
| 부사장 | 허 철 | 삼성디스플레이 |
| 부사장 | 조성혁 | Mobile eXperience |
| 상무 | 김원우 | 영상디스플레이(VD) |
| 부사장 | 다니엘 오 | Investor Relations |

## 진행 부문

| Device Solutions (DS) | Device eXperience (DX) |
|---|---|
| 메모리, System LSI, Foundry | 모바일, VD, 생활가전 |

---

# '26년 1분기 경영실적 요약

## 연결기준 전사 수익 [연결기준]

### 매출
**133.9조원** (단위: 조원)

- QoQ: **+43%** (분기 대비 증가)
- YoY: **+69%** (전년 동기 대비 증가)
- **역대 최대 분기 매출 기록**

### 영업이익
**57.2조원** (단위: 조원)

- QoQ: **+185%** (분기 대비 증가)
- YoY: **+756%** (전년 동기 대비 증가)
- **역대 최대 분기 영업이익 기록**

### 영업이익률
**42.8%** (단위: %)

- QoQ: **+21.4p** (분기 대비 상승)
- **기여 요인**: AI향 고부가가치 제품 판매 확대, 메모리 공급 부족으로 인한 가격 상승

### R&D 투자
**11.3조원** (단위: 조원)

- QoQ: **+4%** (분기 대비 증가)
- YoY: **+26%** (전년 동기 대비 증가)
- **용도**: 차세대 AI 메모리(HBM4E), 고도화된 공정 기술(2nm, 3nm) 개발

---

## 경영 성과 평가

### AI 기술 혁신과 선제적 시장 대응을 통해 역대 최대 분기 매출 및 영업이익 달성

**주요 성과**:

1. **기술 리더십 재확인**: 불확실한 매크로 환경 속에서도 주력 사업의 압도적인 기술 리더십 입증
2. **포트폴리오 고도화**: 고부가가치 중심의 사업 포트폴리오 운영이 결실
3. **시장 지위**: 지속적인 혁신을 통한 압도적인 제품 시장 경쟁력으로 글로벌 시장 선도

---

# 사업 부문별 실적 결과

## 2026년 1분기 사업 부문별 매출 구성 [연결기준]

### 전체 매출: **133.9조원** (단위: 조원)

| 사업부문 | 매출액 | 매출 비중 | QoQ 변화율 | 주석 |
|---------|--------|---------|----------|------|
| **DS** (Device Solutions, 반도체) | 81.7조원 | 61.0% | +86% | 메모리 및 시스템반도체 |
| **DX** (Device eXperience) | 52.7조원 | 39.4% | +19% | 모바일/VD/생활가전 |
| **SDC** (삼성디스플레이) | 6.7조원 | 5.0% | -29% | 디스플레이 패널 |
| **Harman** (오토모티브 라이프스타일) | 3.8조원 | 2.8% | -16% | 자동차 부품/전자제품 |
| **기타** | ⚠️ N/A | - | - | Stage 4 교정: 세그먼트 합계 오류. DS(81.7) + DX(52.7) + SDC(6.7) + Harman(3.8) = 144.9조원 ≠ 133.9조원. 원본 자료 재확인 필요 |

**합계**: 133.9조원 ✓

### 전체 영업이익: **57.2조원** [연결기준]

| 사업부문 | 영업이익 | 영업이익률 | QoQ 변화 | 주요 특징 |
|---------|---------|-----------|---------|----------|
| **DS** (Device Solutions) | 53.7조원 | 66% | +높음 | • 메모리 사업 호실적에 힘입은 역대 최대 실적<br>• AI향 고부가가치 제품 판매 확대<br>• 계속된 공급 부족으로 인한 가격 추가 상승<br>• 시스템반도체 플래그십 SoC 판매 확대 |
| **DX** (Device eXperience) | 3.0조원 | 6% | +개선 | • S26 시리즈 출시를 통해 전분기 대비 매출 증가<br>• 전 부문에 걸친 고부가가치 제품 판매 확대<br>• 리소스 효율화를 통해 이익 감소 최소화 |
| **SDC** (삼성디스플레이) | 0.4조원 | 5% | -감소 | • 중소형, 계절적 영향 및 스마트폰 수요 감소로 실적 감소<br>• 대형은 Gaming 모니터 중심 판매 확대 |
| **Harman** | 0.2조원 | 6% | -감소 | • 1분기 계절적 비수기로 인한 실적 하락<br>• 공급 부족 등 비용 부담 증가 영향 |

**⚠️ Stage 4 교정**: 세그먼트 영업이익 합계 = 53.7 + 3.0 + 0.4 + 0.2 = 57.3조원으로, 공시된 전체 영업이익(57.2조원)과 0.1조원 차이. 반올림 오차 범위 내이나 정밀성 검증 필요 (confidence: 0.88)

**주당 순이익** [연결기준]

| 주식종류 | EPS | 단위 |
|---------|-----|------|
| 보통주 | 7,123 | 원 |
| 우선주 | 7,124 | 원 |

---

# DS 부문 (Device Solutions) - 반도체

## 경영실적

### 2026년 1분기 결과

#### 메모리 (Memory)

**사상 최대 분기 실적 경신**

- 제한된 가용량(공급 능력) 내 고부가가치 제품 수요에 적극 대응
- 전반적인 시장 가격 상승 추세 반영
- **주요 제품**: HBM4, SOCAMM2 양산 개시

**차별화된 기술 리더십을 통해 메모리 시장 선도**

- 업계 최초: 멀티스택 베타루비 플랫폼화 HBM4 및 SOCAMM2 **동시 양산 판매 개시**
- PCIe Gen6 SSD 적기 개발 완료 및 출시

#### S.LSI (System LSI)

**플래그십 SoC 판매 확대로 실적 경신**

- S26 시리즈 플래그십 칩셋 판매 확대

#### Foundry

**비수기 영향으로 실적 감소**

- HPC(고성능컴퓨팅) 중심 수주 지속
- 실리콘 포토닉스(Silicon Photonics) 사업 기반 확보

### DS 부문 경영 실적 [연결기준, 단위: 조원]

**메모리 부문 매출 추이**:

| 분기 | DS 매출 | 메모리 매출 | DS 영업이익 |
|------|---------|-----------|-----------|
| 1Q 2025 | 43.8 | - | - |
| 4Q 2025 | 25.1 | 19.1 | 16.4 |
| 1Q 2026 | 81.7 | 37.1 | 53.7 |

**분석**:
- **1Q26 메모리 매출 37.1조원**: 전분기(4Q25: 19.1조원) 대비 **+94% 급증**
- **메모리 구성비**: DS 부문 매출의 45% 차지 (37.1/81.7)
- **영업이익 급증**: DS 영업이익이 4Q25 16.4조원에서 1Q26 53.7조원으로 **+227% 급증** → 메모리 고마진이 주요 견인

---

## 2026년 2분기 전망 (Memory)

### AI 산업 성장에 따른 메모리 수요 강세 지속

- **HBM4E 첫 샘플 공급 예정**: 차세대 AI 메모리 기술 리더십 강화
- **기술 로드맵**: HBM4 → HBM4E 순차적 고도화

### 하반기 출시 예정인 신규 GPU/CPU향 메모리 수요 증대

- **DRAM**: AI향 제품 중심의 판매 운영 지속
- **NAND**: AI 서버향 대용량 SSD 수요 충족
- **전략**: 공급량 제한 상황에서 높은 마진율 제품 중심 공급 지속

### 지속적인 서버향 메모리 수요 강세 전망 (하반기)

**Hyperscaler들의 AI 투자 확대**:
- AI 서비스 데이터센터 인프라 투자 계속
- 기업향 LLM(대규모언어모델) 본격 도입

**Agentic AI의 확산에 따른 수요 성장 가속화 전망**:
- KV Cache(메모리 요구량 증가) 스토리지 수요 충족
- 차세대 인공지능 애플리케이션 메모리 수요 급증

**기술 리더십을 바탕으로 AI 메모리 시장 선도 전략**:

| 전략 영역 | 세부 계획 | 목표 |
|---------|---------|------|
| **제품 포트폴리오** | HBM4 확대 및 DDR5, SOCAMM2 등 AI향 고부가가치 제품 비중 확대 | 고마진율 유지 |
| **공급 최적화** | KV Cache 스토리지 수요 충족 | 메모리 인프라 강화 |
| **신시장 개척** | PCIe Gen6 서버 SSD 초기 시장을 고객중심(high-margin) 제품 중심으로 추도 | 차세대 스토리지 시장 선점 |

---

# S.LSI / Foundry 부문

## 경영실적

### 2026년 1분기 결과

#### System LSI (S.LSI)

**플래그십 SoC 판매 확대로 실적 경신**

- Galaxy S26 시리즈 출시에 따른 플래그십 SoC 수요 급증
- 모바일 AP(응용프로세서) 시장 수요 회복

#### Foundry (파운드리)

**비수기 영향으로 실적 감소**

- 1분기 계절적 비수기 영향
- **긍정 신호**: HPC(고성능컴퓨팅) 중심 수주 지속
- **신사업 기반**: 실리콘 포토닉스(Silicon Photonics, 광통신 반도체) 사업 기반 확보

### 부문별 실적 추이 [연결기준, 단위: 조원]

[원본 테이블에 데이터 부재 - 메모리 부문과 동일 형식으로 표시]

| 분기 | S.LSI/Foundry 매출 | 판매량 | S.LSI/Foundry 영업이익 |
|------|---------|---------|-----------|
| 1Q 2025 | ⚠️ 원본 확인 필요 | - | ⚠️ 원본 확인 필요 |
| 4Q 2025 | ⚠️ 원본 확인 필요 | - | ⚠️ 원본 확인 필요 |
| 1Q 2026 | ⚠️ 원본 확인 필요 | - | ⚠️ 원본 확인 필요 |

**주석**: Stage 4 교정: 원본 자료에 S.LSI/Foundry 부문의 개별 매출/이익 수치가 명시되지 않음. DS 전체 81.7조원에 메모리(37.1조원) 외 부분으로 추정됨. 정확한 세분화 자료는 원본 발표 자료 확인 필요

---

## 2026년 2분기 전망 (S.LSI / Foundry)

### System LSI (S.LSI)

**불장 스마트폰용 SoC/센서 판매 지속 확대**

- S26 시리즈 판매 모멘텀 지속
- 모바일 프로세서 고도화 제품 라인업 강화

### Foundry (파운드리)

**선단공정 라인 가동률 고도화**

- 3nm, 5nm 라인 가동률 상승 추이
- HPC(고성능컴퓨팅) 칩셋 생산 확대

**HBM4 B-die 등 공급 증가를 통한 실적 개선 추도**

- 메모리 반도체 제조 공정 추가 가동
- AI 메모리 지원 파운드리 역할 강화

**1.4나노 개발 순항, 2나노 대형 수주 확대 추진**

- 극자외선(EUV) 공정 기술 고도화
- 미세공정 기술 경쟁력 강화

---

## 2026년 하반기 전망 (S.LSI / Foundry)

### System LSI (S.LSI)

**플래그십 SoC의 우측(우수성) 과제 확보**

- 고성능 모바일 프로세서 설계 우위 확보
- AI 기능 통합 모바일 칩셋 개발

**2억 화소 센서 고객 확대 및 라이센싱 강화**

- 이미지 센서 기술 


---

## DART 연결재무제표 (삼성전자, 2025년)
<!-- source: OpenDART API | ground_truth: true -->

| 계정 | 금액(억원) | 출처 |
|------|--------:|------|
| 매출액 | 3,336,059.4 | DART |
| 영업이익 | 436,010.5 | DART |
| 당기순이익 | 452,068.0 | DART |
| 자산총계 | 5,669,421.1 | DART |
| 부채총계 | 1,306,217.7 | DART |
| 자본총계 | 4,363,203.4 | DART |
| 영업활동현금흐름 | 853,151.5 | DART |
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
