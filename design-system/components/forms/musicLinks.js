// Übernommen aus app.js der Live-Site – gleiche Defaults, Hosts und Speicherschlüssel.
export const DEFAULT_MUSIC_LINKS = {
  hummel: 'https://www.youtube.com/results?search_query=lofi+chill+music',
  oma: 'https://www.youtube.com/results?search_query=cozy+jazz+relaxing',
};
export const ALLOWED_MUSIC_HOSTS = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtu.be', 'open.spotify.com'];
export const STORAGE_KEYS = { linkHummel: 'sumsi-link-hummel', linkOma: 'sumsi-link-oma', reduceMotion: 'sumsi-reduce-motion' };
export const ROUTES = ['hummel', 'oma', 'box', 'lang'];

export function validMusicUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && ALLOWED_MUSIC_HOSTS.includes(url.hostname) && !url.username && !url.password && !url.port ? url.href : null;
  } catch (e) { return null; }
}
export function readSaved(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
export function saveValue(key, value) { try { localStorage.setItem(key, value); return true; } catch (e) { return false; } }
