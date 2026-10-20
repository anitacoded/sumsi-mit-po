"use strict";

const defaults = {
  hummel: "https://www.youtube.com/results?search_query=lofi+chill+music",
  oma: "https://www.youtube.com/results?search_query=imaginations%C3%BCbung+sicherer+ort+anleitung",
};
const allowedHosts = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "music.youtube.com",
  "youtu.be",
  "open.spotify.com",
]);
function validMusicUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      allowedHosts.has(url.hostname) &&
      !url.username &&
      !url.password &&
      !url.port
      ? url.href
      : null;
  } catch {
    return null;
  }
}
function readSaved(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function saveValue(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
for (const form of document.querySelectorAll(".link-settings form")) {
  const mode = form.dataset.mode;
  const input = form.elements.url;
  const link = document.querySelector(`.music-link[data-mode="${mode}"]`);
  const status = form.querySelector('[role="status"]');
  const apply = (value) => {
    input.value = value;
    link.href = value;
  };
  apply(validMusicUrl(readSaved(`sumsi-link-${mode}`)) || defaults[mode]);
  input.addEventListener("input", () => input.setCustomValidity(""));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = validMusicUrl(input.value.trim());
    if (!url) {
      input.setCustomValidity(
        "Bitte verwende einen HTTPS-Link von YouTube oder open.spotify.com.",
      );
      status.textContent =
        "Bitte verwende einen gültigen YouTube- oder Spotify-Link mit https://.";
      input.reportValidity();
      return;
    }
    apply(url);
    status.textContent = saveValue(`sumsi-link-${mode}`, url)
      ? "Gespeichert. Dein Link bleibt in diesem Browser."
      : "Link übernommen. Dauerhaftes Speichern ist in diesem Browser nicht verfügbar.";
  });
  form.querySelector("[data-reset]").addEventListener("click", () => {
    apply(defaults[mode]);
    input.setCustomValidity("");
    const saved = saveValue(`sumsi-link-${mode}`, defaults[mode]);
    status.textContent = saved
      ? "Standardlink wiederhergestellt."
      : "Standardlink für diese Sitzung wiederhergestellt.";
  });
}

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionInput = document.querySelector("#reduce-motion");
motionInput.checked =
  motionPreference.matches || readSaved("sumsi-reduce-motion") === "true";
function applyMotionPreference() {
  document.documentElement.classList.toggle(
    "reduced-motion",
    motionInput.checked,
  );
}
applyMotionPreference();
motionInput.addEventListener("change", () => {
  saveValue("sumsi-reduce-motion", String(motionInput.checked));
  applyMotionPreference();
});
motionPreference.addEventListener("change", (event) => {
  motionInput.checked =
    event.matches || readSaved("sumsi-reduce-motion") === "true";
  applyMotionPreference();
});

// Measure elapsed time rather than counting timer callbacks: pauses and background
// tabs cannot make a breathing phase drift. Only one exercise runs at a time.
const exercises = [];
class BreathingExercise {
  constructor(element) {
    this.element = element;
    this.isBox = element.dataset.breath === "box";
    this.phases = this.isBox
      ? [
          { name: "Einatmen", duration: 4 },
          { name: "Halten", duration: 4 },
          { name: "Ausatmen", duration: 4 },
          { name: "Halten", duration: 4 },
        ]
      : [
          { name: "Einatmen", duration: 4 },
          { name: "Ausatmen", duration: 8 },
        ];
    this.total = this.phases.reduce((sum, phase) => sum + phase.duration, 0);
    this.elapsed = 0;
    this.running = false;
    this.started = false;
    this.frame = null;
    this.lastPhase = -1;
    this.toggle = element.querySelector(".toggle");
    this.status = element.querySelector(".breath-status");
    this.toggle.addEventListener("click", () =>
      this.running ? this.pause() : this.start(),
    );
    element
      .querySelector(".restart")
      .addEventListener("click", () => this.restart());
  }
  start() {
    for (const exercise of exercises)
      if (exercise !== this && exercise.running) exercise.pause();
    this.running = true;
    this.element.classList.add("is-running");
    this.started = true;
    this.anchor = performance.now();
    this.lastPhase = -1;
    this.toggle.innerHTML =
      'Pausieren <span aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg></span>';
    this.tick();
  }
  pause() {
    if (!this.running) return;
    this.elapsed += (performance.now() - this.anchor) / 1000;
    this.running = false;
    this.element.classList.remove("is-running");
    cancelAnimationFrame(this.frame);
    this.render(this.elapsed);
    this.toggle.innerHTML =
      'Fortsetzen <span aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7Z"/></svg></span>';
    this.status.textContent = "Pausiert. Atme in deinem eigenen Tempo weiter.";
  }
  restart() {
    this.pause();
    this.elapsed = 0;
    this.lastPhase = -1;
    this.start();
  }
  tick() {
    if (!this.running) return;
    this.render(this.elapsed + (performance.now() - this.anchor) / 1000);
    this.frame = requestAnimationFrame(() => this.tick());
  }
  render(elapsed) {
    let remaining = elapsed % this.total;
    let index = 0;
    while (
      remaining >= this.phases[index].duration &&
      index < this.phases.length - 1
    ) {
      remaining -= this.phases[index].duration;
      index++;
    }
    const phase = this.phases[index];
    const progress = Math.min(1, remaining / phase.duration);
    this.element.querySelector(".phase").textContent = phase.name;
    this.element.querySelector(".seconds").textContent = Math.max(
      1,
      Math.ceil(phase.duration - remaining),
    );
    if (index !== this.lastPhase) {
      this.lastPhase = index;
      this.status.textContent = `${phase.name} · ${phase.duration} Sekunden`;
    }
    if (this.isBox) {
      const positions = [
        [progress * 100, 0],
        [100, progress * 100],
        [(1 - progress) * 100, 100],
        [0, (1 - progress) * 100],
      ];
      const dot = this.element.querySelector(".box-dot");
      dot.style.left = `${positions[index][0]}%`;
      dot.style.top = `${positions[index][1]}%`;
    } else {
      const scale = index === 0 ? 0.68 + 0.32 * progress : 1 - 0.32 * progress;
      this.element.querySelector(".breath-circle").style.transform =
        `scale(${scale})`;
    }
  }
}
for (const element of document.querySelectorAll("[data-breath]"))
  exercises.push(new BreathingExercise(element));
// A hidden page must not silently guide the user through missed phases.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) for (const exercise of exercises) exercise.pause();
});

// Hash routes work on GitHub Pages, including direct links and browser history.
const routeNames = new Set(["hummel", "oma", "box", "lang"]);
let activeRoute = "";
function showRoute(moveFocus = true) {
  const requested = location.hash.slice(1);
  const route = routeNames.has(requested) ? requested : "";
  const previous = activeRoute;
  for (const exercise of exercises) exercise.pause();
  for (const view of document.querySelectorAll(".exercise-view")) {
    view.hidden = view.id !== route;
  }
  document.querySelector("#dashboard").hidden = Boolean(route);
  activeRoute = route;
  const title = route
    ? document.querySelector(`#${route}-title`).textContent
    : "";
  document.title = `${title ? title + " · " : ""}SUMSI MIT PO · Kleine Pausen für laute Köpfe`;
  // Link settings stay tucked away whenever a view is entered again.
  for (const details of document.querySelectorAll(".link-settings"))
    details.open = false;
  if (moveFocus) {
    const target = route
      ? document.querySelector(`#${route}-title`)
      : document.querySelector(`[data-open="${previous}"]`) ||
        document.querySelector("#dashboard-title");
    target.focus({ preventScroll: true });
  }
  window.scrollTo(0, 0);
}
function navigate(route) {
  if (route === activeRoute) return;
  history.pushState(
    { sumsiNavigation: true },
    "",
    route ? `#${route}` : location.pathname + location.search,
  );
  showRoute();
}
for (const tile of document.querySelectorAll("[data-open]")) {
  tile.addEventListener("click", (event) => {
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    navigate(tile.dataset.open);
  });
}
for (const button of document.querySelectorAll(".back-button")) {
  button.addEventListener("click", () => {
    if (history.state?.sumsiNavigation) history.back();
    else {
      history.replaceState(null, "", location.pathname + location.search);
      showRoute();
    }
  });
}
document.querySelector(".brand").addEventListener("click", (event) => {
  if (
    event.button !== 0 ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.altKey
  )
    return;
  event.preventDefault();
  navigate("");
});
document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#main").focus();
});
window.addEventListener("popstate", () => showRoute());
window.addEventListener("hashchange", () => {
  if (location.hash.slice(1) !== activeRoute) showRoute();
});
showRoute(false);
