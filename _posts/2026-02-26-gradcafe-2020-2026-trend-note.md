---
title: "GradCafe 기반 2020-2026 정치학 PhD 어드미션 트렌드"
slug: "gradcafe-2020-2026-trend-note"
tags:
  - Admission
  - Academia
toc: true
author_profile: false
---

GradCafe에 제출된 정치학 PhD 어드미션 데이터를 2020년부터 2026년까지 스크래핑해 정리한 뒤, 지원자 관점에서 의미 있어 보이는 포인트를 기록했습니다.
- 기반 레포: [ye-rim-oh/GradCafe](https://github.com/ye-rim-oh/GradCafe)

> 업데이트: 2026-03-04 기준으로 2020-2026 전체 시즌을 다시 스크랩해 수치를 갱신했습니다.

## Interactive Dashboard

<p>
  <a
    class="btn btn--primary dashboard-open-btn"
    href="https://z25die-0-0.shinyapps.io/gradcafe-master/"
    target="_blank"
    rel="noopener">
    Open Dashboard in New Tab
  </a>
</p>

<div class="dashboard-mobile-wrap">
  <iframe
    class="dashboard-mobile-frame"
    src="https://z25die-0-0.shinyapps.io/gradcafe-master/"
    title="GradCafe Shiny Dashboard"
    width="100%"
    height="760"
    style="border: 1px solid #ddd; border-radius: 12px; background: #fff;">
  </iframe>
</div>

## 주의할 점

- 표본은 GradCafe 자발적 게시글이라서 모집단 전체를 대표하지는 않습니다.
- 특히 GRE 점수, 세부전공, 국적 정보는 누락/편향이 큽니다.
- 본 글의 수치는 2026년 3월 4일 재스크랩 기준 스냅샷입니다.

그래도 "언제 발표가 몰리는지", "연도별 체감 경쟁 강도", "국적별 격차 방향" 정도의 흐름을 읽는 데는 꽤 유용합니다.

## 핵심 요약

리포트 기준 전체 표본은 **5,139건**이고, 2026 시즌 표본은 **1,098건**으로 가장 큽니다.

핵심 숫자만 먼저 보면:

| 항목 | 2025 | 2026 |
| :--- | ---: | ---: |
| 총 표본 | 631 | 1,098 |
| 합격 | 177 | 302 |
| 불합격 | 334 | 568 |
| 합격률 (Accepted/(Accepted+Rejected)) | 34.6% | 34.7% |
| American 합격률 | 39.9% | 42.9% |
| International 합격률 | 31.7% | 28.9% |

- 2026 표본 규모는 2020-2026 중 최대입니다.
- 전체 합격률은 2025, 2026 모두 34%대 중반으로, 이전 고점(2020년 44.3%) 대비 낮은 구간입니다.
- 2026 국적 격차는 **14.0%p**(American 42.9% - International 28.9%)입니다.

## 눈에 띈 점

### 1) 국적 격차는 2026에도 유지됨

연도별 변동은 있지만, 대부분 해에서 American 합격률이 International보다 높습니다.
예외는 2022년(International 44.3% > American 42.4%)이고, 2026에는 격차가 다시 크게 벌어졌습니다.

### 2) 시즌 타이밍은 여전히 2월 초중순 중심

`Median Final`은 2020년을 제외하면 대체로 2월 초중순에 모입니다.
2026의 `Median Final`은 **02/11**로, 전형적인 패턴에 가깝습니다.

### 3) 세부전공 해석은 여전히 보수적으로

2026 기준으로도 `Subfield Known %`가 **20.7%** 수준이라, 세부전공 비교는 방향성 참고용으로 보는 것이 안전합니다.
다만 보고된 범위에서는 CP 태그가 가장 자주 등장합니다.

### 4) GRE/GPA와 합격의 선형 상관은 매우 약함

2020-2026 합산 기준 점수-합격 상관은 다음과 같습니다.

| 지표 | r | p-value | 해석 |
| :--- | ---: | ---: | :--- |
| GPA | 0.034 | 0.1362 | 유의하지 않음 |
| GRE V | 0.068 | 0.0328 | 매우 약한 양(+) 상관 |
| GRE Q | 0.080 | 0.0121 | 매우 약한 양(+) 상관 |
| GRE AW | 0.027 | 0.4254 | 유의하지 않음 |

유의성이 있더라도 효과 크기 자체는 작아서, 실전에서는 다른 요인(연구적합도, 추천서, writing sample, 학교별 컷오프)이 더 큰 변동을 만들 가능성이 큽니다.

## 지원자 관점에서 쓸 만한 정보

1. **2월 초중순을 기다리자**
   - 발표는 대체로 이 구간에 몰립니다.

2. **초반 표본만 보고 시즌 전체를 단정하지 않기**
   - 2026처럼 초반 표본이 크게 늘어나는 해도 있습니다.
   - 후반 업데이트(특히 waitlist 이동)가 일부 지표를 바꿀 수 있습니다.

3. **국적/전공/GRE 표는 "분위기 지표"로 해석하기**
   - 개인 결과 예측 모델로 쓰기엔 누락된 데이터가 많습니다.

4. **정량 스펙만으로 설명되지 않는 구간을 염두에 두기**
   - GRE/GPA 상관이 약하다는 점은, 정량 외 요소의 변동성이 크다는 신호로도 읽힙니다.
   - 지원 전략은 학교별 fit과 서류 완성도 중심으로 짜는 편이 현실적입니다.
