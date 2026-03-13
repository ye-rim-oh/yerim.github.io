---
title: GradCafe-Based Political Science PhD Admission Trends, 2020-2026
slug: gradcafe-2020-2026-trend-note
date: 2026-03-04
last_modified_at: 2026-03-12
tags:
  - Admission
  - Academia
toc: true
author_profile: false
---

## Introduction

I scraped and organized political science PhD admission data submitted to GradCafe from 2020 to 2026, then noted a few patterns that seemed meaningful from an applicant's point of view.
- Base repository: [ye-rim-oh/GradCafe](https://github.com/ye-rim-oh/GradCafe)

> Update: as of 2026-03-04, I scraped the full 2020-2026 seasons again and updated the figures.

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

## Points to Keep in Mind

- GradCafe reports are self-posted by applicants, so they do not represent the full population.
- One applicant may apply to multiple schools and report multiple outcomes, so 12 reported cases do not necessarily mean 12 distinct people. It could just as easily mean 6 people reporting 2 schools each, or 3 people reporting 4 schools each.
- GRE scores, subfield information, and nationality information are especially affected by missingness and reporting bias.
- The figures in this post are current as of March 4, 2026.
- Even so, the dataset is still useful for reading broad patterns, such as when announcements cluster by school and how competitive a given year feels.

## Key Summary

### Summary Table

| Year | Total Cases | Overall Accept Rate | American Cases | American Accept Rate | International Cases | International Accept Rate | GRE V mean | GRE Q mean | GPA Reporting Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2020 | 593 | 46.4% | 214 | 48.5% | 304 | 42.6% | 161.3 | 159.6 | 31.4% |
| 2021 | 576 | 35.3% | 206 | 37.9% | 254 | 29.9% | 164.5 | 161.1 | 29.9% |
| 2022 | 495 | 45.5% | 205 | 41.1% | 289 | 48.3% | 163.0 | 162.8 | 54.7% |
| 2023 | 337 | 46.1% | 94 | 58.8% | 184 | 47.4% | 163.2 | 163.1 | 55.8% |
| 2024 | 402 | 44.6% | 138 | 42.5% | 259 | 45.1% | 163.6 | 162.2 | 51.5% |
| 2025 | 505 | 36.5% | 176 | 41.5% | 329 | 33.7% | 163.4 | 165.3 | 57.8% |
| 2026 | 858 | 34.5% | 366 | 42.5% | 492 | 28.5% | 163.9 | 165.8 | 66.7% |

- The 2026 admission-season sample was the largest in the 2020-2026 period.
- The overall acceptance rate remained in the mid-30% range in each of the two most recent seasons, below the previous high of 45.9% in 2020 and 2023.
- The nationality gap in the 2026 admission season was **14.1%p** (American 42.5% - International 28.5%).

## What Stood Out

### 1) American > International

- There is year-to-year variation, but in most years the American acceptance rate is higher than the International acceptance rate.
- The exception is 2022 (International 48.8% > American 40.4%), and in 2026 the gap widened again.

### 2) The Timing of the Season Still Centers on Early to Mid-February

- Except for 2020, `Median Final` is generally concentrated in early to mid-February.
- In 2026, `Median Final` is **02/10**, which is close to the usual pattern.

### 3) Interpretation of Subfields Still Needs to Be Conservative

- Even in 2026, `Subfield Known %` is only **26.2%**, so subfield comparisons are best treated as directional rather than definitive.
- Within the reported subset, however, the CP tag appears most often.

### 4) The Linear Correlation Between GRE/GPA and Admission Is Very Weak

- The score-admission correlations for the combined 2020-2026 data are as follows.

| Metric | Valid N | Correlation r | p-value | Interpretation |
| --- | --- | --- | --- | --- |
| GPA | 1,616 | 0.057 | 0.0214 | Very weak linear correlation |
| GRE V | 884 | 0.066 | 0.0484 | Very weak linear correlation |
| GRE Q | 881 | 0.117 | 0.0005 | Very weak linear correlation |
| GRE AW | 812 | 0.005 | 0.8952 | No meaningful linear correlation |

- Even where statistical significance appears, the effect size itself is small. In practice, factors such as research fit, recommendation letters, the writing sample, and school-level fit are likely to generate more meaningful variation.

## From an Applicant's Point of View

### 1) Announcements Mostly Cluster in Mid-February

- This is the period when many major schools' accept/reject results are concentrated.

### 2) The Nationality, Subfield, and GRE Tables Are Best Read as Mood Indicators

- There is far too much missing data to use them as a model for predicting any individual's outcome.

- Separately, according to GradCafe forum this cycle, Duke admitted only three students and Georgetown only six, which makes this admissions season appear especially brutal.


### 3) A Large Share of the Outcome Cannot Be Explained by Quantitative Specs Alone

- The weak correlation between GRE/GPA and admission suggests that many forces besides quantitative factors are shaping outcomes, and in textbook terms it is more realistic to build one's strategy around school-specific fit.
- At the same time, as I watched GradCafe admission posts from the 2026 cycle in real time, it became hard to ignore the fact that applicants with profiles such as a 330+ GRE, a 5.0+ AW score, and an Ivy League undergraduate degree were often choosing among top programs. In that sense, it still seemed clear that conventional metrics do matter after all.
