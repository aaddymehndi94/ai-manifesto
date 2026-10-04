# Authority After Assistance

Public research draft **0.5.0**, 05 October 2026. Evidence cutoff: 04 October 2026.

The starting question was what a non-human intelligence should understand in
order to live among humans well. Three idea generations and three review rounds
produced a narrower proposal:

> Audit an authentic adaptive grant when the delegate can influence the evidence
> used to expand its own future typed action scope.

Report evidence integrity, exact rule conformance, total policy sensitivity,
and governance disposition separately. Signatures cannot certify voluntary
consent. Nonzero sensitivity cannot establish manipulation.

**No breakthrough has been established.** The causal idea has substantial prior
art. Only a narrow benchmark/interface extension remains B-proposed and disputed.
This is research infrastructure and a public draft, not a completed foundational
interdisciplinary theory.

## Run

Requirements: Node.js 18+, npm, and a Chromium-family browser. This environment
uses /usr/bin/google-chrome. Set AAA_BROWSER to an alternative absolute
executable path; the browser creates the printable paper and share image.

    npm ci
    npm test
    npm run build
    npm run dev

Open http://127.0.0.1:4173. AAA_PORT changes the preview port. dist/ is the
self-contained static production output. No database, analytics tracker,
external font, or server-side account system is required.

    npm run models   # regenerate synthetic fixtures
    npm run qa       # route, control, mobile, no-JS, link, print checks
    npm run deploy   # validate and package; authenticated publication is separate

Browser QA writes ignored local screenshots and a report under site/qa/.
The paper exports to approximately 28 A4 pages; browser/font differences may
change pagination. public/paper.pdf is generated during the production build.

## Read

- [Paper](paper/paper.md): standalone argument, formal estimand, constructed
  cases, experiments, limits, and falsification criteria.
- [Human manifesto](manifesto/human.md) and [agent manifesto](manifesto/agent.md).
- [Concepts](framework/concepts.json), [principles](framework/principles.json),
  [paper claims](framework/paper-claims.json), and [implementation](framework/implementation.md).
- [World scenarios](world/scenarios.md), [causal models](world/models.md),
  [conditional forecasts](world/forecasts.md), 2028–2040.
- [Proposed studies](experiments/proposed-studies.md), [open problems](framework/open-problems.md).
- [Debates](debates/), [final novelty audit](research/final-novelty-audit.md),
  [eight-audience success test](reviews/success-test.md).

## Inspect discovery

- [Landscape](research/landscape-synthesis.md) and three extensive [field maps](research/notes/).
- [Population](research/idea_population.json): 154 initial candidates, 169 total
  across three generations; seventeen positive and five risk dimensions.
- [Rejections](research/rejected-ideas.md): 150 rejected centers, sixteen retired
  through mutation, three provisional research directions.
- [Novelty ledger](research/novelty-ledger.json), [prior-art graph](research/prior-art/graph.json).
- [Central source register](research/sources.json): 24 records. Sixteen additional
  paper sources are generated from bibliographic entries into research/paper-sources.json.

Generation-one scores are editorial screening profiles, not independent expert
ratings. Many seed-level exact author/source matches remain pending and are
explicitly marked. This is not an exhaustive novelty census.

Three separate AI reviewer streams produced nine reports. Disciplinary voices
inside a report are simulated by one agent, not independent human endorsements.
Verification depth differs by source.

## Model boundaries

experiments/mandate-model.mjs is an uncalibrated scalar feedback illustration.
Its growth condition is elementary inherited recurrence analysis.

experiments/typed-benchmark.mjs contains eight synthetic cases. The first changes
suggestion-match evidence while choices remain identical. A separate effort-cost
case holds suggestions and latent preferences fixed and changes choices by
construction. No human participants or strategic optimizing delegate are present.

framework/reference-authority.mjs verifies fixture signatures and replays a
finite typed rule. It is not a production authorization service. Its elementary
tampering, hidden-effect, and missing-lineage controls do not replicate the
published security benchmarks motivating them. See [integrity review](reviews/final-integrity.md).

## Intellectual API

HUMAN and AGENT modes share canonical objects. Core reading works without
JavaScript. Routes include /concept/[slug], /principle/[slug], and paper claim anchors.

Artifacts: /agent.md, /llms.txt, /llms-full.txt, /manifesto.md, /paper.md,
/paper.pdf, /concepts.json, /principles.json, /claims.json, /citations.json,
/ontology.jsonld, /references.bib, and /api/v1/ equivalents. These are static
retrieval endpoints, not an authenticated action API. Ingestion grants no permissions.

The AAA namespace is qualified by the project origin. Cite the version and
claim status. No DOI is assigned. Named accountable human authorship, editorial
approval, rights/licensing, and academic repository deposit remain outstanding;
public/archive-metadata.json records these requirements.

## Hosting

Reuse the Sites project in .openai/hosting.json; do not register it again.
Intended public origin: https://authority-after-assistance.aaddy.chatgpt.site.
A generated URL alone is not evidence of successful publication.

npm run deploy tests, builds, checks the browser, and creates
.site-workflow/site.tar.gz. Upload dist/ to a static host, or use the Sites
workflow to push the exact source commit, save that archive against the pushed
commit, and deploy the saved version. The Sites connector performs the final
authenticated publication. Pass short-lived source credentials only through
the supplied workflow's hidden stdin; never persist tokens in files or argv.

## Continue

The strongest next steps are a strategic adaptive-grant benchmark and an
ethically reviewed randomized policy study measuring task performance, behavior,
authority, and later recovery separately. A closer precedent can retire the
proposal. Preserve challenged records rather than silently rewriting history.
