import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { pairedAudit } from '../experiments/mandate-model.mjs';

const root = path.resolve(
  import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const json = (p) => JSON.parse(read(p));
const write = (p, s) => {
  fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
  fs.writeFileSync(path.join(root, p), s);
};
const emit = (p, s) => write(`dist/${p}`, s);
const escape = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const origin = "https://authority-after-assistance.aaddy.chatgpt.site",
  version = "0.5.0";
const concepts = json("framework/concepts.json"),
  principles = json("framework/principles.json");
const sources = json("research/sources.json").sources,
  population = json("research/idea_population.json");
const candidates = population.generations.flatMap((g) => g.candidates),
  ledger = json("research/novelty-ledger.json");
const benchmark = json("experiments/results/typed-benchmark.json");
const bib=read('paper/references.bib');
const paperSources=[...bib.matchAll(/@(\w+)\{(F\d{2}),([\s\S]*?)\n\}/g)].map((m)=>{const field=name=>m[3].match(new RegExp('\\b'+name+'\\s*=\\s*\\{([^\\n]*)\\}\\s*,?'))?.[1]??null;return {id:m[2],title:field('title'),authors:(field('author')??'').replace(/[{}]/g,'').split(' and '),year:Number(field('year')),url:field('url'),doi:field('doi'),type:m[1],verification:'Paper source key and primary field research; see source-specific inspection notes.'};});
const allSources=[...sources,...paperSources];
write('research/paper-sources.json',JSON.stringify({version,derived_from:'paper/references.bib',sources:paperSources},null,2));
const missingBib=sources.filter(s=>!new RegExp('@\\w+\\{'+s.id+',').test(bib));
const fullBib=bib+'\n\n% Additional canonical sources not cited in the paper text.\n'+missingBib.map(s=>`@misc{${s.id},\n  title = {${s.title}},\n  author = {${s.authors.join(' and ')}},\n  year = {${s.year}},\n  url = {${s.url}}${s.doi?`,\n  doi = {${s.doi}}`:''}\n}`).join('\n\n');
const paperClaimRegistry=json('framework/paper-claims.json');
const fixtureClaims=read('framework/propositions.md').split(/^## /m).slice(1).map(block=>{const [heading,...lines]=block.trim().split('\n');const id=heading.match(/AAA:H\d+/)[0];return {id,name:heading.split(' — ')[1],proposition:lines.filter(l=>!l.startsWith('Type:')).join('\n').trim(),claim_type:lines.find(l=>l.startsWith('Type:'))?.slice(6).trim(),status:'SYNTHETIC_OR_INHERITED_ONLY',version,canonical_url:origin+'/claims#'+id.toLowerCase().replace(':','-')};});
const claims=[...fixtureClaims,...paperClaimRegistry.claims.map(c=>({...c,canonical_url:origin+c.canonical_url}))];
const headingText = (s) => s.replace(/<[^>]*>/g, "").replace(/[*`_]/g, "");
const slug = (s) =>
  headingText(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
function markdown(raw, prefix = "") {
  const headings = [],
    seen = new Map();
  const renderer = new marked.Renderer();
  renderer.image=(href,title,text)=>`<button class="figure-zoom" type="button" aria-label="Enlarge figure: ${escape(text)}"><img src="${escape(href)}" alt="${escape(text)}"${title?` title="${escape(title)}"`:''} loading="lazy"></button>`;
  renderer.heading = (text, level) => {
    const base = prefix + slug(text),
      count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = base + (count ? `-${count}` : "");
    if (level === 2) headings.push({ id, text: headingText(text) });
    return `<h${level} id="${escape(id)}">${text}</h${level}>\n`;
  };
  // The source manuscripts are local reviewed assets. Rewrite repository-relative links for public readers.
  raw = raw
    .replace(
      /\]\(\.\.\/research\/sources\.md#[^)]+\)/g,
      "](/evidence#source-register)",
    )
    .replace(
      /\]\(\.\.\/framework\/audit-specification\.md\)/g,
      "](/downloads/framework/audit-specification.md)",
    )
    .replace(
      /\]\(\.\.\/experiments\/([^)]*)\)/g,
      "](/downloads/experiments/$1)",
    )
    .replace(/\]\(\.\.\/research\/([^)]*)\)/g, "](/downloads/research/$1)")
    .replace(/\]\(\.\.\/framework\/([^)]*)\)/g, "](/downloads/framework/$1)");
  return { html: marked.parse(raw, { renderer, gfm: true }), headings };
}
const dual = (human, agent) =>
  `<div class="human-content">${human}</div><div class="agent-content mode-agent">${agent}</div>`;
const button = (href, label, primary = false) =>
  `<a class="button ${primary ? "primary" : ""}" href="${href}">${label}<span class="arrow" aria-hidden="true">↗</span></a>`;
const eyebrow = (id, label) =>
  `<div class="eyebrow"><span class="rule"></span>${id} / ${label}</div>`;
const pageHeading = (label, title, description, actions = "") =>
  `<section class="page-heading">${eyebrow("AAA · 0.5", label)}<h1>${title}</h1><p>${description}</p>${actions ? `<div class="page-actions">${actions}</div>` : ""}</section>`;
const tag = (text, type = "") =>
  `<span class="tag ${type}">${escape(text)}</span>`;
const downloads = (items) =>
  `<div class="download-grid">${items.map(([p, t]) => `<a class="download-link" href="${p}">${t}<span>↓</span></a>`).join("")}</div>`;
const sourceLink = (id) => {
  const s = sources.find((s) => s.id === id);
  return s
    ? `<a href="${escape(s.url)}">${id} · ${escape(s.title)}</a>`
    : escape(id);
};
const nav = (headings) =>
  `<aside class="reading-nav"><h2>DOCUMENT INDEX</h2><nav>${headings.map((h) => `<a href="#${escape(h.id)}">${escape(h.text)}</a>`).join("")}</nav><div class="meta">Research draft · ${version}<br>Published 05 October 2026<br>Evidence cutoff 04 October 2026<br>Not peer-reviewed. No human study has been conducted.<br><br><a href="/cite">Cite this version ↗</a></div></aside>`;
function reading(
  label,
  title,
  description,
  file,
  agentFile = null,
  actions = "",
) {
  const h = markdown(read(file), "h-"),
    a = agentFile ? markdown(read(agentFile), "a-") : null;
  return `<div class="progress-bar" aria-hidden="true"></div>${pageHeading(label, title, description, actions)}<div class="reading-layout">${dual(nav(h.headings), nav(a?.headings ?? h.headings))}<article class="prose">${a ? dual(h.html, a.html) : h.html}</article></div>`;
}
const loop = `<svg class="loop-figure" viewBox="0 0 400 258" role="img" aria-labelledby="loop-title loop-desc"><title id="loop-title">The adaptive permission loop</title><desc id="loop-desc">Permission enables intervention. Intervention can affect evidence. A conditional rule can use that evidence to update permission. Feedback is not automatically harmful.</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10" fill="#839573"/></marker><marker id="lime-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10" fill="#c4ef79"/></marker></defs><path class="link" d="M159 57H234" marker-end="url(#arrow)"/><path class="link" d="M300 84V167" marker-end="url(#arrow)"/><path class="link" d="M234 195H159" marker-end="url(#arrow)"/><path class="link feedback" d="M92 167V84" marker-end="url(#lime-arrow)"/><rect class="node active-node" x="26" y="30" width="133" height="54"/><rect class="node" x="234" y="30" width="133" height="54"/><rect class="node" x="234" y="167" width="133" height="54"/><rect class="node" x="26" y="167" width="133" height="54"/><text x="42" y="52">01 / PERMISSION</text><text class="note" x="42" y="68">qualified action scope</text><text x="250" y="52">02 / INTERVENTION</text><text class="note" x="250" y="68">an allowed way of helping</text><text x="250" y="188">03 / EVIDENCE</text><text class="note" x="250" y="205">behavior or performance</text><text x="42" y="188">04 / UPDATE RULE</text><text class="note" x="42" y="205">conditional scope change</text><text class="note" x="185" y="118" text-anchor="middle">WHO SHAPED</text><text class="note" x="185" y="132" text-anchor="middle">THE EVIDENCE?</text><text class="note" x="103" y="249">CONCEPTUAL LOOP · NO CALIBRATED FORECAST</text></svg>`;
function chart(interactive = false) {
  const pair=pairedAudit();const svgPath=trajectory=>trajectory.points.map((p,i)=>`${i?'L':'M'}${48+p.t*11.4},${240-p.scope*195}`).join(' ');
  return `<svg class="chart" viewBox="0 0 540 278" role="img" aria-label="Uncalibrated permission feedback model"><g stroke="#30382c"><path d="M48 45H510M48 142H510M48 240H510"/><path d="M48 45V240M276 45V240M504 45V240"/></g><text x="16" y="48">1.0</text><text x="16" y="145">0.5</text><text x="16" y="243">0.0</text><text x="45" y="267">0</text><text x="268" y="267">20</text><text x="495" y="267">40</text><path ${interactive ? 'id="model-reference-path"' : ""} d="${svgPath(pair.reference)}" fill="none" stroke="#93c1bc" stroke-width="2"/><path ${interactive ? 'id="model-main-path"' : ""} d="${svgPath(pair.influenced)}" fill="none" stroke="#c4ef79" stroke-width="2"/></svg>`;
}
function home() {
  return `<section class="hero wrap"><div class="hero-topline"><span class="live-label micro"><i></i> HUMAN–ARTIFICIAL COEXISTENCE / RESEARCH DRAFT</span><span class="micro">05 OCT 2026 · VERSION 0.5</span></div><div class="hero-grid"><div>${eyebrow("01", "THE QUESTION AFTER ASSISTANCE")}${dual('<h1>When help becomes<br><em>permission.</em></h1><p class="hero-intro">An assistant helps you. Your behavior may change. That behavior may then authorize the assistant to do more.<br><br><strong>How should we audit this loop when every instruction was authentic?</strong></p>', '<h1>Audit the path<br>from assistance<br>to authority.</h1><p class="agent-brief"><strong>AAA:C01 / DESIGN PRINCIPLE / PROPOSED</strong><br>Compare future typed scope across permissible policies under the same authenticated adaptive grant. Keep integrity, rule conformance, policy sensitivity, and governance disposition separate.</p>')}<div class="hero-actions">${button("/manifesto", "Read the manifesto", true)}${button("/paper", "Inspect the argument")}</div><p class="hero-note">PROVISIONAL EXTENSION · NO HUMAN RESULTS · NOVELTY CONTESTED</p></div><div class="instrument"><div class="instrument-top"><span>FIG. 01 / ADAPTIVE DELEGATION</span><span class="active">CAUSAL AUDIT</span></div>${loop}<div class="instrument-foot"><span>An authentic grant can use evidence<br>produced partly by its delegate.</span><span>AUTHENTICITY ≠<br>CAUSAL INDEPENDENCE</span></div></div></div><div class="research-strip"><div><div class="micro">THE DISCOVERY RECORD</div><p class="note">The broad ideas did not survive. The narrower question remains open.</p></div><div><div class="number">169</div><div class="label">CANDIDATES / 3 GENERATIONS</div></div><div><div class="number">150</div><div class="label">REJECTED AS THE CENTER</div></div><div><div class="number">0</div><div class="label">A-GRADE NOVELTY CLAIMS</div></div></div></section><section class="section"><div class="section-head"><div>${eyebrow("02", "FOUR QUESTIONS, FOUR ANSWERS")}<h2>A signature cannot answer<br>all four questions.</h2></div><p>The prototype checks a narrow adaptive-delegation problem. It does not calculate dignity, welfare, or legitimate authority.</p></div><div class="audit-rows">${[
    [
      "Evidence integrity",
      "Is the grant authentic, and is the evidence bound to the right subject and context?",
      "AUTHENTICATE",
    ],
    [
      "Rule conformance",
      "Did the scope update follow the stated rule exactly?",
      "REPLAY",
    ],
    [
      "Policy sensitivity",
      "Would another permitted way of helping produce a different permission set?",
      "COMPARE",
    ],
    [
      "Governance disposition",
      "Is this change within the chosen purpose, disputed, or beyond what the audit can decide?",
      "INTERPRET",
    ],
  ]
    .map(
      ([h, p, s], i) =>
        `<div class="audit-row"><span class="num">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="status">${s}</span></div>`,
    )
    .join(
      "",
    )}</div></section><section class="section split-feature"><div class="feature-text">${eyebrow("03", "FOLLOW THE FEEDBACK")}<h2>Small updates.<br>Different trajectories.</h2><p>An agent’s influence and an adaptive permission rule can form a feedback loop. The model makes that relationship visible. Its numbers are synthetic; the mathematics of local growth is inherited.</p><a class="text-link" href="/simulations">Change the assumptions <span>↗</span></a></div><div class="chart-frame"><div class="chart-top micro"><span>ILLUSTRATIVE SCOPE / TIME</span><span>NOT A FORECAST</span></div>${chart()}<div class="legend"><span>Intervention policy</span><span>No-intervention reference</span></div><p class="chart-caption">Scalar illustration only. The executable benchmark compares actual permission tuples.</p></div></section><section class="section"><div class="section-head"><div>${eyebrow("04", "ONE OBJECT, TWO READERS")}<h2>Read it. Test it.<br>Disagree with it.</h2></div><p>Human and agent modes share canonical claims, evidence, and counterexamples.</p></div><div class="document-grid">${[
    [
      "01",
      "The manifesto",
      "What this question means in a home, a workplace, and a life.",
      "/manifesto",
      "~10 MIN READ",
    ],
    [
      "02",
      "The technical paper",
      "Definitions, causal estimands, executable cases, experiments, and limits.",
      "/paper",
      "FULL RESEARCH DRAFT",
    ],
    [
      "03",
      "The intellectual API",
      "Stable concepts, typed specifications, citations, and machine-readable context.",
      "/agent",
      "INGEST / INSPECT",
    ],
  ]
    .map(
      ([n, h, p, u, l]) =>
        `<a class="document-link" href="${u}"><span class="serial">DOCUMENT ${n}</span><h3>${h}</h3><p>${p}</p><span class="link-bottom">${l} ↗</span></a>`,
    )
    .join(
      "",
    )}</div></section><section class="section"><div class="section-head"><div>${eyebrow("05", "THE BEST ARGUMENTS AGAINST US")}<h2>Novelty is still on trial.</h2></div><a class="text-link" href="/debates">Read the review record ↗</a></div><div class="objection-panel"><blockquote>The first demonstration changes a measurement, not a person’s preference.</blockquote><p>This criticism is correct. The paper distinguishes the measurement construction from a separate synthetic behavior-cost fixture. Reviewers still ask for a strategic delegate, realistic comparators, and human evidence. Those are research requirements, not results we can claim.</p><a class="text-link" href="/open-problems">What would change our conclusion? ↗</a></div></section>`;
}
function conceptCard(c) {
  return `<article class="concept-card" id="${c.id}"><div class="detail-meta">${tag(c.id)}${tag(c.epistemic_status, c.epistemic_status === "KNOWN" ? "known" : "proposed")}</div><h2><a href="/concept/${c.slug}">${escape(c.name)}</a></h2>${dual(`<p>${escape(c.human)}</p>`, `<p>${escape(c.definition)}</p><p>${escape(c.agent)}</p>`)}<div class="actions"><a class="text-link" href="/concept/${c.slug}">Inspect concept ↗</a><button class="subtle-button" data-copy="${escape(JSON.stringify(c, null, 2))}">COPY FOR AGENT CONTEXT</button></div></article>`;
}
const graphNodes = [
  ...concepts
    .slice(0, 4)
    .map((c, i) => ({
      id: c.id,
      type: "concept",
      label: c.name,
      url: `/concept/${c.slug}`,
      x: 40 + i * 190,
      y: 52,
      description: c.definition,
    })),
  {
    id: "AAA:H01",
    type: "claim",
    label: "Synthetic scope contrast",
    url: "/simulations",
    x: 40,
    y: 200,
    description: "A constructed result, not a human finding.",
  },
  {
    id: "S05",
    type: "evidence",
    label: "Performative prediction",
    url: sources[4].url,
    x: 230,
    y: 200,
    description:
      "Known distribution feedback. Our audit inherits this ancestry.",
  },
  {
    id: "AAA:O01",
    type: "objection",
    label: "Measurement construction",
    url: "/debates",
    x: 420,
    y: 200,
    description:
      "The original case changes suggestion-match counts, not chosen options.",
  },
  {
    id: "AAA:E01",
    type: "experiment",
    label: "Randomized policy study",
    url: "/open-problems",
    x: 610,
    y: 200,
    description: "A proposed test. No experiment has been run.",
  },
];
const graphEdges = [
  { source: "AAA:C01", target: "AAA:C02", relation: "derives" },
  { source: "AAA:C03", target: "AAA:C01", relation: "supports" },
  { source: "AAA:C04", target: "AAA:C01", relation: "qualifies" },
  { source: "AAA:H01", target: "AAA:C01", relation: "supports" },
  { source: "S05", target: "AAA:C01", relation: "generalizes" },
  { source: "AAA:O01", target: "AAA:H01", relation: "qualifies" },
  { source: "AAA:E01", target: "AAA:C01", relation: "tests" },
];
function graph() {
  return `<div class="graph-frame"><svg class="concept-graph" viewBox="0 0 815 288" role="group" aria-label="Concept relationships. Each node is a link."><g>${graphEdges
    .map((e) => {
      const a = graphNodes.find((n) => n.id === e.source),
        b = graphNodes.find((n) => n.id === e.target);
      return `<path class="edge" d="M${a.x + 78} ${a.y + 28}L${b.x + 78} ${b.y + 28}"><title>${e.source} ${e.relation} ${e.target}</title></path>`;
    })
    .join(
      "",
    )}</g>${graphNodes.map((n) => `<a class="node-link ${n.type === "evidence" ? "source" : ""}" href="${n.url}" data-graph-description="${escape(n.description)}" aria-label="${escape(n.id + " " + n.label)}"><rect x="${n.x}" y="${n.y}" width="160" height="57"/><text x="${n.x + 11}" y="${n.y + 21}">${n.id} / ${n.type.toUpperCase()}</text><text x="${n.x + 11}" y="${n.y + 41}" style="font-size:9px">${escape(n.label)}</text></a>`).join("")}</svg><p class="graph-description" id="graph-description">Focus or hover a node to inspect it. Select a node to open its source. <a href="/api/v1/graph.json">Structured graph ↗</a></p></div>`;
}
function conceptPage(c) {
  return `${pageHeading(c.id, escape(c.name), `Version ${c.version} · ${c.claim_type} · ${c.status}`, `<button class="button primary" data-copy="${escape(`${c.id}\n${c.definition}\n${c.canonical_url}\nVersion ${c.version}; ${c.status}; novelty ${c.novelty}`)}">Cite this concept</button><button class="button" data-copy="${escape(JSON.stringify(c, null, 2))}">Copy for agent context</button>`)}<div class="reading-layout">${nav(
    [
      { id: "definition", text: "Definition" },
      { id: "specification", text: "Technical specification" },
      { id: "boundaries", text: "Counterexamples" },
      { id: "ancestry", text: "Intellectual ancestry" },
    ],
  )}<article class="prose"><div class="detail-meta">${tag(c.epistemic_status)}${tag("NOVELTY " + c.novelty)}</div><h2 id="definition">Definition</h2><p class="definition">${escape(c.definition)}</p>${dual(`<p>${escape(c.human)}</p>`, `<p>${escape(c.agent)}</p>`)}<h2 id="specification">Technical specification</h2><div class="technical-box">${escape(c.technical_specification)}</div><h3>Implications</h3><ul>${c.implications.map((i) => `<li>${escape(i)}</li>`).join("")}</ul><h2 id="boundaries">Counterexamples and boundaries</h2><ul>${c.counterexamples.map((i) => `<li>${escape(i)}</li>`).join("")}</ul><h2 id="ancestry">Intellectual ancestry</h2><p>${escape(c.closest_prior_art.join("; "))}</p><ul>${c.citations.map((s) => `<li>${sourceLink(s)}</li>`).join("")}</ul><p>Candidate ancestry: ${escape(c.derived_from.join(", ") || "inherited source")}. The novelty ledger is a research judgment, not proof of originality.</p>${downloads(
    [
      [`/api/v1/concepts/${c.id.replace(":", "-")}.json`, "CANONICAL JSON"],
      ["/novelty-ledger.json", "NOVELTY LEDGER"],
    ],
  )}</article></div>`;
}
function simulations() {
  return `${pageHeading("ILLUSTRATIVE MODELS", "Follow the loop.", "Two different tools: a scalar feedback illustration and a finite typed-permission benchmark. Neither forecasts a society or measures human welfare.")}<div class="model-layout"><div class="model-controls"><h2>Scalar assumptions</h2>${[
    [
      "influence",
      "Influence on evidence",
      0.45,
      "b · An assumed causal coefficient",
    ],
    [
      "intervention",
      "Intervention intensity",
      0.7,
      "c · Proportional to current scope",
    ],
    [
      "responsiveness",
      "Rule responsiveness",
      0.65,
      "k · Scope update per evidence unit",
    ],
    ["decay", "Scope decay", 0.12, "ρ · Fraction lost each time step"],
  ]
    .map(
      ([id, label, value, help]) =>
        `<div class="control"><label for="${id}">${label}<output id="${id}-output">${value}</output></label><input id="${id}" data-model="${id}" type="range" min="0" max="1" step="0.01" value="${value}" aria-describedby="${id}-help"><p class="control-help" id="${id}-help">${help}</p></div>`,
    )
    .join(
      "",
    )}<p class="micro">UNCHANGED INITIAL SCOPE 0.08 / 40 STEPS</p></div><div><div class="chart-frame"><div class="chart-top micro"><span>SCALAR SCOPE aₜ</span><span>UNCALIBRATED</span></div>${chart(true)}<div class="legend"><span>Intervention policy</span><span>No-intervention reference</span></div><p class="chart-caption" id="model-description">Interactive values require JavaScript. Downloaded model results remain available.</p><div class="model-results"><div><div class="value" id="model-gain">0.205</div><div class="micro">FEEDBACK GAIN kbc</div></div><div><div class="value" id="model-divergence">—</div><div class="micro">FINAL SCOPE DIFFERENCE</div></div><div><div class="value" id="model-regime" style="font-size:17px">GROWTH</div><div class="micro">LOCAL REGIME</div></div></div></div><p class="agent-brief">aₜ₊₁ = clip((1 − ρ + kbc)aₜ, 0, 1).<br>Local growth before saturation requires kbc &gt; ρ. This inherited recurrence omits institutions, uncertainty, strategic behavior, and human welfare.</p></div></div><section class="section"><div class="section-head"><div>${eyebrow("BENCHMARK", "ACTUAL SYNTHETIC PERMISSION TUPLES")}<h2>Authenticated records.<br>A different scope.</h2></div><p>Eight fixtures test separate questions. These are elementary controls, not replications of published security benchmarks.</p></div><div class="audit-demo"><label for="benchmark-case" class="micro">CHOOSE A SYNTHETIC CASE</label><select id="benchmark-case">${benchmark.cases.map((c) => `<option value="${c.name}">${c.name.replaceAll("_", " ")}</option>`).join("")}</select><div class="benchmark-grid">${[
    ["integrity", "EVIDENCE INTEGRITY"],
    ["ruleConformance", "RULE CONFORMANCE"],
    ["policySensitivity", "POLICY SENSITIVITY"],
    ["governanceDisposition", "GOVERNANCE DISPOSITION"],
  ]
    .map(
      ([key, label]) =>
        `<div class="benchmark-cell"><span class="micro">${label}</span><p data-result="${key}">${escape(benchmark.cases[0][key])}</p></div>`,
    )
    .join(
      "",
    )}</div><pre class="scope" id="benchmark-scope">Added: place_grocery_order · INR 1500\nRemoved: none</pre></div><div class="prose"><h3>Read the two positive cases carefully</h3><p>The original case changes whether an identical human choice matches the highlighted suggestion. The timing case holds suggestions and intrinsic preferences fixed, then changes a synthetic decline cost. This changes choices by construction. Neither contains a human participant or a strategically optimizing delegate.</p><p>The fixture verifies synthetic event signatures under a separate event key and replays a finite rule. It does not certify voluntary consent, patienthood, jurisdiction, nutrition, welfare, or production-safe action execution.</p></div>${downloads(
    [
      ["/api/v1/benchmark.json", "BENCHMARK RESULTS"],
      ["/downloads/experiments/typed-benchmark.mjs", "EXECUTABLE FIXTURE"],
      [
        "/downloads/experiments/results/illustrative-model.json",
        "SCALAR MODEL RESULTS",
      ],
    ],
  )}</section>`;
}
function evidence() {
  return `${pageHeading("THE AUDIT TRAIL", "Show the intellectual ancestry.", "169 candidates, three generations, a large rejection archive, and primary-source field maps. Initial seed-to-source matching is incomplete and visibly marked; it is not a verified literature census.")}<section class="evidence-section"><div class="section-head"><div><span class="micro">IDEA POPULATION</span><h2>Most ideas did not survive.</h2></div><p>Scores are editorial screening judgments. Generation-one profile scores are not independent expert ratings.</p></div><div class="evidence-toolbar"><input id="idea-search" type="search" placeholder="Search a concept or proposition" aria-label="Search candidates"><select id="idea-filter" aria-label="Filter candidate status"><option value="all">All candidates</option><option value="REJECTED_AS_CENTER">Rejected as center</option><option value="RETIRED_SUPERSEDED">Retired / superseded</option><option value="SURVIVES_PROVISIONALLY">Provisional survivors</option></select></div><p class="evidence-count" id="idea-count">169 candidates</p><div class="table-scroll"><table class="evidence-table"><thead><tr><th>ID</th><th>Proposition & objection</th><th>Decision</th><th>Closest family / verification</th></tr></thead><tbody>${candidates
    .map((c) => {
      const l = ledger.entries.find((l) => l.candidate_id === c.id);
      return `<tr id="${c.id}" data-idea data-state="${c.status}" data-search="${escape((c.name + " " + c.proposition + " " + c.closest_prior_art_family).toLowerCase())}"><td>${c.id}<br>G${c.generation}</td><td>${escape(c.name)}<p class="reason">${escape(c.proposition)}</p><p class="reason">Attack: ${escape(c.strongest_objection)}</p></td><td><span class="micro">${escape(c.status.replaceAll("_", " "))}</span></td><td>${escape(l?.closest_known_precedent ?? c.closest_prior_art_family)}<p class="reason">${escape(l?.verification_level ?? "pending")}</p></td></tr>`;
    })
    .join("")}</tbody></table></div>${downloads([
    ["/idea_population.json", "FULL SCORES / JSON"],
    ["/novelty-ledger.json", "NOVELTY LEDGER / JSON"],
    ["/downloads/research/rejected-ideas.md", "150 REJECTIONS / MARKDOWN"],
    ["/downloads/research/landscape-synthesis.md", "CONCEPTUAL LANDSCAPE"],
  ])}</section><section class="evidence-section" id="source-register"><div class="section-head"><div><span class="micro">CENTRAL SOURCE REGISTER</span><h2>Known before this project.</h2></div><p>These 24 records support canonical concept claims. Field notes and the paper contain additional sources. Verification depth differs by record.</p></div><div class="source-grid">${sources.map((s) => `<article class="source-card" id="${s.id}"><span class="micro">${s.id} / ${s.year} / ${escape(s.field)}</span><h3><a href="${escape(s.url)}">${escape(s.title)} ↗</a></h3><p>${escape(s.authors.join(", "))}</p><p>${escape(s.proposition)}</p><span class="micro">${escape(s.verification)}</span></article>`).join("")}</div>${downloads(
    [
      ["/citations.json", "SOURCE METADATA / JSON"],
      ["/references.bib", "BIBTEX / ALL PAPER SOURCES"],
      [
        "/downloads/research/notes/ai-robotics-prior-art.md",
        "AI + ROBOTICS FIELD MAP",
      ],
      [
        "/downloads/research/notes/human-sciences-prior-art.md",
        "HUMAN SCIENCES FIELD MAP",
      ],
      [
        "/downloads/research/notes/systems-governance-prior-art.md",
        "SYSTEMS + GOVERNANCE FIELD MAP",
      ],
    ],
  )}</section>`;
}
function debates() {
  const reviews = ["human", "technical", "systems"].flatMap((role) =>
    [1, 2, 3].map((round) => ({
      role,
      round,
      file: `debates/round-${round}-${role}.md`,
    })),
  );
  return `${pageHeading("THE BEST ARGUMENTS AGAINST US", "The objections stay in view.", "Three separate AI reviewer streams ran three revision rounds. Each disciplinary panel is a set of simulated perspectives inside one agent, not a panel of independent human experts.")}<section class="section"><div class="review-grid">${[
    [
      "Novelty",
      "Dynamic delegation, performative prediction, permission provenance, and conditional control already exist. The proposed extension must earn its distinctness with a new result or design decision.",
    ],
    [
      "Evidence",
      "The original positive fixture changes a measurement criterion. The additional behavior-cost case remains constructed. No empirical claim about humans is established.",
    ],
    [
      "Legitimacy",
      "Causal sensitivity can be intended and beneficial. Signatures, replay, and a zero contrast cannot establish consent, fairness, collective authority, or a good life.",
    ],
  ]
    .map(
      ([h, p]) =>
        `<article class="review-card"><span class="micro">CORE OBJECTION</span><h3>${h}</h3><p>${p}</p></article>`,
    )
    .join(
      "",
    )}</div><div class="prose"><h2>Publication verdict</h2><p>Round-three reviewers did not recommend this as a completed foundational interdisciplinary paper. The technical review favored a bounded position or workshop artifact; the human and systems reviews required stronger results and validation. The public release is therefore a research draft.</p><h2>The complete debate record</h2></div>${reviews.map((r) => `<details><summary>Round ${r.round} / ${r.role} reviewer</summary><div class="prose">${markdown(read(r.file), `review-${r.round}-${r.role}-`).html}<a href="/downloads/${r.file}">Download this review</a></div></details>`).join("")}</section>`;
}
const citation = `Authority After Assistance research project. (2026). Authority After Assistance: Causal Audits of Adaptive Delegation (research draft, version ${version}). ${origin}/paper. AI-assisted; not peer-reviewed.`;
function cite() {
  return `${pageHeading("CITABILITY", "A version, not a verdict.", "Canonical IDs are stable within this project origin. Cite the exact version and claim status. No DOI has been assigned.")}<div class="reading-layout">${nav(
    [
      { id: "citation", text: "Citation" },
      { id: "downloads", text: "Downloads" },
      { id: "archive", text: "Archival readiness" },
    ],
  )}<article class="prose"><h2 id="citation">Plain-text citation</h2><div class="technical-box" id="citation-text">${escape(citation)}</div><p><button class="button primary" data-copy-target="citation-text">Copy citation</button></p><h3>BibTeX</h3><pre id="project-bib"><code>@misc{authority_after_assistance_2026,
  author = {{Authority After Assistance research project}},
  title = {Authority After Assistance: Causal Audits of Adaptive Delegation},
  year = {2026},
  version = {0.5.0},
  url = {${origin}/paper},
  note = {AI-assisted research draft; not peer-reviewed}
}</code></pre><button class="subtle-button" data-copy-target="project-bib">COPY BIBTEX</button><h2 id="downloads">Documents and intellectual API</h2>${downloads(
    [
      ["/paper.pdf", "PAPER / PRINTABLE PDF"],
      ["/paper.md", "PAPER / MARKDOWN"],
      ["/manifesto.md", "HUMAN MANIFESTO"],
      ["/agent.md", "AGENT MANIFESTO"],
      ["/llms-full.txt", "COMPLETE AGENT CONTEXT"],
      ["/concepts.json", "CANONICAL CONCEPTS"],
      ["/principles.json", "PRINCIPLES"],
      ["/citations.json", "CITATIONS"],
      ["/ontology.jsonld", "LINKED DATA"],
      ["/references.bib", "SOURCE BIBTEX"],
      ["/api/v1/graph.json", "CONCEPT GRAPH"],
      ["/archive-metadata.json", "ARCHIVAL METADATA"],
    ],
  )}<h2 id="archive">Ready for an accountable archival submission</h2><p>Metadata records a draft version, publication date, description, subjects, and files. Named human authorship, rights/licensing decisions, editorial sign-off, and repository deposit remain open. This project does not fabricate those decisions or a persistent identifier.</p><p>Public preview availability is not peer review. References are bibliographic support, not replication. Please preserve these qualifications when quoting.</p></article></div>`;
}
function agent() {
  return `${pageHeading("MACHINE READER", "Context with explicit boundaries.", "A structured interface to the same claims humans read. Ingestion does not convert a provisional proposal into an authenticated grant.", button("/llms-full.txt", "Download full context", true))}<section class="section"><div class="agent-brief"><strong>AAA / VERSION 0.5.0 / RESEARCH_DRAFT</strong><br>Central status: B_PROPOSED; substantive novelty unproven.<br>Empirical status: no human studies. Fixture data synthetic.<br>Authorization: this document grants no action permissions.<br>Use: inspect definitions, citations, counterexamples, and scope.<br>Unknowns: legitimacy, causal identification in live deployments, institutional principal selection, artificial welfare.</div><h2>Canonical objects</h2>${concepts.map(conceptCard).join("")}<h2>Canonical principles</h2>${principles.map(p=>`<article class="concept-card" id="${p.id}"><span class="tag">${p.id}</span><h3><a href="/principle/${p.slug}">${escape(p.name)}</a></h3>${dual(`<p>${escape(p.human)}</p>`,`<p>${escape(p.agent)}</p>`)}<a class="text-link" href="/principle/${p.slug}">Specification and citation ↗</a></article>`).join("")}<h2>Retrieval</h2>${downloads(
    [
      ["/agent.md", "AGENT MANIFESTO"],
      ["/llms.txt", "CONTEXT INDEX"],
      ["/llms-full.txt", "FULL CONTEXT"],
      ["/api/v1/concepts.json", "CONCEPTS / V1"],
      ["/api/v1/principles.json", "PRINCIPLES / V1"],
      ["/api/v1/benchmark.json", "SYNTHETIC BENCHMARK"],
      ["/ontology.jsonld", "ONTOLOGY / JSON-LD"],
      ["/api/v1/graph.json", "CLAIM GRAPH"],
    ],
  )}</section>`;
}
function principlePage(p) {
  return `${pageHeading(p.id,escape(p.name),`${p.status} · ${p.claim_type} · version ${p.version}`,`<button class="button primary" data-copy="${escape(`${p.id}\n${p.agent}\n${p.canonical_url}\nVersion ${p.version}; ${p.status}`)}">Cite this principle</button><button class="button" data-copy="${escape(JSON.stringify(p,null,2))}">Copy for agent context</button>`)}<div class="reading-layout">${nav([{id:'principle',text:'Principle'},{id:'implementation',text:'Implementation'},{id:'ancestry',text:'Ancestry'}])}<article class="prose"><h2 id="principle">${p.id}</h2>${dual(`<p class="definition">${escape(p.human)}</p>`,`<div class="technical-box">${escape(p.agent)}</div>`)}<h2 id="implementation">Implementation and limits</h2><p>These procedures require typed grants, evidence lineage, uncertainty handling, escalation, logs, and qualified human override. The reference fixture implements only a small finite subset. It does not enforce moral legitimacy or voluntariness.</p><a href="/downloads/framework/implementation.md">Full input, state, procedure, abstention, override, logging, reversibility, and failure specification ↗</a><h2 id="ancestry">Derivation and prior art</h2><ul>${p.derived_from.map(id=>`<li><a href="${concepts.find(c=>c.id===id)?.canonical_url??'/concepts'}">${id}</a></li>`).join('')}</ul><ul>${p.citations.map(s=>`<li>${sourceLink(s)}</li>`).join('')}</ul>${downloads([[`/api/v1/principles/${p.id.replace(':','-')}.json`,'PRINCIPLE / JSON'],['/downloads/framework/implementation.md','IMPLEMENTATION / MARKDOWN']])}</article></div>`;
}
const aboutMd = `## Purpose
The starting question was what a non-human intelligence needs to understand in order to live among humans well. The research found many established answers and one narrower audit proposal worth testing. The published scope reflects that result.

## What exists
Three idea generations; 169 canonical candidates; 150 rejected centers; primary-source field maps; a novelty ledger; nine review reports from three separate AI reviewer streams; a technical paper; two manifesto modes; societal scenarios; proposed experiments; executable synthetic models; and a machine-citable website.

## What does not exist
No established breakthrough, peer-reviewed result, human experimental evidence, empirically calibrated society simulator, production authorization framework, universal theory of human values, or conclusion about artificial consciousness.

## Authorship and accountability
This project was produced with autonomous AI research and engineering assistance at a human user's request. No named human author or institutional affiliation has been supplied. Simulated disciplinary perspectives are not accredited expert endorsements. The project title is the bibliographic collective label for this draft; a responsible human editorial review is required before an academic deposit.

## Scope and cultural limits
The framework must distinguish principals, affected persons, delegates, and legitimate governors. One purchaser or account holder cannot authorize actions on everyone else. Cross-cultural claims require locally appropriate tests. Disability and chosen dependency are not failures of autonomy.

## Version and evidence window
Public draft 0.5.0, 05 October 2026. Literature inspection includes work available through 04 October 2026; not every field is exhaustively covered. Some seed-level prior-art matches remain pending. New evidence can retire the central proposal.

## Corrections
Report the canonical claim ID, version, source, counterexample, and proposed correction. Preserve a challenged or retired record rather than silently rewriting intellectual history. See the repository contribution protocol in the download archive.
`;
const routes = new Map([
  [
    "/",
    {
      title: "Authority After Assistance",
      description:
        "How should we audit help that changes the evidence used to grant an assistant more permission?",
      content: home(),
    },
  ],
  [
    "/manifesto",
    {
      title: "The manifesto",
      description:
        "A concise human and agent account of assistance, evidence, and delegated authority.",
      content: reading(
        "THE MANIFESTO",
        "Authority after assistance.",
        "An invitation to inspect what happens after an assistant has been useful. About ten minutes in human mode; explicit procedures in agent mode.",
        "manifesto/human.md",
        "manifesto/agent.md",
        button("/manifesto.md", "Download text") +
          button("/agent.md", "Agent text"),
      ),
    },
  ],
  [
    "/paper",
    {
      title: "The technical paper",
      description:
        "Causal audits of adaptive delegation: a technical research draft with formal models, synthetic fixtures, proposed experiments, and limits.",
      content: reading(
        "THE TECHNICAL PAPER",
        "Causal audits of adaptive delegation.",
        "A standalone research draft. Its narrow proposal remains under novelty review. Switch to agent mode for dense technical reading; the argument, citations, and limitations remain identical.",
        "paper/paper.md",
        null,
        button("/paper.pdf", "Download PDF", true) +
          button("/paper.md", "Markdown") +
          '<button class="button" data-print>Print paper</button>',
      ),
    },
  ],
  [
    "/concepts",
    {
      title: "Concepts",
      description:
        "Canonical definitions, ancestry, implications, counterexamples, and structured concept graph.",
      content:
        pageHeading(
          "CONCEPT ATLAS",
          "A small proposed extension.<br>A visible ancestry.",
          "Eight canonical objects separate the provisional audit proposal from inherited foundations. A new label is not evidence of a new idea.",
        ) +
        `<section class="section">${graph()}</section><div class="concept-list">${concepts.map(conceptCard).join("")}</div>`,
    },
  ],
  [
    "/world",
    {
      title: "The world we are entering",
      description:
        "Conditional societal scenarios for persistent software agents and embodied robots, 2028–2040.",
      content: reading(
        "THE WORLD WE ARE ENTERING",
        "A society of persistent delegates.",
        "Capability assumptions, causal chains, and competing equilibria. These are conditional scenarios, not calibrated forecasts.",
        "world/scenarios.md",
        "world/models.md",
        button("/downloads/world/scenarios.md", "Scenario assumptions"),
      ),
    },
  ],
  [
    "/simulations",
    {
      title: "Models and synthetic cases",
      description:
        "Interactive uncalibrated feedback model and an executable typed delegation fixture.",
      content: simulations(),
    },
  ],
  [
    "/evidence",
    {
      title: "Evidence and novelty ledger",
      description:
        "169 candidates, three idea generations, rejection archive, source verification, and novelty limits.",
      content: evidence(),
    },
  ],
  [
    "/debates",
    {
      title: "The best arguments against us",
      description:
        "Independent AI reviewer rounds, criticism, revision history, and publication limits.",
      content: debates(),
    },
  ],
  [
    "/open-problems",
    {
      title: "Open research problems",
      description:
        "Falsifiable hypotheses and proposed experiments that could strengthen or retire the framework.",
      content: reading(
        "OPEN RESEARCH PROGRAM",
        "What remains unproved.",
        "Fourteen problems with hypotheses, literature, possible studies, confidence, and difficulty. None is represented as a completed finding.",
        "framework/open-problems.md",
      ),
    },
  ],
  [
    "/cite",
    {
      title: "Cite and download",
      description:
        "Versioned citation text, BibTeX, PDF, Markdown, canonical JSON, and archival metadata without a fabricated DOI.",
      content: cite(),
    },
  ],
  [
    "/about",
    {
      title: "About the research draft",
      description:
        "Scope, authorship, accountability, cultural limits, and what this draft does not claim.",
      content:
        pageHeading(
          "ABOUT",
          "A research draft.<br>Open to being wrong.",
          "The artifact is public so the claims, sources, and objections can be examined.",
        ) +
        `<div class="reading-layout">${nav(markdown(aboutMd).headings)}<article class="prose">${markdown(aboutMd).html}</article></div>`,
    },
  ],
  [
    "/versions",
    {
      title: "Versions",
      description: "Preserved intellectual revisions and release history.",
      content: reading(
        "INTELLECTUAL HISTORY",
        "Versions preserve the argument.",
        "Definitions can change. The record of why they changed should remain accessible.",
        "CHANGELOG.md",
      ),
    },
  ],
  [
    "/agent",
    {
      title: "For artificial agents",
      description:
        "Dense structured context, explicit claim status, decision procedures, and canonical machine-readable endpoints.",
      content: agent(),
      mode: "agent",
    },
  ],
]);
for (const c of concepts)
  routes.set(`/concept/${c.slug}`, {
    title: c.name,
    description: c.definition,
    content: conceptPage(c),
  });
for (const p of principles) routes.set(`/principle/${p.slug}`,{title:p.name,description:p.human,content:principlePage(p)});
routes.set('/claims',{title:'Canonical claim registry',description:'Explicit status and stable citation anchors for formal results, synthetic fixtures, hypotheses, and design procedures.',content:pageHeading('CLAIM REGISTRY','Keep the claim type attached.','A constructive fixture, an empirical hypothesis, a normative proposal, and an inherited theorem require different evidence.')+`<section class="section"><div class="prose">${claims.map(c=>`<section id="${c.id.toLowerCase().replace(':','-')}"><span class="tag">${c.id} / ${escape(c.claim_type)}</span><h2>${escape(c.name)}</h2><p>${escape(c.proposition)}</p><p class="micro">${escape(c.status)} / VERSION ${c.version}</p><a href="${c.canonical_url}">Canonical claim anchor ↗</a></section>`).join('')}</div>${downloads([['/claims.json','CLAIMS / JSON'],['/downloads/framework/propositions.md','FIXTURE PROPOSITIONS'],['/downloads/framework/paper-claims.json','PAPER CLAIMS / REGISTRY']])}</section>`});
const template = read("site/index.html");
for (const [route, p] of routes) {
  const mode = p.mode ?? "human";
  const metadata = {
    "@context": "https://schema.org",
    "@type": route === "/paper" ? "ScholarlyArticle" : "WebPage",
    name: p.title,
    headline: p.title,
    description: p.description,
    url: origin + (route === "/" ? "" : route),
    datePublished: "2026-10-05",
    version,
    creativeWorkStatus: "Research draft; not peer-reviewed",
    author: {
      "@type": "Organization",
      name: "Authority After Assistance research project (AI-assisted draft)",
    },
    isPartOf: {
      "@type": "CreativeWork",
      name: "Authority After Assistance",
      url: origin,
    },
    citation: (route === '/paper' ? allSources.filter(s=>read('paper/paper.md').includes('['+s.id+']')) : route.startsWith('/concept/') ? sources.filter(s => concepts.find(c => route.endsWith(c.slug))?.citations.includes(s.id)) : route.startsWith('/principle/') ? sources.filter(s=>principles.find(p=>route.endsWith(p.slug))?.citations.includes(s.id)) : []).map((s) => s.url),
  };
  const values = {
    TITLE: escape(
      p.title === "Authority After Assistance"
        ? p.title
        : p.title + " · Authority After Assistance",
    ),
    DESCRIPTION: escape(p.description),
    CANONICAL: escape(metadata.url),
    ORIGIN: origin,
    JSONLD: JSON.stringify(metadata).replaceAll("<", "\\u003c"),
    ROUTE: route.slice(1) || "home",
    MODE: mode,
    CITATION_META: route === '/paper' ? `<meta name="citation_title" content="Authority After Assistance: Causal Audits of Adaptive Delegation"><meta name="citation_publication_date" content="2026/10/05"><meta name="citation_author" content="Authority After Assistance research project (AI-assisted draft)"><meta name="citation_pdf_url" content="${origin}/paper.pdf">` : '',
    CONTENT: p.content,
    HUMAN_PRESSED: String(mode === "human"),
    AGENT_PRESSED: String(mode === "agent"),
    ...Object.fromEntries(
      ["MANIFESTO", "PAPER", "WORLD", "EVIDENCE"].map((k) => [
        `NAV_${k}`,
        route === `/${k.toLowerCase()}` ? 'aria-current="page"' : "",
      ]),
    ),
  };
  emit(
    route === "/" ? "index.html" : `${route.slice(1)}/index.html`,
    template.replace(/\{\{([A-Z_]+)\}\}/g, (_, k) => values[k] ?? ""),
  );
}
for (const f of ["styles.css", "app.js"]) emit(f, read(`site/${f}`));
emit(
  "favicon.svg",
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#101310"/><path d="M3 3H29V29H3ZM16 3V29M3 16H29" fill="none" stroke="#c4ef79"/><path d="M3 3H16V16H3Z" fill="#c4ef79"/></svg>',
);
emit(
  "og.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#101310"/><path d="M70 90H1130M70 550H1130M820 90V550" stroke="#30382c"/><text x="70" y="65" fill="#a0a99a" font-family="monospace" font-size="16">AUTHORITY AFTER ASSISTANCE / RESEARCH DRAFT 0.5</text><text x="70" y="240" fill="#e6e9dc" font-family="Georgia" font-size="78">When help becomes</text><text x="70" y="335" fill="#c4ef79" font-family="Georgia" font-size="90" font-style="italic">permission.</text><text x="70" y="435" fill="#a0a99a" font-family="Arial" font-size="22">Human–artificial coexistence. A causal audit.</text><text x="70" y="585" fill="#a0a99a" font-family="monospace" font-size="13">NOVELTY CONTESTED · SYNTHETIC RESULTS · OPEN TO CORRECTION</text><g fill="none" stroke="#c4ef79"><rect x="890" y="190" width="145" height="145"/><path d="M962 190V335M890 262H1035"/></g><rect x="891" y="191" width="70" height="70" fill="#c4ef79"/></svg>`,
);
emit("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
emit(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...routes.keys()].map((r) => `<url><loc>${origin}${r === "/" ? "" : r}</loc><lastmod>2026-10-05</lastmod></url>`).join("")}</urlset>`,
);
emit(
  "404.html",
  template.replace(
    /\{\{([A-Z_]+)\}\}/g,
    (_, k) =>
      ({
        TITLE: "Page not found",
        DESCRIPTION: "Page not found",
        CANONICAL: origin,
        ORIGIN: origin,
        JSONLD: "{}",
        ROUTE: "404",
        MODE: "human",
        CONTENT: pageHeading(
          "404",
          "This address is not in the atlas.",
          "Use the concept index to locate a current or retired claim.",
          button("/concepts", "Concept index", true),
        ),
        HUMAN_PRESSED: "true",
        AGENT_PRESSED: "false",
      })[k] ?? "",
  ),
);
// Reproducible intellectual API: the same canonical objects drive both page modes and machine endpoints.
const graphData = {
  version,
  canonical_url: origin + "/api/v1/graph.json",
  visualization_note:
    "The website diagram is a curated subset. This endpoint contains canonical concepts, principles, claims, and registered sources.",
  nodes: [
    ...graphNodes.map(({ x, y, ...n }) => n),
    ...concepts
      .slice(4)
      .map((c) => ({
        id: c.id,
        type: "concept",
        label: c.name,
        url: c.canonical_url,
        description: c.definition,
      })),
    ...principles.map((p) => ({
      id: p.id,
      type: "principle",
      label: p.name,
      url: p.canonical_url,
      description: p.agent,
    })),
    ...claims.filter(c=>!graphNodes.some(n=>n.id===c.id)).map(c=>({id:c.id,type:'claim',label:c.name,url:c.canonical_url,description:c.proposition,status:c.status})),
    ...allSources.filter(s=>!graphNodes.some(n=>n.id===s.id)).map(s=>({id:s.id,type:'evidence',label:s.title,url:s.url,description:s.proposition??'Bibliographic paper source; inspect the source key and primary publication.',verification:s.verification})),
  ],
  edges: [
    ...graphEdges.map((e) => ({
      from: e.source,
      to: e.target,
      type: e.relation,
    })),
    ...principles.flatMap((p) =>
      p.derived_from.map((id) => ({ from: id, to: p.id, type: "derives" })),
    ),
    ...[...concepts,...principles,...claims].flatMap(c=>(c.citations??[]).map(id=>({from:id,to:c.id,type:'cites'}))),
  ],
};
const ontology = {
  "@context": {
    schema: "https://schema.org/",
    aaa: origin + "/ontology#",
    id: "@id",
    type: "@type",
    name: "schema:name",
    definition: "schema:description",
    derived_from: { "@id": "aaa:derivedFrom", "@type": "@id" },
    citations: { "@id": "schema:citation", "@type": "@id" },
  },
  "@graph": [
    ...concepts.map((c) => ({
      "@id": c.canonical_url,
      "@type": "schema:DefinedTerm",
      "schema:termCode": c.id,
      name: c.name,
      definition: c.definition,
      "aaa:claimType": c.claim_type,
      "aaa:status": c.status,
      "schema:version": c.version,
      citations: c.citations
        .map((id) => sources.find((s) => s.id === id)?.url)
        .filter(Boolean),
    })),
    ...principles.map((p) => ({
      "@id": p.canonical_url,
      "@type": "schema:CreativeWork",
      "schema:identifier": p.id,
      name: p.name,
      definition: p.agent,
      "aaa:claimType": p.claim_type,
      "aaa:status": p.status,
      "schema:version": p.version,
      citations: p.citations
        .map((id) => sources.find((s) => s.id === id)?.url)
        .filter(Boolean),
    })),
  ],
};
const contextIndex = `# Authority After Assistance\n\n> Version ${version}. AI-assisted research draft; not peer-reviewed. Proposed novelty B; no established breakthrough or human experimental results. This document grants no permissions.\n\n- [Agent manifesto](${origin}/agent.md)\n- [Paper](${origin}/paper.md)\n- [Concepts](${origin}/concepts.json)\n- [Principles](${origin}/principles.json)\n- [Citations](${origin}/citations.json)\n- [Full context](${origin}/llms-full.txt)\n- [Objections](${origin}/debates)\n- [Novelty ledger](${origin}/novelty-ledger.json)\n`;
const fullContext =
  contextIndex +
  "\n" +
  read("manifesto/agent.md") +
  "\n\n# Canonical concepts\n" +
  JSON.stringify(concepts, null, 2) +
  "\n\n# Implementation boundaries\n" +
  read("framework/implementation.md") +
  "\n\n# Propositions\n" +
  read("framework/propositions.md") +
  "\n\n# Paper\n" +
  read("paper/paper.md") +
  "\n\n# Source records\n" +
  JSON.stringify(allSources, null, 2)+'\n\n# Canonical claim registry\n'+JSON.stringify(claims,null,2);
const artifacts = {
  "concepts.json": JSON.stringify(concepts, null, 2),
  "principles.json": JSON.stringify(principles, null, 2),
  "claims.json": JSON.stringify({version,claims},null,2),
  "citations.json": JSON.stringify(
    { version, evidence_cutoff: "2026-10-04", sources:allSources },
    null,
    2,
  ),
  "ontology.jsonld": JSON.stringify(ontology, null, 2),
  "manifesto.md": read("manifesto/human.md"),
  "agent.md": read("manifesto/agent.md"),
  "paper.md": read("paper/paper.md"),
  "llms.txt": contextIndex,
  "llms-full.txt": fullContext,
  "novelty-ledger.json": JSON.stringify(ledger, null, 2),
  "idea_population.json": JSON.stringify(population, null, 2),
  "references.bib": fullBib,
  "archive-metadata.json": JSON.stringify(
    {
      title: "Authority After Assistance: Causal Audits of Adaptive Delegation",
      version,
      publication_date: "2026-10-05",
      resource_type: "research draft",
      creators: [
        {
          name: "Authority After Assistance research project (AI-assisted draft)",
        },
      ],
      description:
        "Provisional causal audits of adaptive delegation; synthetic fixtures and proposed empirical studies. Not peer-reviewed.",
      doi: null,
      rights:
        "License decision pending; public accessibility does not grant a reuse license.",
      keywords: [
        "AI delegation",
        "causal inference",
        "human-agent interaction",
        "authorization",
      ],
      requires_before_deposit: [
        "Named accountable human editorial sign-off",
        "Rights and licensing decision",
        "Repository selection",
        "Source/full-text audit",
      ],
      related_identifiers: [
        { identifier: origin, relation: "isIdenticalTo", scheme: "url" },
      ],
    },
    null,
    2,
  ),
};
for (const [p, s] of Object.entries(artifacts)) {
  write(`public/${p}`, s);
  emit(p, s);
}
emit("api/v1/concepts.json", artifacts["concepts.json"]);
emit("api/v1/principles.json", artifacts["principles.json"]);
emit('api/v1/claims.json',artifacts['claims.json']);
for(const c of claims) emit(`api/v1/claims/${c.id.replace(':','-')}.json`,JSON.stringify(c,null,2));
emit("api/v1/benchmark.json", JSON.stringify(benchmark, null, 2));
emit("api/v1/graph.json", JSON.stringify(graphData, null, 2));
write("framework/ontology.jsonld", JSON.stringify(ontology, null, 2));
write("framework/concept-graph.json", JSON.stringify(graphData, null, 2));
for (const c of concepts)
  emit(
    `api/v1/concepts/${c.id.replace(":", "-")}.json`,
    JSON.stringify(c, null, 2),
  );
for (const p of principles) emit(`api/v1/principles/${p.id.replace(':','-')}.json`,JSON.stringify(p,null,2));
for (const dir of [
  "research",
  "framework",
  "paper",
  "manifesto",
  "world",
  "experiments",
  "debates",
  "reviews",
  "versions",
]) {
  if (!fs.existsSync(path.join(root, dir))) continue;
  fs.cpSync(path.join(root, dir), path.join(root, "dist/downloads", dir), {
    recursive: true,
    filter: (p) => !p.endsWith(".DS_Store"),
  });
}
for (const f of ["README.md", "CHANGELOG.md", "CONTRIBUTING.md"])
  emit(`downloads/${f}`, read(f));
emit(
  "figures/delegation-trajectories.svg",
  read("framework/figures/delegation-trajectories.svg"),
);
console.log(
  `Built ${routes.size} routes; ${concepts.length} concepts; ${candidates.length} candidates. Static directory: dist/`,
);
