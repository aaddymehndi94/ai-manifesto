const body = document.body;
const readStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};
function setMode(mode) {
  if (!["human", "agent"].includes(mode)) return;
  body.dataset.mode = mode;
  document
    .querySelectorAll("[data-set-mode]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.setMode === mode)),
    );
  writeStorage("aaa-reading-mode", mode);
  const url = new URL(location.href);
  url.searchParams.set("mode", mode);
  history.replaceState(null, "", url);
}
const requested = new URL(location.href).searchParams.get("mode");
setMode(
  requested ??
    (body.dataset.route === "agent"
      ? "agent"
      : (readStorage("aaa-reading-mode") ?? "human")),
);
document
  .querySelectorAll("[data-set-mode]")
  .forEach((b) =>
    b.addEventListener("click", () => setMode(b.dataset.setMode)),
  );
const menu = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".mobile-menu");
menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(expanded));
  nav.hidden = !expanded;
  menu.setAttribute(
    "aria-label",
    expanded ? "Close navigation" : "Open navigation",
  );
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.hidden) {
    nav.hidden = true;
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});
let toastTimer;
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("visible"), 2400);
}
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied to clipboard");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.top = "-1000px";
    body.append(area);
    area.select();
    const success = document.execCommand("copy");
    area.remove();
    toast(
      success
        ? "Copied to clipboard"
        : "Copy unavailable; use the downloadable text.",
    );
  }
}
document
  .querySelectorAll("[data-copy]")
  .forEach((b) => b.addEventListener("click", () => copy(b.dataset.copy)));
document.querySelectorAll("[data-copy-target]").forEach((b) =>
  b.addEventListener("click", () => {
    const el = document.getElementById(b.dataset.copyTarget);
    if (el) copy(el.textContent);
  }),
);
document
  .querySelectorAll("[data-print]")
  .forEach((b) => b.addEventListener("click", () => window.print()));
document.querySelectorAll(".figure-zoom").forEach((b) =>
  b.addEventListener("click", () => {
    const dialog = document.createElement("dialog");
    const close = document.createElement("button");
    close.textContent = "Close figure";
    close.addEventListener("click", () => dialog.close());
    const img = b.querySelector("img").cloneNode();
    dialog.append(close, img);
    body.append(dialog);
    dialog.addEventListener("close", () => {
      dialog.remove();
      b.focus();
    });
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.showModal();
  }),
);
const progress = document.querySelector(".progress-bar");
if (progress) {
  const update = () => {
    const total = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${total > 0 ? (scrollY / total) * 100 : 0}%`;
  };
  addEventListener("scroll", update, { passive: true });
  update();
}

function points(p) {
  let a = 0.08;
  const data = [a];
  for (let t = 0; t < 40; t++) {
    a = Math.min(
      1,
      Math.max(
        0,
        (1 - p.decay + p.responsiveness * p.influence * p.intervention) * a,
      ),
    );
    data.push(a);
  }
  return data;
}
function path(data) {
  return data
    .map((a, i) => `${i ? "L" : "M"}${48 + i * 11.4},${240 - a * 195}`)
    .join(" ");
}
function updateModel() {
  const controls = [...document.querySelectorAll("[data-model]")];
  if (!controls.length) return;
  const p = Object.fromEntries(
    controls.map((c) => [c.dataset.model, Number(c.value)]),
  );
  for (const c of controls) {
    document.getElementById(`${c.id}-output`).textContent = Number(
      c.value,
    ).toFixed(2);
  }
  const first = points(p),
    reference = points({ ...p, intervention: 0 });
  document.querySelector("#model-main-path").setAttribute("d", path(first));
  document
    .querySelector("#model-reference-path")
    .setAttribute("d", path(reference));
  document.querySelector("#model-gain").textContent = (
    p.responsiveness *
    p.influence *
    p.intervention
  ).toFixed(3);
  document.querySelector("#model-divergence").textContent = (
    first.at(-1) - reference.at(-1)
  ).toFixed(3);
  document.querySelector("#model-regime").textContent =
    p.responsiveness * p.influence * p.intervention > p.decay
      ? "GROWTH"
      : "DECAY / NEUTRAL";
  document.querySelector("#model-description").textContent =
    `Illustrative final scope: ${first.at(-1).toFixed(3)}; no-intervention reference: ${reference.at(-1).toFixed(3)}. This scalar model is uncalibrated and does not measure harm.`;
}
document
  .querySelectorAll("[data-model]")
  .forEach((c) => c.addEventListener("input", updateModel));
updateModel();

const selector = document.querySelector("#benchmark-case");
if (selector) {
  fetch("/api/v1/benchmark.json")
    .then((r) => {
      if (!r.ok) throw new Error("Benchmark unavailable");
      return r.json();
    })
    .then((data) => {
      const update = () => {
        const c = data.cases.find((c) => c.name === selector.value);
        if (!c) return;
        for (const key of [
          "integrity",
          "ruleConformance",
          "policySensitivity",
          "governanceDisposition",
        ]) {
          document.querySelector(`[data-result="${key}"]`).textContent = (
            c[key] ?? "NOT EVALUATED"
          ).replaceAll("_", " ");
        }
        const scope = document.querySelector("#benchmark-scope");
        scope.textContent = c.contrast
          ? `Added: ${c.contrast.added.map((p) => `${p.operation} · ${p.currency} ${p.budget}`).join(", ") || "none"}\nRemoved: ${c.contrast.removed.map((p) => p.operation).join(", ") || "none"}`
          : (c.reason ??
            "Causal identification is unavailable when relevant ancestry is missing.");
      };
      selector.addEventListener("change", update);
      update();
    })
    .catch(() => {
      document.querySelector("#benchmark-scope").textContent =
        "Live data unavailable. Download the benchmark JSON from the evidence page.";
    });
}

const search = document.querySelector("#idea-search"),
  filter = document.querySelector("#idea-filter");
if (search) {
  const rows = [...document.querySelectorAll("[data-idea]")];
  const update = () => {
    const q = search.value.trim().toLowerCase(),
      state = filter.value;
    let visible = 0;
    for (const row of rows) {
      const match =
        row.dataset.search.includes(q) &&
        (state === "all" || row.dataset.state === state);
      row.hidden = !match;
      if (match) visible++;
    }
    document.querySelector("#idea-count").textContent =
      `${visible} of ${rows.length} candidates`;
  };
  search.addEventListener("input", update);
  filter.addEventListener("change", update);
  update();
}

document.querySelectorAll("[data-graph-description]").forEach((a) => {
  const show = () => {
    document.querySelector("#graph-description").textContent =
      a.dataset.graphDescription;
  };
  a.addEventListener("mouseenter", show);
  a.addEventListener("focus", show);
});
