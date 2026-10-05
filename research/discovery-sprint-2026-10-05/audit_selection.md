# Selection-process audit of the frozen v0.5 baseline

Date: 2026-10-05. Baseline: `35802ada98a8ba1205667f630a30c6f5739725c4`, tag `aaa-v0.5-baseline`. All file/line citations below refer to that baseline. Historical commits are separately identified. No new candidates were generated, no baseline files changed, and no other discovery-sprint audit reports were consulted.

## Finding

The archive supports a broad seed-writing exercise followed by a hand-selected, rapidly narrowing research trajectory. It does **not** support interpreting 142 early rejections as 142 proposition-level novelty adjudications, interpreting the scores as comparative selection evidence, or interpreting three final survivors as three independently discovered programs.

The most consequential process failures are: family resemblance standing in for equivalence; non-novelty objections such as cultural heterogeneity or identification difficulty standing in for novelty verdicts; selection-derived scores; and blanket retirement of three explicitly held branches that have no recorded descendants. These are failures of discovery recall and traceability, not evidence that the omitted ideas were original.

The companion `false-negative-cases.json` records 24 old cases: 21 possible screening false negatives and three unexplained held-branch attritions. It copies each old proposition, objection, test when present, selection reason, complete score vector, history, ledger entry, and baseline line anchors. Every case remains **unresolved**. None is promoted to A or B here.

## What actually happened

### 154 seeds across seven modes

`research/candidates-g1.mjs:1–172` contains authored rows, each with name, proposition, nearest family, distinguishing test, and fatal objection. There are seven groups and exactly 22 rows per group: inversion, strange consequences, concept collision, alien observer, machine perspective, human perspective, civilizational. The equal quotas establish coverage of seven prompts, not independence of mechanisms or equal research quality. Several entries are variants of the same concerns: procedural homogenization appears in I011/I139; withdrawal/recovery recurs across I018/I048/I049/I051/I092/I111/I134/I166; authority/evidence separation recurs in several technical modes.

The compiler labels claim type by mode, not by an individual argument: strange consequences/civilizational become SPECULATIVE, machine/human perspective DESIGN_PRINCIPLE, and the remainder PHILOSOPHICAL (`scripts/compile_research.mjs:38`). A falsifiable empirical proposition can therefore carry a philosophical label. The population size does not tell us how many distinct research programs were considered.

The earlier field notes contain an additional 120 local seeds that were deliberately left outside the canonical population (`research/landscape-synthesis.md:3–7`). No complete local-to-canonical correspondence or accounting of which local proposals were dropped is provided in the examined selection scripts. The same notes prioritized delegation hysteresis and a withdrawal study (`research/notes/ai-robotics-prior-art.md:445–480`; `research/notes/systems-governance-prior-art.md:695–739`). Their presence supplies evidence of available alternatives, not proof that every alternative deserved advancement.

### 142 immediate exclusions and 12 held seeds

The decision rule is `held.has(n)`, where `held` is a manually authored map of 12 numeric IDs (`scripts/compile_research.mjs:16–29,38`). There is no ranking, objective function, score threshold, tournament, sensitivity analysis, or source-match test in that code. All other seeds receive the same selection reason: “No demonstrated irreducible novelty; retain as a background observation or testable supporting hypothesis.”

The actual held IDs and distribution are:

| Mode | Written | Held |
|---|---:|---|
| inversion | 22 | I003 |
| strange consequences | 22 | I027 |
| concept collision | 22 | I046, I047, I049, I060, I065 |
| alien observer | 22 | none |
| machine perspective | 22 | I091 |
| human perspective | 22 | I131 |
| civilizational | 22 | I134, I136, I154 |

The map supplies short individual rationales, so it was not literally random. Those rationales identify measurement, modeling, and implementation opportunities. The archive does not document a common comparison that explains why these 12 outranked the other 142. It establishes the choice and its stated reasons, not the selector's private intent.

All 154 G1 ledger records have null author, year, and source; `verification_level` is `family_identified_source_match_pending`; `difference_type` is `NOT_ESTABLISHED`; final novelty grade is null (`scripts/compile_research.mjs:44`, verified against the complete JSON). The ledger itself admits that source-family matches are leads pending proposition-level mapping (`research/novelty-ledger.md:12`). Exclusion from the current center is therefore a documented editorial decision, not a demonstrated equivalence to a known proposition.

### Scores follow selection

Four vectors supply essentially all G1 scores (`scripts/compile_research.mjs:8–14,30–38`). Every technical seed normally receives the same novelty 4, importance 8, program-potential 7; every empirical seed receives novelty 3, importance 7, program-potential 6; every unusual seed novelty 5, importance 6, program-potential 5; every established seed novelty 2, importance 7, program-potential 4.

After a seed is in the held map, the compiler changes novelty to 5, prior-art resistance to 4, program-potential to 8, and renamed-idea risk to 6 (`scripts/compile_research.mjs:36`). This is the critical direction of dependence: **the recorded selection improves the recorded score**, rather than the recorded score selecting the seed. Across 154 records there are only seven distinct score vectors. All alien-observer seeds can have novelty 5 while none advances.

This does not show misconduct: the compiler explicitly discloses editorial profiles. It does show that the numerical table cannot be used retrospectively as independent evidence of comparative research quality. It also combines originality, importance, feasibility, criticism resistance, memorability, and long-term relevance without a disclosed tradeoff rule.

### Why there were 12 generation-two variants

The 12-item menu already appears in `research/candidate-framework-v0.md:77–90`: audit, gain, influence eligibility, handoff, choice-set trigger, bounds, chosen formation, timing, suppressed dissent, typed scope, institutional renewal, correlated recovery. The evolution script instantiates those authored variants with fixed parents, citations, grades, decisions, and new score vectors (`scripts/evolve_research.mjs:6–34`). This is not an algorithmic expansion of each of the 12 held seeds.

The archived chronology is informative:

| Historical commit | Local timestamp | Recorded event |
|---|---|---|
| `e73645f33ae7dad768bd2ad4b087177db4ffe578` | Oct 4, 23:52:24 | 154 seeds and 142 center exclusions |
| `29a98cc7683fef6053c9a63afcc46a127cfbc0e8` | Oct 4, 23:57:01 | candidate framework and 12-variant menu |
| `a86defa` / `955e7aa` | 23:58:12 / 23:58:20 | human report created, then revised |
| `3868a29` / `39644e1` | 23:58:46 / Oct 5, 00:00:59 | technical and systems reports created |
| `a49f8e90d8a6397a34842381a7c7f7f5714bd0c5` | Oct 5, 00:02:40 | 12 mutations compressed to three extensions |

These are commit times, not measurements of thinking time or proof that reviewers had only minutes. They do establish that the authored framework/menu was recorded before the round-one review commits, while the evolution was recorded afterward. Review concentrated on a chosen authority framework; the record does not show comparable courts for all 12 held directions.

The evolution uses **nine** distinct held G1 parents. I027 (buyer/seller equilibrium), I049 (hysteresis), and I060 (coupled preference controllers) have no G2 child. Nevertheless, a blanket loop marks every G1 held seed `RETIRED_SUPERSEDED` and appends `superseded_by_explicit_mutations` (`scripts/evolve_research.mjs:42`). These three histories overstate what the recorded ancestry shows. “Superseded” is not a reasoned rejection and is not an experimental falsification.

The eight rejected G2 entries have individually written decisions, but their ledger precedents are mechanically the first citation; similarity is the same generic sentence and crucial difference is the proposition repeated verbatim (`scripts/evolve_research.mjs:49–51`). For example I166 gets Bainbridge as its closest precedent because S01 is first, even though its rejection names network resilience. The entries do not themselves establish source-specific equivalence.

### Convergence to I167–I169

Four G2 variants advance: I155, I157, I158, I164. The three final records are explicit combinations:

| Final ID | Parents | Role in final framework |
|---|---|---|
| I167 | I155 + I164 | authentic-rule audit with typed outcome |
| I168 | I157 + I164 | intervention-eligibility policy supporting that audit |
| I169 | I158 + I164 | handoff specialization supporting that audit |

The script describes this as “Compress into one audit target with two supporting implementation extensions” (`scripts/evolve_research.mjs:36–41`). Only six G1 IDs remain ancestors of the final set: I046, I065, I091, I154, I047, I131. The final three are neither independent winners nor three distinct empirical programs.

The final audit later distinguishes their status more carefully: I167's causal structure is C, its narrow benchmark/interface B-proposed; I168 is supporting C synthesis; I169 is an unimplemented provenance specialization (`research/novelty-ledger.md:3–10`; final JSON ledger entries I167–I169). `idea_population.json` still retains the earlier B_PROPOSED history for all three. Preserving laboratory history is legitimate; taking that historical status as the current novelty decision is not.

## False-negative patterns

The full case records are in the companion JSON. The strongest reopening rationales concern an unexamined difference, not an especially memorable old name.

1. **Primitive versus outcome:** I048 is attacked as a viability kernel, I051 as potential outcomes, I054 as queueing. A known primitive can defeat a claimed new primitive. It does not establish that the same reachable-exit set, withdrawal contrast, or deadline-limited authority outcome was already measured or predicted. A reduction must map state, dynamics, admissible interventions, and outcomes; an empirical match must map assignment, population, comparator, and response.

2. **Component versus composed graph:** I030, I062, I137, I165, I166 name externalities, accessibility, principal–agent incentives, or resilience. These are serious ancestors. The archive does not show whether a comparator has the same institutional dependency graph, individually polite/collectively costly deployment, provider-governed renewal evidence, or shared recovery-capacity constraint. A cross-field combination is not automatically novel; the missing task is establishing equivalence or a consequential difference.

3. **Measurement/identification versus priority:** I011/I139 lack community-valid procedural-diversity measures; I016 faces causal selection; I024 faces family heterogeneity; I032 is conditional; I038 is sensitive; I056 has an undefined continuity construct; I073 lacks an adjudicator; I085 risks cultural homogenization; I092 may burden vulnerable people. These can justify delaying a study or lowering confidence/feasibility. They do not establish non-originality.

4. **Attacking an absent universal claim:** I034 says mediation *may* prevent practice. Its fatal objection says not to claim mediation always harms. The objection is a useful constraint but not a rebuttal to the actual conditional proposition.

5. **Uneven treatment of conjunctions:** I159 and I163 are rejected because selection/influence mechanisms are known. I167 is retained because an authentic rule, permitted policy, authentic evidence, and typed scope outcome form a potentially useful conjunction. This asymmetry does not make I159/I163 independent discoveries: they may be subcases of I167. It does mean “known mechanism” alone is an insufficient novelty judgment and a poor reason to exclude an entire empirical direction.

6. **Attrition concealed by status:** I027/I049/I060 were positively held, then disappeared without descendants. The exact missing experiments had already been stated. Their abandonment is not traceable to a court, theorem, experiment, or matched antecedent.

All 24 cases require direct comparison before advancement. Several are likely to collapse. For I049, the frozen final audit already names Huang/Vishnoi's coupled skill/delegation dynamics and path dependence (`research/final-novelty-audit.md:68`). That is a substantially closer warning than merely saying “hysteresis is known.” No claim about that paper's complete contents is made here; this audit has not independently read its full text.

## What should remain rejected or qualified

The remedy is not to reopen everything. I156's one-dimensional linear gain condition follows immediately from the stipulated recurrence; the primitive/theorem claim is derivative (`scripts/evolve_research.mjs:8`; `research/candidate-framework-v0.md:32–36`). I064's generic no-authority-amplification invariant is directly a capability-attenuation claim. I052's broad user-state intervention constraint is explicitly vulnerable to Carroll's existing induced-shift method. I161's distinction between chosen influence and manipulation is an inherited normative distinction. These are legitimate foundations without an original center.

Similarly, “a primary source has not yet been matched” is not evidence for novelty. A new case needs a difference that changes a prediction, explanation, intervention, feasible set, theorem, observable, or scientific decision. A citation list and a new title do not supply it.

## Novelty, importance, and publication defense

These are three separate questions.

**Novelty:** What is different relative to the closest concrete comparator, on primitive, composition, mechanism, outcome, formal, empirical, intervention, explanatory, conceptual, and societal dimensions? A candidate can inherit nine dimensions and add a consequential tenth. It can also sound new while all ten map exactly.

**Importance:** Does resolving the question matter, and to whom? Withdrawal resilience and procedural/cultural homogenization can be important even when their broad mechanisms are established. An important replicated effect can deserve a research program without earning a discovery claim. The frozen generic importance scores do not quantify stakes, prevalence, distribution, or intervention effect.

**Publication defense:** What claims can a synthetic artifact responsibly support? The three technical rounds progressively replace broad theory with a limited benchmark target, expose the absence of an optimizer, distinguish signatures from observation validity, and require faithful comparison controls (`debates/round-1-technical.md:9–23,198–220`; `debates/round-2-technical.md:9–28`; `debates/round-3-technical.md:91–166,282–328`). This is valuable review work. It answers how to defend the chosen artifact, not whether the chosen direction dominates unexplored alternatives.

The paper now describes a fixed-choice measurement construction and a separately stipulated decline-cost response, with no human evidence or strategic agent (`paper/paper.md:569–683`). Those distinctions improve evidentiary honesty. They do not turn the underlying causal loop into a new law or establish a deep original program. The final audit and success test say that expressly (`research/final-novelty-audit.md:10–23`; `reviews/success-test.md:9–28`).

A discovery sprint should therefore evaluate consequences before marketable defensibility. Existing v0.5 controls, type semantics, handoff code, empirical validation, and claim wording are development/publication tasks. They must not consume the entire next search by being treated as the only possible intellectual advances.

## Audit limits and honest read trail

Fully read as text: `research/candidates-g1.mjs`, `research/candidates-g1.md`, `research/novelty-ledger.md`, `research/rejected-ideas.md`, `scripts/compile_research.mjs`, `scripts/evolve_research.mjs`, `research/candidate-framework-v0.md`, `research/landscape-synthesis.md`, `research/final-novelty-audit.md`, all three `debates/round-N-technical.md`, `debates/round-1-systems.md`, `paper/paper.md`, every `reviews/*.md`, `research/README.md`, and `research/assumptions.md`. Truncated output ranges were revisited, including the ending G1 rows and portions of round one.

Completely parsed and structurally/semantically inspected: `research/idea_population.json` and `research/novelty-ledger.json`. All 154 G1 proposition/name/family/test/objection tuples were checked for exact equality against the fully read authored rows. All G1 ledger fields were compared with their compiler-derived values; there were no deviations. Complete metadata, distinct histories and selection reasons, and every G2/G3 record and later ledger entry were inspected. Repeated 8,159-line and 3,121-line pretty-print representations were not manually reread line by line. Exact case extraction preserves complete original score vectors.

Only targeted portions/searches inspected: `research/notes/ai-robotics-prior-art.md` (candidate shortlist and withdrawal agenda, 445–488), `research/notes/systems-governance-prior-art.md` (695–803), `research/notes/human-sciences-prior-art.md` (search hits only), `debates/round-2-systems.md` and `debates/round-3-systems.md` (search hits only), historical diffs/logs for the selection and round-one review commits. Human debate files were not read in full. This is not a new source-level prior-art audit; full primary-paper equivalence and private motives remain unestablished.

The inspected baseline files have no differences from frozen SHA `35802ada98a8ba1205667f630a30c6f5739725c4`. This report's claims concern archived decisions and artifacts. No conclusion is drawn from the absence of a private conversation or unarchived reasoning.
