/** Musiklink-Formular einer Übung (Hummelmodus / Innere Oma). Validiert wie die Live-Site: nur HTTPS auf youtube.com, www./m./music.youtube.com, youtu.be, open.spotify.com. Speichert unter sumsi-link-<mode>. */
export interface MusicLinkFormProps {
  mode?: 'hummel' | 'oma';
  label?: string;
  /** Wird mit der gültigen URL aufgerufen (Speichern oder Zurücksetzen) */
  onChange?: (url: string) => void;
}
export declare function MusicLinkForm(props: MusicLinkFormProps): JSX.Element;
export declare function loadMusicLink(mode: 'hummel' | 'oma'): string;
export declare const MusicLinks: {
  load(mode: 'hummel' | 'oma'): string;
  validate(value: string): string | null;
  DEFAULTS: { hummel: string; oma: string };
  HOSTS: string[];
  STORAGE_KEYS: { linkHummel: 'sumsi-link-hummel'; linkOma: 'sumsi-link-oma'; reduceMotion: 'sumsi-reduce-motion' };
  ROUTES: ['hummel', 'oma', 'box', 'lang'];
};
