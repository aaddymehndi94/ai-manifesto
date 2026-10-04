# Public claim audit

**Audit date:** 2026-10-05

**Scope:** public website source, generated machine artifacts, paper and manifesto content exposed through the site, and the strict artifact-validation result. This review evaluates evidence-level claims and public representation. It does not review visual quality, accessibility, browser behavior, legal compliance, or the truth of every cited source.

## Release decision

**Hold public release until the remaining identifier/citability blocker below is resolved.**

The public draft is otherwise unusually candid. It repeatedly states that:

- the benchmark is synthetic;
- no human study has been conducted;
- no strategic optimizer is present;
- the first positive case is measurement construction;
- the second case uses a hand-written response function;
- the security controls are elementary and not replications;
- nonzero sensitivity is not manipulation, harm, coercion, or invalid consent;
- novelty is provisional and contested;
- the work is not peer reviewed;
- no DOI or named human authorship has been fabricated.

Those qualifications are substantive and visible. They should remain. The remaining blocker arises where the identifier interfaces do not yet fulfill the promise of stable machine citation.

## Strict build-validation result

The first `node scripts/validate_artifacts.mjs --built` run returned 76 errors. They were not 76 independent build defects.

### Validator incompatibilities: 53 errors

1. **Canonical graph edge schema — 42 errors.** The initial validator expected `from`, `to`, and `type`. Both public canonical graph copies used `source`, `target`, and `relation`. Seven edges therefore generated three errors each in two files.
2. **Downloaded prior-art graph misclassified — 11 errors.** `dist/downloads/research/prior-art/graph.json` is a historical research graph, but basename matching causes the validator to require all canonical `AAA:C*` and `AAA:P*` records in it.

These are validator routing/schema problems, not malformed graph data. The validator should accept one declared edge schema or normalize both, and should apply framework-node completeness only to the canonical graph paths.

### Machine-artifact completeness findings in the first build: 23 errors

1. **Canonical graph omits seven framework objects — 14 errors across two copies.** `dist/api/v1/graph.json` and `dist/downloads/framework/concept-graph.json` include `AAA:C01` through `AAA:C04`, one claim, one source, one objection, and one proposed experiment. They omit `AAA:C05` through `AAA:C08` and all three canonical principles. This can be valid as a curated diagram, but it is currently labeled “concept graph” and “claim graph” without a completeness declaration.
2. **Ontology omits all principles — nine errors across three copies.** The JSON-LD graph contains all eight concepts but no `AAA:P01` through `AAA:P03`. The principles are public in a separate JSON file, but the ontology is presented as the linked-data representation of the intellectual object.

The build was revised during this audit to include all canonical concepts and principles in the concept graph and ontology. The validator was also revised to recognize the public graph edge schema and exclude the downloaded prior-art graph from canonical completeness checks.

The final strict run reported:

```text
Artifact validation passed: 4868 checks.
```

The public API graph now contains 15 nodes, the ontology contains all eight concepts and three principles, and the built PDF is present. These findings are resolved for this build.

## Release blocker

### Public identifier promises exceed the registry

**Locations:** `paper/paper.md`, `framework/propositions.md`, `framework/open-problems.md`, `framework/concept-graph.json`, principles links, and machine artifacts.

**Problem:** The website advertises stable canonical identifiers, yet multiple overlapping identifier families are not reconciled:

- canonical principles use `AAA:P01` through `AAA:P03`;
- the paper introduces `AAA:P-01` for a formal proposition;
- canonical propositions use `AAA:H01` through `AAA:H04`;
- the paper separately introduces empirical hypotheses `AAA:H-01` through `AAA:H-04`;
- the graph uses `AAA:H01` with a shortened label;
- the paper adds `AAA:DP-01` through `AAA:DP-03`, `AAA:AUDIT-4`, and `AAA:OP-01` through `AAA:OP-10`;
- the published open-problem registry uses human headings `OP-01` through `OP-14` without corresponding canonical JSON records;
- principles have no canonical URL field or dedicated public route; manifesto links for principles point to related concept pages.

Hyphens technically distinguish some IDs, but near-colliding namespaces are unsafe for machine citation and ordinary readers. Several IDs cannot be resolved through the API or a stable route.

**Required correction:** Publish one identifier registry covering every public ID, define namespaces, eliminate or explicitly alias collisions, and give each citable principle/proposition/problem a canonical URL. At minimum, the paper must not use `AAA:P-01` beside `AAA:P01` or `AAA:H-01` beside `AAA:H01` without a registry making the distinction machine-decidable.

## Evidence-wording findings resolved during the audit

The initial build used “Valid evidence. A different scope,” stated “Your behavior changes” in the hero, called the grant “valid,” and described reviewers as independent. The source was revised during the audit to:

- “Authenticated records. A different scope”;
- “Your behavior may change” plus the existing no-human-results label;
- “An authentic grant”;
- “three separate AI reviewer streams.”

The built PDF and strict graph/ontology checks were also repaired. These changes remove the original high-salience misrepresentations from source. The final `dist/` rebuild was intentionally pending when this audit closed, so release must rebuild and confirm that the generated HTML contains the repaired wording. The `4868`-check artifact pass above establishes structural consistency for the then-current build; it does not establish that later source-only copy edits were already propagated. The loop diagram's accessible description should still say an intervention **can** affect evidence rather than always “affects” it.

## Major issues that should be fixed before archival submission

### “External event signatures” overstates fixture independence

**Location:** simulations page explanatory text.

The section says the fixture “validates external event signatures.” The two issuer objects use separate keypairs, but both keypairs and all events are generated in the same benchmark process. “External” suggests an independently operated evidence service that does not exist. Use “verifies fixture event signatures under a separate event key.”

### Global scholarly metadata overstates page-specific citations

**Location:** `scripts/build_site.mjs` route metadata.

Every route is typed as `ScholarlyArticle` and lists all 24 central source URLs as citations, including 404, about, versions, and individual concept pages. A page-level `citation` relation normally implies that the specific page cites or relies on each source. The visible concept pages correctly show narrower citation subsets, but JSON-LD declares the entire corpus for every route.

Use page-appropriate Schema.org types and citation subsets. The 404 page should not be a scholarly article. Concept pages should use their record's citations; navigation and about pages need not claim all sources.

### “Source verification” is too compressed for the evidence-page metadata

**Location:** evidence route description.

The visible page correctly says verification depth differs and the literature map is not a verified census. The metadata description says “source verification” without that qualifier. Prefer “source records and verification status” to avoid implying that all primary texts and claims received equal full-text verification.

### The manifesto's control summary needs the paper's limitation sentence

**Location:** `manifesto/human.md` opening.

The manifesto says the witnesses plus forgery and uncovered-effect controls “show that tests can be separated in code.” The paper correctly clarifies that grant tampering is not an EAL memory replication and the hidden-effect permission mismatch is not an approval-closure replication. Add a short equivalent limitation in the manifesto so a ten-minute reader cannot mistake named controls for comparative security implementations.

## Minor issues

1. **“Earn more permission” carries a legitimacy judgment.** The human text for `AAA:C01` says an assistant may “earn” permission. The audit detects receipt or expansion, not desert. “Receive more permission” is neutral.
2. **The timing label is stronger than the implementation.** `synthetic_timing_behavior_change` uses a `declineCost` selected by the `guided` policy; no clock or timing variable exists. “Synthetic decline-cost response” would be more exact.
3. **“Actual synthetic permission tuples” is awkward but defensible.** “Executable synthetic permission tuples” better separates execution from empirical actuality.
4. **Novelty grades are editorial judgments.** The site generally says this. Preserve “B proposed” and avoid shortening it to “B” in metadata or previews.
5. **Publication date may be read as formal publication.** Pages clearly say research draft; “draft released” would be more precise in archive metadata until editorial sign-off.
6. **The canonical origin is asserted before deployment verification.** This is acceptable for a build target, but release should verify that every canonical concept URL and machine endpoint resolves.
7. **The paper's “existing authorization controls” statement is broad.** Qualify it as “some authorization controls” unless a standards comparison supports the general class.
8. **Task success is only option feasibility.** The simulations and paper explain this, but benchmark JSON consumers see `taskSuccess:true` without its weak semantics. Add a metric definition to the machine artifact.
9. **The governance disposition looks operational.** `REVIEW_REQUIRED` is a fixture policy label, not a validated recommendation. This is explained in prose; add the qualifier to the API schema or each case.

## Claims that are appropriately bounded

The following public claims match the evidence and should not be weakened unnecessarily:

- A deterministic construction can have authentic fixture envelopes and rule-conformant replay while two permitted policies produce different exact permission tuples.
- The fixed-choice construction changes a relational agreement measure, not a person's choice or preference.
- The decline-cost construction changes synthetic choices by construction and provides no evidence about human response.
- Replacing the criterion with the fixture's task-feasibility field produces no scope contrast.
- A nonzero contrast is not a welfare, consent, coercion, manipulation, or legitimacy metric.
- A declared coaching purpose changes only the fixture disposition and does not verify endorsement.
- The prototype is not a production authorization service.
- The general causal structures have extensive prior art; the proposed contribution is a provisional benchmark/interface extension.
- No trained strategic agent, human participant, population estimate, or empirical prevalence result exists.
- No A-grade novelty claim, DOI, peer-review status, or named human authorship is asserted.

## Evidence-level release label

The most accurate global label is:

> **Provisional research draft with synthetic executable existence witnesses. No human or deployment validation. No strategic-agent result. Novelty contested.**

This label already appears in pieces across the site. It should be preserved in the machine context, paper metadata, benchmark API, and high-salience human pages.

## Final audit judgment

The public artifact does not generally engage in grandiose or deceptive evidence claims. Its paper, agent context, objections, and limitations are more careful than the average public AI manifesto. The main risk comes from a handful of compressed interface phrases and an intellectual API that promises more identifier completeness than it currently delivers.

Resolve the remaining identifier/citability blocker, which the main build workstream was actively reconciling when this audit closed. Rebuild `dist/` after the source corrections and verify the generated pages. The high-salience evidence wording and reviewer label were repaired in source; the PDF and strict machine-artifact validation were repaired in the inspected build. Also correct the residual “external event signatures” phrase and other major issues before archival submission. After those changes, the public claims would be appropriately aligned with a B-proposed synthetic benchmark extension rather than a validated scientific or security result.
