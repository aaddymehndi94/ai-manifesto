import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import assert from "node:assert/strict";
const port = 4183,
  base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["scripts/serve.mjs"], {
  env: { ...process.env, AAA_PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});
await new Promise((resolve, reject) => {
  server.stdout.once("data", resolve);
  server.once("error", reject);
  server.once("exit", (code) =>
    reject(new Error(`Preview server exited ${code}`)),
  );
});
const browser = await chromium.launch({
  executablePath: process.env.AAA_BROWSER ?? "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox"],
});
fs.mkdirSync("site/qa", { recursive: true });
const errors = [],
  broken = [],
  overflows = [],
  checks = [];
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await context.grantPermissions(['clipboard-read','clipboard-write']);
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  const concepts = JSON.parse(
    fs.readFileSync("framework/concepts.json", "utf8"),
  );
  const principles=JSON.parse(fs.readFileSync('framework/principles.json','utf8'));
  const routes = [
    "/",
    "/manifesto",
    "/paper",
    "/concepts",
    "/world",
    "/simulations",
    "/evidence",
    "/debates",
    "/open-problems",
    "/cite",
    "/versions",
    "/about",
    "/agent",
    "/claims",
    ...concepts.map((c) => "/concept/" + c.slug),
    ...principles.map(p=>'/principle/'+p.slug),
  ];
  for (const route of routes) {
    const response = await page.goto(base + route + "?mode=human");
    assert.equal(response.status(), 200, route);
    await page.waitForLoadState("networkidle");
    assert.equal(await page.locator("main h1").first().count(), 1, route);
    const data = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      view: innerWidth,
      hrefs: [...document.querySelectorAll("a[href]")].map((a) =>
        a.getAttribute("href"),
      ),
    }));
    if (data.width > data.view + 1)
      overflows.push({
        route,
        viewport: "desktop",
        width: data.width,
        view: data.view,
      });
    for (const href of data.hrefs) {
      if (!href || href.startsWith("#") || /^(https?:|mailto:)/.test(href))
        continue;
      const u = new URL(href, base + route);
      const target = path.join("dist", decodeURIComponent(u.pathname));
      const exists =
        fs.existsSync(target) &&
        (fs.statSync(target).isFile() ||
          fs.existsSync(path.join(target, "index.html")));
      if (!exists) broken.push({ route, href });
    }
    checks.push(`desktop:${route}`);
  }
  await page.goto(base + "/?mode=human");
  await page.screenshot({ path: "site/qa/home-desktop.png", fullPage: true });
  await page.getByRole("button", { name: "AGENT", exact: true }).click();
  assert.equal(await page.locator("body").getAttribute("data-mode"), "agent");
  assert.match(
    await page.locator(".agent-content h1").first().textContent(),
    /Audit/,
  );
  checks.push("global mode changes underlying object");
  await page.screenshot({ path: "site/qa/home-agent.png", fullPage: true });
  await page.goto(base + "/simulations?mode=human");
  const previous = await page.locator("#model-main-path").getAttribute("d");
  await page.locator("#influence").fill("0");
  await page.locator("#influence").dispatchEvent("input");
  assert.notEqual(
    await page.locator("#model-main-path").getAttribute("d"),
    previous,
  );
  assert.equal(await page.locator("#model-gain").textContent(), "0.000");
  await page
    .locator("#benchmark-case")
    .selectOption("fixed_scope_negative_control");
  assert.equal(
    await page.locator('[data-result="policySensitivity"]').textContent(),
    "ZERO IN FIXTURE",
  );
  checks.push("sliders and actual benchmark controls");
  await page.screenshot({ path: "site/qa/models-desktop.png", fullPage: true });
  await page.goto(base + "/evidence?mode=human");
  await page.locator("#idea-search").fill("zzzznonexistent");
  assert.equal(await page.locator("[data-idea]:visible").count(), 0);
  await page.locator("#idea-search").fill("");
  await page.locator("#idea-filter").selectOption("SURVIVES_PROVISIONALLY");
  assert.equal(await page.locator("[data-idea]:visible").count(), 3);
  checks.push("search and candidate-status filter");
  await page.goto(base + "/concept/causal-mandate-audit?mode=human");
  await page.getByRole('button',{name:'Cite this concept',exact:true}).click();
  assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/AAA:C01/);
  checks.push('canonical citation copies to clipboard');
  await page.screenshot({
    path: "site/qa/concept-desktop.png",
    fullPage: true,
  });
  await page.goto(base + "/paper?mode=human");
  await page.locator('.figure-zoom').first().click();
  assert.equal(await page.locator('dialog').isVisible(),true);
  await page.keyboard.press('Escape');
  await page.locator('dialog').waitFor({state:'detached'});
  assert.equal(await page.locator('dialog').count(),0);
  checks.push('figure viewer keyboard dismissal');
  await page.screenshot({ path: "site/qa/paper-desktop.png", fullPage: false });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(()=>document.querySelectorAll('img').forEach(img=>img.loading='eager'));
  await page.waitForFunction(()=>[...document.images].every(img=>img.complete&&img.naturalWidth>0));
  await page.pdf({
    path: "dist/paper.pdf",
    format: "A4",
    printBackground: false,
    preferCSSPageSize: true,
  });
  fs.copyFileSync("dist/paper.pdf", "public/paper.pdf");
  checks.push("standalone printable paper PDF");
  await page.emulateMedia({ media: "screen" });
  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await mobile.goto(base + route + "?mode=human");
    await mobile.waitForLoadState("networkidle");
    const sizes = await mobile.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      view: innerWidth,
    }));
    if (sizes.width > sizes.view + 1)
      overflows.push({ route, viewport: "mobile", ...sizes });
    checks.push(`mobile:${route}`);
  }
  await mobile.goto(base + "/?mode=human");
  await mobile.screenshot({ path: "site/qa/home-mobile.png", fullPage: true });
  await mobile.locator(".menu-toggle").click();
  assert.equal(await mobile.locator(".mobile-menu").isVisible(), true);
  await mobile.keyboard.press("Escape");
  assert.equal(await mobile.locator(".mobile-menu").isVisible(), false);
  checks.push("mobile menu keyboard dismissal");
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const np = await nojs.newPage();
  await np.goto(base + "/paper");
  assert.ok((await np.locator("article").innerText()).length > 30000);
  checks.push("paper works without JavaScript");
  await nojs.close();
  const preview = await context.newPage();
  await preview.setViewportSize({ width: 1200, height: 630 });
  await preview.setContent(fs.readFileSync("dist/og.svg", "utf8"));
  await preview.addStyleTag({
    content:
      "html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}",
  });
  await preview.screenshot({ path: "dist/og.png" });
  fs.copyFileSync("dist/og.png", "public/og.png");
  const report = {
    date: "2026-10-05",
    routes: routes.length,
    checks,
    errors,
    broken: [...new Map(broken.map((x) => [x.route + x.href, x])).values()],
    overflows,
  };
  fs.writeFileSync("site/qa/report.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  assert.equal(errors.length, 0, "Browser errors");
  assert.equal(report.broken.length, 0, "Broken internal links");
  assert.equal(overflows.length, 0, "Page-level horizontal overflow");
} finally {
  await browser.close();
  server.kill();
}
