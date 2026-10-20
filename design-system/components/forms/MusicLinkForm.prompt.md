Link-Einstellung für eine Audio-Übung – Eingabe, Speichern, „Standard wiederherstellen“, Statuszeile; Verhalten 1:1 wie `app.js` der Live-Site.
```jsx
<MusicLinkForm mode="hummel" onChange={setHummelUrl} />
```
`MusicLinks.load(mode)` liest den gespeicherten (gültigen) Link oder den Default. `MusicLinks.validate`, `.DEFAULTS`, `.HOSTS`, `.STORAGE_KEYS`, `.ROUTES` spiegeln `app.js`. Gehört in den Einstellungs-Sheet, nicht dauerhaft auf die Übungsfläche.
