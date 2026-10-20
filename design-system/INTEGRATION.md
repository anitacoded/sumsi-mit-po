# Integration in `anitacoded/sumsi-mit-po`

Das Designsystem ist die **zukünftige gestalterische Grundlage**. Die Website bleibt vorerst unverändert. Dieses Dokument trennt:
- **A – Gestaltungsentscheidungen:** hier gilt das Designsystem; die Website wird später angepasst.
- **B – Technik:** hier wurde das Designsystem an die Website angepasst (oder es ist eine Übersetzung dokumentiert), damit die Integration reibungslos läuft.

## 1. Ablage im Repository (jetzt)

```sh
git clone https://github.com/anitacoded/sumsi-mit-po.git && cd sumsi-mit-po
git switch -c design-system
mkdir design-system   # ZIP-Inhalt hierhin kopieren
rm -rf design-system/uploads design-system/_adherence.oxlintrc.json design-system/_ds_manifest.json design-system/github.md
git add design-system && git commit -m "Designsystem unter design-system/ ergänzen"
git push -u origin design-system   # dann PR gegen main öffnen
```

Sicher, weil:
- `scripts/build_site.py` nur `index.html`, `styles.css`, `app.js`, `assets/` nach `_site/` kopiert, also wird `design-system/` nicht veröffentlicht.
- `tests/test_build_site.py` prüft nur diese Dateien.
- Alle Pfade im Designsystem sind relativ zu `design-system/`.

Optional: `_ds_bundle.js` (vorkompilierte Komponenten, braucht React 18 global) behalten, damit Karten und UI-Kit direkt im Browser laufen.

## 2. A – Gestaltungsentscheidungen (Website folgt später dem Designsystem)

| Thema | Website heute | Designsystem (Ziel) |
|---|---|---|
| Konturen | 1px Espresso; `--border` #4b342f35 | 2px Espresso (`--stroke`); weich 1.5px `--border-soft` (22 %) |
| Radien | 8px überall; Kacheln asymmetrisch 8/52px; Blob-Formen bei `.audio-art` | 8 Input · 12 Button · 18 Kachel/Karte · 24 Sheet; symmetrisch, keine Blobs |
| Schatten | nur Hover `4px 5px 0` | harter Versatz `--shadow-offset` (4px) auf Kacheln, `--shadow-offset-sm` (2px) auf Buttons |
| Primärbutton | `.button.dark` Espresso, Hover #65483f | Deep Plum, Hover Espresso (#65483f entfällt, keine Nicht-Palettenfarbe) |
| Hummel-Kachel | Plum-Fläche, Creme-Schrift | Lavender (Biene bleibt sichtbar); Oma Mauve · Box Lilac · 4/8 Creme |
| Headlines | Space Grotesk 600, bis 57px, –2px | 700, Mobile max. 28px (H1) / 36px (Display), –0.02em |
| Timer-Ziffer | 80px / 500 | 64px / 700 (`--type-timer`), tabellarisch |
| Eyebrows | VERSALIEN, gesperrt | Satzschreibung, DM Sans Medium, Deep Plum |
| Kleinste Schrift | 10px (`.readout-note`, `.view-index`) | min. 12px (`--size-xs`) |
| Illustrationen | eigene Inline-SVGs (Kopfhörer, Tasse, Quadrat, Kreise) | `Motif`: Biene, Sessel, Quadrat + Punkt, Kreis. Die Live-SVGs dürfen als Varianten bleiben, wenn freigegeben |
| Link-Einstellungen | `<details>` inline in der Übung | Bottom-`Sheet` mit `MusicLinkForm` |
| „Weniger Bewegung“ | Checkbox im Footer | `Switch` im Einstellungs-Sheet (Zahnrad im Header) |
| Header | Biene + zweizeiliger Text „SUMSI / MIT PO.“ | `TopBar` mit Logo-Artwork + Zahnrad |
| Fokus-Ring | 3px Plum, Offset 5px | 3px Deep Plum, Offset 3px |

## 3. B – Technische Kompatibilität (im Designsystem bereits berücksichtigt)

| Bereich | Website | Designsystem |
|---|---|---|
| Farbwerte | 7 HEX-Werte | identisch |
| CSS-Variablen | `--plum`, `--lavender`, `--border` | neu `--deep-plum`, `--light-lavender`, `--border-soft`; **Aliase in `tokens/legacy.css`**, damit alte Namen weiter greifen |
| Routen | `#hummel` `#oma` `#box` `#lang`, Dashboard ohne Hash, `history.pushState({sumsiNavigation:true})` | identisch im UI-Kit; `MusicLinks.ROUTES` |
| Speicherschlüssel | `sumsi-link-hummel`, `sumsi-link-oma`, `sumsi-reduce-motion` ("true"/"false") | identisch (`MusicLinks.STORAGE_KEYS`); Nutzer behalten ihre Einstellungen |
| Link-Validierung | HTTPS; youtube.com, www./m./music.youtube.com, youtu.be, open.spotify.com; ohne user/pass/port | identisch (`MusicLinks.validate`, `MusicLinkForm`) |
| Default-Links | lofi chill music / cozy jazz relaxing | identisch |
| Status-Texte | „Gespeichert. Dein Link bleibt in diesem Browser.“ usw. | identisch |
| Timer | Zeitmessung per `performance.now`; Pause bei `visibilitychange` und Ansichtswechsel; max. 1 Übung; keine Runden | identisch (`useBreathTimer`; Unmount beim Verlassen) |
| Timer-Labels | Starten · Pausieren · Fortsetzen · Neustart; aria „Boxatmung neu starten“ | identisch (`TimerControls`, `restartLabel`) |
| Phasen | Box 4/4/4/4, Lang 4/8; `data-breath="box"`/`"long"` | identisch; `BreathExercise mode="box"`/`"lang"` |
| Reduced motion | OS-Einstellung **oder** Schalter; Klasse `.reduced-motion` auf `<html>` | identisch; zusätzlich Token-Dauern = 0 |
| Fokus nach Navigation | Überschrift der Übung bzw. vorherige Kachel | Übungsüberschrift `tabIndex=-1` + Fokus; Kacheln tragen `data-open` |
| IDs/Hooks | `#main`, `#dashboard`, `#<route>-title`, `.music-link[data-mode]`, `form[data-mode]` | im UI-Kit beibehalten |
| Schriften | Fontsource 5.3.0: `space-grotesk-latin-wght-normal.woff2`, `dm-sans-latin-wght-normal.woff2` | Google-Fonts-Variablen inkl. latin-ext + DM Sans Italic; andere Dateinamen |
| Favicon | `./assets/sumsi-biene-icon.png` | gleiche Datei als `assets/logo/sumsi-bee.png` + Favicons 64/512 |

## 4. Spätere Migration der Website (eigener PR, nicht jetzt)

1. **Tokens einbinden:** Oben in `styles.css` `@import "./design-system/tokens/colors.css"` usw., oder die Token-Dateien nach `assets/` kopieren. Achtung: `build_site.py` veröffentlicht nur `assets/`, also entweder dorthin kopieren oder das Build-Skript (plus Test `test_real_site_changes_only_the_two_asset_references`) erweitern.
2. **Schriften:** entweder die bestehenden Fontsource-Dateien behalten und `tokens/fonts.css` auf sie umstellen, oder die Designsystem-Dateien nach `assets/fonts/` übernehmen (Lizenz-TXT behalten).
3. **Variablen umbenennen:** `--plum` → `--deep-plum`, `--lavender` → `--light-lavender`, `--border` → `--border-soft`. Danach `tokens/legacy.css` entfernen.
4. **Gestaltung umsetzen** (Tabelle A): Konturen 2px, Radien, Offset-Schatten, Button-Farben, Kachel-Töne, Typo-Größen, keine Versalien, min. 12px.
5. **Struktur:** `<details class="link-settings">` → Sheet. Footer-Checkbox → Schalter im Sheet. Header → Logo + Zahnrad. Die IDs, `data-*` und Speicherschlüssel aus Tabelle B bleiben.
6. **Ohne Build bleiben:** Die Website ist Vanilla-JS. Die React-Komponenten sind Referenz und Spezifikation; für die Website die Klassen und Werte in CSS nachbauen. React ist nicht nötig.
7. **Prüfen:** `python3 -m unittest …`, `tests/smoke.cjs` (falls vorhanden; im Repo-Baum aktuell nicht gefunden), axe-core, 320/390/768/1440px.
8. **Cache:** läuft über die bestehenden Content-Hashes in `build_site.py`; nichts manuell versionieren.

## PR-Beschreibung (Vorschlag)

**Titel:** Designsystem unter `design-system/` ergänzen

Fügt das SUMSI-MIT-PO-Designsystem als eigenständigen Ordner hinzu, damit Menschen und KI-Tools zentral darauf zugreifen können. Die Website wird nicht verändert und nicht neu ausgeliefert (`build_site.py` kopiert `design-system/` nicht).

Enthalten: `readme.md` (Marke, Ton, visuelle Grundlagen), `SKILL.md`, `styles.css` + `tokens/`, `assets/` (Logo, Favicons, Icons, Schriften), `components/` (React-Referenz mit `.d.ts`), `guidelines/` (Spezimen), `ui_kits/app/` (klickbare Zielgestaltung), `INTEGRATION.md` (Migrationsplan).
