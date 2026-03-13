---
title: What Is your “Political Blood Type”?
date: 2026-03-13
toc: true
author_profile: false
---
### Intriguing *Free* Data

Before the South Korea’s 21st presidential election (June 3, 2025), South Korea's public broadcaster MBC conducted a survey using a familiar format called the "Political Blood Type Test." As of today (March 13, 2026), more than 300,000 people have visited the site.

After completing the survey, respondents can get to a section titled “How did other people answer?”, which provides a page displaying the response distributions for all 3,027 participants, as well as breakdowns by gender and age group.

If I had tried to run a 500-person survey on Qualtrics, it would probably have cost more than $2,000. For a master’s student like me, being able to examine survey data from more than 3,000 respondents for free was interesting. That is why I collected both the questionnaire items and the response distributions and saved them as CSV files.

### Back to 2025

Back in May 2025, I gave the result chart image files to Gemini 2.5 Pro, ChatGPT, and Claude (cannot remember exact models) and asked them to analyze it, but all of them got the detailed numbers wrong. 

In fact, the conclusion of the blog post I wrote by myself on May 17, 2025, was less about the survey itself and more about my disappointment with AI. To quote only the concluding part:

1. Do not ask an LLM to do much with chart images.

2. Do not leave the “interpretation” of charts or data to an LLM.

3. In South Korea, there is no state religion, and public conflict over race has not yet become especially salient, so the only 
issues that seem capable of generating real political cleavage are things like women’s rights and economic redistribution. It all felt a bit repetitive.

That was basically what I wrote.
This time, I asked Claude Code to use the data directly, build a dashboard itself, and write an analytical report based on the actual files.

### Result

 <p>
    <a
      class="btn btn--primary dashboard-open-btn"
      href="https://z25die-0-0.shinyapps.io/mbc-survey-dashboard/"
      target="_blank"
      rel="noopener">
      Open Dashboard in New Tab
    </a>
  </p>

  <div class="dashboard-mobile-wrap">
    <iframe
      class="dashboard-mobile-frame"
      src="https://z25die-0-0.shinyapps.io/mbc-survey-dashboard/"
      title="MBC Survey Social Values Dashboard"
      width="100%"
      height="760"
      style="border: 1px solid #ddd; border-radius: 12px; background: #fff;">
    </iframe>
  </div>

South Korean social values in 2025 resist easy left–right mapping. What runs through the data instead is a tension between near-universal procedural commitments — fairness, legal equality, intergenerational responsibility — and deep disagreement over what those commitments imply in practice.

The generational divide is sharpest on the least overtly political terrain. Traditional family expectations around motherhood and marriage separate 20s from 70s by over a full scale point, while attitudes toward abstract equality barely differ across generations. The gender divide is sharpest where the disagreement is empirical: not whether women should be equal, but whether the wage gap reflects legitimate factors. On that question, 20s men and 20s women are more than a point apart.

Equality reads as procedural across the board — equal rules score above 4.0, equal outcomes below 2.5. Justice reads as retributive, consistently and broadly. The "too sensitive" item is a near-consensus number that conceals opposite frustrations depending on who is answering.

The one signal that reads differently is social alienation among young men. The absolute scores remain low. But generational & class grievance, discourse norm frustration, and mild nihilistic ideation cluster in the same cohort — and that combination is worth continued observation.

- Detailed Analysis by Claude Code is available in [my github repo](https://github.com/ye-rim-oh/mbc-survey-dashboard).

### For reference

🩸What is Political Blood Type? [Official Page](http://plood.poll-mbc.co.kr/)

✔️ If you are tired of politics being reduced to a simple progressive-versus-conservative divide,

✔️ If politics feels difficult or burdensome,

✔️ If you want to understand your political disposition as simply as finding out your blood type,

“Political Blood Type” is a political personality assessment service that classifies people into 16 types based on four psychological and value-oriented dimensions. Through 36 questions, it identifies the combination of one’s “innate disposition” and the “values formed through life experience,” and maps that combination onto a broader political spectrum.

More precise than the ideology you think you hold, and more nuanced than a rigid progressive-conservative split, 🩸Political Blood Type offers a more detailed analysis of political orientation. Shall we find out how much 💓 Empathy Hemoglobin, 🌪️ Reset White Cells, 🧭 Tradition Hormone, and 🏛️ Hierarchy Receptor you have?

📎 Political Blood Type was designed on the basis of a social survey of 3,027 respondents.
📎 Advisory panel: Professor John Seungmin Kuk (Michigan State University), Professor SunKyoung Park (Korea University), Professor Shang E. Ha (Sogang University)

---

Please note that the original questionnaire was, of course, written in Korean, so there may be slight differences in nuance between the original wording and the currently translated English items.
