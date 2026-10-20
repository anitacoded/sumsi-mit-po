function AudioExercise({ kind, url, onBack, openSettings }) {
  const { Button, Card, Notice } = window.SUMSIMITPODesignSystem_132750;
  const hummel = kind === 'hummel';
  return (
    <ExerciseShell route={kind} onBack={onBack} motif={hummel ? 'bee' : 'armchair'} tone={hummel ? 'lavender' : 'mauve'}
      title={hummel ? 'Hummelmodus' : 'Innere Oma'}
      eyebrow={hummel ? 'Summen statt Scrollen.' : 'Ein Ort, an dem niemand etwas von dir will.'}
      lead={hummel ? 'Für die 37 offenen Tabs in deinem Kopf. Dein Sound. Dein kleines Ausklinken.' : 'Du musst heute niemandem etwas beweisen. Mach’s dir erst mal gemütlich.'}>
      <Card tone={hummel ? 'lilac' : 'mauve'} shadow style={{ minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ font: 'var(--weight-bold) var(--size-2xl)/1.1 var(--font-display)', letterSpacing: '-.02em', textAlign: 'center' }}>{hummel ? <>Kopf aus.<br />Sound an.</> : <>Du machst<br />das schon.</>}</p>
      </Card>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button size="lg" block iconRight="external-link" href={url} target="_blank" rel="noopener noreferrer" className="music-link" data-mode={kind}>{hummel ? 'Musik öffnen' : 'Gemütlichkeit öffnen'}</Button>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', textAlign: 'center' }}>Öffnet YouTube oder Spotify in einem neuen Tab.</p>
        <Button variant="ghost" block icon="settings" onClick={openSettings} aria-label={'Link für ' + (hummel ? 'Hummelmodus' : 'Innere Oma') + ' anpassen'}>Link anpassen</Button>
      </div>
    </ExerciseShell>
  );
}
window.AudioExercise = AudioExercise;
