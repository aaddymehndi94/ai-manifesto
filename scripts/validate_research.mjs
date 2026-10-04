import fs from "node:fs";

const population = JSON.parse(fs.readFileSync("research/idea_population.json", "utf8"));
const ledger = JSON.parse(fs.readFileSync("research/novelty-ledger.json", "utf8"));

const ids = new Set();
let count = 0;
for (const generation of population.generations) {
  if (!Number.isInteger(generation.number)) throw new Error("Generation number must be an integer");
  for (const idea of generation.candidates ?? []) {
    count += 1;
    if (!idea.id || ids.has(idea.id)) throw new Error(`Missing or duplicate idea ID: ${idea.id}`);
    ids.add(idea.id);
    if (!idea.claim_type) throw new Error(`Missing claim_type for ${idea.id}`);
    if (!idea.mode) throw new Error(`Missing generation mode for ${idea.id}`);
  }
}

for (const entry of ledger.entries) {
  if (!entry.candidate_id) throw new Error("Ledger entry missing candidate_id");
  if (!ids.has(entry.candidate_id)) throw new Error(`Ledger references unknown candidate ${entry.candidate_id}`);
}

console.log(JSON.stringify({ candidates: count, ledger_entries: ledger.entries.length, valid: true }, null, 2));
