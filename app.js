"use strict";

const defaults = {
  "hummel-spotify": "https://open.spotify.com/track/3cXuhDMnE9ApbOWVmWzdEM?si=nsYneCRdQkO9WWvL_TGzdQ",
  "hummel-youtube": "https://www.youtube.com/watch?v=216CtTngm4c",
  "oma-youtube": "https://www.youtube.com/watch?v=4stJ7TCcHMM",
  "oma-spotify": "https://open.spotify.com/episode/61ZUnlRbN8moZFpE62TbJn?si=NHF8hBUqTt2ikhfZF-ovcA",
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
  const service = form.dataset.service;
  const key = `${mode}-${service}`;
  const storageKey = `sumsi-link-${key}`;
  const input = form.elements.url;
  const link = document.querySelector(
    mode === "hummel"
      ? (service === "spotify" ? '.music-link[data-mode="hummel"]' : ".hummel-youtube-link")
      : (service === "spotify" ? ".oma-spotify-link" : '.music-link[data-mode="oma"]'),
  );
  // Preserve existing saved values for the original customizable buttons.
  const legacyKey = (mode === "hummel" && service === "spotify") ||
    (mode === "oma" && service === "youtube")
    ? `sumsi-link-${mode}`
    : null;
  const status = form.querySelector('[role="status"]');
  const apply = (value) => {
    input.value = value;
    link.href = value;
  };
  const hostMatches = (url) => {
    try {
      const hostname = new URL(url).hostname;
      return service === "spotify"
        ? hostname === "open.spotify.com"
        : ["youtube.com", "www.youtube.com", "m.youtube.com",
           "music.youtube.com", "youtu.be"].includes(hostname);
    } catch { return false; }
  };
  const stored = validMusicUrl(readSaved(storageKey)) ||
    (legacyKey && validMusicUrl(readSaved(legacyKey)));
  apply(stored && hostMatches(stored) ? stored : defaults[key]);
  input.addEventListener("input", () => input.setCustomValidity(""));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = validMusicUrl(input.value.trim());
    if (!url || !hostMatches(url)) {
      input.setCustomValidity(`Bitte verwende einen gültigen HTTPS-Link von ${service === "spotify" ? "Spotify" : "YouTube"}.`);
      status.textContent = `Bitte füge einen gültigen ${service === "spotify" ? "Spotify" : "YouTube"}-Link ein.`;
      input.reportValidity();
      return;
    }
    apply(url);
    if (legacyKey) saveValue(legacyKey, url);
    status.textContent = saveValue(storageKey, url)
      ? "Gespeichert. Dein Link bleibt in diesem Browser."
      : "Link übernommen. Dauerhaftes Speichern ist in diesem Browser nicht verfügbar.";
  });
  form.querySelector("[data-reset]").addEventListener("click", () => {
    apply(defaults[key]);
    input.setCustomValidity("");
    if (legacyKey) saveValue(legacyKey, defaults[key]);
    status.textContent = saveValue(storageKey, defaults[key])
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
    this.lastAudioBeat = -1;
    this.audioEnabled = false;
    this.audioContext = null;
    this.exhaleInputs = element.querySelectorAll('input[name="exhale-duration"]');
    for (const input of this.exhaleInputs) input.addEventListener("change", () => {
      if (!input.checked) return;
      this.phases[1].duration = Number(input.value);
      this.total = this.phases.reduce((sum, phase) => sum + phase.duration, 0);
      // Changing the pattern starts a clean cycle, without a phase jump.
      if (this.running) this.pause();
      this.elapsed = 0;
      this.lastPhase = -1;
      this.lastAudioBeat = -1;
      this.started = false;
      this.render(0);
      this.element.querySelector(".exercise-note").textContent = `4 Sek. ein · ${input.value} Sek. aus`;
      this.status.textContent = `Bereit für 4 Sekunden Einatmen und ${input.value} Sekunden Ausatmen.`;
      this.toggle.innerHTML = 'Starten <span aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7Z"/></svg></span>';
    });
    this.eyesToggle = element.querySelector(".eyes-toggle");
    if (this.eyesToggle) this.eyesToggle.addEventListener("click", () => {
      this.audioEnabled = !this.audioEnabled;
      this.eyesToggle.setAttribute("aria-pressed", String(this.audioEnabled));
      this.eyesToggle.querySelector(".eyes-state").textContent = this.audioEnabled ? "An" : "Aus";
      if (this.audioEnabled) {
        this.prepareAudio();
        // Start at the next second when enabling sound mid-exercise.
        this.lastAudioBeat = Math.floor(this.elapsed + (this.running ? (performance.now() - this.anchor) / 1000 : 0));
      }
    });
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
    this.lastAudioBeat = -1;
    if (this.audioEnabled) this.prepareAudio();
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
    const elapsed = this.elapsed + (performance.now() - this.anchor) / 1000;
    this.render(elapsed);
    if (this.audioEnabled) this.audioCue(elapsed);
    this.frame = requestAnimationFrame(() => this.tick());
  }
  prepareAudio() {
    try {
      const AudioAPI = window.AudioContext || window.webkitAudioContext;
      if (AudioAPI && !this.audioContext) this.audioContext = new AudioAPI();
      this.audioContext?.resume();
    } catch (_) {
      // The visual breathing timer still works if audio is unavailable.
    }
  }
  audioCue(elapsed) {
    // The sound uses the same elapsed seconds and phase durations as the animation.
    const beat = Math.floor(elapsed);
    if (beat === this.lastAudioBeat) return;
    this.lastAudioBeat = beat;
    if (!this.audioContext || this.audioContext.state !== "running") return;
    try {
      const ctx = this.audioContext;
      const cycleSecond = beat % this.total;
      const phaseStart = cycleSecond === 0 || cycleSecond === this.phases[0].duration;
      const now = ctx.currentTime;
      // Two quiet sine partials create a warm chime instead of a sharp click.
      for (const [multiple, peak] of [[1, 0.032], [2, 0.008]]) {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = (phaseStart ? 565 : 440) * multiple;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(peak, now + 0.022);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(now);
        oscillator.stop(now + 0.29);
      }
    } catch (_) {
      // Audio may be blocked by mobile browser settings.
    }
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

// Small, fixed collection of believable thoughts; no AI or external service.
const thoughtPieces = [
  {"text":"Ich muss nicht alles heute schaffen.","note":"Ein unfertiger Tag ist kein gescheiterter Tag.","soft":"Vielleicht reicht es, einen nächsten Schritt zu finden.","topic":"druck"},
  {"text":"Ich darf meine Meinung ändern.","note":"Neue Erfahrungen dürfen alte Überzeugungen verändern.","soft":"Ich kann erst einmal offen bleiben für eine andere Sicht.","topic":"mut"},
  {"text":"Nicht jeder Gedanke ist eine Tatsache.","note":"Mein Kopf macht Vorschläge. Ich muss nicht alle übernehmen.","soft":"Vielleicht kann ich diesen Gedanken kurz prüfen.","topic":"gruebeln"},
  {"text":"Ich darf eine Pause machen, ohne sie zu verdienen.","note":"Erholung gehört zum Leben, nicht zur Belohnung.","soft":"Vielleicht darf ich heute eine kleine Pause ausprobieren.","topic":"ruhe"},
  {"text":"Ich darf etwas ausprobieren, ohne darin gut zu sein.","note":"Anfänge dürfen unbeholfen sein.","soft":"Vielleicht muss der erste Versuch nicht perfekt werden.","topic":"mut"},
  {"text":"Mein Tempo darf sich verändern.","note":"Nicht jeder Tag verlangt gleich viel von mir.","soft":"Vielleicht darf ich heute etwas langsamer sein.","topic":"ruhe"},
  {"text":"Ich kann freundlich zu mir sein, ohne alles gutzufinden.","note":"Selbstmitgefühl bedeutet nicht, Schwierigkeiten schönzureden.","soft":"Vielleicht kann ich zumindest auf Selbstvorwürfe verzichten.","topic":"selbstwert"},
  {"text":"Ich darf Grenzen setzen, auch wenn andere enttäuscht sind.","note":"Ein Nein macht mich nicht automatisch unfreundlich.","soft":"Vielleicht beginne ich mit einem kleinen, ehrlichen Nein.","topic":"grenzen"},
  {"text":"Ich muss nicht sofort eine Antwort haben.","note":"Manche Fragen brauchen Zeit.","soft":"Vielleicht kann ich sagen: Ich denke darüber nach.","topic":"druck"},
  {"text":"Ich darf um Hilfe bitten.","note":"Nicht jede Aufgabe ist für eine Person allein gedacht.","soft":"Vielleicht kann ich eine konkrete Kleinigkeit ansprechen.","topic":"verbundenheit"},
  {"text":"Ich kann gleichzeitig dankbar und erschöpft sein.","note":"Gefühle schließen sich nicht gegenseitig aus.","soft":"Vielleicht muss ich keines von beiden wegreden.","topic":"ruhe"},
  {"text":"Ich darf einen guten Moment genießen, ohne ihn festzuhalten.","note":"Nicht alles Schöne muss produktiv sein.","soft":"Vielleicht reicht es, diesen Moment zu bemerken.","topic":"ruhe"},
  {"text":"Meine Bedürfnisse sind Informationen, keine Störung.","note":"Sie zeigen mir, was mir gerade wichtig ist.","soft":"Vielleicht kann ich ihnen kurz zuhören.","topic":"grenzen"},
  {"text":"Ein Fehler sagt nicht alles über mich aus.","note":"Eine Handlung ist nicht meine ganze Person.","soft":"Vielleicht kann ich zuerst beschreiben, was passiert ist.","topic":"selbstwert"},
  {"text":"Ich muss nicht für alle angenehm sein.","note":"Ehrlichkeit und Freundlichkeit dürfen nebeneinanderstehen.","soft":"Vielleicht darf ich meine eigene Perspektive sagen.","topic":"grenzen"},
  {"text":"Ich darf neu anfangen, ohne bei null zu sein.","note":"Erfahrungen gehen nicht verloren, nur weil Pläne sich ändern.","soft":"Vielleicht bringe ich schon mehr mit, als ich gerade sehe.","topic":"mut"},
  {"text":"Ich kann einen schwierigen Tag haben und trotzdem einen Wert besitzen.","note":"Mein Wert lässt sich nicht an meiner heutigen Leistung ablesen.","soft":"Vielleicht muss ich meinen Wert heute gar nicht beweisen.","topic":"selbstwert"},
  {"text":"Ich darf etwas nicht wissen.","note":"Neugier beginnt oft mit einer offenen Frage.","soft":"Vielleicht könnte ich einfach nachfragen.","topic":"mut"},
  {"text":"Ich muss nicht jede Stimmung sofort reparieren.","note":"Manche Gefühle wollen erst einmal da sein dürfen.","soft":"Vielleicht kann ich benennen, was gerade los ist.","topic":"ruhe"},
  {"text":"Ich darf meine Energie einteilen.","note":"Nicht jeder Wunsch anderer muss zu meiner Aufgabe werden.","soft":"Vielleicht prüfe ich erst, was ich leisten kann.","topic":"grenzen"},
  {"text":"Es ist möglich, mutig und unsicher zugleich zu sein.","note":"Mut bedeutet nicht, nie zu zweifeln.","soft":"Vielleicht kann ich trotz Unsicherheit einen kleinen Schritt machen.","topic":"mut"},
  {"text":"Ich muss mich nicht mit meinem besten Tag vergleichen.","note":"Schwankungen gehören zu einem echten Leben.","soft":"Vielleicht ist der heutige Maßstab ein anderer.","topic":"druck"},
  {"text":"Ich darf stolz auf unsichtbare Fortschritte sein.","note":"Auch ein Gespräch, eine Grenze oder eine Pause kann etwas verändern.","soft":"Vielleicht habe ich heute etwas Kleines geschafft.","topic":"selbstwert"},
  {"text":"Ich darf mich umentscheiden, wenn etwas nicht zu mir passt.","note":"Ein früheres Ja verpflichtet mich nicht für immer.","soft":"Vielleicht kann ich noch einmal hinschauen.","topic":"grenzen"},
  {"text":"Ich muss nicht jede Unsicherheit sofort auflösen.","note":"Manche Antworten entstehen erst unterwegs.","soft":"Vielleicht halte ich ein kleines bisschen Unklarheit aus.","topic":"gruebeln"},
  {"text":"Ich darf Nähe wollen und Zeit für mich brauchen.","note":"Beides kann gleichzeitig wichtig sein.","soft":"Vielleicht kann ich beides freundlich ansprechen.","topic":"verbundenheit"},
  {"text":"Ich darf Freude an kleinen Dingen haben.","note":"Ein schöner Moment braucht keine große Begründung.","soft":"Vielleicht ist das Kleine heute genug.","topic":"ruhe"},
  {"text":"Meine Grenzen müssen nicht erst überschritten sein, damit sie gelten.","note":"Früh wahrnehmen ist besser als spät zusammenbrechen.","soft":"Vielleicht erkenne ich ein frühes Signal.","topic":"grenzen"},
  {"text":"Ich kann lernen, ohne mich dabei abzuwerten.","note":"Ein Lernschritt ist kein Beweis für Unfähigkeit.","soft":"Vielleicht darf es Übung brauchen.","topic":"mut"},
  {"text":"Ich darf meine eigenen Erfolge ernst nehmen.","note":"Auch wenn andere sie nicht sehen oder bewerten.","soft":"Vielleicht kann ich einen kleinen Erfolg benennen.","topic":"selbstwert"},
  {"text":"Ich bin mehr als meine To-do-Liste.","note":"Mein Leben besteht auch aus Beziehungen, Ruhe und Erfahrungen.","soft":"Vielleicht darf heute etwas anderes wichtig sein.","topic":"druck"},
  {"text":"Ich muss nicht jeden Gedanken zu Ende denken.","note":"Manche Fragen dürfen bis morgen warten.","soft":"Vielleicht kann ich ihn aufschreiben und später ansehen.","topic":"gruebeln"},
  {"text":"Ich darf etwas mögen, auch wenn ich nicht darin glänze.","note":"Nicht alles muss Wettbewerb oder Projekt werden.","soft":"Vielleicht darf ich es einfach gern machen.","topic":"mut"},
  {"text":"Ich darf mir Zeit nehmen, bevor ich Ja sage.","note":"Eine Antwort muss nicht sofort kommen.","soft":"Vielleicht sage ich: Ich melde mich dazu.","topic":"grenzen"},
  {"text":"Ich darf meine Meinung sagen, ohne die perfekte Formulierung zu finden.","note":"Ein Gespräch muss nicht druckreif sein.","soft":"Vielleicht reichen ehrliche, einfache Worte.","topic":"verbundenheit"},
  {"text":"Manchmal ist genug wirklich genug.","note":"Mehr Einsatz ist nicht immer die bessere Lösung.","soft":"Vielleicht kann ich heute bewusst aufhören.","topic":"druck"},
  {"text":"Ich kann einen Schritt zurückgehen, ohne aufzugeben.","note":"Pausen und Umwege gehören manchmal dazu.","soft":"Vielleicht ist ein kleinerer Schritt heute sinnvoll.","topic":"mut"},
  {"text":"Ich darf mich über Unterstützung freuen.","note":"Verbundenheit ist keine Schwäche.","soft":"Vielleicht muss ich nicht alles allein tragen.","topic":"verbundenheit"},
  {"text":"Ich darf mich auch an ganz gewöhnlichen Tagen wohlfühlen.","note":"Nicht jeder Tag muss besonders sein.","soft":"Vielleicht entdecke ich etwas Angenehmes im Alltäglichen.","topic":"ruhe"},
  {"text":"Ich kann kritisch denken und trotzdem Hoffnung behalten.","note":"Missstände zu sehen heißt nicht, dass Veränderung unmöglich ist.","soft":"Vielleicht gibt es einen kleinen Bereich, den ich beeinflussen kann.","topic":"mut"},
];
const thoughtStorageKey = "sumsi-thought-favorites-v1";
function readThoughtFavorites() {
  try {
    const parsed = JSON.parse(localStorage.getItem(thoughtStorageKey) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.filter(n => Number.isInteger(n) && n >= 0 && n < thoughtPieces.length) : []);
  } catch (_) { return new Set(); }
}
const thoughtFavorites = readThoughtFavorites();
const thoughtView = document.querySelector(".view-thought");
const thoughtMain = thoughtView.querySelector("#thought-main");
const thoughtSub = thoughtView.querySelector("#thought-sub");
const thoughtResponse = thoughtView.querySelector("#thought-response");
const thoughtFavoriteButton = thoughtView.querySelector(".thought-favorite");
const thoughtSavedList = thoughtView.querySelector(".thought-saved-list");
const thoughtSavedPanel = thoughtView.querySelector(".thought-saved-panel");
const thoughtDialogPanel = thoughtView.querySelector(".thought-dialog-panel");
let activeThought = Math.floor(Date.now() / 86400000) % thoughtPieces.length;
let thoughtSeen = new Set([activeThought]);
let softThought = false;
let lastThoughtChoice = "";
function showThought() {
  const piece = thoughtPieces[activeThought];
  thoughtMain.textContent = softThought ? piece.soft : piece.text;
  thoughtSub.textContent = softThought ? "Du musst nicht alles sofort glauben. Vielleicht ist dieser Gedanke etwas näher dran." : piece.note;
  thoughtResponse.hidden = !lastThoughtChoice;
  thoughtResponse.textContent = lastThoughtChoice === "yes" ? "SUMSI: Schön. Vielleicht darf dieser Gedanke heute ein bisschen mitkommen. 🐝" :
    lastThoughtChoice === "no" ? "SUMSI: Versteh ich. Hier ist eine vorsichtigere Variante – ohne Schönreden." : "";
  const saved = thoughtFavorites.has(activeThought);
  thoughtFavoriteButton.setAttribute("aria-pressed", String(saved));
  thoughtFavoriteButton.setAttribute("aria-label", saved ? "Gedankenstück aus Merkliste entfernen" : "Gedankenstück merken");
  thoughtFavoriteButton.textContent = saved ? "♥ Gemerkt" : "♡ Merken";
  thoughtView.querySelector(".thought-saved-count").textContent = String(thoughtFavorites.size);
}
function persistThoughts() {
  try { localStorage.setItem(thoughtStorageKey, JSON.stringify([...thoughtFavorites].sort((a,b) => a-b))); } catch (_) {}
}
function renderThoughtFavorites() {
  thoughtSavedList.replaceChildren();
  thoughtView.querySelector(".thought-empty").hidden = thoughtFavorites.size > 0;
  for (const id of thoughtFavorites) {
    const piece = thoughtPieces[id];
    const item = document.createElement("article");
    item.className = "thought-saved-item";
    const title = document.createElement("p");
    title.textContent = piece.text;
    const note = document.createElement("p");
    note.textContent = piece.note;
    const controls = document.createElement("div");
    controls.className = "thought-saved-controls";
    const revisit = document.createElement("button");
    revisit.type = "button";
    revisit.textContent = "Mit SUMSI ansehen";
    revisit.addEventListener("click", () => { activeThought = id; softThought = false; lastThoughtChoice = ""; setThoughtTab("dialog"); showThought(); });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Entfernen";
    remove.setAttribute("aria-label", "Gedankenstück aus Favoriten entfernen");
    remove.addEventListener("click", () => {
      thoughtFavorites.delete(id);
      persistThoughts(); renderThoughtFavorites(); showThought();
    });
    controls.append(revisit, remove);
    item.append(title, note, controls);
    thoughtSavedList.append(item);
  }
}
function setThoughtTab(tab) {
  const saved = tab === "saved";
  thoughtSavedPanel.hidden = !saved;
  thoughtDialogPanel.hidden = saved;
  for (const button of thoughtView.querySelectorAll(".thought-tab")) {
    button.setAttribute("aria-pressed", String(button.dataset.thoughtView === tab));
  }
  if (saved) renderThoughtFavorites();
}
thoughtView.querySelectorAll(".thought-tab").forEach(button => button.addEventListener("click", () => setThoughtTab(button.dataset.thoughtView)));
thoughtView.querySelector(".thought-yes").addEventListener("click", () => { softThought = false; lastThoughtChoice = "yes"; showThought(); });
thoughtView.querySelector(".thought-no").addEventListener("click", () => { softThought = true; lastThoughtChoice = "no"; showThought(); });
thoughtView.querySelector(".thought-next").addEventListener("click", () => {
  let options = thoughtPieces.map((_,i) => i).filter(i => i !== activeThought && !thoughtSeen.has(i));
  if (!options.length) { thoughtSeen = new Set([activeThought]); options = thoughtPieces.map((_,i) => i).filter(i => i !== activeThought); }
  const next = options[Math.floor(Math.random() * options.length)];
  activeThought = next; thoughtSeen.add(next);
  softThought = false; lastThoughtChoice = "";
  showThought();
});
thoughtFavoriteButton.addEventListener("click", () => {
  if (thoughtFavorites.has(activeThought)) thoughtFavorites.delete(activeThought);
  else thoughtFavorites.add(activeThought);
  persistThoughts(); showThought();
});
showThought();

// Hash routes work on GitHub Pages, including direct links and browser history.
const routeNames = new Set(["hummel", "oma", "box", "lang", "gedanken"]);
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
  document.querySelector(".motion-setting").hidden = route !== "box" && route !== "lang";
  const title = route
    ? document.querySelector(`#${route}-title`).textContent
    : "";
  document.title = `${title ? title + " · " : ""}SUMSI MIT PO · Kleine Pause für dich`;
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
