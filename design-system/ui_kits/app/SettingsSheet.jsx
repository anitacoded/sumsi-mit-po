function SettingsSheet({ open, onClose, focus, setLink, reducedMotion, setReducedMotion }) {
  const { Sheet, MusicLinkForm, Switch, Notice } = window.SUMSIMITPODesignSystem_132750;
  const showH = !focus || focus === 'hummel', showO = !focus || focus === 'oma';
  return (
    <Sheet open={open} onClose={onClose} title={focus === 'hummel' ? 'Link für Hummelmodus' : focus === 'oma' ? 'Link für Innere Oma' : 'Einstellungen'}>
      {showH && <MusicLinkForm mode="hummel" label={focus ? 'YouTube- oder Spotify-Link' : 'Hummelmodus · YouTube- oder Spotify-Link'} onChange={u => setLink('hummel', u)} />}
      {showO && <MusicLinkForm mode="oma" label={focus ? 'YouTube- oder Spotify-Link' : 'Innere Oma · YouTube- oder Spotify-Link'} onChange={u => setLink('oma', u)} />}
      {!focus && <Switch label="Weniger Bewegung" description="Kreis und Punkt bewegen sich nicht. Phase und Sekunden bleiben sichtbar." checked={reducedMotion} onChange={setReducedMotion} />}
      <Notice icon="info">Einstellungen bleiben lokal in diesem Browser.</Notice>
    </Sheet>
  );
}
window.SettingsSheet = SettingsSheet;
