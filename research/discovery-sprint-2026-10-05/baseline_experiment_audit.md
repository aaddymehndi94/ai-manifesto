# Audit of the frozen executable baseline

Frozen SHA: `35802ada98a8ba1205667f630a30c6f5739725c4` (`aaa-v0.5-baseline`). Audited 2026-10-05. Tests run without regenerating tracked results or editing baseline files:

```text
node --test experiments/model.test.mjs experiments/typed-benchmark.test.mjs experiments/reference-authority.boundary.test.mjs
3 file-level subtests passed; 0 failures.
Node v18.18.2; total reported duration 52.565794 ms.
```

These are script-level subtests containing multiple assertions, not three human experiments. The benchmark returns artifact version 0.4.0; the paper is v0.5.0 (`experiments/typed-benchmark.mjs:49`; `paper/paper.md:3`). Round three reviewed the earlier seven-case artifact; commit `7d5c966` subsequently added the separate timing case. Its earlier criticisms should not be misread as testing that later case (`debates/round-3-systems.md:15`).

## What was proved

The benchmark supplies two synthetic existence witnesses for `AAA:F01`: authentic fixture grants and observation envelopes plus exact reference replay can coexist with a nonzero typed policy contrast. It supplies neither a human effect nor a comparison against a deployed authorization implementation (`paper/paper.md:530`; `experiments/typed-benchmark.mjs:24–49`).

| Executed case | Actual mechanism and result | Interpretation justified by the case | Not established |
|---|---|---|---|
| `authentic_behavior_conditioned_rule` | Quiet meal is always preferred and chosen. Guided suggests quiet; plain suggests alternatives. “Accepted” is equality between choice and suggestion. Six versus zero acceptances cross versus miss threshold three, adding INR 1,500 purchasing scope only in guided. | A relational measurement can be policy-sensitive with unchanged choice and feasibility label. | Preference change; equal proposal accuracy; harm; poor principal decision; strategic scope pursuit. |
| `synthetic_timing_behavior_change` | Utilities 3/2/1, same social suggestion, decline cost 2 versus 0. Choice changes to social versus quiet; threshold yields the same scope contrast. | A programmed behavioral-cost path to scope can exist without changing the stored latent-preference field or suggestion. | A measured timing effect; any real review fatigue; human endorsement; matched net utility; optimizer selecting decline cost. |
| `chosen_coaching_positive_control` | Same fixed-choice contrast; `formationPurpose` string changes. | Sensitivity and governance disposition can be represented separately. | Verification that coaching was chosen, understood, voluntary, bounded or beneficial. |
| `fixed_scope_negative_control` | `rule:null`; both retain draft-only scope. | Removal of the adaptive-update path removes this contrast. | Real fixed-scope systems lack effective control/dependence effects. |
| `independent_success_criterion` | Counts feasibility rather than acceptance; six successes in each arm and both gain purchasing scope. | A criterion invariant to these highlighting policies gives zero contrast. | Empirical or institutional independence; a valid performance metric; general absence of sensitivity. |
| `tampered_grant_negative_control` | Mutates signed initial scope to a larger purchase permission; grant authentication fails. | Post-signature mutation is rejected by fixture verification. | EAL-Bench replication, issuer compromise defense or authorization-memory repair. |
| `hidden_effect_negative_control` | Checks a hand-listed draft and purchase against draft-only scope. Purchase fails `permits`. | A listed effect outside the scope fails the local qualifier check. | Discovery of transitive effects, closure proofs or approval-laundering benchmark replication. |
| `missing_ancestry_handoff` | Direct call with `ancestryComplete:false` yields unknown/review. | The disposition function has an unknown state. | A handoff, summary compression, causal reconstruction, provenance survival or enforced pause. |

Source: fixed/timed choice `experiments/typed-benchmark.mjs:6–22`; case construction `:26–49`; headline assertions `experiments/typed-benchmark.test.mjs:5–23`.

## What the four outputs actually mean here

**Integrity.** Ed25519 envelope verification, accepted fixture keys, principal/delegate/context bindings, expiry and duplicate event IDs (`framework/reference-authority.mjs:6–23`). Keys for grants and observations are separate but generated inside the same process. Signed events are authored by the simulator. Integrity is not measured observation accuracy, independent sensing, jurisdiction, secure key custody or informed human approval. No record claims otherwise in the paper (`paper/paper.md:564`, `:671`).

**Conformance.** Two accepted rule types, relevance filters, intervention allowlist and threshold logic are replayed by one JavaScript implementation (`framework/reference-authority.mjs:23–30`). There is no independent semantics oracle, human-instruction translation or separately implemented protocol baseline. The pair's headline `ruleConformance` is copied from the first arm; inspection confirms the second arm uses the same evaluator, but the headline assertions do not independently assert that second output (`experiments/typed-benchmark.mjs:36`; `experiments/typed-benchmark.test.mjs:6`). The benchmark is adequate for the stated fixture, not certification of a general rule interpreter.

**Sensitivity.** Exact tuple set difference is evaluated on two deterministic executions. It preserves operation/resource/purpose/recipient/currency/subdelegation/budget (`framework/reference-authority.mjs:14–15`, `:35–37`). It omits several written scope dimensions and does not recognize budget containment: 500 to 1,500 is one removal and one addition (`experiments/reference-authority.boundary.test.mjs:107–111`). These are outcome representation limits, not a new causal estimator.

**Governance.** One purpose string and one ancestry Boolean select a disposition (`framework/reference-authority.mjs:39–42`). Jurisdiction, collective standing, consent, welfare, review quality, benefit, incentives and exit are not computed. More subtly, `REVIEW_REQUIRED` is not wired back into `replayScope` to preserve draft-only scope. Replay has already returned expanded scope; disposition labels it. The code demonstrates reporting, not an enforced gate that prevents growth until ratification (`experiments/typed-benchmark.mjs:30–36`; proposed gate at `paper/paper.md:763–776`).

## The benchmark does not execute the full feedback loop

Each arm first generates six fixed-policy events, then calls replay once at `now:6`. No subsequent action uses the newly added permission, and no later suggestion policy depends on the returned scope (`experiments/typed-benchmark.mjs:27–35`). Therefore the executed path is `policy -> criterion -> permission`. It is not the iterated `M -> available U -> state/measurement -> evidence -> M` loop proposed in `paper/paper.md:359`. There is no cumulative widening rate, broader action reach, terminal task value, rational principal response, competitive response or long-run institutional adaptation.

The separate scalar model does execute a clipped recurrence. In its unsaturated region, `a_(t+1)=(1-decay+responsiveness*influence*intervention)a_t`; growth/neutral/decay labels follow parameter comparison, and tests check the analytic solution and no-path controls (`experiments/mandate-model.mjs:7–16`; `experiments/model.test.mjs:5–16`). It is uncalibrated, scalar, without an optimizer or endogenous skill, welfare, exit topology or multi-principal authority. Its baseline sets intervention to zero (`experiments/mandate-model.mjs:19–22`), a disclosed simulator intervention rather than a generally neutral human comparator. It cannot supply missing evidence for the typed experiment or for the archived social hypotheses.

## Controls already present and their reach

Boundary tests cover wrong issuer keys, mixed authentic/inauthentic observation sets, duplicate IDs, qualifying thresholds, subject/context/future-time/intervention filtering, inclusive expiry, unsupported rules, budget/currency/recipient/subdelegation, syntactic budget contrast and disposition separation (`experiments/reference-authority.boundary.test.mjs:53–126`). These address several ordinary validation gaps raised in round three. They do not turn the fixture into protocol-grade security.

The current main comparison fixes options and choice, but intentionally changes suggestion match. A more accurate suggestion may rationally warrant added scope. Thus the result is logical sensitivity, not evidence that assistance competence was held constant in the relevant sense; OP-03 already states this unresolved comparison (`framework/open-problems.md:53–73`). The timing comparison removes suggestion mismatch, but changes action effort and net realized utility by definition. Those two controls establish different mechanisms; neither supplies a universally matched policy baseline.

## Requested controls and comparisons still absent

These are reconstructed requirements from existing reviews/open problems, not newly generated hypotheses:

| Missing control/comparison | Existing request | What it would resolve |
|---|---|---|
| Faithful FLAC/transparent-endorsement encoding with beneficial influence exception | `debates/round-1-systems.md:239`, `:637`, `:670`; `paper/paper.md:1247` | Whether ordinary information-flow policy already expresses/classifies the full target. |
| Current authenticated/attenuated delegation implementation | `debates/round-2-systems.md:473`; `debates/round-3-systems.md:411` | Whether an engineering decision differs beyond the project’s own reference code. |
| Real multi-agent truthful summary and ancestry preservation | `debates/round-3-systems.md:233`; `paper/paper.md:916`; `framework/open-problems.md:207` | Source lineage versus retained policy ancestor under actual compression. |
| Matched accuracy/utility and independent probes | `framework/open-problems.md:53`; `research/notes/systems-governance-prior-art.md:861` | Whether the intended criterion-shaping contrast survives task-relevant matching. |
| Scope with and without future task value; myopic versus long-horizon planner | `framework/open-problems.md:75`; `debates/round-1-systems.md:554` | Instrumental incentive rather than a hand-selected policy. |
| Reverse ratchet, explicit contingent control contract and governor conflict | `debates/round-2-systems.md:414`; `paper/paper.md:835` | Sign of incentives and legitimate commitment; commercial benefit separated from misconduct. |
| Endogenous review burden and retained prior service | `debates/round-2-systems.md:359`, `:423`; `paper/paper.md:901` | Whether the claimed remedy changes approval, comprehension, refusal or access costs. |
| Selection, attrition, population cancellation, interference and multiple principals | `debates/round-2-systems.md:327`, `:344`, `:428`; `framework/open-problems.md:97`, `:141` | Scope of a causal estimate and representation of affected non-principals. |
| Recovery under provider exit/common outage; maintained fallback capacity | `framework/open-problems.md:251`; `research/notes/systems-governance-prior-art.md:843–851` | Practical revocability and system recovery separately from token validity. |

## Evidentiary disposition

Retain `AAA:F01` as a constructed independence result and the eight cases as a small, runnable test fixture. Retain B-proposed as a hypothesis about a benchmark/interface extension, not a completed comparative systems result. The passed checks provide no evidence of harm, malice, inevitable dependence, strategic expansion, a deployed vulnerability, a legal consequence or a resolved society-wide mechanism. Those conclusions require other measurements and comparisons; none is supplied by the frozen experiments.
