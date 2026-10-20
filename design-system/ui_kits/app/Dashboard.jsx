function Dashboard({ go, openSettings }) {
  const { TopBar, ExerciseTile } = window.SUMSIMITPODesignSystem_132750;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <TopBar showLogo onSettings={openSettings} basePath="../../" />
      <main id="main" style={{ padding: '8px 20px 24px', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
        <section id="dashboard" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ font: 'var(--type-label)', color: 'var(--text-accent)' }}>Dein Kopf hat 37 Tabs offen? Hi.</p>
            <h1 id="dashboard-title" style={{ font: 'var(--type-h1)', letterSpacing: '-.02em' }}>Was brauchst du gerade?</h1>
            <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)' }}>Du musst gerade gar nichts. Such dir eine Pause.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 }}>
            <ExerciseTile title="Hummelmodus" subtitle="Summen statt Scrollen." motif="bee" tone="lavender" meta="01" basePath="../../" href="#hummel" data-open="hummel" onClick={e => { e.preventDefault(); go('hummel'); }} />
            <ExerciseTile title="Innere Oma" subtitle="Ein Ort, an dem niemand etwas von dir will." motif="armchair" tone="mauve" meta="02" href="#oma" data-open="oma" onClick={e => { e.preventDefault(); go('oma'); }} />
            <ExerciseTile title="Boxatmung" subtitle="Vier Ecken gegen Gedankenspaghetti." motif="box" tone="lilac" meta="03" href="#box" data-open="box" onClick={e => { e.preventDefault(); go('box'); }} />
            <ExerciseTile title="4/8-Atmung" subtitle="Länger aus. Etwas ruhiger." motif="circle" tone="cream" meta="04" href="#lang" data-open="lang" onClick={e => { e.preventDefault(); go('lang'); }} />
          </div>
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-accent)' }}>Kein Konto. Kein Müssen. Einfach kurz du.</p>
        </section>
      </main>
    </div>
  );
}
window.Dashboard = Dashboard;
