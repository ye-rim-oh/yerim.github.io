---
title: GradCafe 기반 2020-2026 정치학 PhD 어드미션 트렌드
slug: gradcafe-2020-2026-trend-note
date: 2026-03-04
last_modified_at: 2026-03-04
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

- GradCafe의 보고는 지원자가 자발적으로 게시하는 형식이기 때문에 당연히 모집단 전체를 대표하지 않습니다.
- 특히 GRE 점수, 세부전공, 국적 정보는 누락/편향이 큽니다.
- 본 글의 수치는 2026년 3월 4일 일자 기준입니다.

그래도 "언제 발표가 몰리는지", "연도별 체감 경쟁 강도", "국적별 격차" 정도의 흐름을 읽는 데는 꽤 유용합니다.

## 핵심 요약

리포트 기준 전체 표본은 **3,766건**이고, 2026 시즌 표본은 **858건**으로 가장 큽니다.

핵심 숫자만 먼저 보면:

## Summary Table

| Year | Total Cases | Overall Accept Rate | American Cases | American Accept Rate | International Cases | International Accept Rate | GRE V mean | GRE Q mean | GPA Reporting Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2020 | 593 | 46.4% | 214 | 48.5% | 304 | 42.6% | 161.3 | 159.6 | 31.4% |
| 2021 | 576 | 35.3% | 206 | 37.9% | 254 | 29.9% | 164.5 | 161.1 | 29.9% |
| 2022 | 495 | 45.5% | 205 | 41.1% | 289 | 48.3% | 163.0 | 162.8 | 54.7% |
| 2023 | 337 | 46.1% | 94 | 58.8% | 184 | 47.4% | 163.2 | 163.1 | 55.8% |
| 2024 | 402 | 44.6% | 138 | 42.5% | 259 | 45.1% | 163.6 | 162.2 | 51.5% |
| 2025 | 505 | 36.5% | 176 | 41.5% | 329 | 33.7% | 163.4 | 165.3 | 57.8% |
| 2026 | 858 | 34.5% | 366 | 42.5% | 492 | 28.5% | 163.9 | 165.8 | 66.7% |

- 2026 표본 규모는 2020-2026 중 최대입니다.
- 전체 합격률은 최근 두 시즌 모두 30%대 중반이고, 이전 고점(2020/2023년 45.9%) 대비 낮은 구간입니다.
- 2026 국적 격차는 **14\.1%p**(American 42\.5% - International 28\.5%)입니다.

## 눈에 띈 점

### 1) American > International

연도별 변동은 있지만, 대부분 해에서 American 합격률이 International보다 높습니다.
예외는 2022년(International 48.8% > American 40.4%)이고, 2026에는 격차가 다시 크게 벌어졌습니다.

### 2) 시즌 타이밍은 여전히 2월 초중순 중심

`Median Final`은 2020년을 제외하면 대체로 2월 초중순에 모입니다.
2026의 `Median Final`은 **02/10**로, 전형적인 패턴에 가깝습니다.

### 3) 세부전공 해석은 여전히 보수적으로

2026 기준으로도 `Subfield Known %`가 **26\.2%** 수준이라, 세부전공 비교는 방향성 참고용으로 보는 것이 안전합니다.
다만 보고된 범위에서는 CP 태그가 가장 자주 등장합니다.

### 4) GRE/GPA와 합격의 선형 상관은 매우 약함

2020-2026 합산 기준 점수-합격 상관은 다음과 같습니다.

| Metric | Valid N | Correlation r | p-value | Interpretation |
| --- | --- | --- | --- | --- |
| GPA | 1,616 | 0.057 | 0.0214 | Very weak linear correlation |
| GRE V | 884 | 0.066 | 0.0484 | Very weak linear correlation |
| GRE Q | 881 | 0.117 | 0.0005 | Very weak linear correlation |
| GRE AW | 812 | 0.005 | 0.8952 | No meaningful linear correlation |

유의성이 있더라도 효과 크기 자체는 작아서, 실전에서는 다른 요인(연구적합도, 추천서, writing sample, 학교별 컷오프)이 더 큰 변동을 만들 가능성이 큽니다.

## 지원자 관점

1. **발표는 대체로 2월 중순**
   - 이 구간에 주요 대학들의 Accept/Reject 결과가 몰립니다.

2. **초반 표본만 보고 시즌 전체를 단정하지 않기**
   - 2026년처럼 초반 표본이 크게 늘어나는 해도 있습니다.
   - 후반 업데이트(특히 waitlist 등)가 일부 지표를 바꿀 수 있습니다.

3. **국적/전공/GRE 표는 "분위기 지표"일 뿐**
   - 개인 결과 예측 모델로 쓰기엔 누락된 데이터가 너무 많습니다.

4. **정량 스펙만으로 설명되지 않는 구간**
   - GRE/GPA 상관이 약하다는 점은, 정량 외 요소의 변동성이 크다는 신호로 읽힙니다.
   - 지원 전략은 학교별 fit과 서류 완성도 중심으로 짜는 편이 현실적입니다.
   - 그와 별개로 2026 cycle의 어드미션 결과 포스팅을 실시간으로 봤는데, 보통 GRE 합 330에 AW 5+아이비리그 학부인 학생들은 상위 대학 골라가는 걸 보면 그래도 역시 스펙은 중요한 것 같습니다.ㅎㅎ;

