---
title: "우리는 연구를 자동화할 수 있을 것인가"
slug: "2026-03-01-AutoResearch.md"
tags:
  - Academia
  - AI
toc: true
author_profile: false
---

## 목차
- [한글](#한글)
- [English](#English)

## 한글

### 학계 분위기
올해 들어 Claude Code가 핫해지면서, 미국 학계에서도 faculty들이 이제서야 AI의 유용함을 본격적으로 받아들이는 흐름이 보이는 것 같습니다. Emory University의 Pedro H. C. Sant’Anna 교수님도 본인 워크플로우를 공유하셨고([Sant’Anna](https://psantanna.com/claude-code-my-workflow/)), University of Chicago Harris School의 Chris Blattman 교수님도 자동화 사용례를 계속 공유하고 계십니다([Blattman](https://x.com/cblatts/status/2027018464670491065?s=20)). Chris 교수님은 이런 밈을 알티할 정도로([i just talk to chatgpt](https://x.com/cblatts/status/2027134883898757458?s=20)) AI 담론을 꽤 적극적으로 소비하시는 것 같기도 합니다.

### 관심의 출발점
제가 AI를 활용한 연구 자동화에 관심을 갖게 된 건 2026 fall 대비 admission을 준비하면서 Writing Sample이나 SOP를 LaTeX로 작성하며 VS Code를 쓰던 경험 때문이었습니다. 당시에는 각종 AI CLI들이 막 들어오면서 “이걸 어떻게 써야 하지?” 같은 논의가 이제 시작되던 시점이었던 걸로 기억합니다. 영어 문법에 자신이 없어서 GPT나 Grammarly로 몇 번이고 고쳐 왔는데, 결국 사람이 매번 손으로 끝까지 다듬어야 한다는 점이 너무 피곤했습니다. 하지만 터미널에 gemini를 타이핑하고 “이 파일 문법 고쳐 주세요”라고만 하면 몇백 줄짜리 .tex 파일을 읽고 알아서 문법을 교정해 주는 게 아니겠습니까. 그걸 보면서 문법 교정만 할 뿐만 아니라, 연구자가 논리 구조를 적절히 세워 주기만 한다면 AI가 읽을 수 있는 데이터와 문헌 파일만으로 논문을 쓰는 것도 시간 문제 아닐까 싶었습니다.

### 공개된 선례
사실 AI로 논문을 써서 억셉된 선례가 아예 없는 것도 아닙니다. Joshua Gans는 본인 아이디어를 바탕으로 AI가 연구 생산에 어떤 영향을 주는지 사례 기반으로 논의했고([Gans](https://joshuagans.substack.com/p/what-will-ai-do-to-presearch)), HEC Montréal의 Vincent Grégoire도 ‘Vibe Research’ 후기를 본인 홈페이지에 공개했습니다([Grégoire](https://vincent.codes.finance/posts/vibe-research-paper/)). 그리고 솔직히 지금도 “말 안 하고” 억셉된 논문이 꽤 있을 거라고 생각합니다. 공개했을 때의 이득이 거의 없으니까요.

### 논쟁의 중심: Hall & Westwood
아무튼 이렇게 faculty들도 AI를 점점 잘 활용하게 된 현 상황에서, 특히 선행연구 검토(Literature Review)를 둘러싼 논쟁이 눈에 띄어서 기록을 남겨 보려고 합니다. 정확한 시발점을 특정하기는 어렵지만, 제 기준에서 논쟁의 중심에는 Stanford의 Andy Hall 교수님과 Dartmouth의 Sean Westwood 교수님이 계십니다.

- Andy Hall 교수님은 Claude Code로 연구를 “완전 재현 가능하게 만들었다”는 식의 메시지를 공유하시면서([Here's proof that Claude Code can write an entire empirical polisci paper](https://x.com/ahall_research/status/2007603340939800664?s=20)) 학계의 작동 원리가 근본적으로 바뀌어야 한다고 주장해 오셨습니다([I'm baffled by any empirical social scientist who isn't paying attention to these trends and isn't changing their practices accordingly](https://x.com/ahall_research/status/2025282331997798585?s=20)). 또 AI에게 p-hacking을 시켜보는 등([AI is about to write thousands of papers. Will it p-hack them?](https://x.com/ahall_research/status/2024544040784720365?s=20)), 사회과학 연구 자동화를 꽤 공격적으로 실험하시는 편이라 “선두주자”에 가깝다고 느낍니다.

- Andy Hall 교수님이 “AI가 연구를 어떻게 바꿔 가는지”를 시연하는 쪽이라면, Sean Westwood 교수님은 논쟁에 불을 지핀 쪽에 가깝다고 생각합니다. 2026년 2월 23일(게시물 기준) “학술 논문은 죽은 포맷이다”라는 도발적인 트윗을 올리셨고([원문](https://x.com/seanjwestwood/status/2025711352921112651?s=20)), 당연히 반발도 크게 나왔습니다. 요지는 대략 “AI가 문헌고찰을 더 잘하고, AI가 (이미) 피어리뷰도 하고, 이용자는 AI 요약만 훑게 될 테니, 진짜 과학은 연구질문·사전분석계획·분석이고 30쪽짜리 논문은 포장지일 뿐”이라는 주장입니다.

### 반응들
- Melissa Perreault 교수는 “저 사람이 원하는 미래는 게으르고 소통 못 하고 비판적 사고도 없는 연구자들, 그리고 10배 더 많은 쓰레기 논문” 같은 취지로 강하게 비판했습니다([Perreault](https://x.com/Dr_Perreault/status/2026268605453681115?s=20)).
- Rex Douglass 박사는 “LLM으로 뭘 못 한다고 하는 학자들 얘기를 보면 결국 스킬 이슈다. 약한 모델로, 안내 없이, 이상한 요구를 한 번에(one-shot) 못 맞출 수는 있어도, 워크플로우 대부분은 지금도 자동화 가능하다”는 방향으로 반박했습니다([Douglass](https://x.com/RexDouglass/status/2025812734332580212?s=20)).
- Craig Gallagher 교수는 “LLM은 5분 전에 갖고 있던 원칙도 불만을 표하면 쉽게 버리는데, 그런 모델이 피어리뷰를 할 거라고 믿으라는 거냐”는 회의적 반응을 남겼습니다([Gallagher](https://x.com/CraigGaIIagher/status/2025947575627465002?s=20)).
- 정치이론가인 Matthew Cole 교수께서는 “양적 사회과학자들이 자기들도 쓰기 싫고 읽기 싫은 쓰레기를 찍어낸다는 걸 자백하는 방식”이라고 꼬집었습니다([Cole](https://x.com/mattbencole/status/2026357969114337785?s=20)).

### 제 생각
Westwood가 말을 세게 하긴 했지만, Rex 박사님 말처럼 적절한 데이터가 있고(그리고 사용자가 그걸 필터링할 역량이 있다면) 저서/논문 PDF를 기계가 읽을 수 있는 형태로 정리해둔다면 선행연구 파트는 상당 부분 자동화가 가능하다고 생각합니다. 논문을 대신할 수 있는 다른 방안을 고려할 필요가 있다는 데에 동의하는 편이라고 정리할 수 있을 것 같네요. 

결국 Kyle Saunders 교수님의 말씀처럼, AI가 교육을 망치는 게 아니라 대학이 얼마나 취약한 사고의 대리 지표에 기대 왔는지를 직면하게 만드는 측면이 있습니다([Saunders](https://kylesaunders.substack.com/p/why-higher-educations-ai-backlash?r=i13e)).

### 후속 논의와 한국 학계
Sean 교수는 이후에도(특히 블루스카이 쪽 반응을 의식했는지) 후속 트윗을 올렸습니다([후속 1](https://x.com/seanjwestwood/status/2026076268735742443?s=20), [후속 2](https://x.com/seanjwestwood/status/2026852781676528015?s=20)).

한국 학계에서는 대표적으로 디지털 인문학을 주로 하시는 유인태(Intae Ryu) 교수님([Ryu](https://x.com/desemboltura))과 인제대 의대의 안상진(Sangzin Ahn) 교수님([Ahn](https://x.com/mahler83))이 관련 논점을 비교적 선도적으로, 그리고 자주 언급하고 계시니 참고하시면 좋겠습니다.

### 마지막 메모
제가 발췌해온 미국 학계 사람들은 대부분 미국 TOP 20 대학 PhD를 마치셨을 테고 이 과정에서 우리같은 International 학생이나 PhD students의 의견을 수집하지 않았다는 점에서 저 역시 학계의 비정상적인 학벌중심주의에 기여하고 있다고 봐도 되겠지요.

---

# English 

### Academic Climate
This year, as Claude Code has gotten hot, it seems that more faculty in U.S. academia are finally starting to take the usefulness of AI seriously. Pedro H. C. Sant’Anna at Emory University has shared his own workflow ([Sant’Anna](https://psantanna.com/claude-code-my-workflow/)), and Chris Blattman at the University of Chicago Harris School has also been continuously sharing concrete use cases for automation ([Blattman](https://x.com/cblatts/status/2027018464670491065?s=20)). Blattman even retweets memes like this one ([“i just talk to chatgpt”](https://x.com/cblatts/status/2027134883898757458?s=20)), which makes it feel like he is consuming—and implicitly accepting—AI discourse fairly actively.

### Where My Interest Started
My interest in automating research with AI started during the 2026 fall admissions cycle, when I was writing my writing sample and SOP in LaTeX and working in VS Code. At the time, various AI CLIs were just entering the mainstream, and I remember that discussions were only beginning around questions like “how are we supposed to use this?” I was not very confident in English grammar, so I relied on Gemini or Grammarly but it was exhausting that a human still had to do the final pass by hand every time. Then, once I realized that simply typing something like gemini in the terminal and asking “please fix the grammar in this file” could make the model read a `.tex` file with hundreds of lines and apply corrections on its own. That experience pushed me to think that AI would not stop at grammar fixing: if the researcher provides a solid logical structure, it may be only a matter of time before an AI can draft substantial parts of a paper using machine-readable data and literature files.

### Public Precedents
There are also public precedents suggesting that AI-assisted paper production is not purely hypothetical. Joshua Gans discussed, in a case-based way, how AI could affect research production and incentives ([Gans](https://joshuagans.substack.com/p/what-will-ai-do-to-presearch)). Vincent Grégoire at HEC Montréal also published a “Vibe Research” retrospective on his website ([Grégoire](https://vincent.codes.finance/posts/vibe-research-paper/)). And frankly, I suspect there are already many papers that were accepted without disclosure. The expected benefit of disclosure is close to zero.

### The Core Debate: Hall & Westwood
Against this backdrop—where more faculty are actively incorporating AI into their workflows—I have been particularly drawn to the debate around literature reviews. It is difficult to identify a precise starting point, but in my view, two central figures in the current debate are Andy Hall (Stanford) and Sean Westwood (Dartmouth).

- Andy Hall has shared posts that present “proof” that Claude Code can write an entire empirical political science paper ([Here’s proof that Claude Code can write an entire empirical polisci paper](https://x.com/ahall_research/status/2007603340939800664?s=20)). He has also argued that empirical social scientists should be paying attention and changing their practices accordingly ([I’m baffled by any empirical social scientist who isn’t paying attention…](https://x.com/ahall_research/status/2025282331997798585?s=20)). In addition, he has shared experiments such as having AI engage in p-hacking ([AI is about to write thousands of papers. Will it p-hack them?](https://x.com/ahall_research/status/2024544040784720365?s=20)). Overall, he comes across as someone aggressively experimenting at the frontier of research automation in the social sciences.

- Westwood is, in my view, closer to the person who lit the fire of controversy. On February 23, 2026 (based on the post), he published a provocative tweet claiming that “the academic paper is a dead format,” that AI does literature reviews better, that AI will do (or is doing) peer review, and that users will mainly skim AI summaries ([original](https://x.com/seanjwestwood/status/2025711352921112651?s=20)). In that framing, “real science” is the question, the pre-analysis plan, and the analysis itself, while the 30-page paper is merely packaging.

### Reactions
- Melissa Perreault criticized him sharply, arguing that this future amounts to lazy researchers who cannot communicate and lack critical thinking, alongside a surge in low-quality papers ([Perreault](https://x.com/Dr_Perreault/status/2026268605453681115?s=20)).
- Rex Douglass pushed back in the opposite direction, suggesting that many complaints reflect a skill issue, and that most of the workflow is already automatable if the user provides guidance and uses capable models ([Douglass](https://x.com/RexDouglass/status/2025812734332580212?s=20)).
- Craig Gallagher expressed skepticism, noting how easily LLMs can be talked out of positions they held minutes earlier, and questioning whether they could credibly do peer review ([Gallagher](https://x.com/CraigGaIIagher/status/2025947575627465002?s=20)).
- Matthew Cole, from a political theory perspective, mocked the claim as an implicit admission that quantitative social scientists churn out work they themselves do not want to write or read ([Cole](https://x.com/mattbencole/status/2026357969114337785?s=20)).

### My View
My take is this: Westwood’s language is certainly strong, but I think Douglass is right in the narrower sense that, given appropriate data and a user who can filter outputs competently, the literature review “production layer” can be substantially automated. If researchers preprocess books and PDFs into machine-readable forms, then an agent can iteratively extract citations, cluster themes, and draft structured summaries. In that sense, I am sympathetic to the idea that we may need to consider alternatives to the conventional paper format—at least in how knowledge is packaged and consumed. Ultimately, as Kyle Saunders argues, AI is not “killing” education so much as forcing universities to confront how much authority rests on fragile proxies for thinking ([Saunders](https://kylesaunders.substack.com/p/why-higher-educations-ai-backlash?r=i13e)).

### Follow-ups and Korean Context
Westwood also posted follow-ups later—possibly in response to criticism, including criticism from different platform audiences ([follow-up 1](https://x.com/seanjwestwood/status/2026076268735742443?s=20), [follow-up 2](https://x.com/seanjwestwood/status/2026852781676528015?s=20)).

In Korea, you can find that Intae Ryu and Sangzin Ahn (Inje University College of Medicine) have been relatively proactive and frequent in commenting on related themes ([Ryu](https://x.com/desemboltura), [Ahn](https://x.com/mahler83)).

### Final Note
One last self-reflection: most of the U.S.-based academics I quoted here likely finished PhDs at top-20 U.S. programs, and I am not exactly collecting the opinions of international applicants or current PhD students like us. In that sense, it is fair to say that I am also contributing—at least indirectly—to academia’s unhealthy credentialism.
