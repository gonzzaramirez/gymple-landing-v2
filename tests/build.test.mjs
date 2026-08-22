import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const dist = resolve(root, "dist");

async function readDist(relPath) {
  return readFile(resolve(dist, relPath), "utf8");
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractJsonLd(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  return blocks.map((m) => JSON.parse(m[1]));
}

test("dist exists (run npm run build before tests)", () => {
  assert.ok(existsSync(resolve(dist, "index.html")), "dist/index.html not found; run `npm run build` first");
});

// --- Fix 1: agent-friendly 404s ---

test("404 HTML page is generated and marked noindex", async () => {
  const html = await readDist("404.html");
  assert.match(html, /Esta página no existe/);
  assert.match(html, /name="robots" content="noindex"/);
  assert.match(html, /href="\/llms\.txt"/);
});

test("markdown 404 body points agents at sitemap and llms.txt", async () => {
  const md = await readDist("404.md");
  assert.ok(md.length >= 200, "404.md too short for agent guidance");
  assert.match(md, /llms\.txt/);
  assert.match(md, /sitemap-index\.xml/);
});

test("nginx returns real 404 instead of SPA fallback", async () => {
  const conf = await readRootFile("nginx.conf");
  assert.match(conf, /try_files \$uri \$uri\/ =404;/);
  assert.match(conf, /error_page 404 @not_found;/);
});

// --- Fix 2: markdown content negotiation ---

test("every negotiable page ships a markdown variant", async () => {
  for (const page of ["index", "about", "contact", "privacy"]) {
    const md = await readDist(`${page}.md`);
    assert.ok(md.startsWith("# "), `${page}.md should start with an H1`);
    assert.ok(md.length > 400, `${page}.md too short`);
  }
});

test("nginx negotiates text/markdown and declares Vary: Accept", async () => {
  const conf = await readRootFile("nginx.conf");
  assert.match(conf, /"~\*text\/markdown"\s+1;/);
  assert.match(conf, /default_type text\/markdown;/);
  assert.match(conf, /add_header Vary "Accept" always;/);
  assert.match(conf, /rewrite \^ \$markdown_variant last;/);
});

// --- Fix 3: agent instructions / when-to-use ---

test("llms.txt has when-to-use guidance and page index", async () => {
  const txt = await readRootFile("public/llms.txt");
  assert.match(txt, /^# Gymple/m);
  assert.match(txt, /## Cuándo usar Gymple/);
  assert.match(txt, /No es la fuente adecuada para:/);
  assert.match(txt, /\[Inicio\]\(https:\/\/gymple\.online\/\)/);
  assert.match(txt, /\[Sitemap\]\(https:\/\/gymple\.online\/sitemap-index\.xml\)/);
  assert.match(txt, /Accept: text\/markdown/);
});

// --- Fix 4: trust anchor pages ---

for (const [page, minChars] of [
  ["about", 500],
  ["contact", 500],
  ["privacy", 500],
]) {
  test(`/${page} publishes at least ${minChars} characters of content`, async () => {
    const html = await readDist(`${page}/index.html`);
    const text = visibleText(html);
    assert.ok(
      text.length >= minChars,
      `/${page} visible text is ${text.length} chars, expected >= ${minChars}`
    );
  });
}

test("trust pages are linked from the homepage footer", async () => {
  const html = await readDist("index.html");
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/privacy"/);
});

// --- Fix 5: Organization schema completeness ---

test("Organization JSON-LD includes address and complete contactPoint", async () => {
  const html = await readDist("index.html");
  const schemas = extractJsonLd(html);
  const org = schemas.find((s) => s["@type"] === "Organization");
  assert.ok(org, "Organization schema not found in index.html");
  assert.equal(org.address["@type"], "PostalAddress");
  assert.equal(org.address.addressCountry, "AR");
  assert.equal(org.contactPoint["@type"], "ContactPoint");
  assert.match(org.contactPoint.email, /@/);
  assert.match(org.contactPoint.telephone, /^\+\d/);
  assert.ok(org.contactPoint.contactType.length > 0);
});

function readRootFile(relPath) {
  return readFile(resolve(root, relPath), "utf8");
}
