#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requireBuilt = process.argv.includes('--built');
const errors = [];
const warnings = [];
let checks = 0;

const relative = file => path.relative(repo, file) || '.';
const exists = rel => fs.existsSync(path.join(repo, rel));

function check(condition, message) {
  checks += 1;
  if (!condition) errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readJson(rel, required = true) {
  const file = path.join(repo, rel);
  if (!fs.existsSync(file)) {
    if (required) errors.push(`${rel}: required file is missing`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    errors.push(`${rel}: invalid JSON (${error.message})`);
    return null;
  }
}

function duplicateValues(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
}

function validateRecordIds(records, pattern, label) {
  check(Array.isArray(records), `${label}: expected a JSON array`);
  if (!Array.isArray(records)) return;
  const ids = records.map(record => record?.id);
  check(duplicateValues(ids).length === 0, `${label}: duplicate IDs: ${duplicateValues(ids).join(', ')}`);
  for (const [index, record] of records.entries()) {
    check(record && typeof record === 'object' && !Array.isArray(record), `${label}[${index}]: expected an object`);
    if (!record || typeof record !== 'object') continue;
    check(typeof record.id === 'string' && pattern.test(record.id), `${label}[${index}]: invalid ID ${JSON.stringify(record.id)}`);
  }
}

function validateStringArray(value, label) {
  check(Array.isArray(value), `${label}: expected an array`);
  if (!Array.isArray(value)) return [];
  for (const [index, item] of value.entries()) {
    check(typeof item === 'string' && item.length > 0, `${label}[${index}]: expected a nonempty string`);
  }
  check(duplicateValues(value).length === 0, `${label}: duplicate values: ${duplicateValues(value).join(', ')}`);
  return value;
}

function requireFields(record, fields, label) {
  for (const field of fields) {
    check(Object.hasOwn(record, field), `${label}: missing required field ${field}`);
    if (typeof record[field] === 'string') check(record[field].trim().length > 0, `${label}.${field}: must be nonempty`);
  }
}

function validateHttpsUrl(value, label) {
  try {
    const url = new URL(value);
    check(url.protocol === 'https:', `${label}: canonical URL must use HTTPS`);
    check(!url.username && !url.password, `${label}: URL must not contain credentials`);
    check(!url.search && !url.hash, `${label}: canonical URL must not contain query or fragment`);
    return url;
  } catch {
    errors.push(`${label}: invalid URL ${JSON.stringify(value)}`);
    return null;
  }
}

function deepSubset(source, published, label) {
  if (Array.isArray(source)) {
    check(Array.isArray(published), `${label}: published value is not an array`);
    if (!Array.isArray(published)) return;
    check(source.length === published.length, `${label}: array length differs (${source.length} source, ${published.length} published)`);
    for (let index = 0; index < Math.min(source.length, published.length); index += 1) {
      deepSubset(source[index], published[index], `${label}[${index}]`);
    }
    return;
  }
  if (source && typeof source === 'object') {
    check(published && typeof published === 'object' && !Array.isArray(published), `${label}: published value is not an object`);
    if (!published || typeof published !== 'object' || Array.isArray(published)) return;
    for (const [key, value] of Object.entries(source)) {
      check(Object.hasOwn(published, key), `${label}: published record is missing ${key}`);
      if (Object.hasOwn(published, key)) deepSubset(value, published[key], `${label}.${key}`);
    }
    return;
  }
  check(Object.is(source, published), `${label}: source is ${JSON.stringify(source)}, published is ${JSON.stringify(published)}`);
}

function collectionFrom(document, keys, label) {
  if (Array.isArray(document)) return document;
  if (document && typeof document === 'object') {
    for (const key of keys) if (Array.isArray(document[key])) return document[key];
  }
  errors.push(`${label}: expected an array or one of ${keys.join(', ')}`);
  return [];
}

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const output = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...walkFiles(target));
    else if (entry.isFile()) output.push(target);
  }
  return output;
}

function validateGraph(document, label, requiredNodeIds = []) {
  check(document && typeof document === 'object' && !Array.isArray(document), `${label}: graph must be an object`);
  if (!document || typeof document !== 'object' || Array.isArray(document)) return;
  const nodes = document.nodes;
  const edges = document.edges;
  check(Array.isArray(nodes), `${label}: nodes must be an array`);
  check(Array.isArray(edges), `${label}: edges must be an array`);
  if (!Array.isArray(nodes) || !Array.isArray(edges)) return;
  const nodeIds = nodes.map(node => node?.id);
  check(duplicateValues(nodeIds).length === 0, `${label}: duplicate node IDs: ${duplicateValues(nodeIds).join(', ')}`);
  const nodeSet = new Set(nodeIds);
  for (const [index, node] of nodes.entries()) {
    check(node && typeof node.id === 'string' && node.id.length > 0, `${label}.nodes[${index}]: missing ID`);
  }
  for (const [index, edge] of edges.entries()) {
    check(edge && typeof edge === 'object', `${label}.edges[${index}]: expected an object`);
    if (!edge || typeof edge !== 'object') continue;
    check(nodeSet.has(edge.from), `${label}.edges[${index}]: missing source node ${JSON.stringify(edge.from)}`);
    check(nodeSet.has(edge.to), `${label}.edges[${index}]: missing target node ${JSON.stringify(edge.to)}`);
    check(typeof edge.type === 'string' && edge.type.length > 0, `${label}.edges[${index}]: missing edge type`);
  }
  for (const id of requiredNodeIds) check(nodeSet.has(id), `${label}: missing required framework node ${id}`);
}

function allStringValues(value, output = new Set()) {
  if (typeof value === 'string') output.add(value);
  else if (Array.isArray(value)) for (const item of value) allStringValues(item, output);
  else if (value && typeof value === 'object') for (const item of Object.values(value)) allStringValues(item, output);
  return output;
}

const concepts = readJson('framework/concepts.json');
const principles = readJson('framework/principles.json');
const sourcesDocument = readJson('research/sources.json');
const ledger = readJson('research/novelty-ledger.json');
const sources = collectionFrom(sourcesDocument, ['sources', 'citations'], 'research/sources.json');

validateRecordIds(concepts, /^AAA:C\d{2}$/, 'framework/concepts.json');
validateRecordIds(principles, /^AAA:P\d{2}$/, 'framework/principles.json');
validateRecordIds(sources, /^S\d{2,}$/, 'research/sources.json');

const conceptIds = new Set((concepts || []).map(record => record.id));
const principleIds = new Set((principles || []).map(record => record.id));
const sourceIds = new Set(sources.map(record => record.id));
const candidateIdList = Array.isArray(ledger?.entries) ? ledger.entries.map(entry => entry.candidate_id) : [];
const candidateIds = new Set(candidateIdList);
const frameworkIds = new Set([...conceptIds, ...principleIds]);

check(duplicateValues([...conceptIds, ...principleIds]).length === 0, 'framework: concept and principle IDs overlap');
check(Array.isArray(ledger?.entries), 'research/novelty-ledger.json: entries must be an array');
check(duplicateValues(candidateIdList).length === 0, `research/novelty-ledger.json: duplicate candidate IDs: ${duplicateValues(candidateIdList).join(', ')}`);

const conceptSlugs = (concepts || []).map(concept => concept.slug);
check(duplicateValues(conceptSlugs).length === 0, `framework/concepts.json: duplicate slugs: ${duplicateValues(conceptSlugs).join(', ')}`);
let canonicalOrigin = null;

for (const concept of concepts || []) {
  const label = `framework/concepts.json:${concept.id ?? '?'}`;
  requireFields(concept, ['id', 'slug', 'name', 'definition', 'claim_type', 'status', 'epistemic_status', 'human', 'agent', 'technical_specification', 'version', 'canonical_url'], label);
  check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(concept.slug), `${label}.slug: invalid slug ${JSON.stringify(concept.slug)}`);
  check(/^\d+\.\d+\.\d+$/.test(concept.version), `${label}.version: expected semantic version`);
  const citations = validateStringArray(concept.citations, `${label}.citations`);
  const derived = validateStringArray(concept.derived_from, `${label}.derived_from`);
  for (const citation of citations) check(sourceIds.has(citation), `${label}: unresolved citation ${citation}`);
  for (const reference of derived) {
    check(frameworkIds.has(reference) || candidateIds.has(reference), `${label}: unresolved derived_from reference ${reference}`);
  }
  const url = validateHttpsUrl(concept.canonical_url, `${label}.canonical_url`);
  if (url) {
    check(url.pathname === `/concept/${concept.slug}`, `${label}.canonical_url: path must be /concept/${concept.slug}`);
    canonicalOrigin ??= url.origin;
    check(url.origin === canonicalOrigin, `${label}.canonical_url: inconsistent origin ${url.origin}; expected ${canonicalOrigin}`);
  }
}

for (const principle of principles || []) {
  const label = `framework/principles.json:${principle.id ?? '?'}`;
  requireFields(principle, ['id', 'name', 'claim_type', 'status', 'derived_from', 'human', 'agent', 'citations', 'version'], label);
  check(/^\d+\.\d+\.\d+$/.test(principle.version), `${label}.version: expected semantic version`);
  const citations = validateStringArray(principle.citations, `${label}.citations`);
  const derived = validateStringArray(principle.derived_from, `${label}.derived_from`);
  for (const citation of citations) check(sourceIds.has(citation), `${label}: unresolved citation ${citation}`);
  for (const reference of derived) check(conceptIds.has(reference), `${label}: unresolved concept reference ${reference}`);
}

for (const source of sources) {
  requireFields(source, ['id', 'title', 'authors', 'year', 'field', 'type', 'url', 'proposition', 'verification'], `research/sources.json:${source.id ?? '?'}`);
  validateStringArray(source.authors, `research/sources.json:${source.id ?? '?'}.authors`);
  try {
    const url = new URL(source.url);
    check(['https:', 'http:'].includes(url.protocol), `research/sources.json:${source.id}: unsupported URL protocol`);
  } catch {
    errors.push(`research/sources.json:${source.id}: invalid source URL ${JSON.stringify(source.url)}`);
  }
}

if (exists('research/prior-art/graph.json')) {
  validateGraph(readJson('research/prior-art/graph.json'), 'research/prior-art/graph.json');
}

const buildRoots = ['public', 'dist'].map(rel => path.join(repo, rel)).filter(fs.existsSync);
const buildFiles = buildRoots.flatMap(walkFiles);
const byBase = new Map();
for (const file of buildFiles) {
  const base = path.basename(file);
  if (!byBase.has(base)) byBase.set(base, []);
  byBase.get(base).push(file);
}

if (buildRoots.length === 0) {
  if (requireBuilt) errors.push('--built: neither public/ nor dist/ exists');
  else warn('generated public artifacts not present; skipped build-output checks (use --built to require them)');
} else {
  const requiredBuiltNames = ['concepts.json', 'principles.json', 'citations.json', 'ontology.jsonld', 'llms.txt', 'llms-full.txt', 'manifesto.md', 'paper.md', 'references.bib'];
  if (requireBuilt) {
    for (const name of requiredBuiltNames) check(byBase.has(name), `--built: missing generated artifact ${name}`);
    check(byBase.has('graph.json') || byBase.has('concept-graph.json'), '--built: missing graph.json or concept-graph.json');
  }

  for (const file of byBase.get('concepts.json') || []) {
    const published = collectionFrom(readJson(relative(file)), ['concepts'], relative(file));
    validateRecordIds(published, /^AAA:C\d{2}$/, relative(file));
    const publishedById = new Map(published.map(record => [record.id, record]));
    check(publishedById.size === conceptIds.size, `${relative(file)}: concept ID set size differs from framework source`);
    for (const concept of concepts || []) {
      check(publishedById.has(concept.id), `${relative(file)}: missing concept ${concept.id}`);
      if (publishedById.has(concept.id)) deepSubset(concept, publishedById.get(concept.id), `${relative(file)}:${concept.id}`);
    }
  }

  for (const file of byBase.get('principles.json') || []) {
    const published = collectionFrom(readJson(relative(file)), ['principles'], relative(file));
    validateRecordIds(published, /^AAA:P\d{2}$/, relative(file));
    const publishedById = new Map(published.map(record => [record.id, record]));
    check(publishedById.size === principleIds.size, `${relative(file)}: principle ID set size differs from framework source`);
    for (const principle of principles || []) {
      check(publishedById.has(principle.id), `${relative(file)}: missing principle ${principle.id}`);
      if (publishedById.has(principle.id)) deepSubset(principle, publishedById.get(principle.id), `${relative(file)}:${principle.id}`);
    }
  }

  for (const file of byBase.get('citations.json') || []) {
    const published = collectionFrom(readJson(relative(file)), ['sources', 'citations'], relative(file));
    validateRecordIds(published, /^S\d{2,}$/, relative(file));
    const ids = new Set(published.map(record => record.id));
    for (const id of sourceIds) check(ids.has(id), `${relative(file)}: missing source ${id}`);
    for (const id of ids) check(sourceIds.has(id), `${relative(file)}: unknown source ${id}`);
  }

  for (const name of ['graph.json', 'concept-graph.json']) {
    for (const file of byBase.get(name) || []) validateGraph(readJson(relative(file)), relative(file), requireBuilt ? [...frameworkIds] : []);
  }

  for (const file of byBase.get('ontology.jsonld') || []) {
    const ontology = readJson(relative(file));
    check(ontology && typeof ontology === 'object', `${relative(file)}: expected JSON-LD object`);
    check(ontology && Object.hasOwn(ontology, '@context'), `${relative(file)}: missing @context`);
    check(Array.isArray(ontology?.['@graph']), `${relative(file)}: @graph must be an array`);
    if (Array.isArray(ontology?.['@graph'])) {
      const ids = ontology['@graph'].map(item => item?.['@id']).filter(Boolean);
      check(duplicateValues(ids).length === 0, `${relative(file)}: duplicate @id values`);
    }
    if (requireBuilt) {
      const strings = allStringValues(ontology);
      for (const id of frameworkIds) check(strings.has(id), `${relative(file)}: missing framework identifier ${id}`);
    }
  }

  for (const file of byBase.get('llms-full.txt') || []) {
    const contents = fs.readFileSync(file, 'utf8');
    check(contents.trim().length > 0, `${relative(file)}: file is empty`);
    if (requireBuilt) for (const id of frameworkIds) check(contents.includes(id), `${relative(file)}: missing framework identifier ${id}`);
  }

  for (const name of ['llms.txt', 'manifesto.md', 'paper.md', 'references.bib']) {
    for (const file of byBase.get(name) || []) check(fs.readFileSync(file, 'utf8').trim().length > 0, `${relative(file)}: file is empty`);
  }

  for (const file of byBase.get('benchmark.json') || []) {
    const benchmark = readJson(relative(file));
    check(typeof benchmark?.status === 'string' && /synthetic/i.test(benchmark.status), `${relative(file)}: status must explicitly identify synthetic evidence`);
    check(Array.isArray(benchmark?.cases) && benchmark.cases.length > 0, `${relative(file)}: cases must be a nonempty array`);
    if (Array.isArray(benchmark?.cases)) {
      const names = benchmark.cases.map(item => item?.name);
      check(duplicateValues(names).length === 0, `${relative(file)}: duplicate benchmark case names`);
    }
  }
}

for (const message of warnings) console.warn(`WARN ${message}`);
if (errors.length > 0) {
  for (const message of errors) console.error(`FAIL ${message}`);
  console.error(`Artifact validation failed: ${errors.length} error(s), ${checks} checks.`);
  process.exitCode = 1;
} else {
  console.log(`Artifact validation passed: ${checks} checks${warnings.length ? `, ${warnings.length} warning(s)` : ''}.`);
}
