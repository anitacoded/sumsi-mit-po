# SUMSI MIT PO – Design System

**Kleine Pausen für laute Köpfe.**

SUMSI MIT PO ist eine kleine, niederschwellige Web-App: ein Werkzeugkasten für kurze Pausen. Vier Module (Hummelmodus, Innere Oma, Boxatmung, 4/8-Atmung), mobile-first, ohne Backend. Kein Therapieversprechen, keine Selbstoptimierung, kein Meditationsstudio. Der Name ist ein augenzwinkerndes Wortspiel rund um „Optimismus“ – **nicht** behaupten, er ergebe rückwärts exakt „Optimismus“.

## Sources
- `uploads/SUMSI_MIT_PO_Brand_Design_Guide.md` – Brand-, Stil- und Design-Guide v1.0 (Okt 2026). Verbindliche Grundlage.
- `uploads/sumsi-logo.png` – freigegebenes Hauptlogo (Biene + Schriftzug), 1254², Creme-Hintergrund.
- `uploads/sumsi-biene-icon.png` – freigegebene Biene allein, 576².
- Code: GitHub `anitacoded/sumsi-mit-po` @ `main` (GitHub Pages; `index.html`, `styles.css`, `app.js`, `scripts/build_site.py`). Gelesen am 2026-10-20. Technik (Routen, Speicherschlüssel, Link-Validierung, Timer-Verhalten, Labels, Texte) ist aus dem Live-Code übernommen; die Gestaltung folgt bewusst dem neuen Designsystem. Unterschiede: `INTEGRATION.md`.

## Index
- `styles.css` – Einstieg; nur `@import`s.
- `tokens/` – `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `base.css`, `legacy.css` (Aliase `--plum`, `--lavender`, `--border` der Live-Site).
- `INTEGRATION.md` – Ablage im Repo + Migrationsplan der Website.
- `assets/logo/` – Originale + abgeleitete Crops (`sumsi-logo`, `sumsi-bee`, `sumsi-wordmark`, je `-transparent`; `sumsi-favicon-64/512`).
- `assets/icons/` – Lucide-SVG-Subset (ISC). `assets/fonts/` – Space Grotesk + DM Sans (variable woff2).
- `guidelines/` – Foundation-Karten (Colors, Type, Spacing, Brand).
- `components/` – React-Primitives (siehe unten).
- `ui_kits/app/` – klickbare Mini-App (Dashboard, 4 Übungen, Einstellungen).
- `SKILL.md` – Agent-Skill-Einstieg.

## Components
- **core/** – `Button`, `IconButton`, `Icon`, `Logo`
- **content/** – `ExerciseTile`, `Card`, `Chip`, `Motif`
- **forms/** – `TextField`, `Switch`, `MusicLinkForm` (+ `MusicLinks`: Defaults, erlaubte Hosts, Speicherschlüssel, Routen aus `app.js`)
- **feedback/** – `Sheet`, `Notice`, `Toast`
- **navigation/** – `TopBar`
- **breathing/** – `BreathExercise`, `BoxBreath`, `CircleBreath`, `PhaseCountdown`, `TimerControls` (+ `useBreathTimer`, `BOX_PHASES`, `FOUR_EIGHT_PHASES`)

Keine Quelle definierte ein Komponenten-Inventar; das Set ist auf die App aus dem Guide zugeschnitten (Dashboard-Kacheln, Timer, Einstellungs-Panel). Bewusst weggelassen: Tabs, Tooltip, Avatar, Select, Checkbox, Radio – die App braucht sie nicht. Dialog = `Sheet` (einziges Overlay, Guide: „keine unnötigen Pop-ups“).

**Intentional additions:** `Motif` (grafisches Modul-Motiv je Übung, Guide §6), `Icon` (Wrapper für das Lucide-Subset), breathing-Familie (Kernfunktion der App).

---

## CONTENT FUNDAMENTALS
- **Sprache:** Deutsch, **du**, kurze klare Sätze. Satzanfang groß, sonst Satzschreibung; **kein Versalsatz** in UI (einzige Ausnahme: der Logo-Schriftzug SUMSI MIT PO).
- **Ton:** locker, pointiert, zugewandt. Frech, aber nie spöttisch gegenüber Stress. Humor als Einladung, nicht als Dauer-Gag – eine Pointe pro Ansicht reicht.
- **Wirkung vorsichtig:** „kann helfen“, „probiere aus, was zu dir passt“. Nie Heilungs- oder Wirkgarantien.
- **Kein Druck:** keine „du musst“, keine Streaks, keine Leistungsziele. Abbrechen ist immer okay.
- **Emoji:** nein. Keine Unicode-Deko-Icons.
- **Zahlen:** Rhythmus kompakt als `4·4·4·4`, `4·8` oder „4 Sek. ein · 8 Sek. aus“.
- **Beispiele (verbindlich):** „Was brauchst du gerade?“ · „Dein Kopf hat 37 Tabs offen? Hi.“ · „Du musst gerade gar nichts. Such dir eine Pause.“ · „Summen statt Scrollen.“ · „Ein Ort, an dem niemand etwas von dir will.“ · „Vier Ecken gegen Gedankenspaghetti.“ · „Länger aus. Etwas ruhiger.“ · „Wenn es unangenehm wird: pausieren und normal weiteratmen.“ · Claims: „Summen. Atmen. Kurz klarkommen.“, „Nicht perfekt entspannt. Aber vielleicht etwas sortierter.“
- **Vermeiden:** „Healing Journey“, „höchste Schwingung“, Therapie-Belehrung, Motivationsdruck, infantile Verniedlichung.
- **UI-Labels (wie Live-Site):** Starten · Pausieren · Fortsetzen · Neustart · Alle Pausen · Musik öffnen · Gemütlichkeit öffnen · Link anpassen · Speichern · Standard wiederherstellen · Weniger Bewegung. Phasen: Bereit? · Einatmen · Halten · Ausatmen.
- **Weitere Live-Texte:** „Kein Konto. Kein Müssen. Einfach kurz du.“ · „Kopf aus. Sound an.“ · „Du machst das schon.“ · „Dein Tempo ist ein gutes Tempo.“ · „Atme bequem, ohne Druck. Unangenehm oder schwindelig? Pausiere und atme normal weiter.“

## VISUAL FOUNDATIONS
- **Richtung:** *Playful editorial* – grafisch, warm, leicht retro-digital. Klare Struktur + kleine charmante Unregelmäßigkeiten. Ausdrücklich **keine** generische Pastell-Wellness-App.
- **Farbe:** exakt sieben HEX-Werte (`tokens/colors.css`). Espresso `#4B342F` = Text + Konturen; Deep Plum `#5F3D87` = Primäraktion, aktive Zustände, Fokus; Purple `#9570D3` = Markenakzent, Fortschritt (nur Flächen oder Headlines ≥24px – 3.5:1 auf Creme); Lilac `#C8B5E6` = Kacheln, Illustration; Light Lavender `#EEE8F7` = ruhige Sekundärflächen; Cream `#FAF7F2` = Hauptfläche; Mauve `#D6A7B8` = sparsamer Akzent, **nie Schrift** (1.9:1). Keine Verläufe, keine zusätzlichen Töne (kein Pink, kein Salbei).
- **Typo:** Space Grotesk 600/700 für Headlines, Timer, Buttons (–0.02em); DM Sans 400/500 für Text/UI. Basis 16px, Minimum 12px. Mobile-Headline max. 28px, Display 36px. Timer 64px, tabellarische Ziffern.
- **Spacing:** 4er-Raster; Seitenrand 20px; Kachel-Gap 12px; Touch-Ziele ≥ 48px.
- **Flächen & Karten:** solide Farbflächen mit **2px Espresso-Kontur**, Radius 18px. Interaktive Kacheln tragen einen **harten Versatzschatten** `4px 4px 0 Espresso` (Retro-Druck-Anmutung) – keine weichen Blur-Schatten. Ruhige Info-Flächen: Lavender + 1.5px Kontur in 22% Espresso.
- **Radien:** 8 (Input) · 12 (Button, IconButton, Notice) · 18 (Kacheln, Karten) · 24 (Sheet oben). Pillenform nur für Chips und den Switch – Buttons sind **keine** Pillen.
- **Linien:** konsistent 1.5 / 2 / 3px. Illustrative Motive (Quadrat, Kreis) mit 3px Espresso.
- **Hover:** Primär → Espresso-Fläche; Sekundär/Ghost → Lavender-Fläche; Kachel hebt sich 1px (Schatten 5px). Nie essenzielles Verhalten nur auf Hover.
- **Press:** Element rutscht 2–3px „in den Schatten“ (`translate(2px,2px)`, Schatten weg). IconButton: scale .94.
- **Fokus:** 3px Deep-Plum-Outline, 3px Offset, immer sichtbar via `:focus-visible`. Inputs: Plum-Rand + 3px Lilac-Ring.
- **Disabled:** Lavender-Fläche, Espresso 55% Text, kein Schatten.
- **Bewegung:** dezent. UI 120–200ms `cubic-bezier(.2,.7,.2,1)`; Atem-Animationen sinusförmig `cubic-bezier(.45,0,.55,1)`. Keine Bounces, kein Parallax. `prefers-reduced-motion` → Dauer 0, Kreis eingefroren, Phase + Zahl bleiben.
- **Transparenz/Blur:** kein Blur. Transparenz nur für Overlay (Espresso 45%) und gedämpften Text (Espresso 78%).
- **Hintergründe:** flaches Creme, keine Texturen, keine Fotos, keine Muster. Imagery = nur die Biene und flache Modul-Motive. Keine Stockfotos (meditierende Menschen, Lotus, Sonnenuntergang, Pflanzen).
- **Layout:** mobile-first, ab 320px nutzbar; Content max 560px zentriert. Header oben (Logo/Zurück links, Zahnrad rechts); primäre Aktionen unten, volle Breite, daumenfreundlich. Dashboard = 2×2-Kacheln ohne Scroll-Intro.
- **Illustration:** flächig, reduziert, leicht handgezeichnet. Modul-Motive: Biene/Kopfhörer (Hummelmodus), Sessel (Innere Oma), Quadrat + Punkt (Boxatmung), wachsender Kreis (4/8).

## ICONOGRAPHY
- Das Original-Repo nutzt laut Guide `assets/bee.svg`; ein Icon-Set ist nicht dokumentiert. **Ersatz: Lucide** (Strich 2px, runde Enden) – passt zu den runden Konturen der Biene. Subset als SVG in `assets/icons/` und eingebettet in `components/core/iconPaths.js` (`<Icon name="…">`). ⚠️ Substitution – bitte bestätigen oder eigenes Set liefern.
- Verwendet: settings, arrow-left, play, pause, rotate-ccw, external-link, x, check, info; Motive: headphones, armchair, square, circle, music, wind.
- Keine Emoji, keine Unicode-Symbole als Icons. Icons in Espresso (auf hellen Flächen) oder Creme (auf Plum).
- Die Biene ist kein Icon – sie ist das Logo. Nie nachzeichnen oder neu erfinden.

## Logo
- Freigegeben: Biene mit Over-Ear-Kopfhörern + Schriftzug „SUMSI“ Espresso · „MIT“ Mauve · „PO“ Purple.
- Varianten in `assets/logo/`: Hauptlogo, Biene allein, Wortmarke (Crop), horizontal (Komposition via `<Logo variant="horizontal">`), Favicon 64/512.
- `-transparent`-Versionen wurden per Farb-Freistellung aus den PNGs erzeugt (leichte Kantensäume möglich). **Fehlt noch:** echte SVG-Vektoren, App-Icon auf kontrastierendem Grund, inverse Version für dunkle Flächen.

## Technik
GitHub Pages, statisch (HTML/CSS/JS). Bei Releases CSS/JS versionieren (`styles.css?v=…`), da alte Caches neues HTML mit altem CSS mischten. Feature-Branch → PR gegen `main` → visuelle Prüfung → Merge. Max. eine Atemübung gleichzeitig; Browser-Zurück muss funktionieren; Links lokal per `localStorage`.
