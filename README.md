# SUMSI MIT PO

Kleine Pausen für laute Köpfe. Eine mobiloptimierte, statische Website in Espresso-Braun, Pflaumenlila und Flieder – mit einer eigenen Biene mit Kopfhörern als SVG-Logo.

## Lokal starten

Keine Installation und kein Build nötig. Im Repository:

```sh
python3 -m http.server 8000
```

Die Website anschließend im Browser über den lokalen Server öffnen. Alternativ lässt sich `index.html` direkt öffnen; die dauerhafte Speicherung von Musiklinks kann bei `file:`-URLs browserabhängig eingeschränkt sein.

## GitHub Pages

Nach Übernahme der Dateien in `main` unter **Settings → Pages → Build and deployment → Deploy from a branch** die Branch `main` und den Ordner **/ (root)** wählen und speichern. Alle Assets werden relativ eingebunden; damit funktioniert die Website auch unter einem Repository-Unterpfad. Ein Backend, Zugangsdaten, externe Schriftarten und ein Build-Schritt sind nicht erforderlich.

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

Zum manuellen Nachprüfen:

1. Beide Atemübungen starten und die jeweiligen Phasenlängen beobachten.
2. Pausieren, einige Sekunden warten und fortsetzen; anschließend neu starten.
3. Während einer Übung die andere starten sowie den Browser-Tab wechseln: Die bisher laufende Übung pausiert.
4. Einen Spotify-/YouTube-Link speichern, neu laden und wiederherstellen. Eine fremde Domain muss abgewiesen werden.
5. Weniger Bewegung aktivieren: Kreis und Punkt bewegen sich nicht; Text und Steuerung bleiben nutzbar.
6. Mit Tab und Enter alle Links, Formulare und Atemsteuerungen bedienen; bei schmalem Bildschirm die vier Bereiche prüfen.

Eine Prüfung mit echten Screenreadern und die Veröffentlichung auf GitHub Pages sind damit noch nicht erfolgt.
