```yaml
---
title: "카카오 2026년 1분기 실적발표"
company: "카카오"
doc_type: "실적발표"
publish_date: "2026-05-07"
fiscal_year: 2026
fiscal_quarter: "Q1"
ticker: ""
ticker_us: ""
english_name: ""
source: "IRGO"
pipeline_version: "v2.0.0"
converted_at: "2026-05-07T00:00:00+09:00"

key_figures:
  # ── 총 매출 ──────────────────────────────────────────────
  revenue:
    value: "1,942"
    unit: "십억원"
    basis: "연결"
    period: "1Q26"
    yoy: "+11%"
    qoq: "-5%"
    confidence: 0.95
    note: "외부감사 검토 완료 전 추정치. ⚠️ Stage 4 교정: 플랫폼/콘텐츠 세부 합산과 부문별 합계 불일치 → 원본 PDF 구조 오류로 추정"

  # ── 부문별 매출 ──────────────────────────────────────────
  revenue_by_segment:
    platform:
      value: "759"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "39%"
      yoy: "+16%"
      qoq: "-4%"
      confidence: 0.95
      note: "플랫폼 부문 합계 (특비즈 + 포털비즈 + 플랫폼기타). ⚠️ Stage 4 교정: 세부 항목 합산(608+68+506=1,182)이 합계 759와 불일치하므로 비중 재계산 불가능. 원본 PDF 구조 오류"

    platform_talkbiz:
      value: "608"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "N/A"
      confidence: 0.6
      note: "⚠️ 원본 확인 필요 (confidence: 0.6) - Stage 4 교정: 특비즈 세부(광고 338 + 커머스 270 = 608)로 재계산. 원본 테이블 수치 오류 지적"

    platform_talkbiz_ad:
      value: "338"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      yoy: "+16%"
      qoq: "-10%"
      confidence: 0.95
      note: "특비즈 > 광고. 비즈니스메시지 +27% YoY, 특 DA +10% YoY. QoQ는 계절적 비수기 영향"

    platform_talkbiz_commerce:
      value: "270"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      yoy: "+1%"
      qoq: "+7%"
      confidence: 0.95
      note: "특비즈 > 커머스. 통합 거래액 2.9조원(+10% YoY). 선물하기 거래액 +9% YoY, 톡스토어 거래액 +18% YoY"

    platform_portal:
      value: "68"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      yoy: "-9%"
      qoq: "-6%"
      confidence: 0.95
      note: "포털비즈(Daum 등). 이용자 지표 감소 영향"

    platform_other:
      value: "506"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      yoy: "+30%"
      qoq: "-4%"
      confidence: 0.95
      note: "모빌리티·페이·엔터프라이즈 등. 카카오페이 분기 매출 3,000억원 돌파(역대 최대)"

    content:
      value: "1,183"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "61%"
      yoy: "+5%"
      qoq: "-7%"
      confidence: 0.5
      note: "⚠️ 원본 확인 필요 (confidence: 0.5) - Stage 4 교정: 콘텐츠 부문 합계. 세부 항목 합산(뮤직+스토리+미디어=760)이 합계 1,183과 불일치(약 423십억원 차이). 원본 PDF 구조 오류로 추정"

    content_music:
      value: "485"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "41%"
      yoy: "+11%"
      qoq: "-8%"
      confidence: 0.4
      note: "⚠️ 원본 확인 필요 (confidence: 0.4) - Stage 4 교정: SM엔터테인먼트·멜론 등 포함. 원본 기재 64%는 세부 합산 불일치로 재계산됨(485/1,183=41%). YoY: 앨범 판매 및 글로벌 공연 확대. QoQ: MD/라이선싱 기저 영향"

    content_story_piccoma:
      value: "112"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "9%"
      yoy: "-10%"
      qoq: "Flat"
      confidence: 0.95
      note: "픽코마(일본). 엔화 기준 거래액 -1% YoY/+2% QoQ, 매출 -9% YoY. 일본 전체 웹마켓 누적 매출 1위, 영업이익률 20% 상회"

    content_story_entertainment:
      value: "71"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      yoy: "-20%"
      qoq: "-12%"
      confidence: 0.95
      note: "엔터테인먼트(플랫폼·유통). 거래액 감소 영향"

    content_media:
      value: "92"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "8%"
      yoy: "+23%"
      qoq: "-3%"
      confidence: 0.95
      note: "영상제작·매니지먼트. YoY: 매출 인식 작품 수 및 제작 진행률 확대"

    content_unaccounted:
      value: "423"
      unit: "십억원"
      basis: "연결"
      period: "1Q26"
      mix: "36%"
      confidence: 0
      note: "Stage 4 교정: 누락 항목 placeholder. 원본 콘텐츠 합계(1,183) - 세부 합산(760) = 423십억원. 원본 PDF의 뮤직·스토리 추가 항목 존재 가능성 → 재확인 필요"

  # ── 주요 거래 지표 ───────────────────────────────────────
  commerce_gmv:
    value: "2.9조원"
    unit: "조원"
    basis: "연결"
    period: "1Q26"
    yoy: "+10%"
    qoq: "-3%"
    confidence: 0.95
    note: "선물하기+톡스토어+카카오프렌즈 온라인 통합 거래액"

english_summary:
  title: "Kakao Q1 2026 Earnings Results"
  one_liner: "Total revenue KRW 1,942B (+11% YoY, -5% QoQ); Platform segment +16% YoY, Content segment +5% YoY. [Stage 4: Segment reconciliation discrepancies noted]"
  highlights:
    - "Total consolidated revenue reached KRW 1,942 billion (+11% YoY, -5% QoQ), with Platform at 39% and Content at 61% of revenue mix."
    - "Platform segment revenue was KRW 759 billion (+16% YoY). Key highlights: Talk Biz Ad +16% YoY driven by Business Message +27% YoY and Talk DA +10% YoY; Talk Biz Commerce +1% YoY with integrated GMV of KRW 2.9 trillion (+10% YoY)."
    - "Kakao Pay surpassed quarterly revenue of KRW 300 billion for the first time (all-time high), with double-digit growth across all service verticals (payments, finance, platform)."
    - "Platform Other (Mobility, Pay, Enterprise) reached KRW 506 billion (+30% YoY, -4% QoQ)."
    - "Content segment revenue was KRW 1,183 billion (+5% YoY, -7% QoQ). Music (SM Entertainment, Melon) grew +11% YoY to KRW 485 billion."
    - "Piccoma (Japan webtoon) revenue was KRW 112 billion (-10% YoY on KRW basis; -9% YoY on JPY basis), maintaining #1 cumulative sales rank in Japan web manga market with operating margin above 20%."
    - "Media segment posted KRW 92 billion (+23% YoY), driven by increased number of productions recognized for revenue."
    - "[Stage 4 Alert] Segment reconciliation discrepancies: Platform detail sum (1,182B) ≠ Platform total (759B); Content detail sum (760B) ≠ Content total (1,183B). Source document structure errors suspected—original PDF verification required."
  key_figures_en:
    total_revenue: "KRW 1,942 billion / ~KRW 1.9 trillion (consolidated, +11% YoY, -5% QoQ)"
    platform_revenue: "KRW 759 billion (39% of total, +16% YoY)"
    content_revenue: "KRW 1,183 billion (61% of total, +5% YoY)"
    talkbiz_ad: "KRW 338 billion (+16% YoY)"
    talkbiz_commerce: "KRW 270 billion (+1% YoY, GMV KRW 2.9T)"
    portal_biz: "KRW 68 billion (-9% YoY)"
    platform_other: "KRW 506 billion (+30% YoY)"
    music: "KRW 485 billion (+11% YoY)"
    piccoma: "KRW 112 billion (-10% YoY)"
    media: "KRW 92 billion (+23% YoY)"
    content_unaccounted: "KRW 423 billion (unallocated, placeholder for missing content detail)"
  outlook: "No explicit forward-looking guidance provided in this document; Kakao Pay achieved record quarterly revenue exceeding KRW 300 billion and the company continues to drive growth across platform and AI-based ad-tech capabilities."
---
```

---

# kakao
## 2026년 1분기 실적발표

2026. 5. 7 | Kakao Investor Relations

> **유의사항**: 본 자료의 2026년 1분기 재무정보는 한국채택국제회계기준(K-IFRS)에 따라 작성된 **추정치**이며, 외부감사인의 회계 검토가 완료되지 않은 상태입니다. 별도 재무제표를 제외한 모든 재무정보는 **연결 기준**으로 작성되었습니다. 내용 일부는 회계 감사 과정에서 변경될 수 있습니다.

---

## 매출 구성

### 총 매출 +11% YoY / -5% QoQ

> **단위**: 십억원 (연결 기준) | **비중**: 플랫폼 39%, 콘텐츠 61% (1Q26 기준)
> ※ 1Q25 대비 비중 역전: 1Q25에는 플랫폼 42%, 콘텐츠 58%

| 분기 | 플랫폼 (비중) | 콘텐츠 (비중) | 합계 |
|------|--------------|--------------|------|
| 1Q25 | 726 (42%) | 1,022 (58%) | **1,748** |
| 2Q25 | 831 (43%) | 1,087 (57%) | **1,917** |
| 3Q25 | 872 (44%) | 1,090 (56%) | **1,962** |
| 4Q25 | 813 (40%) | 1,229 (60%) | **2,042** |
| **1Q26** | **759 (39%)** | **1,183 (61%)** | **1,942** |

> 📌 **YoY**: 1,748 → 1,942 십억원, +194십억원(+11.1%) | **QoQ**: 2,042 → 1,942 십억원, -100십억원(-4.9%)

---

### 매출 구성 체계

| 부문 | 세부 항목 | 내용 |
|------|-----------|------|
| **플랫폼** | 광고형(특비즈 AD) | 비즈보드, 신규 DA, 비즈니스 메시지, 구독 및 기타 |
| | 거래형(특비즈 커머스) | 선물하기, 톡스토어, 카카오프렌즈 온라인 |
| | 포털비즈 | Daum PC/Mobile, 카카오스토리/스타일/페이지, 기타 자회사 광고 |
| | 플랫폼 기타 | 모빌리티, 페이, 엔터프라이즈, 기타 연결 종속회사 |
| **콘텐츠** | 스토리 | 픽코마(일본), 엔터테인먼트(플랫폼·유통) |
| | 뮤직 | SM엔터테인먼트, 멜론, 디지털음원/음반유통, 음악제작 |
| | 미디어 | 영상제작, 매니지먼트 |

---

## 부문별 매출

### 플랫폼 부문 전체

> **단위**: 십억원 (연결 기준)
> **1Q26**: +16% YoY, -4% QoQ
> ⚠️ **Stage 4 교정**: 세부 항목 합산(특비즈 608 + 포털비즈 68 + 플랫폼기타 506 = 1,182)이 플랫폼 합계 759와 불일치. 원본 PDF 구조 오류로 추정되며, 아래 표는 각 항목 개별 페이지 수치로 재구성

| 분기 | 특비즈(AD+커머스) | 포털비즈 | 플랫폼기타 | **플랫폼 합계** |
|------|-----------------|---------|----------|--------------|
| 1Q25 | 558 | 74 | 389 | **726** |
| 2Q25 | 547 | 79 | 463 | **831** |
| 3Q25 | 538 | 73 | 479 | **872** |
| 4Q25 | 629 | 72 | 527 | **1,228** |
| **1Q26** | **608** | **68** | **506** | **759** |

> [주1] **⚠️ 원본 확인 필요** (confidence: 0.6) - Stage 4 교정: 원본 4p 플랫폼 부문 구성 테이블의 수치가 플랫폼 합계와 합산 불일치. 원본 PDF의 구성 테이블 셀이 행/열 혼용된 것으로 추정됩니다. 위 표는 각 항목(광고+커머스=특비즈, 포털비즈, 플랫폼기타) 개별 페이지(5~6p) 수치로 재구성했으나, 원본 직접 확인 필요합니다.

---

### 플랫폼 부문 | 특비즈 > 광고

> **단위**: 십억원 (연결 기준)
> **1Q26**: +16% YoY, -10% QoQ

| 분기 | 광고 매출 |
|------|---------|
| 1Q25 | 291 |
| 2Q25 | 325 |
| 3Q25 | 329 |
| 4Q25 | 376 |
| **1Q26** | **338** |

**주요 내용:**
- **(YoY +16%)** ① **비즈니스 메시지 +27%**: 금융·입금 광고주 중심 발송량 증가 및 메시지 상품 다각화에 따른 과금 방식 확대 ② **특 DA +10%**: 피드형 광고 지면 확대에 따른 중소형 커머스 광고주 수요 증가, 에드테크 역량 기반 광고 효율 개선
- **(QoQ -10%)** 계절적 비수기 영향

---

### 플랫폼 부문 | 특비즈 > 커머스

> **단위**: 십억원 (연결 기준)
> **1Q26**: +1% YoY, +7% QoQ

| 분기 | 커머스 매출 |
|------|-----------|
| 1Q25 | 267 |
| 2Q25 | 221 |
| 3Q25 | 209 |
| 4Q25 | 253 |
| **1Q26** | **270** |

**주요 내용:**
- **통합 거래액**: 2.9조원, +10% YoY, -3% QoQ
  - 선물하기 거래액: +9% YoY, Flat QoQ
  - 톡스토어 거래액: +18% YoY, +10% QoQ
- **(YoY +1%)** 설 수요 대응 상품 및 대형 프로모션 확대로 거래액 성장은 견조했으나, 일부 상품 매출 인식 이연과 프로모션 강화로 매출 증가폭은 제한적
- **(QoQ +7%)** 수요가 검증된 상품 중심의 직매입 운영 확대

> 📌 거래액 성장률(+10% YoY)과 매출 성장률(+1% YoY) 괴리는 프로모션 비용 증가 및 매출 인식 이연에 기인

---

### 플랫폼 부문 | 포털비즈

> **단위**: 십억원 (연결 기준)
> **1Q26**: -9% YoY, -6% QoQ

| 분기 | 포털비즈 매출 |
|------|------------|
| 1Q25 | 74 |
| 2Q25 | 79 |
| 3Q25 | 73 |
| 4Q25 | 72 |
| **1Q26** | **68** |

- **(YoY/QoQ)** 이용자 지표 감소 영향 (Daum 등 포털 서비스 트래픽 하락)

---

### 플랫폼 부문 | 플랫폼 기타

> **단위**: 십억원 (연결 기준)
> **1Q26**: +30% YoY, -4% QoQ

| 분기 | 플랫폼 기타 매출 |
|------|--------------|
| 1Q25 | 389 |
| 2Q25 | 463 |
| 3Q25 | 479 |
| 4Q25 | 527 |
| **1Q26** | **506** |

**주요 내용:**
- **모빌리티**: 택시·주차·라스트마일 물류 중심 견조한 성장
- **페이**: 결제·금융·플랫폼 등 전 서비스 부문 두 자릿수 성장, **분기 매출 3,000억원 돌파** (역대 최대 분기 매출 및 영업이익 기록)

> 📌 플랫폼 기타(506십억원)가 포털비즈(68십억원)보다 약 7.4배 규모로, 플랫폼 부문 내 비중 구조가 변화 중

---

## 콘텐츠 부문 | 스토리

### 픽코마 (일본)

> **단위**: 십억원 (연결 기준)
> **1Q26**: -10% YoY, Flat QoQ

| 분기 | 픽코마 매출 |
|------|-----------|
| 1Q25 | 124 |
| 2Q25 | 128 |
| 3Q25 | 127 |
| 4Q25 | 112 |
| **1Q26** | **112** |

**주요 내용:**
- (엔화 기준) 거래액: -1% YoY, +2% QoQ
- (엔화 기준) 매출액: -9% YoY, Flat QoQ
- **(YoY/QoQ)** 일본 만화시장 둔화 및 대형 신작 부재 영향 지속
- 일본 전체 웹마켓 누적 매출 **1위** 유지
- **영업이익률 20% 상회** 유지

> 📌 원화 기준 YoY -10% vs 엔화 기준 -9%의 차이는 원/엔 환율 변동 영향 (원화 강세)

---

### 엔터테인먼트

> **단위**: 십억원 (연결 기준)
> **1Q26**: -20% YoY, -12% QoQ

| 분기 | 엔터테인먼트 매출 |
|------|---------------|
| 1Q25 | 89 |
| 2Q25 | 92 |
| 3Q25 | 85 |
| 4Q25 | 80 |
| **1Q26** | **71** |

- **(YoY/QoQ)** 플랫폼과 유통에서 거래액 감소

---

## 콘텐츠 부문 | 뮤직, 미디어

### 뮤직

> **단위**: 십억원 (연결 기준)
> **1Q26**: +11% YoY, -8% QoQ

| 분기 | 뮤직 매출 |
|------|---------|
| 1Q25 | 438 |
| 2Q25 | 517 |
| 3Q25 | 565 |
| 4Q25 | 525 |
| **1Q26** | **485** |

**주요 내용:**
- **(YoY +11%)** 앵커 IP 앨범 판매 및 글로벌 공연 규모 확대
- **(QoQ -8%)** 전분기 MD/라이선싱 매출 기저 영향

---

### 미디어

> **단위**: 십억원 (연결 기준)
> **1Q26**: +23% YoY, -3% QoQ

| 분기 | 미디어 매출 |
|------|-----------|
| 1Q25 | 75 |
| 2Q25 | 94 |
| 3Q25 | 96 |
| 4Q25 | 96 |
| **1Q26** | **92** |

**주요 내용:**
- **(YoY +23%)** 매출 인식 작품 수 및 제작 진행률 확대

---

## 콘텐츠 부문 합계 검증

> **단위**: 십억원 (연결 기준, 1Q26)
> ⚠️ **Stage 4 교정 - 심각한 불일치 발견** (confidence: 0.3)

| 항목 | 금액 | 비고 |
|------|------|------|
| 뮤직 | 485 | SM엔터테인먼트, 멜론 등 |
| 픽코마 | 112 | 스토리 > 픽코마 |
| 엔터테인먼트 | 71 | 스토리 > 엔터테인먼트 |
| 스토리 소계 | 183 | 픽코마 + 엔터테인먼트 |
| 미디어 | 92 | 영상제작·매니지먼트 |
| **세부 항목 합산** | **760** | 뮤직 + 스토리 + 미디어 |
| **원본 기재 콘텐츠 합계** | **1,183** | 총매출 1,942 - 플랫폼 759 |
| **차액** | **423** | ≈ 세부 합산의 56% 규모 |

---

### ⚠️ 콘텐츠 부문 합계 불일치 분석 (Stage 4 교정)

**발견된 문제:**
- 세부 항목 단순 합산(760십억원) **≠** 원본 콘텐츠 부문 합계(1,183십억원)
- 약 **423십억원(35.8%)의 차이** 발생
- 이는 세부 항목의 약 56% 규모에 해당하는 상당한 오류

**원인 추정:**
1. **원본 PDF 구조 오류**: 뮤직·스토리 내 추가 항목(세부 자회사, 지역별 분할, 유통채널 등)이 테이블에서 누락됨
2. **SM엔터테인먼트 기여도 오류**: 뮤직 485십억원 내 SM 엔터테인먼트 별도 수치 미파악
3. **테이블 셀 병합 오류**: 원본 4p 콘텐츠 부문 구성 테이블의 셀 병합으로 인한 수치 누락
4. **스토리 세부 분류 불완전**: 픽코마+엔터테인먼트 외 추가 스토리 플랫폼(카카오페이지 등) 수치 미포함 가능성

**Stage 4 조치:**
- YAML의 `content_unaccounted` 필드에 **423십억원**을 placeholder로 추가 (value: "423", confidence: 0)
- 원본 PDF 직접 확인 필수
- 본 문서 사용자에게 "원본 재확인 필요" 주석 강조

---

## 종합 검증 요약

| 항목 | 상태 | confidence | 조치 |
|------|------|-----------|------|
| **플랫폼 세부 합산** | ❌ Fail | 0.6 | 세부(1,182) ≠ 합계(759) → 원본 오류로 추정, 각 항목 개별 페이지 수치로 재구성 |
| **콘텐츠 세부 합산** | ❌ Fail | 0.3 | 세부(760) ≠ 합계(1,183) → 423십억원 누락, placeholder 추가 |
| **플랫폼 비중(39%)** | ⚠️ 재계산 불가 | 0.4 | 세부 합산 불일치로 비중 검증 불가능 |
| **뮤직 비중(64%)** | ⚠️ 재계산 불가 | 0.4 | 원본 기재 64
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
