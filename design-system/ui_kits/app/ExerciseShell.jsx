const SHELL_INDEX = { hummel: 1, oma: 2, box: 3, lang: 4 };
function ExerciseShell({ route, title, eyebrow, lead, motif, tone, onBack, children }) {
  const { Button, Chip, Motif } = window.SUMSIMITPODesignSystem_132750;
  const bg = { lilac: 'var(--lilac)', mauve: 'var(--mauve)', lavender: 'var(--light-lavender)', cream: 'var(--cream)' }[tone];
  const h = React.useRef(null);
  React.useEffect(() => { h.current && h.current.focus({ preventScroll: true }); }, []);
  return (
    <section id={route} className={'exercise-view view-' + route} aria-labelledby={route + '-title'} style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 20px' }}>
        <Button variant="ghost" size="sm" icon="arrow-left" onClick={onBack} style={{ textDecoration: 'none' }}>Alle Pausen</Button>
        <Chip>Pause {String(SHELL_INDEX[route]).padStart(2, '0')} / 04</Chip>
      </div>
      <div style={{ padding: '4px 20px 24px', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <span style={{ width: 64, height: 64, flex: 'none', borderRadius: 14, border: '2px solid var(--espresso)', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}><Motif kind={motif} size={44} basePath="../../" /></span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ font: 'var(--type-label)', color: 'var(--text-accent)' }}>{eyebrow}</p>
            <h1 id={route + '-title'} ref={h} tabIndex={-1} style={{ font: 'var(--type-h1)', letterSpacing: '-.02em', outline: 'none' }}>{title}</h1>
          </div>
        </div>
        <p style={{ font: 'var(--type-body)' }}>{lead}</p>
        {children}
      </div>
    </section>
  );
}
window.ExerciseShell = ExerciseShell;
