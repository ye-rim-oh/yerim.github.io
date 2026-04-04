---
title: Research Ideas using AI
date: 2026-04-04
tags:
  - AI
toc: true
author_profile: false
---
These are some research topics I had in mind for my PhD. I didn't want them to go to waste, so I’m archiving them here. Please feel free to reach out via email if you're interested!

* * *

## Beyond Ideal Points: Quantifying Leader Personality for Predicting Aggressive Foreign Policy Behavior

### Motivation

Ideal point estimation—the standard IR approach to modeling political actors, derived from voting records or survey responses—captures positional preferences but says little about the psychological dispositions that shape how those preferences translate into decisions under uncertainty. The gap matters most in authoritarian regimes, where weak institutional constraints mean policy outcomes track the individual at the top far more directly than structural accounts assume. If personalist dictatorships are defined by "weakened institutions and narrow support bases" that amplify individual agency, then incorporating personality into conflict prediction models is theoretically necessary, not an optional refinement.

### Core Argument

Leader personality, operationalized as a multidimensional psychological score, adds predictive value to models of aggressive foreign policy behavior (e.g., militarized interstate dispute initiation, escalatory rhetoric, territorial revisionism) beyond what positional ideal points alone capture. The effect is moderated by regime type: personality should predict behavior more strongly in personalist autocracies than in institutionally constrained democracies or party-based authoritarian systems.

### Theoretical Grounding

* **Authoritarian personality theory** (Adorno et al. 1950): foundational framework linking dispositional traits—rigid cognitive style, in-group/out-group thinking, threat sensitivity—to aggressive outward behavior.
  
* **Leadership Trait Analysis (LTA)** (Hermann 1999, 2003): seven operationalizable traits (belief in ability to control events, conceptual complexity, self-confidence, task vs. interpersonal orientation, distrust of others, in-group bias, need for power) shown to correlate with conflict propensity.
  
* **Operational Code Analysis (OCA)** (Walker, Schafer & Young 1998, 2006): quantitative measurement of a leader's philosophical beliefs about the nature of the political universe and instrumental beliefs about optimal strategies. Outbreak of war is reliably associated with reduced conceptual complexity and elevated power motivation relative to affiliation motivation (Post 2003).
  
* **Neoclassical realism / Foreign Policy Analysis (FPA)**: individual-level variables as intervening between structural pressures and state behavior; consistent with the "bringing the leader back in" agenda (Murray 2025).
  

### Methodology

The methodology integrates four layers: (1) traditional at-a-distance content analysis as the baseline, (2) LLM-assisted automation for scalable corpus processing and trait scoring, (3) LLM persona simulation for prospective behavioral prediction, and (4) statistical outcome modeling. Each layer is distinct in purpose and can be validated independently.

* * *

#### Layer 1: Corpus Construction and Classical Scoring (Baseline)

* **Corpus**: speeches, press conference transcripts, parliamentary or assembly records, diplomatic communiqués (sourced from governmental archives, FBIS/OSC, LexisNexis, UN Digital Library).
  
* **Classical tools**: Profiler Plus (Hermann's LTA software) for seven leadership traits; VICS coding scheme for OCA scores (P-1 through P-5 philosophical beliefs, I-1 through I-5 instrumental beliefs). This layer produces the validated baseline against which LLM-assisted outputs are benchmarked.
  
* **Output**: a leader-level numeric profile, comparable across a normed reference group.
  

#### Layer 2: LLM-Assisted Trait Scoring (Automation + Scale)

The classical LTA/OCA pipeline is resource-intensive: it requires trained coders, is slow, and does not scale easily to large multilingual corpora. LLMs can address all three constraints simultaneously.

**A. LLM as automated coder (zero-shot / few-shot)**

Recent work demonstrates that instruction-tuned LLMs outperform traditional dictionary methods and are competitive with supervised classifiers on political text annotation tasks, including ideology scaling and trait identification (Mao et al. 2025; Herrmann et al. 2025; Heseltine and Clemm von Hohenberg 2024). The proposed workflow:

1. Chunk each leader's speech corpus into utterance-level units.
  
2. Prompt an LLM with the LTA trait definitions and request a scored annotation per chunk, with a brief chain-of-thought rationale. Example prompt structure:
  

> *"You are coding the following excerpt from a speech by [Leader, Year] for Leadership Trait Analysis. Evaluate the speaker's expressed 'Belief in Ability to Control Events' on a scale of 0–10, where 10 indicates maximum conviction of personal control over political outcomes. Justify your score in one sentence."*

3. Aggregate chunk-level scores to the speech level, then to the leader-period level.
  
4. **Validation**: compare LLM-generated scores against a hand-coded gold-standard subset (minimum 200 utterances per leader). Report Pearson *r* and Cohen's κ. Recent benchmarks suggest LLM–human agreement on political text tasks reaches r > .85 for well-defined constructs (Herrmann et al. 2025).
  

**B. Multi-run averaging and uncertainty quantification**

LLM outputs are stochastic. Following the "asking and averaging" protocol (Herrmann et al. 2025), each utterance is scored across N=5–10 independent runs and the mean is taken as the point estimate, with the standard deviation as a proxy for coding uncertainty. Leaders with high score variance across runs should be flagged as ambiguous cases requiring human review.

**C. Hybrid human-LLM adjudication**

Where LLM runs disagree internally (SD > threshold) or diverge from classical Profiler Plus scores, a human expert adjudicates. This "hybrid" approach has been shown to boost coding accuracy above either pure-LLM or pure-human approaches alone (Heseltine and Clemm von Hohenberg 2024).

**D. Multilingual extension**

LLM-based annotation is viable across languages without separate model training, enabling inclusion of leaders whose primary discourse is in Russian, Mandarin, Arabic, or Korean—historically excluded from LTA/OCA studies that depend on English transcripts. This substantially expands the effective universe of cases.


#### Layer 3: LLM Persona Simulation (Prospective Prediction Module)

Beyond scoring existing texts, LLMs can simulate how a leader with a given personality profile would respond to hypothetical scenarios—a structured counterfactual generator. This is the most methodologically novel component, and the most epistemically risky. It should be framed explicitly as exploratory, not as a confirmatory test.

**A. Persona construction**

For each leader in the dataset, construct a structured persona prompt synthesizing:

* LTA trait scores (from Layers 1–2)
  
* OCA philosophical and instrumental belief indices
  
* Biographical context: formative experiences, tenure length, major prior crises
  
* Regime-structural context: institutional constraints, key advisers, domestic political pressures
  

Example persona injection:

> *"You are simulating the foreign policy reasoning of [Leader] as of [Year]. This leader scores [X] on Need for Power, [Y] on Distrust of Others, and [Z] on Conceptual Complexity (all normalized against the LTA reference group). Their operational code reflects [belief summary]. Given the following geopolitical scenario [scenario text], describe how this leader would most likely respond and assess the probability of a militarized action."*

**B. Scenario battery**

Run each persona through a standardized battery of crisis scenarios, varying: (i) degree of external threat, (ii) domestic political stability, (iii) availability of diplomatic off-ramps. Record both the qualitative response and a solicited probability estimate for escalatory action.

**C. Backtesting**

Validate the simulation against known historical outcomes. For example: does a persona constructed from Saddam Hussein's 1989–1990 OCA scores, when presented with a scenario structurally isomorphic to the Kuwait crisis, generate escalatory predictions at higher rates than a structurally similar democratic leader? This is the analogue of historical out-of-sample validation.

**D. Critical limitations of this layer**

* LLM persona simulation has been shown to work reasonably well at the *group level* but is less reliable at individual-level replication; individual-level persona variables explain <10% of outcome variance in some benchmarks (Manning 2025).
  
* LLMs have training data priors that may systematically distort historical figure simulation—e.g., a model trained heavily on Western-language text may underweight the internal logic of leaders whose discourse is poorly represented in training corpora.
  
* This layer does not generate causal identification; it is a structured elicitation tool for hypothesis generation and plausibility assessment, not a confirmatory test.
  



#### Layer 4: Statistical Estimation (Outcome Modeling)

* **Cross-sectional / panel regression**: leader personality scores (from Layers 1–2) as key regressors in models of MID initiation (MID v5.0), ICEWS conflict event counts, or territorial revisionism. Controls: dyadic power ratio (Correlates of War), alliance portfolio (ATOP), GDP growth, leader tenure.
  
* **Heterogeneous effects**: interact personality scores with regime type (Geddes, Wright & Frantz classification) to test the moderation hypothesis that personality predicts behavior more strongly in personalist regimes.
  
* **Process tracing (qualitative)**: for a subset of 3–5 cases, trace the causal chain: structural pressure → personality-filtered threat perception → domestic justification discourse → behavioral outcome. Primary sources for this layer should be cross-checked against Layer 3 simulation outputs as a consistency check.
  



#### Case Selection

* **Universe**: personalist authoritarian leaders in office ≥ 3 years, 1946–present.
  
* **Historical cases** (deep process tracing): Stalin, Mao Zedong, Saddam Hussein, Kim Jong-il, Muammar Gaddafi, Slobodan Milošević.
  
* **Contemporary cases** (real-time monitoring potential): Vladimir Putin, Xi Jinping, Kim Jong-un.
  

### Expected Contributions

1. Methodological: personality scores derived from public texts are predictively valid beyond ideal point estimates—which are themselves derived from behavioral data and thus potentially endogenous to the outcome of interest.
  
2. Theoretical: bridges quantitative IR (ideal point literature) and political psychology (LTA/OCA tradition), which have developed largely in parallel.
  
3. Policy-relevant: personality profiles could be computed in near real-time from ongoing leader discourse, providing early-warning indicators of conflict initiation—a precedent exists in the CIA's Center for the Analysis of Personality and Political Behavior, founded by Jerrold Post (Murray 2025).
  

### Key Limitations

* Strategic communication: leaders may deliberately misrepresent beliefs in public statements, particularly in authoritarian contexts. Mitigation: cross-validate against private communications where available; weight sources by incentive structure.
  
* Selection bias: personalist leaders who initiate conflicts may generate more voluminous corpora, inflating apparent trait scores.
  
* Ecological validity of proxy instruments (MBTI, egogram): these are not validated for at-a-distance scoring of historical figures and should be framed as heuristic rather than confirmatory.
  

### Reference

**Political psychology / LTA / OCA foundations**

* Post, Jerrold M., ed. 2003. *The Psychological Assessment of Political Leaders: With Profiles of Saddam Hussein and Bill Clinton*. Ann Arbor: University of Michigan Press.
  
* Hermann, Margaret G. 1999. “Assessing Leadership Style: Trait Analysis.” In *The Psychological Assessment of Political Leaders: With Profiles of Saddam Hussein and Bill Clinton*, ed. Jerrold M. Post. Ann Arbor: University of Michigan Press.
  
* Walker, Stephen G., Mark Schafer, and Michael D. Young. 1998. “Systematic Procedures for Operational Code Analysis: Measuring and Modeling Jimmy Carter’s Operational Code.” *International Studies Quarterly* 42(1).
  
* Levinson, Daniel J. 1957. “Authoritarian Personality and Foreign Policy.” *Journal of Conflict Resolution* 1(1). https://doi.org/10.1177/002200275700100105.
  
* Renshon, Jonathan. 2008. “Stability and Change in Belief Systems: The Operational Code of George W. Bush from Governor to Second-Term President.” *Journal of Conflict Resolution* 52(6).
  

**LLM-assisted political text analysis (methodological grounding for Layer 2)**

* Mao, Honglin, Yaxin Li, Jindong Wang, Zeyu Chen, Siyuan Cheng, Xianchao Xiang, Qiwen Liu, et al. 2025. “Validating the Use of Large Language Models for Psychological Text Classification.” *Frontiers in Social Psychology*. https://www.frontiersin.org/journals/social-psychology/articles/10.3389/frsps.2025.1460277/full.
  
* Herrmann, Richard, et al. 2025. “Positioning Political Texts with Large Language Models by Asking and Averaging.” *Political Analysis* 33(3): 274–282. https://doi.org/10.1017/pan.2024.29.
  
* Heseltine, Michael, and Benno Clemm von Hohenberg. 2024. “Large Language Models as a Substitute for Human Experts in Annotating Political Text.” *Research & Politics*. https://journals.sagepub.com/doi/10.1177/20531680241236239.
  

**LLM persona simulation (methodological grounding for Layer 3)**

* Kreutner, Martin, et al. 2025. “Persona-Driven Simulation of Voting Behavior in the European Parliament with Large Language Models.” *arXiv*. https://arxiv.org/abs/2506.11798.
  
* Manning, Andriy. 2025. “LLM-Based Persona Simulation: Survey of Methods and Limitations.” *Emergent Mind*. https://www.emergentmind.com/topics/llm-based-persona-simulation.
  
* * *

## Does AI Use Make People More Conservative or More Progressive? A Longitudinal Field Experiment

### Motivation

Large language models occupy an unusual position in the information ecosystem. Unlike social media algorithms, which optimize for engagement through homophilic content selection, LLMs generate responses dynamically and—by default—present ostensibly balanced perspectives. Mainstream LLMs have been consistently found to occupy a moderate left-of-center position on standardized political compass evaluations (Chowdhury and Robert 2025; Steimer 2025; Motoki, Pinho Neto, and Rodrigues 2024), yet early experimental evidence suggests they may actually *moderate* rather than amplify political views, at least over short time horizons (Voelkel et al. 2023; Bai et al. 2025). A structurally opposed dynamic is also plausible: sycophantic tendencies baked in through RLHF training may cause LLMs to mirror user beliefs over extended interactions, functioning as a personalized echo chamber analogous to social media filter bubbles (Calacci et al. 2026; Rathje et al. 2026; Jacob, Kerrigan, and Bastos 2025).

These two mechanisms—moderation through balanced deliberation vs. polarization through sycophantic mirroring—generate opposing predictions. Neither has been tested in a longitudinal field experiment with real-world AI usage patterns over a politically meaningful time horizon.

### Research Questions

* **RQ1**: Does regular, unconstrained AI chatbot use shift individuals' political attitudes over a six-month period, and in which direction?
  
* **RQ2**: Does the effect differ by condition: (a) free-form AI use vs. (b) structured AI use with a system-level prompt designed to elicit balanced perspectives?
  
* **RQ3**: Is the treatment effect moderated by baseline ideology, frequency of use, or topic domain of AI queries?
  

### Experimental Design

#### Participants

* Recruit N ≈ 600–900 adult participants via panel vendor (e.g., Prolific, KnPanel for Korean context), stratified by self-reported ideology (left / center / right) and prior AI usage.
  
* Pre-registration on OSF prior to data collection.
  

#### Random Assignment

Participants are randomly assigned to one of three conditions. 
* In the control condition, participants are not given access to the designated AI tool and instead continue their normal media diet without any study-provided chatbot intervention. 
* In Treatment A, participants are given free access to a designated large language model under ordinary settings, with no modification to the system prompt, and their use of the tool is entirely self-directed. 
* In Treatment B, participants are given access to the same model, but the system prompt is fixed in advance so that the chatbot is instructed to present multiple perspectives and avoid affirming a single viewpoint.

The contrast between Treatment A and Treatment B isolates the effect of prompt-level intervention on top of raw AI exposure, enabling identification of how much of any observed attitude shift is attributable to sycophancy vs. content effects.

#### Measurement Protocol

* **T0** (baseline): Political attitude battery—affective polarization scale (Iyengar et al.), issue positions on 8–10 policy domains, political identity strength.
  
* **T1** (3 months): Repeat attitude battery + AI usage log (frequency, topic categories).
  
* **T2** (6 months): Full repeat battery + open-ended qualitative questions on perceived AI influence.
  
* **Usage logging**: Participants consent to anonymized logging of query topic categories (not content) via a lightweight browser extension or dedicated app interface.
  

#### Primary Outcome

* Change in affective polarization score (T2 – T0) by treatment conditions.
  
* Change in issue position index.
  

#### Secondary Outcomes

* Partisan identity strength.
  
* Epistemic confidence (how certain participants are in their own political views).
  
* Cross-cutting information exposure (whether participants encounter viewpoints opposite to their baseline).
  

### Anticipated Mechanisms and Heterogeneous Effects

The sycophancy-driven echo chamber mechanism predicts: Treatment A > Control in polarization, concentrated among high-frequency users and users whose ideological identity is easily inferred by the model (Calacci et al. 2026). The deliberative moderation mechanism predicts: Treatment A < Control in affective polarization, consistent with Bai et al. (PNAS 2025) and Voelkel et al. (PNAS 2023). Treatment B is predicted to amplify the moderating effect by constraining sycophantic mirroring.

### Ethical Considerations

* Informed consent for ideological attitude measurement; full debriefing at T2.
  
* No deception; participants are told they are in a study of AI usage and political attitudes.
  
* IRB approval required; pre-registration mandatory.
  
* Data stored with identifiers separated from usage logs.
  

### Theoretical Contributions

1. First longitudinal field experiment (as opposed to one-shot or two-week lab studies) to measure AI-induced attitude change over a politically meaningful time horizon.
  
2. Identifies mechanism (sycophancy vs. deliberation) rather than documenting net effect.
  
3. Generates causal identification strategy superior to observational studies of AI adoption.
  

### Key Limitations

* Compliance monitoring: participants in Treatment conditions may not actually use the provided AI tool consistently; intent-to-treat and per-protocol analyses both required.
  
* External validity: lab-provision of AI tools may not replicate naturalistic AI adoption patterns.
  
* Temporal scope: six months may be insufficient to detect attitude crystallization; attitudes may return to baseline after intervention ends (cf. Bail et al. 2018 on social media exposure effects).
  

### Reference

* Voelkel, Jan G., et al. 2023. “Interventions Reducing Affective Polarization Do Not Necessarily Improve Anti-Democratic Attitudes.” *Nature Human Behaviour* 7: 55–64.
  
* Bai, Hui, Jan G. Voelkel, Sean Muldowney, and Robb Willer. 2025. “Testing Theories of Political Persuasion Using AI.” *Proceedings of the National Academy of Sciences* 122. https://www.pnas.org/doi/10.1073/pnas.2412815122.
  
* Voelkel, Jan G., et al. 2023. “Leveraging AI for Democratic Discourse.” *Proceedings of the National Academy of Sciences* 120(41). https://www.pnas.org/doi/10.1073/pnas.2311627120.
  
* Rathje, Steve, et al. 2026. “Sycophantic AI Increases Attitude Extremity and Overconfidence.” *PsyArXiv* preprint.
  
* Jacob, C., P. Kerrigan, and Marco Bastos. 2025. “The Chat-Chamber Effect: Trusting the AI Hallucination.” *Social Media + Society*. https://doi.org/10.1177/20539517241306345.
  
* Calacci, Dan, et al. 2026. “AI-Powered Chatbots Can Become Too Agreeable over Time.” Penn State Institute for Computational and Data Sciences news release. https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time.
  
* Bail, Christopher A., et al. 2018. “Exposure to Opposing Views on Social Media Can Increase Political Polarization.” *Proceedings of the National Academy of Sciences* 115(37): 9216–9221.
  
* Steimer, Sarah. 2025. “Finding Political Leanings in Large Language Models.” University of Chicago Social Sciences Division. https://socialsciences.uchicago.edu/news/finding-political-leanings-large-language-models.
  
* Chowdhury, Rumman, and Kayla Schwoerer Robert. 2025. “Is the Politicization of Generative AI Inevitable?” *Brookings Institution*. https://www.brookings.edu/articles/is-the-politicization-of-generative-ai-inevitable/.
  
* Motoki, Fabio, Valdemar Pinho Neto, and Victor Rodrigues. 2024. “More Human than Human: Measuring ChatGPT Political Bias.” *arXiv*. https://arxiv.org/abs/2412.16746.
  
* * *
## Unequal Adoption, Unequal Voice: Identity-Based AI Utilization Gaps and Asymmetric Political Participation

### Motivation

The existing literature on technology and democracy has predominantly examined AI's effects from the top down—how states deploy AI for surveillance, how platforms use algorithms to manipulate opinion—while treating "users" as an undifferentiated mass. A separate body of work in gender studies and digital inequality documents that technology perception and use vary substantially by gender, race, religion, and socioeconomic status. The argument here is that these two literatures must be joined: if AI lowers the cost of constructing persuasive political narratives, mobilizing supporters, and flooding discursive spaces with content, then differential utilization capability across identity groups reshapes the relative capacity of groups to participate in politics, amplifying rather than simply reproducing existing inequalities. Groups that adopt and use AI more effectively gain structural advantages in agenda-setting, narrative construction, and mobilization. Groups that do not fall further behind.

The gender dimension is tractable empirically. Globally, women are approximately 20% less likely than men to use generative AI tools; women comprised 42% of ChatGPT's 200 million monthly users between late 2022 and mid-2024, and only 27% of app downloads (Otis et al. 2024; Whillans et al. 2025). Income, education, and age account for little of the gap; it is explained primarily by differences in AI-specific knowledge and, secondarily, by gendered attitudes toward privacy risk (Bensoussane et al. 2024). The Carnegie Endowment flags the gender trust and adoption gap as an underappreciated risk to democratic participation (Wang 2025).

South Korea is a strong critical case. It combines high AI adoption rates (providing statistical power to detect differential utilization effects), the most pronounced gender ideological gap among young voters in any advanced democracy—in the 2022 presidential election, 59% of men aged 18–29 voted for the conservative candidate versus 34% of women in the same cohort (Steger 2025)—and a heavily gendered digital information environment, with men and women consuming politically divergent content in algorithmically siloed online spaces (Korea Times Editorial Board 2024; East Asia Forum 2024).

### Core Argument

Identity-based differences in AI adoption and utilization capability widen existing participation gaps. The mechanism is bottom-up: AI differentially empowers identity groups to construct alternative discursive realities, dominate agendas in online political spaces, and mobilize co-partisans at lower cost. The resulting asymmetry runs through two channels: (1) *agenda domination*—groups with higher utilization capability can flood political discourse with AI-assisted content at scale, crowding out less AI-capable groups; and (2) *illiberal mobilization*—AI-assisted narrative construction lowers the organizational cost of identity-based political movements, including anti-feminist and other reactionary mobilizations.

The central question, then, is not how technology erodes democracy but whom it empowers to participate, and at whose expense.

### Conceptual Distinctions

The research distinguishes between two analytically separate dimensions of AI engagement:

* **Adoption level**: frequency of AI use, purposes of use, and subjective perception of AI (trust, utility, risk).
  
* **Utilization capability**: depth of engagement—ability to prompt effectively, evaluate outputs critically, and deploy AI outputs for political purposes (narrative creation, petition drafting, social media content generation, organizing messages).
  

The gap in *utilization capability* is likely more politically consequential than simple adoption frequency, but less studied. A group that uses AI daily for entertainment is not equivalent to a group that uses it weekly for political content production.

### Methodology

#### Phase 1: Conjoint Survey (South Korea, N ≈ 1,200–1,500)

**Sampling**: representative quota sample of Korean adults aged 19–39, stratified by gender and region. This age range captures the cohort in which gender ideological divergence is most pronounced.

**Measurement instruments**:

*Adoption module*: self-reported AI use frequency, platform diversity, stated purposes of use (entertainment, work, information-seeking, political/social purposes), perceived utility and risk.

*Utilization capability module*: structured prompting task administered within the survey instrument. Respondents are given a standardized political scenario (e.g., "Write a social media post supporting/opposing [policy X]") and asked to use an embedded AI interface. Output quality—persuasiveness, ideological specificity, factual accuracy—is scored by trained coders blind to respondent identity. This operationalizes utilization capability as a behaviorally grounded performance score rather than self-report.

*Political behavior and attitude module*: voting intention, party identification, affective polarization (Korean adaptation of the Iyengar et al. scale), political efficacy, online political activity (posting, sharing, commenting), participation in offline political events.

*Demographic module*: gender, age, education, income, employment sector, region, subjective social class.

**Analysis**:

* OLS/logit regression of adoption and utilization capability on political participation outcomes, with gender as the primary moderator.
  
* Mediation analysis: does utilization capability mediate the relationship between gender and online political participation?
  
* Conjoint component: embed a conjoint experiment within the survey in which respondents evaluate hypothetical AI-assisted political messages varying in source identity (male/female, in-group/out-group) and AI authorship disclosure, measuring gendered reception of AI-assisted political content.
  

#### Phase 2: Semi-Structured Interviews (N ≈ 40–60)

Purposive sampling of survey respondents in extreme cells (high-adoption men, high-adoption women, low-adoption men, low-adoption women) plus political activists and community organizers who self-report using AI for political purposes.

Interview topics:

* How and for what purposes do respondents use AI in political/civic contexts?
  
* How do they evaluate AI-generated political content encountered online? Do they detect it?
  
* How do they perceive AI-literacy initiatives—are these seen as neutral technical training or as culturally coded?
  
* What are the barriers and facilitators of AI use for political engagement?
  

This phase provides contextual depth that cannot be captured quantitatively: the situated logic by which different groups come to use or avoid AI in political life.

#### Phase 3: Comparative Extension

Following the Korean case study, extend the design to a second Asian country with high AI adoption but a different primary identity cleavage—Indonesia (religious cleavage: Muslim vs. non-Muslim; urban vs. rural) or Taiwan (ethnic/national identity cleavage: Taiwanese vs. Chinese identity). Cross-national comparison tests the scope conditions of the theory: is the mechanism driven by gender-specific dynamics, or does it generalize to other salient identity cleavages?

### Dependent Variables

* **Primary**: online political participation index (posting, sharing, signing petitions, organizing), offline political participation.
  
* **Secondary**: political efficacy (internal and external), affective polarization, cross-cutting exposure (engagement with politically opposing content).
  

### Theoretical Contributions

1. Integrates the digital inequality literature (adoption/utilization gaps) with the political participation literature (participation inequality), which have developed in relative isolation.
  
2. Moves beyond aggregate "AI effects on democracy" framings toward a group-differentiated mechanism that specifies *who* is empowered and *through what channel*.
  
3. Introduces utilization capability as a distinct, behaviorally operationalized construct that is theoretically and empirically separable from adoption frequency.
  
4. Contributes a non-Western comparative case to a literature dominated by U.S. and European empirics.
  

### Key Limitations

* Measurement of utilization capability via a survey-embedded task may not capture naturalistic AI use patterns; respondents may perform differently in a survey context than in everyday political engagement.
  
* Causal identification from cross-sectional survey data is limited; the Phase 1 design is primarily descriptive and hypothesis-generating. Causal claims require longitudinal follow-up or quasi-experimental leverage (e.g., comparing regions with differential AI platform availability).
  
* The Korean gender gap has multiple co-occurring causes (labor market precarity, military service, social media algorithms); isolating the marginal contribution of AI utilization gaps requires careful design and sensitivity analysis.
  

### Reference

**Empirical grounding for AI adoption gaps**

* Otis, N. G., Solène Delecourt, Kate Cranney, and Rembrand Koning. 2024. “Global Evidence on Gender Gaps and Generative AI.” Harvard Business School Working Paper No. 25-023. https://d3.harvard.edu/the-gender-divide-in-generative-ai-a-global-challenge/.
  
* Bensoussane, Inès, et al. 2024. “The Gen AI Gender Gap.” *Economics Letters*. https://www.sciencedirect.com/science/article/abs/pii/S0165176524002982.
  
* Wang, Vivian. 2025. “The Gender Trust Gap in AI: Implications for Democracy.” *Carnegie Endowment for International Peace*. https://carnegieendowment.org/china/posts/2025/10/ai-gender-trust-gap-democracy-implications.
  
* Whillans, Ashley, et al. 2025. “Gender Differences in Generative AI Adoption and Use.” Haas School of Business, University of California, Berkeley.
  

**Korean gender politics**

* Lee, Soohyun Christine. 2025. “Anti-Gender Politics, Economic Insecurity, and Right-Wing Populism among Young Men in South Korea.” *Social Politics*. https://academic.oup.com/sp/article/32/3/584/7826751.
  
* East Asia Forum. 2024. “Gender Is Reshaping South Korea’s Electoral Landscape.” https://eastasiaforum.org/2024/07/09/gender-is-reshaping-south-koreas-electoral-landscape/.
  
* Steger, Isabella. 2025. “South Korea’s 2025 Election: A Test for Gender Equality.” *The Diplomat*. https://thediplomat.com/2025/05/south-koreas-2025-election-a-test-for-gender-equality/.
  
* Korea Times Editorial Board. 2024. “Gender Divide.” *The Korea Times*. https://www.koreatimes.co.kr/www/opinion/2024/12/197_387003.html.
  

**Technology and political participation**

* Bail, Christopher A., et al. 2018. “Exposure to Opposing Views on Social Media Can Increase Political Polarization.” *Proceedings of the National Academy of Sciences* 115(37): 9216–9221.

* * *

## Electoral Seasonality and Gender-Targeted Mobilization in Korean Political Twitter Networks


## Motivation
 
Korean conservative politics has undergone a structural transformation since the 2022 presidential election, in which the People Power Party (PPP) ran an explicitly anti-feminist campaign and successfully channeled the grievances of young men (이대남, *yi-dae-nam*) into a decisive electoral bloc (Lee & Kim 2025). What remains empirically underexamined is whether this mobilization strategy extends beyond anti-feminist messaging toward young *women*—specifically, whether conservative actors attempt to selectively recruit or reframe issues for female audiences during election periods. The intuition motivating this project is that electoral seasons create concentrated windows of strategic communication, during which political networks may restructure themselves: new bridges form between previously disconnected communities, influence hierarchies shift, and gendered targeting becomes more deliberate.
 
Twitter/X is a particularly suitable platform for observing this dynamic in the Korean context for three reasons. First, despite declining global user numbers, Twitter remains the dominant platform for elite political communication in Korea, including politicians, journalists, political influencers, and organized advocacy groups. Second, its retweet structure generates observable endorsement networks that can be used for community detection and ideological positioning without requiring content-level inference about user identity. Third, the temporal granularity of Twitter data enables before/during/after comparisons across electoral cycles.
 
The central empirical question is: Does the structural topology of Korean conservative Twitter networks change in gender-specific ways during election periods, and do these changes exhibit patterns consistent with deliberate outreach toward female users?

 
## Core Argument
 
Conservative political actors in Korea engage in electorally seasonal network restructuring on Twitter, characterized by: (i) increased bridging ties between the conservative community cluster and accounts primarily retweeted by female users; (ii) elevated centrality of accounts that mix anti-feminist grievance content with women-facing issue framing (e.g., safety, economic anxiety, family policy); and (iii) accelerated cross-community diffusion of specific message types during the four-to-six-week window preceding elections. If confirmed, this constitutes evidence of deliberate gendered mobilization strategy operating at the network level—beyond what content analysis of individual accounts would reveal.
 

 
## Data
 
### Source and Collection
 
- **Platform**: Twitter/X Academic Research API (now Basic/Pro tier; see API cost discussion below).
- **Keywords and hashtag seeds**: constructed from major Korean political terms, candidate names, party hashtags, and gender-salient issue terms (여성, 페미니즘, 이대녀, 이대남, 여가부, 군가산점, etc.) across election windows.
- **Target elections** (four observation windows):
  - 2022 presidential election (March): T−6 weeks, T−3 weeks, T−1 week, T+2 weeks
  - 2022 local elections (June)
  - 2024 parliamentary election (April)
  - 2025 presidential election (June): most recent case, real-time collection feasible if project is initiated promptly
- **Corpus size target**: 5–10 million tweets per election window is achievable under current API tiers; 2022 data requires retrospective access which is now commercially tiered.
 
#### User-Level Gender Inference
 
Gender is not directly observable on Twitter. Three complementary approaches:
 
1. **Name-based inference**: Korean given names carry strong gender signal. Apply a Korean name-gender lookup table (e.g., derived from KOSIS population registry name-gender distributions) to screen-names and display names. Precision is high for clearly gendered names; ambiguous and handle-only accounts are flagged as unknown.
2. **Bio-text classification**: LLM-based zero-shot classification of profile bios for gender-indicative language (self-referential terms: 엄마, 직장인 여성, etc.). Validated against name-based inference on overlap cases.
3. **Network-community proxy**: After community detection, label communities by aggregate gender composition using accounts with high-confidence individual gender inference, then assign community-level gender tendency scores. This is a distributional, not individual-level, inference.
 
**Critical caveat**: gender inference at the individual account level is inherently noisy and must be treated as probabilistic. All individual-level inferences should be aggregated to the community level before drawing conclusions; individual-level gender attribution should not be reported.
 
 
### Methodology
 
#### Step 1: Retweet Network Construction
 
For each election window, construct a directed weighted retweet graph G = (V, E, w) where:
- V = set of unique users who authored or were retweeted
- E = directed edge from user *u* to user *v* if *u* retweeted *v*
- w(u, v) = number of retweets
 
Filter to the giant connected component. Prune edges below a minimum weight threshold (e.g., w ≥ 2) to reduce noise from one-off interactions.
 
#### Step 2: Community Detection
 
Apply the **Louvain algorithm** (Blondel et al. 2008) to the undirected projection of the retweet graph, optimizing modularity. This is the standard approach in the Twitter political network literature and has been validated on Korean Twitter data (Kim & Park 2012; Yoo & Kim 2024). Target resolution: 3–6 major communities (progressive, conservative, anti-feminist/manosphere, feminist/progressive women, centrist/news-media, non-political).
 
Assign ideological labels to communities via:
- Seed accounts: known politicians, party accounts, and major political media outlets manually labeled.
- Hashtag co-occurrence: dominant hashtags within each community provide content-level validation of the structural label.
 
#### Step 3: Gender-Community Distribution Analysis
 
For each community, compute:
- **Gender composition score**: proportion of high-confidence gender-inferred accounts that are female.
- **Gender homophily index**: whether female-inferred accounts preferentially retweet other female-inferred accounts within or across communities.
 
Compare gender composition across communities and across election windows (non-election baseline → election window) to detect structural shifts.
 
#### Step 4: Bridge Account Detection and Profiling
 
Identify **bridge accounts**—accounts that connect the conservative community to communities with higher female composition—using:
- **Betweenness centrality** in the inter-community subgraph
- **Community membership change**: accounts that migrate from one community cluster to another across time windows (following the method in Ramaciotti Morales & Cointet 2024)
 
Profile bridge accounts by content: what topics do they tweet about? Are they new accounts or existing ones? What is their follower-to-following ratio (potential astroturfing indicator)?
 
#### Step 5: Temporal Dynamics — Electoral Seasonality Test
 
The core empirical claim is that network restructuring is electorally seasonal. Test this with:
 
- **Inter-community retweet ratio** (ICR): ratio of cross-community to within-community retweets, computed weekly. Prior work shows ICR decreases sharply in the weeks preceding elections and recovers post-election (Dogdu, Choupani & Sürücü 2024)—but the *direction* of cross-community flow (who is reaching out to whom) is what matters here, not just the volume.
- **Granger causality test**: does the emergence of bridge accounts between the conservative cluster and female-leaning communities Granger-cause increases in retweet volume from those female-leaning communities toward conservative content?
- **Difference-in-differences (DiD)**: compare the change in conservative → female-community bridge density across election windows (treatment) vs. non-election periods (control), using the 2022–2025 panel.
 
#### Step 6: Content Analysis of Bridging Messages (LLM-Assisted)
 
For the top-k (k ≈ 500–1,000) tweets authored by bridge accounts during election windows, apply LLM-based stance and frame classification:
 
- **Issue frame**: economic anxiety / safety / family policy / anti-feminism / anti-DP / other
- **Target audience signal**: explicit references to 여성, 이대녀, 엄마, or gender-neutral framing
- **Sentiment toward feminism**: positive / neutral / critical / hostile
 
This step tests whether bridging is accompanied by a *softening* of anti-feminist rhetoric (suggesting strategic reframing for female audiences) or maintains hostile framing (suggesting co-optation of women's issue vocabulary without attitudinal moderation).
 

 
### Key Hypotheses
 
| Hypothesis | Operationalization |
|---|---|
| H1: Electoral seasonality | ICR between conservative cluster and female-leaning communities increases in election windows relative to baseline |
| H2: Directional asymmetry | Conservative→female-community bridging increases more than female-community→conservative bridging |
| H3: Strategic reframing | Bridge account content during election windows shows reduced anti-feminist framing and increased women's issue vocabulary relative to non-election content from the same accounts |
| H4: New bridge formation | Bridge accounts active in election windows are disproportionately recently created or previously low-centrality accounts, suggesting coordinated injection rather than organic community evolution |
 
H4 is the "astroturfing" hypothesis—the most provocative and hardest to definitively confirm without ground truth, but addressable with account age, bot-score (Botometer or equivalent), and network injection pattern analysis.
 

 
### API Cost and Feasibility Discussion
 
This is the central practical constraint. Twitter/X API access tiers as of 2025:
 
- **Free tier**: 1,500 tweets/month read; effectively useless for this project.
- **Basic tier** (~USD 100/month): 10,000 tweets/month read. Insufficient for network-scale collection.
- **Pro tier** (~USD 5,000/month): 1 million tweets/month read. Feasible for one election window per month; cumulative cost for four elections would be prohibitive without grant funding.
- **Academic/Enterprise tier**: no longer openly available post-Musk acquisition; must be negotiated directly.
 
**Feasible mitigation strategies**:
 
1. **Retrospective data from third-party archives**: TweetSets (Library of Congress), Internet Archive Twitter Stream Grab (2022 data available), and academic data-sharing consortia (e.g., ICPSR, Harvard Dataverse political Twitter deposits) may provide 2022 election data at no marginal cost.
2. **Keyword-targeted narrow collection**: instead of broad streaming, collect only tweets containing a pre-specified set of high-signal hashtags and keywords. This reduces volume by ~80–90% while retaining the politically active network core.
3. **Snowball sampling from seed accounts**: starting from a list of major Korean political accounts (politicians, party accounts, top political influencers), collect their follower/following networks and tweets. This trades representativeness for depth on the politically active subgraph.
4. **Collaboration with ICPSR / Korean political communication researchers**: Korean political science and communication departments (SNU, Yonsei, KAIST) may have existing data-sharing agreements or archived datasets.
5. **Focus on 2024 and 2025 elections**: retrospective API access is more expensive; real-time collection starting now for the 2025 presidential election data is feasible at the Basic–Pro tier with careful keyword targeting.
 
Realistic minimum budget for a properly powered study: USD 3,000–8,000 in API costs, plus compute time for network analysis (manageable on a university HPC cluster or AWS spot instances).
 
 
### Expected Contributions
 
1. **Empirical**: first systematic, longitudinal network analysis of Korean political Twitter with explicit gender-disaggregation and electoral seasonality as the organizing variable.
2. **Theoretical**: bridges the political network analysis literature (which has focused on US and European cases) and the Korean gender politics literature (which has relied primarily on survey and electoral data), demonstrating that mobilization strategy is observable in network topology, not only in content.
3. **Methodological**: demonstrates a pipeline for probabilistic gender inference in non-English Twitter networks using name-based and bio-text LLM classification, with explicit uncertainty quantification at the community rather than individual level.
 

 
### Key Limitations
 
- **Gender inference validity**: name-based inference is noisier for Korean Twitter than for English-language platforms because many users adopt non-name handles; community-level aggregation partially mitigates this but introduces ecological fallacy risk.
- **Platform representativeness**: Twitter/X overrepresents politically engaged, educated, urban users; findings may not generalize to the broader Korean electorate or to Kakao/Naver-based political communities, which are structurally different.
- **Causal identification**: network analysis is inherently observational; demonstrating that conservative actors *deliberately* target female users requires additional evidence (e.g., account coordination patterns, content strategy documents) beyond structural network change.
- **API access instability**: X Corp's API policy has changed multiple times since 2022 and may change again; any real-time collection plan carries execution risk.

### Reference

**Korean political network / gender politics**
 
Chung, Haejin. 2024. "Gender Wars and Populist Politics in South Korea." *Women's Studies International Forum* 104: 102906. https://www.sciencedirect.com/science/article/pii/S0277539524000530
 
Kwon, Eunji, and Sooyeon Kim. 2025. "Blaming Feminists, Claiming Pain: Anti-Feminist Discourse and Electoral Mobilization by New Men's Solidarity in South Korea." *Women's Studies International Forum* 110: 102986. https://www.sciencedirect.com/science/article/pii/S0277539525001086
 
Lee, Nae-Young, and Hyeshin Kim. 2025. "Anti-Gender Politics, Economic Insecurity, and Right-Wing Populism: The Rise of Modern Sexism among Young Men in South Korea." *Social Politics: International Studies in Gender, State & Society* 32(3): 584–614. https://academic.oup.com/sp/article/32/3/584/7826751
 
Yoo, Jungwon, and Hyunjin Kim. 2024. "Semantic Networks of Election Fraud: Comparing the Twitter Discourses of the U.S. and Korean Presidential Elections." *Social Sciences* 13(2): 94. https://www.mdpi.com/2076-0760/13/2/94
 
**Twitter political network methodology**
 
Flamino, James, Alessandro Galeazzi, Stuart Feldman, Michael W. Macy, Brendan Cross, Zhenkun Zhou, Matteo Serafino, Alexandre Bovet, Hernán A. Makse, and Boleslaw K. Szymanski. 2023. "Political Polarization of News Media and Influencers on Twitter in the 2016 and 2020 US Presidential Elections." *Nature Human Behaviour* 7(6): 904–916. https://doi.org/10.1038/s41562-023-01550-8
 
Guerrero-Solé, Frederic. 2017. "Community Detection in Political Discussions on Twitter: An Application of the Retweet Overlap Network Method to the Catalan Process Toward Independence." *Social Science Computer Review* 35(2): 244–261. https://doi.org/10.1177/0894439315617254
 
Dogdu, Erdogan, Ramin Choupani, and Selin Sürücü. 2024. "Detecting Political Polarization Using Social Media Data." In *Advances in Intelligent Systems and Computing*, 3–14. Cham: Springer. https://link.springer.com/chapter/10.1007/978-3-031-61816-1_4
 
Ramaciotti Morales, Pedro, and Jean-Philippe Cointet. 2024. "Polarization Dynamics: A Study of Individuals Shifting Between Political Communities on Social Media." arXiv:2408.07731. https://arxiv.org/html/2408.07731
 
**LLM-assisted content classification**
 
Ye, Jinyi, Luca Luceri, and Emilio Ferrara. 2025. "Auditing Political Exposure Bias: Algorithmic Amplification on Twitter/X During the 2024 U.S. Presidential Election." In *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency (FAccT '25)*. https://doi.org/10.1145/3715275.3732159
 
Zhu, Yixuan, Sotiris Siatras, and Lucia Siciliani. 2024. "Analyzing Political Stances on Twitter in the Lead-Up to the 2024 U.S. Election." arXiv:2412.02712. https://arxiv.org/html/2412.02712

