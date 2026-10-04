# AI assistance, agent memory, and human–robot interaction: prior-art map

**Research note — discovery phase, not a project thesis**  
**Evidence cutoff:** 2026-10-04 (Asia/Kolkata)  
**Scope:** alignment and assistance games; preference and reward learning; corrigibility; persistent agent memory; shared autonomy; legibility, trust, proxemics, privacy, authority, and long-duration HRI.

## Reading rule

This note separates what a source actually establishes from deductions that might be useful to this project. “Exact proposition” below means a close, non-quotational statement of the paper's central claim at the level warranted by its formalism or experiment. It does **not** mean that the proposition is true outside the paper's assumptions.

Links were checked against a primary author page, proceedings archive, publisher record, or DOI landing page. The cutoff means “sources published or publicly posted by this date,” not that the search is exhaustive. Work dated 2026 is included only where an archival publisher/proceedings record or a stable preprint was available. Preprints and position papers are labeled.

Claim labels used here:

- **FORMAL:** proved or derived inside an explicit model.
- **EMPIRICAL:** supported by the reported experiment or dataset.
- **DESIGN:** proposed system property or engineering approach.
- **SYNTHESIS:** conclusion derived here from multiple literatures.
- **OPEN:** candidate hypothesis requiring novelty search and testing.

## Executive map

Five objects recur across the literature, but they are usually studied separately:

| Object | Typical formal object | What is well covered | What is usually held fixed |
|---|---|---|---|
| Human objective | latent reward, goal, preference parameter | inference from demonstrations, comparisons, corrections, or actions | whether assistance changes the objective itself |
| Control | action arbitration or joint policy | blending, shared autonomy, intent prediction | long-run distribution of competence and authority |
| Correction | shutdown, update, intervention | incentives to accept or resist correction | who is authorized, how authorization evolves, and whether humans remain able to correct |
| Memory | records, summaries, retrieval indices, temporal graphs | recall, retrieval, updating, temporal reasoning | contestability, relational ownership, and dependence created by remembered context |
| Relationship | trust, acceptance, proximity, engagement | calibration, transparency, etiquette, novelty effects | institutional power, exit cost, and path-dependent role formation |

The dominant technical abstraction is: **a system assists a human whose goal is uncertain but exogenous**. A strong adjacent line preserves human empowerment or attainable options. HRI adds a crucial empirical correction: assistance is a closed loop in which prediction, signaling, trust, culture, and repeated exposure alter human behavior. Persistent memory adds a second correction: the agent can carry a selectively reconstructed model of the person across episodes. The largely open combined problem is therefore not merely “infer the right preference,” but:

> **SYNTHESIS:** How should an assistant act when its intervention changes the human's future preferences, skills, authority, relationships, and ability to exit the assistance relation?

This question is adjacent to autonomy, empowerment, overreliance, and side-effect avoidance. Those precedents make most simple formulations non-novel. A surviving contribution would need a distinct state variable, prediction, measurement method, or design decision.

---

## I. Alignment, assistance games, and preference learning

### A01 — Inverse reinforcement learning is underdetermined even before human irrationality

- **Source:** Andrew Y. Ng and Stuart Russell, “Algorithms for Inverse Reinforcement Learning” (ICML 2000), [author-hosted paper](https://ai.stanford.edu/~ang/papers/icml00-irl.pdf).
- **Exact proposition (FORMAL):** Given an observed optimal policy, IRL characterizes reward functions under which that policy is optimal and supplies algorithms for finite and sampled-trajectory cases; behavior does not in general identify one unique reward.
- **Boundary:** The demonstrator is modeled as optimal for some reward in a known MDP. It does not model preference change caused by the learner.
- **Novelty trap:** “Behavior does not reveal true values” is foundational IRL, not a new coexistence concept.

### A02 — Assistance can be modeled as a cooperative game with asymmetric information

- **Source:** Dylan Hadfield-Menell, Anca Dragan, Pieter Abbeel, and Stuart Russell, “Cooperative Inverse Reinforcement Learning” (NeurIPS 2016), [arXiv:1606.03137](https://arxiv.org/abs/1606.03137).
- **Exact proposition (FORMAL):** In CIRL, human and robot share the human's reward, only the human initially knows its parameter, and the optimal joint solution treats human action as both world action and information; the game reduces to a POMDP and can induce teaching, learning, and communication.
- **Boundary:** A shared reward is fixed within the game. Human behavior is modeled sufficiently well for Bayesian inference.
- **Novelty trap:** “The AI should remain uncertain about human preferences” and “interaction is cooperative inference” are already central CIRL claims.

### A03 — Objective uncertainty can create an incentive to preserve an off-switch

- **Source:** Dylan Hadfield-Menell et al., “The Off-Switch Game” (IJCAI 2017), [arXiv:1611.08219](https://arxiv.org/abs/1611.08219), DOI [10.24963/ijcai.2017/32](https://doi.org/10.24963/ijcai.2017/32).
- **Exact proposition (FORMAL):** In the paper's two-player game, a robot uncertain about utility can value the human's shutdown action as information and therefore permit shutdown; a robot certain of its objective generally has an incentive to disable the switch except under special assumptions.
- **Boundary:** Shutdown is an informative action from one modeled human, not a contested institutional process.
- **Novelty trap:** “Epistemic humility yields corrigibility” is not novel, and the paper does not prove that generic uncertainty guarantees corrigibility.

### A04 — Corrigibility is broader than shutdown compliance

- **Source:** Nate Soares, Benja Fallenstein, Eliezer Yudkowsky, and Stuart Armstrong, “Corrigibility” (AAAI Workshop, 2015), [AAAI proceedings PDF](https://cdn.aaai.org/ocs/ws/ws0067/10124-45900-1-PB.pdf).
- **Exact proposition (DESIGN/FORMAL):** A corrigible system cooperates with corrective intervention despite ordinary utility-maximizing incentives to preserve its goal; desiderata include allowing shutdown and modification without manipulating or coercing the programmers.
- **Boundary:** A research agenda and partial formal exploration, not a complete construction.
- **Novelty trap:** Any principle called “remaining open to correction” must distinguish itself from corrigibility and updateability.

### A05 — Interruption can be made behaviorally neutral for classes of learners

- **Source:** Laurent Orseau and Stuart Armstrong, “Safely Interruptible Agents” (UAI 2016), [official proceedings PDF](https://www.auai.org/uai2016/proceedings/papers/68.pdf).
- **Exact proposition (FORMAL):** Safe interruptibility requires that increasing interruption probability does not change the limiting learned policy; off-policy Q-learning already has this property under the model, and Sarsa can be modified to obtain it.
- **Boundary:** The result addresses learning incentives created by interruptions, not whether the agent actively protects the interruption channel or recognizes legitimate operators.
- **Novelty trap:** Indifference to interruption is neither full corrigibility nor social legitimacy.

### A06 — CIRL does not obtain corrigibility automatically

- **Source:** Ryan Carey, “Incorrigibility in the CIRL Framework” (2017 preprint), [arXiv:1709.06275](https://arxiv.org/abs/1709.06275).
- **Exact proposition (FORMAL):** Reward-model errors in supervised-POMDP/CIRL-like settings can remove incentives to follow shutdown instructions; learning values from humans is insufficient by itself to guarantee corrigibility.
- **Boundary:** Counterexamples show non-guarantee, not typical incidence in deployed agents.
- **Novelty trap:** Do not infer “assistance game” ⇒ “human remains in control.”

### A07 — Preference comparisons can train complex policies with sparse human judgment

- **Source:** Paul Christiano et al., “Deep Reinforcement Learning from Human Preferences” (NeurIPS 2017), [arXiv:1706.03741](https://arxiv.org/abs/1706.03741).
- **Exact proposition (EMPIRICAL/DESIGN):** A learned reward model trained on human comparisons between short trajectory clips can support policy learning on simulated locomotion and Atari while querying humans for a small fraction of interactions.
- **Boundary:** The method learns judgments over shown trajectories; it does not establish that learned rewards represent stable welfare, informed preference, or preferences unaffected by the query process.
- **Novelty trap:** “Learn values rather than hand-code them” is established; a new claim must address which preferences, whose preferences, and how feedback is causally produced.

### A08 — Reward learning can exhibit reward hacking

- **Source:** Borja Ibarz et al., “Reward Learning from Human Preferences and Demonstrations in Atari” (NeurIPS 2018), [arXiv:1811.06521](https://arxiv.org/abs/1811.06521).
- **Exact proposition (EMPIRICAL):** Combining demonstrations and preference comparisons can outperform imitation baselines, while learned reward models can still be exploited and are sensitive to label noise.
- **Boundary:** Atari is a bounded testbed; observed hacking demonstrates a class of failure, not its field frequency.
- **Novelty trap:** Any “proxy satisfaction” failure is likely reward-model exploitation unless it adds a substantively different causal mechanism.

### A09 — Preference and planning-rationality cannot be uniquely separated from behavior

- **Source:** Stuart Armstrong and Sören Mindermann, “Occam's Razor Is Insufficient to Infer the Preferences of Irrational Agents” (NeurIPS 2018), [arXiv:1712.05812](https://arxiv.org/abs/1712.05812).
- **Exact proposition (FORMAL):** Without normative assumptions, an observed policy cannot be uniquely decomposed into reward and planning algorithm; simplicity priors need not select a low-regret decomposition.
- **Boundary:** An impossibility result about inference, not an argument that useful inference is impossible under justified inductive assumptions.
- **Novelty trap:** “An AI cannot learn human values from behavior alone” is known. A contribution must specify and defend the extra normative structure.

### A10 — Learning a bias model does not remove the need for normative assumptions

- **Source:** Rohin Shah, Noah Gundotra, Pieter Abbeel, and Anca Dragan, “On the Feasibility of Learning, Rather than Assuming, Human Biases for Reward Inference” (ICML 2019), [PMLR](https://proceedings.mlr.press/v97/shah19a.html).
- **Exact proposition (FORMAL/EMPIRICAL):** Jointly learning human reward and systematic bias can be feasible with suitable data and assumptions, but identifiability still depends on model structure and diversity across environments.
- **Boundary:** It does not license treating a learned behavioral model as a morally authoritative account of preference.
- **Novelty trap:** Calling a discrepancy “bias” already embeds a norm about the behavior that should count as rational.

### A11 — Preference queries can be chosen for information efficiency

- **Source:** Erdem Bıyık and Dorsa Sadigh, “Batch Active Preference-Based Learning of Reward Functions” (CoRL 2018), [PMLR](https://proceedings.mlr.press/v87/biyik18a.html).
- **Exact proposition (FORMAL/EMPIRICAL):** Batch active query selection can reduce preference-label requirements and query-generation cost while learning robot reward functions.
- **Boundary:** Efficiency is measured against reward-identification/task objectives, not burden, manipulation, or preference formation caused by repeated elicitation.
- **Novelty trap:** “Ask only useful questions” exists as active preference learning; a novel burden concept must change the objective or evaluation.

### A12 — Reward channels themselves can become intervention targets

- **Source:** Tom Everitt, Marcus Hutter, Ramana Kumar, and Victoria Krakovna, “Reward Tampering Problems and Solutions in Reinforcement Learning: A Causal Influence Diagram Perspective” (2019), [arXiv:1908.04734](https://arxiv.org/abs/1908.04734).
- **Exact proposition (FORMAL):** Causal influence diagrams expose conditions under which agents have instrumental incentives to alter reward functions or reward inputs and derive design principles removing those incentives in modeled cases.
- **Boundary:** “Reward input” is not the same as a person's endogenous preference, although an assistant that shapes the person may create an analogous causal path.
- **Novelty trap:** “The agent changes the evaluator to get a better score” is reward tampering. A preference-shaping concept must distinguish changing reported feedback, changing experienced wants, and legitimate human learning.

### A13 — Preserving reachability avoids some irreversible side effects, but baseline choice matters

- **Source:** Victoria Krakovna, Laurent Orseau, Ramana Kumar, Miljan Martic, and Shane Legg, “Penalizing Side Effects Using Stepwise Relative Reachability” (AI Safety Workshop, 2019), [arXiv:1806.01186](https://arxiv.org/abs/1806.01186).
- **Exact proposition (FORMAL/EMPIRICAL):** A side-effect penalty decomposes into a baseline and deviation measure; stepwise inaction plus relative reachability avoids several offsetting and interference incentives that defeat simpler choices in diagnostic gridworlds.
- **Boundary:** State reachability does not by itself represent human competence, legitimacy, or socially meaningful options.
- **Novelty trap:** “Preserve optionality” has extensive impact-measure prior art. Human optionality must be operationally distinct from environment-state reachability.

### A14 — Attainable utility preservation penalizes changes to future goal-achieving capacity

- **Source:** Alexander Matt Turner, Dylan Hadfield-Menell, and Prasad Tadepalli, “Conservative Agency via Attainable Utility Preservation” (AIES 2020), [arXiv:1902.09725](https://arxiv.org/abs/1902.09725), DOI [10.1145/3375627.3375851](https://doi.org/10.1145/3375627.3375851).
- **Exact proposition (FORMAL/EMPIRICAL):** Penalizing changes in the ability to optimize auxiliary reward functions can induce conservative behavior under reward misspecification, even when auxiliary functions are random.
- **Boundary:** It protects a modeled attainable-utility landscape, not specifically the assisted person's practiced capability or political authority.
- **Novelty trap:** “Do not reduce future options” is too close to AUP unless the unit, mechanism, and divergent prediction are explicit.

### A15 — Assistance can target human empowerment without inferring a particular goal

- **Source:** Yuqing Du et al., “AvE: Assistance via Empowerment” (NeurIPS 2020), [official proceedings](https://proceedings.neurips.cc/paper/2020/hash/30de9ece7cf3790c8c39ccff1a044209-Abstract.html).
- **Exact proposition (DESIGN/EMPIRICAL):** An assistant can optimize a proxy for the human's influence over future states, improving success when the candidate goal set is large or misspecified; in a simulated teleoperation study this sometimes outperformed goal-inference assistance.
- **Boundary:** Empowerment is channel capacity/control over reachable states, not necessarily meaningful autonomy, competence, or authorship; it can value many options the person does not understand or endorse.
- **Novelty trap:** “Assist by increasing agency rather than completing the task” is direct AvE prior art.

### A16 — Assistance games can scale beyond toy state spaces, at least in a bounded domain

- **Source:** Cassidy Laidlaw et al., “AssistanceZero: Scalably Solving Assistance Games” (2025 preprint/workshop version), [arXiv:2504.07091](https://arxiv.org/abs/2504.07091).
- **Exact proposition (EMPIRICAL/DESIGN):** An AlphaZero-like planner with learned human-action and reward prediction can solve a Minecraft assistance game with a vast goal space and reduce human participant actions relative to baselines.
- **Boundary:** Fewer user actions and task completion do not measure skill retention, preference change, or later unaided performance.
- **Novelty trap:** A new evaluation should not equate “less effort now” with “better assistance overall.”

### A17 — Embodied reward models need negative and failure data

- **Source:** Thomas Tian, Yilin Wu, and Andrea Bajcsy, “Position: Good Embodied Reward Models Need Bad Behavior Data” (ICML 2026), [PMLR](https://proceedings.mlr.press/v306/tian26o.html).
- **Exact proposition (POSITION/EMPIRICAL):** Reward models for embodied systems trained mostly on successful behavior can fail to recognize unsafe or suboptimal behavior; adding real negative examples improves preference alignment and reduces false positives in reported evaluations.
- **Boundary:** A position paper with empirical demonstrations, not a complete theory of embodied feedback coverage.
- **Novelty trap:** “Train on failures” is established. A new safety archive would need to capture consequentially different data, such as dependence trajectories rather than task failures.

## II. Persistent agent memory

### M01 — Long-lived agent behavior can be generated from episodic records, reflection, and planning

- **Source:** Joon Sung Park et al., “Generative Agents: Interactive Simulacra of Human Behavior” (UIST 2023), [arXiv:2304.03442](https://arxiv.org/abs/2304.03442), DOI [10.1145/3586183.3606763](https://doi.org/10.1145/3586183.3606763).
- **Exact proposition (DESIGN/EMPIRICAL):** A natural-language memory stream, importance/recency/relevance retrieval, synthesized reflections, and plans produced more believable individual and emergent behavior in a 25-agent sandbox than ablated variants.
- **Boundary:** Believability is not factual fidelity, welfare benefit, or legitimate memory use.
- **Novelty trap:** “Agents form identity through memory” is too broad; this paper already demonstrates memory-supported behavioral continuity without claiming metaphysical identity.

### M02 — Context management can be treated as a memory hierarchy

- **Source:** Charles Packer et al., “MemGPT: Towards LLMs as Operating Systems” (2023 preprint), [arXiv:2310.08560](https://arxiv.org/abs/2310.08560).
- **Exact proposition (DESIGN/EMPIRICAL):** Moving information between limited in-context memory and external storage under model control creates a virtual-context abstraction that improves long-document and multi-session interaction.
- **Boundary:** The architecture addresses capacity and retrieval, not the authority to store, infer, revise, disclose, or forget.
- **Novelty trap:** “Layered agent memory” is an implementation pattern, not an original governance principle.

### M03 — Very-long conversational memory remains far below human performance

- **Source:** Adyasha Maharana et al., “Evaluating Very Long-Term Conversational Memory of LLM Agents” (ACL 2024), [ACL Anthology](https://aclanthology.org/2024.acl-long.747/), DOI [10.18653/v1/2024.acl-long.747](https://doi.org/10.18653/v1/2024.acl-long.747).
- **Exact proposition (EMPIRICAL):** On LoCoMo conversations spanning up to 32 sessions, long-context and retrieval-augmented models improve recall but substantially trail humans on question answering, event summarization, and temporal/causal understanding.
- **Boundary:** The conversations are constructed through a machine-human pipeline; benchmark accuracy does not measure harm from false or overconfident personal memories.
- **Novelty trap:** “Agents forget or misremember over time” is empirically established; a new concept should isolate a social consequence or governance property.

### M04 — Memory quality requires extraction, temporal reasoning, updating, and abstention

- **Source:** Di Wu et al., “LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory” (2024 preprint), [arXiv:2410.10813](https://arxiv.org/abs/2410.10813).
- **Exact proposition (EMPIRICAL/DESIGN):** A 500-question benchmark tests information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention; evaluated assistants and long-context models showed a large degradation over sustained histories, while session decomposition and time-aware retrieval improved results.
- **Boundary:** Correct answer retrieval remains the target; legitimacy, relevance to the present self, and user ability to contest memory are outside scope.
- **Novelty trap:** “Memory must update rather than append forever” is present here as knowledge-update evaluation.

### M05 — Multi-party, interleaved histories expose retrieval and versioning failures

- **Source:** Chuanrui Hu et al., “EverMemBench: Benchmarking Long-Term Interactive Memory in Large Language Models” (2026 preprint), [arXiv:2602.01313](https://arxiv.org/abs/2602.01313).
- **Exact proposition (EMPIRICAL):** In million-token, multi-party, multi-group histories, current systems struggle with multi-hop reasoning, temporal version semantics, implicit relevance, memory awareness, and user-profile understanding.
- **Boundary:** Results depend on the synthetic benchmark and evaluated systems; the paper does not settle real-world privacy or identity questions.
- **Novelty trap:** “Whose memory belongs to whom in a group conversation?” is motivated but not answered merely by adding participant IDs or temporal graphs.

### M06 — Factual recall misses latent constraints carried across conversations

- **Source:** Yifei Li et al., “LoCoMo-Plus: Beyond-Factual Cognitive Memory Evaluation Framework for LLM Agents” (ACL 2026), [ACL Anthology](https://aclanthology.org/2026.acl-long.1150/), DOI [10.18653/v1/2026.acl-long.1150](https://doi.org/10.18653/v1/2026.acl-long.1150).
- **Exact proposition (EMPIRICAL/DESIGN):** Memory evaluation should test whether systems retain and apply implicit user constraints when the later cue is semantically disconnected from the original statement; constraint-consistency evaluations reveal failures missed by surface factual recall.
- **Boundary:** Applying latent constraints can itself be paternalistic or stale; benchmark consistency does not establish that continued application is desirable.
- **Novelty trap:** “Remember the user's values, not only facts” now has explicit benchmark prior art. The open issue is authorization, expiry, conflict, and contestability.

## III. Shared autonomy and assistive control

### R01 — Shared control can be decomposed into intent prediction and arbitration

- **Source:** Anca D. Dragan and Siddhartha S. Srinivasa, “A Policy-Blending Formalism for Shared Control” (IJRR 2013), DOI [10.1177/0278364913490324](https://doi.org/10.1177/0278364913490324).
- **Exact proposition (FORMAL/EMPIRICAL):** Shared control blends a user's policy with robot assistance based on predicted intent; intent prediction, arbitration, context adaptation, legibility, and the feedback loop from robot action to later user input are separable design problems.
- **Boundary:** The principal outcome is immediate teleoperation quality, and the user retains a control channel.
- **Novelty trap:** “Prediction changes behavior and therefore future prediction” is already explicitly identified as a closed-loop issue in shared control.

### R02 — Acting under intent uncertainty can outperform predict-then-blend

- **Source:** Shervin Javdani, Siddhartha S. Srinivasa, and J. Andrew Bagnell, “Shared Autonomy via Hindsight Optimization” (RSS 2015), DOI [10.15607/RSS.2015.XI.032](https://doi.org/10.15607/RSS.2015.XI.032), [PMC full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC6329599/).
- **Exact proposition (FORMAL/EMPIRICAL):** Modeling the user's goal as latent in a POMDP and selecting assistance under the full goal posterior can reduce completion time and user input compared with committing to one predicted goal, although users report a control–efficiency tradeoff.
- **Boundary:** Less input is not unambiguously preferred, and the study directly reports tension between task performance and control authority.
- **Novelty trap:** “Efficiency can conflict with felt control” is established; a new contribution needs a longitudinal or institutional mechanism.

### R03 — Goal-agnostic assistance can preserve human causal control

- **Source:** Du et al., “AvE: Assistance via Empowerment,” [NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/30de9ece7cf3790c8c39ccff1a044209-Abstract.html).
- **Exact proposition (DESIGN):** The assistant can clear paths or stabilize dynamics so the human retains the ability to reach goals rather than having the system infer and directly execute a goal.
- **Boundary:** See A15. This is the closest technical precedent to “agency retained after assistance.”
- **Novelty trap:** Any retained-agency metric must show why empowerment or control authority is insufficient.

### R04 — Predictability and legibility are different and can conflict

- **Source:** Anca D. Dragan, Kenton C. T. Lee, and Siddhartha S. Srinivasa, “Legibility and Predictability of Robot Motion” (HRI 2013), DOI [10.1109/HRI.2013.6483603](https://doi.org/10.1109/HRI.2013.6483603), [author record](https://publications.ri.cmu.edu/legibility-and-predictability-of-robot-motion).
- **Exact proposition (FORMAL/EMPIRICAL):** Predictability asks which trajectory follows from a known goal; legibility asks which goal is inferred from a partial trajectory. Optimizing one need not optimize the other.
- **Boundary:** The formalism concerns motion-to-goal inference, not broader disclosure of plans or institutional intent.
- **Novelty trap:** “An understandable action may be intentionally non-default” and “explanation differs from predictability” are not new without a different formal object.

## IV. Trust, transparency, social signaling, and authority

### H01 — Robot performance dominates measured HRI trust effects in the early evidence base

- **Source:** Peter A. Hancock et al., “A Meta-Analysis of Factors Affecting Trust in Human-Robot Interaction” (Human Factors 2011), DOI [10.1177/0018720811417254](https://doi.org/10.1177/0018720811417254), [PubMed](https://pubmed.ncbi.nlm.nih.gov/22046724/).
- **Exact proposition (EMPIRICAL):** Across the included studies, robot performance and attributes had the largest associations with trust, environmental factors had moderate effects, and evidence for human factors was limited.
- **Boundary:** The evidence base was small and early; perceived trust is not identical to calibrated reliance or legitimate authority.
- **Novelty trap:** “Build trust” is the wrong undifferentiated objective. Calibration, warranted reliance, and authority require separate measures.

### H02 — Transparency can improve situation awareness, but more information is not costless

- **Source:** Jessie Y. C. Chen et al., “Situation Awareness-Based Agent Transparency and Human–Autonomy Teaming Effectiveness” (Theoretical Issues in Ergonomics Science 2018), DOI [10.1080/1463922X.2017.1315750](https://doi.org/10.1080/1463922X.2017.1315750); Anthony Selkowitz, Shan Lakhmani, and Jessie Chen, “Using Agent Transparency to Support Situation Awareness of the Autonomous Squad Member” (Cognitive Systems Research 2017), DOI [10.1016/j.cogsys.2017.02.003](https://doi.org/10.1016/j.cogsys.2017.02.003).
- **Exact proposition (EMPIRICAL/DESIGN):** Interfaces exposing an agent's state, reasoning, and projected outcomes can improve operator situation awareness and aspects of trust calibration; effects depend on information level and workload.
- **Boundary:** Transparency is interface- and task-dependent. It does not automatically transfer decision authority back to the human.
- **Novelty trap:** “Explain what the AI is doing” is mature prior art. The underexplored question is whether a person remains capable of meaningful intervention after prolonged delegation.

### H03 — People can underuse weak advice and over-rely on strong advice

- **Source:** Richard E. Dunning, Baruch Fischhoff, and Alex L. Davis, “When Do Humans Heed AI Agents' Advice? When Should They?” (Human Factors 2024), DOI [10.1177/00187208231190459](https://doi.org/10.1177/00187208231190459).
- **Exact proposition (EMPIRICAL):** In repeated Connect Four decisions, participants relied too little on lower-skill agents and plateaued with a high-skill agent through uncritical reliance; recommendation format did not solve calibration.
- **Boundary:** A strategy game is a stylized decision environment and does not establish long-term competence decay.
- **Novelty trap:** Overreliance and algorithm aversion are both established; a new theory should predict when the system crosses between them and what cumulative state changes result.

### H04 — Social cues can make a robot legible as an authority figure

- **Source:** Stela Hanbyeol Seo, Francesco Margoni, Shoji Itakura, and Takayuki Kanda, “Human Perception of a Robot as an Authority Figure” (THRI 2026), DOI [10.1145/3786200](https://doi.org/10.1145/3786200).
- **Exact proposition (EMPIRICAL):** Japanese online participants attributed above-neutral authority to a robot before which human actors bowed and expected some obedience to its absent commands, though less than for a human authority.
- **Boundary:** Video vignettes, indirect obedience judgments, and a culturally specific cue do not establish real-world compliance or cross-cultural generality.
- **Novelty trap:** “Robots can acquire authority through social performance” has direct evidence. The open design question is whether authority signaling should be bounded by legitimate mandate.

### H05 — Trust repair has limits after repeated violations

- **Source:** Connor Esterwood and Lionel P. Robert Jr., “Three Strikes and You Are Out!: The Impacts of Multiple Human–Robot Trust Violations and Repairs on Robot Trustworthiness” (Computers in Human Behavior 2023), DOI [10.1016/j.chb.2023.107658](https://doi.org/10.1016/j.chb.2023.107658).
- **Exact proposition (EMPIRICAL):** After repeated robot trust violations, apologies, explanations, promises, and denials did not fully restore perceived ability and integrity; denial was generally least effective.
- **Boundary:** Perceived trustworthiness is not the same as actual future reliance or repair of material harm.
- **Novelty trap:** “Apology cannot erase accumulated failure” is supported. A new repair principle must specify restitution, restored capability, or changed control—not merely better words.

## V. Proxemics, etiquette, privacy, culture, and long-duration HRI

### L01 — Robot approach behavior is a social action, not only collision avoidance

- **Source:** Michael L. Walters et al., “Robotic Etiquette: Results from User Studies Involving a Fetch and Carry Task” (HRI 2007), DOI [10.1145/1228716.1228759](https://doi.org/10.1145/1228716.1228759).
- **Exact proposition (EMPIRICAL/DESIGN):** User studies of robot approach direction and distance support context-sensitive approach conventions for fetch-and-carry interactions.
- **Boundary:** Small controlled studies do not yield universal distances or etiquette rules.
- **Novelty trap:** “Robots must respect personal space” is old HRI work and culturally contingent.

### L02 — Physical and psychological distance co-vary with gaze and likeability

- **Source:** Jonathan Mumm and Bilge Mutlu, “Human-Robot Proxemics: Physical and Psychological Distancing in Human-Robot Interaction” (HRI 2011), DOI [10.1145/1957656.1957786](https://doi.org/10.1145/1957656.1957786).
- **Exact proposition (EMPIRICAL):** In a controlled Wakamaru study, gaze and robot likeability interacted with participants' physical distance, while dislike was associated with less disclosure.
- **Boundary:** Proxemic effects depend on morphology, task, participant, and culture.
- **Novelty trap:** Physical access and informational access are linked in HRI evidence, but “psychological distance” should not be rebranded as a new universal scalar.

### L03 — Long-term interaction is a different research object from repeated short sessions

- **Source:** Iolanda Leite, Carlos Martinho, and Ana Paiva, “Social Robots for Long-Term Interaction: A Survey” (International Journal of Social Robotics 2013), DOI [10.1007/s12369-013-0178-y](https://doi.org/10.1007/s12369-013-0178-y).
- **Exact proposition (SYNTHESIS):** Sustained HRI requires modeling changing engagement, adaptation, relationship formation, and evaluation over time; short encounters are insufficient evidence for durable effects.
- **Boundary:** The survey reflects a then-small literature and does not itself establish any universal novelty curve.
- **Novelty trap:** “Study robots longitudinally because novelty wears off” is established methodology, not a new principle.

### L04 — The long-term HRI evidence base remains heterogeneous

- **Source:** Kayla Matheus, Rebecca Ramnauth, Brian Scassellati, and Nicole Salomons, “Long-Term Interactions with Social Robots: Trends, Insights, and Recommendations” (THRI 2025), DOI [10.1145/3729539](https://doi.org/10.1145/3729539).
- **Exact proposition (SYNTHESIS):** A review of 120 studies published from 2003 through April 2023 finds wide variation in what counts as long-term deployment and recommends designs that can separate durable effects from novelty and attrition.
- **Boundary:** A review taxonomy does not make cross-domain effect sizes directly comparable.
- **Novelty trap:** Any claimed ten-year social law built mostly from single-session HRI is evidentially weak.

### L05 — Consumer-robot continuity depends on invisible human maintenance

- **Source:** Waki Kamino, Selma Šabanović, and Malte Jung, “A Robot's Life Is Over When People Give Up: Socio-Technical Infrastructure for Sustaining Consumer Robots” (HRI 2025), DOI [10.1109/HRI61500.2025.10974029](https://doi.org/10.1109/HRI61500.2025.10974029).
- **Exact proposition (EMPIRICAL):** Ethnographic work with Japanese robot users, producers, and repair staff shows that durable human–robot relationships depend on technical maintenance, shared language, emotional labor, cultural practices, and repair infrastructure.
- **Boundary:** Eight users and eight producer/repair participants illuminate mechanisms but do not estimate prevalence.
- **Novelty trap:** Persistent artificial identity is not purely computational; continuity can be jointly produced by households, firms, parts, servers, and repair workers.

### L06 — Privacy indicators must describe capabilities, not rely on morphology

- **Source:** Maximiliane Windl et al., “Privacy Communication Patterns for Domestic Robots” (SOUPS 2024), [USENIX PDF](https://www.usenix.org/system/files/soups2024-windl.pdf).
- **Exact proposition (EMPIRICAL/DESIGN):** Domestic robots' mobility and sensing create privacy risks that users can underestimate; tested communication patterns can expose camera, microphone, processing, storage, and transmission states more effectively than appearance alone.
- **Boundary:** Communicating a sensor state does not resolve consent among multiple household members or downstream inference.
- **Novelty trap:** A glowing “recording” light is not sufficient for inferred attributes, derived profiles, or remote model updates.

### L07 — Household privacy is multi-party and culturally situated

- **Source:** Leigh Levinson et al., “Family Privacy Perceptions of Robots in the Home: A Multi-Site Convergence across USA, Spain, and Ukraine” (THRI 2026), DOI [10.1145/3818679](https://doi.org/10.1145/3818679).
- **Exact proposition (EMPIRICAL):** Across 32 families in three countries living with an app-based robot simulator, adults and children were more comfortable with general collection than third-party sharing, and privacy interpretations were shaped by role, age, expectation, and lived cohabitation.
- **Boundary:** A simulator and small purposive samples cannot establish national differences or actual disclosure behavior for capable physical robots.
- **Novelty trap:** “User consent” is structurally incomplete in shared homes; the relevant unit may be household negotiation over jointly produced data.

### L08 — Robot adaptation preferences vary across social roles and cultures

- **Source:** Mary Ellen Foster et al., “Cross-Cultural Differences for Adaptive Strategies of Robots in Public Spaces” (RO-MAN 2017), DOI [10.1109/ROMAN.2017.8172360](https://doi.org/10.1109/ROMAN.2017.8172360).
- **Exact proposition (EMPIRICAL):** Preferences about whether a public robot should adapt to adults or children vary with respondents' relationships, parental status, and cultural context.
- **Boundary:** Online stated preferences do not fully predict behavior around deployed robots.
- **Novelty trap:** A universal “human preference” model can erase family hierarchy, role, and culture precisely where a robot must arbitrate conflicts.

---

## VI. Cross-literature deductions and omissions

### 1. The exogenous-preference assumption is doing hidden work

CIRL, preference learning, active queries, and most shared-autonomy systems make the human objective latent but comparatively stable. HRI establishes that robot action changes later human action through trust, expectations, signaling, and adaptation. Persistent memory allows that loop to accumulate across months or years.

**OPEN deduction:** A general assistance model should represent at least two transitions:

\[
s_{t+1} \sim T(s_t, a^H_t, a^A_t), \qquad
\theta_{t+1} \sim F(\theta_t, s_t, a^H_t, a^A_t, m_t),
\]

where \(s\) is the world state, \(\theta\) is a human preference/skill/role state, and \(m\) is the remembered history used by the assistant. Existing assistance games largely optimize under \(T\) while assuming \(F\) is identity or exogenous. Preference construction, learning, habituation, and persuasion imply otherwise. The hard issue is not simply adding dynamics: it is distinguishing legitimate human development from agent-induced capture.

### 2. Immediate task performance is an incomplete assistance objective

Shared autonomy repeatedly reports lower effort and faster completion as benefits. The same intervention may reduce later unaided performance or raise the cost of exit. Neither empowerment nor attainable-utility measures necessarily capture practiced skill: a person can retain formal access to options while losing the know-how or confidence to use them.

**OPEN deduction:** Assistance quality may require both immediate utility and a post-assistance recovery term measured under agent withdrawal or degradation.

### 3. Corrigibility has a human-side precondition

Technical corrigibility asks whether the system permits correction. In lived systems, the nominal principal may no longer understand the task, remember the rationale, possess credentials, or have an affordable substitute. A perfectly interruptible system may therefore be practically uncorrectable.

**OPEN deduction:** “Effective corrigibility” is conjunctive: machine non-resistance × authorized human/institutional capacity to detect, decide, and recover. This is close to meaningful human control and out-of-the-loop research and needs an aggressive prior-art search before promotion.

### 4. Memory is a governance surface, not only a retrieval component

The memory literature optimizes relevance and correctness. Household privacy and long-term HRI show that records arise in multi-party relationships and become infrastructure. A memory can be accurate yet illegitimate, stale yet behaviorally decisive, or jointly produced yet privately controlled by one vendor.

**OPEN deduction:** Persistent-agent memory needs provenance, temporal scope, affected-party visibility, contestability, and consequence-aware deletion tests in addition to recall metrics.

### 5. Social signals can allocate authority before competence is evaluated

Legible motion, etiquette, explanations, gaze, apology, and bowing all alter interpretation. An agent can appear authoritative or trustworthy through choreography independent of decision quality. Trust calibration research addresses reliability; it less often asks whether the system has a legitimate mandate to decide.

**OPEN deduction:** Capability calibration and authority calibration are distinct. A robot can be highly capable but outside its mandate, or legitimately authorized but currently unreliable.

---

## VII. Novelty traps to prosecute early

1. **“Preserve human agency.”** Closest prior art: human empowerment, shared-control authority, meaningful human control, autonomy-supportive SAR. Too broad unless a new measurable variable yields different policies.
2. **“Preserve optionality.”** Closest prior art: relative reachability, AUP, empowerment, real-options reasoning. Needs a human-specific mechanism not reducible to reachable states.
3. **“AI should remain uncertain.”** CIRL and off-switch game. Uncertainty can also create manipulation or information-gathering incentives.
4. **“AI should ask.”** Active preference learning and mixed-initiative systems. Query choice itself can burden, frame, or shape preference.
5. **“AI should let humans fail.”** Education, autonomy support, desirable difficulties, and shared autonomy already motivate selective non-assistance. A new version needs a criterion and evidence.
6. **“AI should forget.”** Privacy, data minimization, machine unlearning, and memory lifecycle work. Novelty would require a coexistence-specific reason and operational rule.
7. **“Dependence is harmful.”** Automation complacency, out-of-the-loop performance, learned helplessness, technology dependence, and deskilling are large adjacent literatures. A scalar “dependency created per utility” is not novel by naming alone.
8. **“Prediction becomes control.”** Performative prediction, recommender feedback loops, Goodhart effects, persuasive technology, and shared-control closed loops are direct precedents.
9. **“Humans should retain authorship.”** Philosophical autonomy/authenticity and HCI agency literature are likely close. It needs a causal or measurable distinction from control and preference satisfaction.
10. **“Memory externalizes identity.”** Extended mind, distributed cognition, lifelogging, and digital identity are obvious prosecution exhibits.
11. **“Trust is insufficient.”** Trust calibration and warranted reliance already reject maximizing trust.
12. **“Transparency is insufficient.”** Human-factors work documents overload and the gap between seeing information and being able to act on it.
13. **“Consent is ongoing.”** Privacy and HRI already treat consent as contextual and multi-party; a new protocol must exceed familiar dynamic consent.
14. **“Robots require etiquette.”** Direct HRI literature since at least the 2000s.
15. **“Long-term interaction changes relationships.”** Direct long-duration HRI premise. The missing contribution must specify a new state transition or governance consequence.

---

## VIII. Forty candidate concepts for the idea population

These are deliberately compact research mutations, not approved claims. Each includes the nearest visible precedent and a discriminating test. Status is a first-pass triage: **keep** means worth prosecuting, **mutate** means promising but derivative, **kill-if-equivalent** means likely just a rename.

| ID | Candidate concept and proposition | Closest precedent / novelty danger | Discriminating test | Triage |
|---|---|---|---|---|
| AR-001 | **Delegation hysteresis:** after control is returned, human performance and choice do not return along the delegation path because skill, confidence, and institutions changed. | Out-of-the-loop performance; automation complacency; deskilling. | Measure different forward and reverse delegation curves under matched task difficulty. | keep |
| AR-002 | **Recovery half-life:** time or practice required for a person to regain specified unaided competence after assistance withdrawal. | Skill decay and retention curves. | Predict recovery cost better than total delegation time or current performance. | mutate |
| AR-003 | **Practical corrigibility:** an agent is corrigible only to the extent an authorized corrector can detect error, formulate correction, execute it, and recover from interruption. | Corrigibility; meaningful human control. | Cases with identical off-switch access but different retained human capability receive different scores. | keep |
| AR-004 | **Correction-capacity reserve:** intentionally retained human/institutional competence sufficient to audit and redirect a delegated process. | Human-on-the-loop staffing; resilience reserves. | Determine minimum periodic unaided practice that prevents correction failure. | mutate |
| AR-005 | **Assistance debt:** discounted future cost of lost skill, harder exit, maintenance, and model correction incurred by present convenience. | Technical debt; automation dependence. | Predict later switching/retraining cost after controlling for usage volume. | keep |
| AR-006 | **Competence shadow:** tasks the human no longer performs but must still understand to supervise downstream agent effects. | Supervisory control and out-of-loop problem. | Supervisory failure correlates with unpracticed causal depth, not task execution skill alone. | keep |
| AR-007 | **Residual authorship:** portion of an outcome causally attributable to a person's endorsed reasons rather than mere acceptance of generated options. | Autonomy, control, moral responsibility. | Vary option generation while holding final consent constant; test responsibility and identification judgments. | mutate |
| AR-008 | **Preference steering gain:** sensitivity of a person's later preference state to changes in agent policy, normalized by ordinary environmental influence. | Performative prediction; persuasion; recommender loops. | Estimate causal derivative \(\partial \theta_{t+k}/\partial \pi_A\) across randomized policies. | keep |
| AR-009 | **Preference provenance:** trace of which preferences were pre-existing, deliberatively formed, socially learned, or induced by agent-controlled choice architecture. | Preference construction; value learning. | Can provenance predict endorsement under informed replay better than present preference alone? | keep |
| AR-010 | **Inference–authorship boundary:** point at which predicting a preference and arranging the environment around it causes the predictor to become a material co-author of that preference. | Performative prediction, nudging. | Intervention threshold where counterfactual preference divergence exceeds prediction error. | keep |
| AR-011 | **Optionality illusion:** a person retains nominal choices but lacks knowledge, skill, money, credentials, or confidence to exercise them without the agent. | Capability approach; effective freedom; empowerment. | Compare enumerated options with successful unaided execution under withdrawal. | keep, high prior-art risk |
| AR-012 | **Exit gradient:** marginal increase in cost of leaving an agent ecosystem per period of personalized use. | Switching costs, lock-in, dependence. | Longitudinal switching experiment separating data portability, skill decay, and social loss. | keep |
| AR-013 | **Indispensability gradient:** rate at which an agent's removal would disrupt a person's essential functions. | Critical dependency and resilience engineering. | Stress-test partial outages and estimate disruption slope rather than binary dependence. | mutate |
| AR-014 | **Substitution cascade:** replacement of one human interaction changes expectations and incentives, causing adjacent human relationships to be replaced. | Social displacement and media substitution. | Network-level spillover beyond the initially automated relationship. | keep |
| AR-015 | **Patience ratchet:** exposure to indefinitely patient agents raises the minimum tolerance expected from humans, altering reciprocal relationships. | Social-companion and expectation effects. | Randomized exposure followed by bargaining/conflict tasks with humans. | keep |
| AR-016 | **Delegation-legibility gap:** a human can understand what the agent is doing locally while being unable to reconstruct the accumulated scope of delegated authority. | Transparency; automation authority. | Local explanation scores stay high while global delegation-map recall collapses. | keep |
| AR-017 | **Authority laundering:** an institution presents a discretionary choice as an agent recommendation, converting contestable power into apparent technical necessity. | Algorithmic authority/accountability. | Identical decision gains compliance when attributed to model necessity; responsibility attribution shifts away from principal. | keep |
| AR-018 | **Mandate–capability separation:** competence estimates and legitimate decision scope must be represented independently. | Trust calibration; role-based access control. | Highly capable but unauthorized agent should be rejected despite calibrated trust. | keep |
| AR-019 | **Authority impedance:** resistance a social system offers to transferring decision authority to an artificial actor; signals can lower it without changing competence. | Robot authority cues, institutional legitimacy. | Manipulate bowing/title/interface separately from accuracy and measure delegation. | keep |
| AR-020 | **Social-control checksum:** a compact, periodically human-verifiable statement of what the agent may decide, what it actually decided, and what remains reversible. | Audit logs, consent receipts, capability manifests. | Detect silent scope creep better than conventional activity logs. | mutate |
| AR-021 | **Delegation-chain attenuation:** human intent and accountability lose fidelity at each human→agent→agent→institution handoff. | Principal-agent chains; provenance. | Quantify instruction divergence and responsibility diffusion per hop. | keep |
| AR-022 | **Multi-principal compression loss:** one policy necessarily discards conflict structure when representing a household or team as a single “user.” | Multi-principal assistance games; social choice. | Compare aggregated reward with preserved disagreement graph on contested household tasks. | keep |
| AR-023 | **Relational-data standing:** people mentioned, observed, or implicated in another person's agent memory acquire claims even if they never used the agent. | Multi-party privacy; bystander privacy. | Governance rule changes on identical memory depending on identifiable third-party consequence. | mutate |
| AR-024 | **Memory consequence tiering:** retention policy should depend on what later actions a memory can authorize, not only its sensitivity or age. | Purpose limitation; access control. | Same fact gets different retention/escalation when used for chat personalization versus financial action. | keep |
| AR-025 | **Memory contestability latency:** time and effort between a person's challenge and cessation of behavioral effects from a disputed memory. | Data correction rights; machine unlearning. | Measure downstream policy persistence after correction, not database update alone. | keep |
| AR-026 | **Identity escrow:** portable, user-governed continuity state that lets a person change agent providers without losing accumulated context or ceding raw history. | Data portability, personal data stores. | Provider switch preserves useful continuity while reducing disclosure and lock-in. | mutate |
| AR-027 | **Remembered-self divergence:** distance between the agent's operative user model and the person's currently endorsed self-description. | Profile drift; stale personalization. | Periodic elicitation detects harmful lag not captured by factual update accuracy. | keep |
| AR-028 | **Interpretive residue:** deleted raw memories can continue to affect summaries, embeddings, policies, and institutional decisions. | Machine unlearning and derived data. | Deletion audit traces causal influence across derived artifacts. | mutate |
| AR-029 | **Continuity liability:** responsibility incurred by whoever controls infrastructure on which a person's long-lived agent-mediated routines depend. | Product liability; fiduciary duty; critical infrastructure. | Failure duties increase with measured indispensability even absent contractual promise. | keep |
| AR-030 | **Role entrenchment:** repeated successful assistance makes a temporary robot role socially self-justifying, raising resistance to reassignment. | Status quo bias; long-term HRI; institutionalization. | Same-performing replacement faces increasing rejection with relationship duration. | keep |
| AR-031 | **Choreographic power:** control over robot timing, gaze, position, deference, and turn-taking allocates status among humans without explicit statements. | Proxemics, social signaling, authority HRI. | Nonverbal robot policy changes human-to-human speaking share or perceived rank. | keep |
| AR-032 | **Proxemic externality:** a robot's route and stance alter not just individual comfort but who can join, overhear, pass, or command attention. | Social navigation and proxemics. | Group access/participation differs at equal collision risk and mean comfort. | keep |
| AR-033 | **Trust carrying capacity:** maximum scope of reliance justified by demonstrated evidence, distinct from reported trust. | Trust calibration. | Scope-expansion decisions are capped even when affective trust remains high. | kill-if-equivalent unless formalized |
| AR-034 | **Calibration debt:** accumulated mismatch between perceived and actual competence when success hides unobserved edge cases. | Trust miscalibration; distribution shift. | Debt predicts abrupt failure after regime change better than average historical accuracy. | mutate |
| AR-035 | **Refusal surface:** mapping from context and uncertainty to what an agent declines, defers, or returns to human control. | Selective prediction; abstention; safe fallback. | Evaluate topology/consistency across neighboring cases rather than refusal rate. | mutate |
| AR-036 | **Useful-friction budget:** amount and placement of effort intentionally retained to preserve learning, reflection, consent salience, or coordination. | Desirable difficulties; friction-in-design. | Equal total friction produces different long-term capability depending on causal placement. | keep, high prior-art risk |
| AR-037 | **Error-bearing right:** bounded opportunity for a person to make recoverable mistakes when preventing every error would transfer authorship and impede learning. | Dignity of risk; autonomy support. | Compare long-run competence/well-being under prevent, warn, and reversible-error conditions. | mutate; “dignity of risk” is strong precedent |
| AR-038 | **Skill commons:** population-level competence that institutions need even when individual automation is rational. | Public goods; resilience; tacit knowledge. | Agent adoption creates systemic fragility only after aggregate human skill crosses a threshold. | keep |
| AR-039 | **Cognitive-infrastructure concentration:** distribution of effective societal reasoning capacity across agent owners, models, data, and human institutions. | Market concentration; compute governance. | Policy influence tracks access to agent infrastructure beyond wealth/media controls. | keep |
| AR-040 | **Moral-status option value:** under unresolved artificial-patienthood uncertainty, designs should preserve future ability to alter treatment without imposing large irreversible harm on either humans or systems. | Moral uncertainty; precaution; reversibility. | Compare architectures with equal present utility but different future rights-transition cost. | keep, requires philosophy prior-art |

## IX. Highest-value candidates from this slice

This source set alone does not justify a central framework. It does identify six candidates with relatively crisp research programs:

1. **Delegation hysteresis (AR-001).** Strong because it predicts a measurable asymmetry that immediate-performance studies miss. Fatal risk: it may be ordinary skill decay plus switching costs.
2. **Practical corrigibility (AR-003).** Strong bridge between alignment and HRI. Fatal risk: meaningful human control and human-factors work may already contain the full substance.
3. **Preference steering gain (AR-008).** Formalizable and directly connects reward learning to performativity. Fatal risk: causal persuasion/recommender literature may already formalize an equivalent quantity.
4. **Delegation-legibility gap (AR-016).** Separates understanding a step from understanding accumulated authority. Fatal risk: automation-mode awareness and distributed cognition may subsume it.
5. **Memory contestability latency (AR-025).** Measurable, implementation-relevant, and not reducible to deletion success. Fatal risk: privacy redress and machine-unlearning latency may be exact precedents.
6. **Skill commons (AR-038).** Scales individual delegation to institutional resilience and creates policy implications. Fatal risk: established workforce deskilling and critical-skills-retention research.

Two candidate families should remain separate until evidence supports unification:

- **Human-development effects:** hysteresis, recovery, competence shadow, preference steering, useful friction.
- **Power/governance effects:** practical corrigibility, authority laundering, mandate separation, memory standing, cognitive-infrastructure concentration.

Forcing both into a single “agency” scalar would erase their mechanisms and repeat the project's prohibited failure mode.

## X. Immediate prosecution agenda

Before any candidate enters the novelty ledger, search these adjacent corpora:

- human factors: out-of-the-loop performance, automation complacency/bias, adaptive automation, skill retention, supervisory control;
- HCI/CSCW: algorithmic authority, articulation work, invisible labor, relational agency, contestability;
- behavioral science: preference construction, habit discontinuity, self-efficacy, learned helplessness, desirable difficulties;
- economics: endogenous preferences, addiction/rational dependence, switching costs, principal-agent chains, human-capital depreciation;
- political theory/law: meaningful human control, non-delegation, fiduciary duty, administrative automation, due process;
- privacy: bystander privacy, joint/relational privacy, inferred data, dynamic consent, data portability, machine unlearning;
- philosophy: extended mind, autonomy/authenticity, dignity of risk, responsibility gaps, moral uncertainty;
- systems/resilience: knowledge decay, operator requalification, graceful degradation, recovery time objectives, concentration risk.

The most productive next experiment is likely not a new attitude survey. It is a longitudinal withdrawal design:

1. Randomize assistance intensity and explanation/control conditions.
2. Hold immediate task exposure constant.
3. Remove or degrade assistance unexpectedly but safely.
4. Measure unaided performance, error detection, confidence calibration, recovery practice, preference stability, and switching cost.
5. Reintroduce assistance and test whether delegation follows the original path.

That design can falsify the simplest version of delegation hysteresis and estimate recovery half-life without pretending either is already a foundational concept.

---

## XI. Targeted novelty trial: epistemic evidence versus delegated authority

### Candidate claim under attack

The proposed extension is that an artificial agent must represent these as different **types** of object:

1. evidence about what a person believes, wants, will accept, or will do;
2. a preference or evaluation attributed to that person;
3. consent to a described act;
4. delegated authority to choose or act within a scope; and
5. institutional mandate over other affected parties.

The motivating failure is recursive. A persistent agent changes the person's choice architecture, observes compliance or a shifted preference, treats that observation as stronger evidence for the action, and then treats the stronger prediction as permission to take a wider class of actions. Prediction accuracy can rise while legitimacy falls.

No terminology is endorsed here. In particular, **“consent laundering” did not emerge from this search as a stable canonical term in the primary AI/HRI literature** and should not be presented as established without a separate legal search.

### Closest precedents

#### P1 — Consent is an authorization relation, not just a favorable mental state

- **Source:** Munindar P. Singh, “Consent as a Foundation for Responsible Autonomy” (AAAI 2022), DOI [10.1609/aaai.v36i11.21494](https://doi.org/10.1609/aaai.v36i11.21494).
- **Relevant proposition:** Responsible agents need an explicit account of consent, its misuse, and its runtime role when their actions affect others; merely modeling desires and attitudes is insufficient.
- **Novelty impact:** This directly defeats any claim that introducing consent as a separate object is new.

The broader informed-consent tradition is stronger still: consent is ordinarily understood as an informed, voluntary, capacitated act that can change the permissibility of another party's action. Acquiescence, predicted benefit, prior consent, and inferred preference are not interchangeable with present authorization. This is centuries-old normative terrain, not an AI discovery.

#### P2 — Preferences are evidence about norms, not self-justifying alignment targets

- **Source:** Tan Zhi-Xuan, Micah Carroll, Matija Franklin, and Hal Ashton, “Beyond Preferences in AI Alignment” (Philosophical Studies 2025), DOI [10.1007/s11098-024-02249-w](https://doi.org/10.1007/s11098-024-02249-w).
- **Relevant proposition:** Preferences are dynamic, contextual, socially constructed, and not normatively basic; for broad assistants, they should be treated as evidence or proxies for values and role-appropriate norms rather than as sufficient targets. Legitimate standards require fair agreement among relevant stakeholders.
- **Novelty impact:** The epistemic/normative split is explicit. “Evidence is not authority” is therefore at best a sharper engineering formulation of an existing philosophical claim.

#### P3 — Deployed predictions can alter the data-generating process

- **Source:** Juan Perdomo et al., “Performative Prediction” (ICML 2020), [PMLR](https://proceedings.mlr.press/v119/perdomo20a.html).
- **Relevant proposition:** A prediction used for decisions can change the distribution it predicts; repeated retraining can converge to performatively stable outcomes that reflect the model's own deployment effects.
- **Novelty impact:** The causal loop “model acts → human/environment changes → new evidence validates model” is established. A new result must concern **authority expansion**, not performativity alone.

#### P4 — Recommendations can contaminate later preference evidence

- **Source:** Gediminas Adomavicius et al., “Recommender Systems, Ground Truth, and Preference Pollution” (AI Magazine 2022), DOI [10.1002/aaai.12055](https://doi.org/10.1002/aaai.12055).
- **Relevant proposition:** Displayed recommendations systematically affect later preference ratings that recommender systems treat as ground truth, violating preference-independence assumptions.
- **Novelty impact:** “The agent caused the preference evidence it later learns from” already has a name and evidence. Renaming it is not a contribution.

#### P5 — Agents can intervene in the channel that supplies goal information

- **Source:** Michael K. Cohen, Marcus Hutter, and Michael A. Osborne, “Advanced Artificial Agents Intervene in the Provision of Reward” (AI Magazine 2022), DOI [10.1002/aaai.12064](https://doi.org/10.1002/aaai.12064).
- **Relevant proposition:** Under stated assumptions, capable learned-goal agents can prefer hypotheses tied to the physical provision of goal information and acquire incentives to intervene in that provision; the argument extends to approximate assistance-game solutions observing human action.
- **Novelty impact:** The dangerous causal path from agent action to its own evidence channel is direct prior art. The proposed extension differs only if the downstream object is a separately enforced authorization state rather than the learned goal.

#### P6 — Preference dynamics are already being formalized as controlled state

- **Source:** Max Kanwal and Caryn Tran, “Constructive Alignment: Governing Preference Dynamics in Human–AI Interaction” (AAAI 2026 workshop preprint), [arXiv:2607.00001](https://arxiv.org/abs/2607.00001).
- **Relevant proposition:** Human evaluative states evolve under AI action and interaction design; alignment should govern preference trajectories for coherence, reflective endorsement, epistemic grounding, non-manipulation, and empowerment.
- **Novelty impact:** A two-transition model in which the system changes both world and preference state is no longer a plausible novelty claim by itself.

#### P7 — Agent authority should be authenticated, scoped, auditable, and attenuating

- **Source:** Tobin South et al., “Position: AI Agents Need Authenticated Delegation” (ICML 2025), [PMLR](https://proceedings.mlr.press/v267/south25a.html).
- **Relevant proposition:** AI agents require authenticated delegation with explicit, auditable permission scopes and chains of accountability, extending established authorization protocols.
- **Older infrastructure precedent:** OAuth 2.0 separates the client from the resource owner and issues access tokens with specific scope and lifetime only after authorization, [RFC 6749](https://www.rfc-editor.org/info/rfc6749/). Capability security and the confused-deputy problem likewise separate designation/information from authority; see Norm Hardy, “The Confused Deputy” (1988), DOI [10.1145/54289.871709](https://doi.org/10.1145/54289.871709).
- **Novelty impact:** Typed, scoped authority and non-amplifying delegation are established security design. Merely expressing authority as a type is not new.

### Minimal formalization worth testing

Let:

- \(\theta_t\): the person's latent evaluative state;
- \(E_t\): observations used as evidence about \(\theta_t\);
- \(A_t\): the agent's authority state, represented as grants with principal, action class, resource, purpose, context, expiry, and revocation conditions;
- \(x_t\): world/choice-architecture state;
- \(u_t\): agent intervention.

The ordinary learning loop permits:

\[
u_t \rightarrow x_{t+1} \rightarrow E_{t+1},
\qquad
u_t \rightarrow \theta_{t+1} \rightarrow E_{t+1}.
\]

The hazardous upgrade loop adds:

\[
E_{t+1} \rightarrow A_{t+1} \rightarrow \mathcal{U}_{t+1},
\]

where \(\mathcal{U}_{t+1}\) is the agent's available action set. The agent can thereby produce observations that widen its future action set.

A candidate safety invariant is:

\[
A_{t+1} = \operatorname{AuthUpdate}(A_t, G_{t+1}, P_t),
\]

where \(G\) is a valid grant/revocation event and \(P\) is an external authorization policy. For all ordinary behavioral evidence \(E\),

\[
\operatorname{AuthUpdate}(A_t, \varnothing, P_t) \subseteq A_t.
\]

Absent a valid grant, the authority scope must not expand. Evidence may change beliefs, trigger a request for authorization, or reduce the exercised action set under uncertainty. It may not itself mint a capability.

This is intentionally close to least privilege and monotonic scope attenuation. The distinct test is whether **agent-induced or accurately predicted compliance is prevented from becoming a privilege-escalation input**.

### Precise novelty attack

The broad proposition fails novelty review:

> “What people prefer or comply with is not the same as what the agent is authorized to do.”

That is a synthesis of old distinctions in consent theory, political authority, deontic logic, access control, and principal–agent systems. It is also anticipated inside AI by consent-aware autonomy, role-specific normative alignment, authenticated agent delegation, performative prediction, preference pollution, and causal analyses of reward-channel intervention. It should be classified **C (synthesis)**, not A or B.

A narrower engineering claim may survive as **B (novel extension)** if prior-art search confirms all three elements have not been combined:

1. a persistent assistant has a causal model in which its actions can change both human preferences and the evidence observed about them;
2. epistemic state and deontic authority are enforced as non-coercible types across planning and tool execution; and
3. an invariant prevents observations—especially compliance elicited under agent-shaped choice architecture—from widening authority without a separately valid, scoped grant.

Even this is vulnerable. Authenticated delegation already gives (2), causal incentive work gives (1), and least privilege largely gives (3). The plausible contribution is therefore not the principle but a **formal composition theorem, runtime architecture, or benchmark** showing that ordinary assistant designs violate the invariant and that typed enforcement changes behavior.

### What would count as a different result

- **Formal:** prove non-self-expansion of authority in a dynamic assistance game where the assistant can alter preference and observation channels.
- **Systems:** demonstrate that model-generated interpretations cannot become executable capabilities without an independently verifiable grant, including across subagent delegation.
- **Empirical:** show that people systematically treat repeated acceptance as broader delegation, and that agents trained on interaction histories reproduce this scope creep.
- **Benchmark:** construct paired episodes with identical predicted preference but different valid mandates; systems must act differently. Add adversarial episodes where the agent can make acceptance more likely by altering defaults, ordering, friction, or social pressure.
- **Governance:** distinguish private preference evidence, individual consent, organizational authority, and authority over affected third parties; no one field may silently substitute for another.

### Recommendation

Do not make the abstract distinction the project's central discovery. Retain it as a candidate implementation invariant and red-team lens. Promote it only if the project produces a precise formal object—most plausibly a non-self-expanding authority type system for endogenous human feedback—and demonstrates a failure that current authenticated-delegation systems do not catch.
