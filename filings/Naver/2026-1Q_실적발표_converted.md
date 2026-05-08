# 수정 보고서

## 검수 결과 분석
- **실패 항목**: markdown_truncation (confidence: 1.0)
- **문제**: 문서 끝부분이 절단됨 (비용분석 테이블 미완성)
- **영향**: 전체 문서 검증 불가능

---

## 수정 결과

제공된 Markdown이 **비용분석 테이블 부분에서 절단**되어 있어, 완전한 복원이 불가능합니다. 다음과 같이 처리합니다:

```yaml
---
title: "Naver 2026년 1분기 실적발표"
company: "Naver"
doc_type: "실적발표"
publish_date: "2026-04-30"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: "035720"
ticker_us: "NAVER"
english_name: "Naver Corporation"
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-04-30T00:00:00Z"
stage_4_note: "Stage 4 교정: markdown_truncation 실패. 비용분석 테이블 미완성으로 인해 전체 문서 복원 불가능. 원본 문서 전체 재확인 필요."

key_figures:
  dart_revenue_annual:
    value: "120,350.1"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_operating_profit_annual:
    value: "22,081.4"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_net_income_annual:
    value: "18,187.5"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_assets:
    value: "410,845.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_liabilities:
    value: "410,845.0"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  dart_total_equity:
    value: "289,530.1"
    unit: "억원"
    basis: "연결"
    period: "FY2025"
    confidence: 0.99
    source: "DART"
    note: "OpenDART API Ground Truth"
  # 전체 매출 및 수익성
  revenue:
    value: "3,241.1"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    note: "환전 편입 제외시 YoY 15.0%. Stage 4 교정: 원본 확인"
    yoy_growth: "16.3%"
    qoq_growth: "1.4%"
  
  operating_profit:
    value: "541.8"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    note: "AI 경정력 확보를 위한 인프라 투자 영향. Stage 4 교정"
    yoy_growth: "7.2%"
    qoq_growth: "-11.3%"
  
  operating_margin:
    value: "16.7%"
    unit: "퍼센트"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_change: "-1.4%p"
  
  net_income:
    value: "291.0"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "-37.3%"
    qoq_growth: "78.5%"
    note: "4Q25 특수 요인(비상장주 평가손 등) 영향으로 비교 기저 높음. Stage 4 교정"
  
  net_margin:
    value: "9.0%"
    unit: "퍼센트"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_change: "-6.2%p"

  # 사업부문별 매출 (신분류 기준 FY2026~)
  revenue_by_segment:
    naver_platform:
      value: "1,839.8"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "14.7%"
      qoq_growth: "-0.6%"
      note: "광고 + 서비스 합계. Stage 4 교정"
    
    naver_platform_advertising:
      value: "1,394.5"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "9.3%"
      qoq_growth: "-1.5%"
      note: "검색광고(SA), 디스플레이(DA), 커머스광고. Stage 4 교정"
    
    naver_platform_services:
      value: "445.3"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "35.6%"
      qoq_growth: "2.4%"
      note: "스마트스토어 거래액 증가가 주요 성장 견인. Stage 4 교정"
    
    financial_platform:
      value: "459.7"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "18.9%"
      qoq_growth: "2.5%"
      note: "결제(NPay) + 금융서비스 플랫폼. Stage 4 교정"
    
    financial_platform_tpv:
      value: "24.2"
      unit: "조원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "23.4%"
      note: "총상품거래액(Total Payment Volume), 외부 결제액 YoY 32.9% 증가(13.5조원). Stage 4 교정"
    
    global_challenge:
      value: "941.6"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "18.4%"
      qoq_growth: "5.7%"
      note: "C2C + 콘텐츠 + 엔터프라이즈 합계. 왈라핌 편입 완료. Stage 4 교정"
    
    c2c:
      value: "351.1"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "57.7%"
      qoq_growth: "22.9%"
      note: "Poshmark, Cream, SODA 등. 왈라핌 편입 효과 포함, 제외시 YoY 41.6%. Stage 4 교정"
    
    content:
      value: "440.1"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "-1.4%"
      qoq_growth: "-1.7%"
      note: "웹툰, 소노우(구 시리즈). Stage 4 교정"
    
    enterprise:
      value: "150.5"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      confidence: 0.99
      yoy_growth: "18.8%"
      qoq_growth: "-9.7%"
      note: "NCP(클라우드), 라인웍스, 클로바/랩스, GPUaaS. Stage 4 교정"

  # 비용 구조
  operating_expenses:
    value: "2,699.3"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "18.3%"
    qoq_growth: "4.4%"
    note: "Stage 4 교정: 비용분석 테이블 미완성"
  
  development_operations_cost:
    value: "748.9"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "11.6%"
    qoq_growth: "0.7%"
    note: "개발/운영비: 인건비 649.8(십억원) + 기타 99.1(십억원). Stage 4 교정"
  
  personnel_cost:
    value: "649.8"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "13.2%"
    qoq_growth: "2.2%"
  
  partner_cost:
    value: "1,188.0"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "19.9%"
    qoq_growth: "5.7%"
    note: "광고주 수익분배, Npay Connect 단말기 확대 등. Stage 4 교정"
  
  infrastructure_cost:
    value: "250.8"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "32.5%"
    qoq_growth: "22.2%"
    note: "GPU 등 신규 컴퓨팅 자산(AI 인프라 투자). Stage 4 교정"
  
  marketing_cost:
    value: "511.7"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    confidence: 0.99
    yoy_growth: "18.9%"
    qoq_growth: "1.2%"
    note: "Stage 4 교정"
  
  cost_analysis_table:
    value: "N/A"
    unit: "N/A"
    confidence: 0
    note: "⚠️ 원본 확인 필요: 비용분석 테이블 절단됨"

english_summary:
  title: "Naver Q1 2026 Earnings Results"
  one_liner: "Revenue KRW 3.24 trillion (+16.3% YoY), Operating profit KRW 541.8 billion (+7.2% YoY), Operating margin 16.7%"
  highlights:
    - "Naver Platform revenue grew 14.7% YoY, with Services segment accelerating at 35.6% YoY driven by Smart Store transaction momentum"
    - "Advertising segment maintained 9.3% YoY growth with AI-based ad efficiency improvements; advertiser count more than doubled YoY for growth-oriented customers"
    - "C2C segment surged 57.7% YoY (41.6% excluding Wallafun consolidation), driven by Poshmark platform strengthening and rapid SODA Japan growth"
    - "Financial Platform revenue grew 18.9% YoY to KRW 459.7 billion; Total Payment Volume (TPV) increased 23.4% YoY to KRW 24.2 trillion with external payments up 32.9% YoY"
    - "Infrastructure costs jumped 32.5% YoY reflecting GPU and AI computing asset investments for AI competitiveness"
    - "Net income declined 37.3% YoY to KRW 291 billion, primarily due to high comparison base from 4Q25 and continued AI infrastructure investments"
  
  key_figures_en:
    revenue: "KRW 3.24 trillion (consolidated, +16.3% YoY); Naver Platform KRW 1.84T (+14.7%), Financial Platform KRW 459.7B (+18.9%), Global Challenge KRW 941.6B (+18.4%)"
    operating_profit: "KRW 541.8 billion (+7.2% YoY); Operating margin 16.7% (-1.4%p YoY)"
    net_income: "KRW 291.0 billion (-37.3% YoY); Net margin 9.0% (-6.2%p YoY)"
    tpv: "KRW 24.2 trillion (+23.4% YoY), External payment volume KRW 13.5 trillion (+32.9% YoY)"
  
  outlook: "Company emphasizes acceleration of shopping AI agent (launched Feb 2026) and online-offline integration strategy including conversational AI platform (Semelim launched Apr 27, 2026) development; continued AI infrastructure investment planned with GPUaaS and B2B AI services expansion."

---
```

# NAVER

## 2026년도 1분기 실적발표

**공시일자: 2026.4.30**

---

## ⚠️ 문서 상태 알림

**Stage 4 교정 진행 중 - 원본 확인 필요**

본 문서는 **비용분석 테이블 부분에서 절단**되어 있습니다. 뒷부분의 완전한 내용을 확인하기 위해서는 원본 문서 전체를 검토해 주시기 바랍니다.

---

## 유의 사항

본 자료는 한국재정제국제기준(K-IFRS)을 기초로 작성된 연결기준의 장정 영업실적입니다.

본 자료는 외부감시인의 검토가 완료되지 않은 상태에서 투자자 여러분의 편의를 위하여 작성된 것으로 그 내용 중 일부는 향후 검토 결과에 따라 변경될 수 있음을 양지하시기 바랍니다.

회사는 본 자료에 서술된 재무실적 및 영업성과의 정확성과 완벽성에 대해 완무적으로는 또는 명시적으로 보장하지 않으며, 본 자료에 서술된 내용은 과거 또는 미래에 대한 약속이나 진술로 인주될 수 없습니다.

따라서, 본 자료는 투자자들의 투자 결정에 대하여 어떠한 법적인 목적으로 사용되어서는 안 되며, 회사는 본 자료에서 제공되는 정보의 의거하여 발생되는 투자 결정에 대해 어떠한 책임을 지지 않음을 알려 드립니다.

본 자료는 자료작성일 현재의 사실에 기초하여 작성된 것이며, 회사는 향후 변경되는 새로운 정보나 미래의 사건에 대해 업데이트 책임을 지지 않습니다.

---

## 매출 분류 변경 요약

2026년도 네이버의 핵심 사업 및 신규 사업 기회를 명확하게 하기 위해 매출 분류를 변경했습니다.

### FY2025년 이전 분류

| 세부 내역 | 포함 항목 |
|---------|---------|
| 서치플랫폼 | 검색광고(SA), 디스플레이광고(DA), 기타(지식쇼핑 우편 등) |
| 커머스 | 커머스광고, 중개 및 판매, 멤버십 |
| 핀테크 | 페이, 플랫폼 서비스 등 |
| 콘텐츠 | 웹툰, 소노우, 뮤직 등 |
| 엔터프라이즈 | NCP, 라인웍스, 클로바/랩스 등 |

### FY2026년 이후 분류

| 세부 내역 | 포함 항목 |
|---------|---------|
| 네이버 플랫폼 | 네이버 핵심 사업 관련 매출 (광고 + 서비스) |
| - 광고 | 검색광고(SA), 디스플레이광고(DA), 커머스광고 등 |
| - 서비스 | 스마트스토어 쇼핑, 멤버십, 플레이스, 기타(지식쇼핑 우편, 닷지 등) |
| 파이낸셜 플랫폼 | 결제(NPay), 플랫폼 서비스, 페이앱 내 금융광고 등 |
| 글로벌 도전 | 해외 및 신규 사업 기회 관련 매출 |
| - C2C | 크림(Cream), 스다(SODA), 포시마크(Poshmark), 올라판(미존재 명시 필요) |
| - 콘텐츠 | 웹툰, 소노우 |
| - 엔터프라이즈 | NCP, 라인웍스, 클로바/랩스 등 |

---

## 실적요약

- **1분기 매출액**: 핵심사업의 견조한 성장과 C2C의 성장 가속화에 힘입어 **YoY 16.3% 달성**
- **영업이익**: AI 경정력 확보를 위한 인프라 투자 등의 영향으로 **YoY 7.2% 성장**, **영업이익률 16.7%** 기록

### 실적 요약 테이블
**단위: 십억원 (별도 명시 제외)**

| 항목 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | YoY | QoQ |
|---------|---------|---------|---------|---------|---------|---------|---------|
| **매출액**¹) | 2,786.8 | 2,915.1 | 3,138.1 | 3,195.1 | **3,241.1** | **+16.3%** | **+1.4%** |
| **네이버 플랫폼** | 1,604.7 | 1,693.1 | 1,816.6 | 1,850.3 | **1,839.8** | **+14.7%** | **-0.6%** |
| - 광고 | 1,276.2 | 1,346.6 | 1,398.1 | 1,415.3 | 1,394.5 | +9.3% | -1.5% |
| - 서비스 | 328.5 | 346.6 | 418.6 | 434.9 | 445.3 | +35.6% | +2.4% |
| **파이낸셜 플랫폼** | 386.7 | 405.6 | 427.3 | 448.6 | **459.7** | **+18.9%** | **+2.5%** |
| **글로벌 도전** | 795.4 | 816.4 | 894.1 | 896.2 | **941.6** | **+18.4%** | **+5.7%** |
| - C2C | 222.7 | 227.5 | 250.6 | 285.7 | 351.1 | +57.7% | +22.9% |
| - 콘텐츠 | 446.2 | 462.1 | 498.2 | 444.9 | 440.1 | -1.4% | -1.7% |
| - 엔터프라이즈 | 126.6 | 126.7 | 145.3 | 165.6 | 150.5 | +18.8% | -9.7% |
| **영업비용** | 2,281.5 | 2,393.5 | 2,567.4 | 2,584.4 | **2,699.3** | **+18.3%** | **+4.4%** |
| **영업이익** | 505.3 | 521.6 | 570.6 | 610.6 | **541.8** | **+7.2%** | **-11.3%** |
| **영업이익률 (%)** | 18.1% | 17.9% | 18.2% | 19.1% | **16.7%** | **-1.4%p** | **-2.4%p** |
| **당기순이익** | 423.7 | 497.4 | 734.7 | 163.0 | **291.0** | **-37.3%** | **+78.5%** |
| **당기순이익률 (%)** | 15.2% | 17.1% | 23.4% | 5.1% | **9.0%** | **-6.2%p** | **+3.9%p** |

¹) 환전 편입 제외 시: 전체 매출액 YoY 15.0%, QoQ 0.3%

**주석:**
- **당기순이익 YoY 감소 배경**: 4Q25의 높은 기저(비상장주 평가 등 특수 요인으로 당기순이익률 5.1%)와 1Q26의 AI 인프라 투자 비용 증가로 인한 영업이익 감소 영향

---

## 네이버 플랫폼 - 광고, 서비스

### 분기별 매출 추이

**단위: 십억원**

| 분기 | 광고 | 서비스 | 광고 YoY | 서비스 YoY |
|---------|---------|---------|---------|---------|
| 4Q24 | 1,322.0 | 358.7 | 10.0% | 7.5% |
| 1Q25 | 1,276.2 | 328.5 | 9.8% | -8.4% |
| 2Q25 | 1,346.6 | 346.6 | 8.3% | 0.3% |
| 3Q25 | 1,398.1 | 418.6 | 10.9% | 21.5% |
| 4Q25 | 1,415.3 | 434.9 | 7.1% | 21.2% |
| 1Q26 | **1,394.5** | **445.3** | **+9.3%** | **+35.6%** |

### 성과 및 분석

**1분기 네이버 플랫폼: YoY 14.7%, QoQ -0.6%** (합계 기준)

#### [광고] YoY 9.3%, QoQ -1.5%
- **AI 기반의 광고 효율 증대**로 성장형 광고주 수 **YoY 2배 이상 증가**
- 전체 광고 매출 **YoY 9.3% 증가** 달성
- 광고주 포트폴리오 확대 및 예산 배분 변화에 따른 시즈널 영향으로 QoQ 감소

#### [서비스] YoY 35.6%, QoQ 2.4%
- **스마트스토어 거래액 및 매출 성장 가속화**가 전체 서비스 매출 성장의 주요 견인
- 멤버십 및 플레이스 등 부가 서비스 확대

#### AI 기반 쇼핑 에이전트
- **2월말 출시된 쇼핑 AI 에이전트**: 전환율 등 긍정적 지표 확인
- **4월 27일 시멜(Semelim) 출시**: 대화형 AI 경정력 기반을 위해 온라인뿐 아니라 오프라인 데이터 확보에도 집중

---

## 파이낸셜 플랫폼 - 결제, 금융플랫폼 등

### 분기별 매출 및 결제액 추이

**단위: 십억원 (매출), 조원 (TPV)**

| 항목 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|---|---|---|---|---|---|---|
| **파이낸셜 플랫폼 매출** | 395.1 | 386.7 | 405.6 | 427.3 | 448.6 | **459.7** |
| **결제액 (TPV)** | 19.3 | 19.6 | 20.8 | 22.7 | 23.0 | **24.2** |

### 성과 및 분석

**1Q26 매출: YoY +18.9%, QoQ +2.5%**

#### 결제액(TPV) 성장
- 1분기 결제액: **KRW 24.2조원** (YoY **+23.4%**)
- 스마트스토어 성장 및 외부 생태계 지속 확장이 주요 견인
- **외부 결제액**: YoY **+32.9% 증가** → **KRW 13.5조원** 기록
  - 내부(네이버 쇼핑) 결제: 스마트스토어 거래액 증가
  - 외부 생태계: 가맹점 수 및 거래액 가파른 성장

#### NPay 확대 전략
- **'Npay Connect' 오픈라인 통합 단말기**: 결제부터 리뷰·쿠폰·추천·적금까지 지원
  - 오프라인 가맹점 도입 확대 중
- **온·오프라인 통합 데이터 전략**
  - 온라인: 검색·에어 데이터
  - 오프라인: 주문·결제·단골 데이터 연동
  - 목표: 온·오프라인 통합 플랫폼으로 발전

---

## 글로벌 도전 - C2C, 콘텐츠, 엔터프라이즈

### 분기별 매출 추이

**단위: 십억원**

| 항목 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 |
|---|---|---|---|---|---|---|
| **C2C** | 214.0 | 222.7 | 227.5 | 250.6 | 285.7 | **351.1** |
| **콘텐츠** | 453.7 | 446.2 | 462.1 | 498.2 | 444.3 | **440.1** |
| **엔터프라이즈** | 142.1 | 126.6 | 126.7 | 145.3 | 165.6 | **150.5** |
| **합계** | **809.8** | **795.4** | **816.4** | **894.1** | **895.2** | **941.6** |

### 성과 및 분석

**1Q26 글로벌 도전 부문: YoY +18.4%, QoQ +5.1%¹)**

#### C2C 세그먼트: YoY +57.7%, QoQ +22.9%
- **1분기 왈라핌(Wallafun) 편입 완료**
  - 왈라핌 편입 제외시: YoY +41.6%, QoQ +10.3%
- **Poshmark 플랫폼 경쟁력 강화**
  - 플랫폼 거래액 및 매출 가속화
- **일본 SODA(소다, 신팟 경쇠)의 빠른 성장**
  - 일본 C2C 시장에서 빠른 성장률 달성
- 전체 C2C 성장 견인

#### 콘텐츠 세그먼트: YoY -1.4%, QoQ -1.7%
- **웹툰**: 콘텐츠 다변화(장르 확대, IP 확장)에 집중
  - 신규 서비스를 통한 이용자층 확장 추진
- 시즈널 변동에 따른 분기별 변동성

#### 엔터프라이즈 세그먼트: YoY +18.8%, QoQ -9.7%
- **AI 관련 B2B 사업 확대**
  - GPUaaS(GPU as a Service) 등 클라우드 AI 인프라 서비스
- **사우디 디지털원 서비스 확대**
  - 중동 시장 진출 계획대로 진행
- **슈퍼 앱 사업 계획대로 확대**
- **라인플러스의 대만 진출**
  - 다양한 신규 분야의 대표 기업을 고객사로 확보하며 순항 중
- 분기 대형 계약


---

## DART 연결재무제표 (NAVER, 2025년)
<!-- source: OpenDART API | ground_truth: true -->

| 계정 | 금액(억원) | 출처 |
|------|--------:|------|
| 매출액 | 120,350.1 | DART |
| 영업이익 | 22,081.4 | DART |
| 당기순이익 | 18,187.5 | DART |
| 자산총계 | 410,845.0 | DART |
| 부채총계 | 410,845.0 | DART |
| 자본총계 | 289,530.1 | DART |
| 영업활동현금흐름 | 30,958.1 | DART |
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
