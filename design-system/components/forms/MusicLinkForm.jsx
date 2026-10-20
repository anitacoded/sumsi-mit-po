import React, { useState, useId } from 'react';
import { TextField } from './TextField.jsx';
import { Button } from '../core/Button.jsx';
import { DEFAULT_MUSIC_LINKS, ALLOWED_MUSIC_HOSTS, STORAGE_KEYS, ROUTES, validMusicUrl, readSaved, saveValue } from './musicLinks.js';

export function loadMusicLink(mode) {
  return validMusicUrl(readSaved(mode === 'oma' ? STORAGE_KEYS.linkOma : STORAGE_KEYS.linkHummel)) || DEFAULT_MUSIC_LINKS[mode];
}

/** App-Konstanten und Helfer der Live-Site, gebündelt (Großbuchstabe → im Namespace sichtbar). */
export const MusicLinks = { load: loadMusicLink, validate: validMusicUrl, DEFAULTS: DEFAULT_MUSIC_LINKS, HOSTS: ALLOWED_MUSIC_HOSTS, STORAGE_KEYS, ROUTES };

export function MusicLinkForm({ mode = 'hummel', label = 'YouTube- oder Spotify-Link', onChange }) {
  const key = mode === 'oma' ? STORAGE_KEYS.linkOma : STORAGE_KEYS.linkHummel;
  const [value, setValue] = useState(() => loadMusicLink(mode));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const id = useId();
  const submit = e => {
    e.preventDefault();
    const url = validMusicUrl(value.trim());
    if (!url) { setError('Bitte verwende einen gültigen YouTube- oder Spotify-Link mit https://.'); setStatus(''); return; }
    setError(''); setValue(url); onChange && onChange(url);
    setStatus(saveValue(key, url) ? 'Gespeichert. Dein Link bleibt in diesem Browser.' : 'Link übernommen. Dauerhaftes Speichern ist in diesem Browser nicht verfügbar.');
  };
  const reset = () => {
    const d = DEFAULT_MUSIC_LINKS[mode];
    setValue(d); setError(''); onChange && onChange(d);
    setStatus(saveValue(key, d) ? 'Standardlink wiederhergestellt.' : 'Standardlink für diese Sitzung wiederhergestellt.');
  };
  return (
    <form data-mode={mode} onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <TextField id={id} name="url" type="url" inputMode="url" label={label} value={value} error={error}
            placeholder={mode === 'oma' ? 'https://www.youtube.com/…' : 'https://open.spotify.com/…'}
            onChange={e => { setValue(e.target.value); setError(''); }} />
        </div>
        {!error && <Button type="submit" style={{ flex: 'none' }}>Speichern</Button>}
      </div>
      {error && <Button type="submit" block>Speichern</Button>}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="ghost" size="sm" icon="rotate-ccw" onClick={reset}>Standard wiederherstellen</Button>
        <p role="status" style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>{status}</p>
      </div>
    </form>
  );
}
