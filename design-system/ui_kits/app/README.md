# SUMSI MIT PO – Mini-App UI kit

Referenz der SUMSI-MIT-PO-App im **neuen** Designsystem. Verhalten, Routen, Texte und Speicherschlüssel stammen aus `index.html`/`app.js` der Live-Site (`anitacoded/sumsi-mit-po@main`); die Optik ist die Zielgestaltung, keine Kopie der heutigen Website.

Screens (hash-routed, browser back works):
- `#` Dashboard · `#hummel` · `#oma` · `#box` · `#lang` (wie Live; pushState mit `sumsiNavigation`, „Alle Pausen“ = history.back)
- Einstellungs-Sheet: `MusicLinkForm` je Audio-Übung + „Weniger Bewegung“; Schlüssel `sumsi-link-hummel`, `sumsi-link-oma`, `sumsi-reduce-motion`

Files: `App.jsx` (routing/state), `Dashboard.jsx`, `ExerciseShell.jsx`, `AudioExercise.jsx`, `BreathView.jsx`, `SettingsSheet.jsx`. All UI primitives come from the design-system bundle.

Default-Links = Live-Defaults (YouTube-Suchen „lofi chill music“ / „cozy jazz relaxing“).
