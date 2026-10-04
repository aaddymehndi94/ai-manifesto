# Coexistence research repository

This repository is in discovery phase `0.1`. It maps prior art and tests candidate
concepts for persistent human–artificial coexistence before any manifesto, project
name, or public website is written.

## Current phase

- verify the intellectual landscape using primary and authoritative sources;
- generate at least 150 candidate observations, hypotheses, or concepts;
- record ancestry and novelty risk;
- reject weak candidates before selecting a central framework.

## Repository map

- `research/landscape.md` — conceptual map and known boundaries
- `research/sources.md` — audited source register
- `research/idea_population.json` — versioned idea population and scores
- `research/novelty-ledger.{md,json}` — candidate-to-prior-art traceability
- `research/rejected-ideas.md` — explicit rejection archive
- `research/assumptions.md` — scope and forecast assumptions
- `research/prior-art/` — proposition-level prior-art records
- `research/notes/` — field research notes
- `scripts/validate_research.mjs` — structural validation

## Validate

```bash
node scripts/validate_research.mjs
```

The public site and downstream documents are intentionally deferred until a
candidate framework survives prior-art and adversarial review.
