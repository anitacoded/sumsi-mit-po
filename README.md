# SUMSI MIT PO

Kleine Pausen für laute Köpfe. Eine mobiloptimierte, statische Mini-App mit Dashboard und fokussierten Übungsansichten in Espresso-Braun, Pflaumenlila und Flieder – mit einer eigenen Biene mit Kopfhörern als SVG-Logo.

## Lokal starten

Keine Installation und kein Build nötig. Im Repository:

```sh
python3 -m http.server 8000
```

Die Website anschließend im Browser über den lokalen Server öffnen. Alternativ lässt sich `index.html` direkt öffnen; die dauerhafte Speicherung von Musiklinks kann bei `file:`-URLs browserabhängig eingeschränkt sein.

## GitHub Pages

Der vorhandene Workflow `.github/workflows/static.yml` veröffentlicht ausschließlich bei Push auf `main` oder manuellem Start. In **Settings → Pages** muss **GitHub Actions** als Quelle eingestellt sein. Feature-Branches werden nicht automatisch veröffentlicht. Erst nach Prüfung und Merge des Redesign-PRs kann der normale Main-Workflow das Design veröffentlichen.

Alle Assets einschließlich Space Grotesk und DM Sans werden lokal mit relativen Dateipfaden geladen. Die Mini-App funktioniert unter einem Repository-Unterpfad, ohne Backend oder Build. Die Schriftdateien stammen aus den Fontsource-Paketen (Version 5.3.0); ihre SIL-OFL-Lizenzen liegen unter `assets/fonts/`.

## Dashboard und Navigation

Vier Kacheln öffnen jeweils genau eine Übungsansicht ohne Seitenneuladung. Der Button **Alle Pausen**, der Markenlink und Browser-Zurück/-Vorwärts erlauben die Rückkehr zur Übersicht. Direkte Links mit `#hummel`, `#oma`, `#box` oder `#lang` funktionieren auch auf GitHub Pages. Beim Verlassen einer Übungsansicht pausiert ein laufender Timer; sein Zeitstand bleibt innerhalb der Sitzung erhalten. Nach der Navigation steht der Tastaturfokus auf der Überschrift beziehungsweise der vorher gewählten Kachel.

Die Musiklink-Einstellungen öffnen sich erst über das Einstellungssymbol **Link anpassen**. Vorhandene `sumsi-link-hummel`, `sumsi-link-oma` und `sumsi-reduce-motion`-Einstellungen werden weiterverwendet.

## Die vier Bereiche

- **Hummelmodus:** externer YouTube-/Spotify-Link für die eigene Musik.
- **Innere Oma:** eigener externer Wohlfühllink.
- **Boxatmung:** jeweils 4 Sekunden einatmen, halten, ausatmen, halten. Der Punkt folgt dem Quadrat.
- **4/8-Atmung:** 4 Sekunden einatmen, 8 Sekunden ausatmen. Der Kreis wächst und schrumpft.

Die voreingestellten Musiklinks führen zu YouTube-Suchen. Sie starten keine Wiedergabe automatisch. Eigene Links lassen sich je Bereich anpassen und zurücksetzen. Erlaubt sind ausschließlich HTTPS-Links auf `youtube.com`, `www.youtube.com`, `m.youtube.com`, `music.youtube.com`, `youtu.be` und `open.spotify.com`. Die Einstellungen bleiben lokal im jeweiligen Browser; wenn Speicherung nicht verfügbar ist, funktionieren die Links weiterhin für die aktuelle Sitzung. Erst beim Öffnen eines Musiklinks wird der externe Dienst aufgerufen. Neue Tabs verwenden `noopener noreferrer`.

## Bedienung und Zugänglichkeit

Die Atemübungen laufen ohne feste Rundenzahl. **Starten** beginnt mit dem Einatmen, **Pausieren** hält den exakten Zeitstand an, **Fortsetzen** führt ihn weiter. **Neustart** beginnt die Übung sofort wieder beim ersten Einatmen. Es läuft höchstens eine Übung gleichzeitig. Beim Wechsel in einen anderen Tab oder eine andere App wird die laufende Übung pausiert.

Die Betriebssystemeinstellung `prefers-reduced-motion` sowie **Weniger Bewegung** deaktivieren die Bewegungsanimationen. Phasen und Sekunden bleiben als Text sichtbar. Phasenwechsel werden über eine zurückhaltende Live-Region ausgegeben; der Sekunden-Countdown löst keine sekündlichen Screenreader-Ansagen aus. Semantische Bereiche, Tastaturbedienung, sichtbare Fokusmarkierungen und ein Sprunglink sind vorhanden.

## Funktionsprüfung

Im Chromium-Browser wurden die vollständigen 4/4/4/4- und 4/8-Zyklen mit kontrollierter Browserzeit geprüft, außerdem Pause/Fortsetzen, Neustart, gegenseitiges Pausieren, Linkvalidierung, Speichern nach Neuladen, Zurücksetzen und die Systemeinstellung für reduzierte Bewegung. Mobile Ansichten mit 320 und 390 Pixeln Breite haben keinen horizontalen Überlauf. JavaScript-Syntax und Git-Whitespace-Prüfung ergänzen die Browserprüfung.

Die wiederholbare Browserprüfung steht in `tests/smoke.cjs`. Sie benötigt Node.js und Playwright, aber keine Abhängigkeiten im App-Verzeichnis. In einem separaten Terminal den lokalen Server wie oben starten; dann zum Beispiel:

```sh
npm install --prefix /tmp/sumsi-test playwright
/tmp/sumsi-test/node_modules/.bin/playwright install chromium
NODE_PATH=/tmp/sumsi-test/node_modules node tests/smoke.cjs
```

Für einen bereits installierten Chromium-Browser `CHROMIUM_PATH=/pfad/zu/chromium` setzen. Mit `TEST_URL` lässt sich ein anderer Server oder der Repository-Unterpfad prüfen. Die Suite prüft Navigation und Fokus, beide Atemzyklen, Timersteuerung, Exklusivität, Tabwechsel, vorhandene Musiklinks, Validierung und Speicherung einschließlich Speicherfehlern, reduzierte Bewegung sowie Überlauf bei 320, 390, 768 und 1440 Pixeln. Sie verwendet kontrollierte Browserzeit statt echte Atemzyklen abzuwarten.

Zusätzlich wurden alle fünf Ansichten und die laufende Boxatmung mit axe-core auf WCAG-2.1-AA-Regeln geprüft (keine gemeldeten Verstöße). Das ersetzt keine manuelle Prüfung mit assistiven Technologien.

Zum manuellen Nachprüfen:

1. Beide Atemübungen starten und die jeweiligen Phasenlängen beobachten.
2. Pausieren, einige Sekunden warten und fortsetzen; anschließend neu starten.
3. Während einer Übung die andere starten sowie den Browser-Tab wechseln: Die bisher laufende Übung pausiert.
4. Einen Spotify-/YouTube-Link speichern, neu laden und wiederherstellen. Eine fremde Domain muss abgewiesen werden.
5. Weniger Bewegung aktivieren: Kreis und Punkt bewegen sich nicht; Text und Steuerung bleiben nutzbar.
6. Mit Tab und Enter alle Kacheln, Links, Formulare und Atemsteuerungen bedienen; bei schmalem Bildschirm die vier Bereiche prüfen.
7. Jede Kachel öffnen, Browser-Zurück und -Vorwärts testen; anschließend einen direkten Übungslink neu laden und über **Alle Pausen** zur Übersicht zurückkehren.

Eine Prüfung mit echten Screenreadern und die Veröffentlichung auf GitHub Pages sind damit noch nicht erfolgt.
