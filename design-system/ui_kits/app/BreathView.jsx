function BreathView({ mode, onBack, reducedMotion }) {
  const { BreathExercise, Notice } = window.SUMSIMITPODesignSystem_132750;
  const box = mode === 'box';
  return (
    <ExerciseShell route={mode} onBack={onBack} motif={box ? 'box' : 'circle'} tone={box ? 'lilac' : 'cream'}
      title={box ? 'Boxatmung' : '4/8-Atmung'}
      eyebrow={box ? 'Vier Ecken gegen Gedankenspaghetti.' : 'Länger aus. Etwas ruhiger.'}
      lead={box ? 'Vier Sekunden einatmen, halten, ausatmen, halten. Ein kleiner Rahmen für einen vollen Kopf.' : 'Vier Sekunden ein. Acht Sekunden aus. Folge dem Kreis und lass die Schultern sinken.'}>
      <div data-breath={box ? 'box' : 'long'} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <BreathExercise mode={box ? 'box' : 'lang'} size={box ? 190 : 200} reducedMotion={reducedMotion} restartLabel={(box ? 'Boxatmung' : '4/8-Atmung') + ' neu starten'} />
      </div>
      <Notice>Atme bequem, ohne Druck. Unangenehm oder schwindelig? Pausiere und atme normal weiter.</Notice>
    </ExerciseShell>
  );
}
window.BreathView = BreathView;
