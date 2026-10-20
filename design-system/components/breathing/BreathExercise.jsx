import React from 'react';
import { useBreathTimer, BOX_PHASES, FOUR_EIGHT_PHASES } from './useBreathTimer.js';
import { BoxBreath } from './BoxBreath.jsx';
import { CircleBreath } from './CircleBreath.jsx';
import { PhaseCountdown } from './PhaseCountdown.jsx';
import { TimerControls } from './TimerControls.jsx';

export function BreathExercise({ mode = 'box', size = 220, reducedMotion = false, restartLabel }) {
  const t = useBreathTimer(mode === 'box' ? BOX_PHASES : FOUR_EIGHT_PHASES);
  const idle = t.status === 'idle';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
      <div style={{ minHeight: size + 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {mode === 'box'
          ? <BoxBreath phaseIndex={t.phaseIndex} progress={reducedMotion ? 0 : t.progress} size={size} active={!idle} />
          : <CircleBreath kind={t.phase.kind} progress={t.progress} size={size + 20} idle={idle} reducedMotion={reducedMotion} />}
      </div>
      <PhaseCountdown label={t.phase.label} remaining={t.remaining} status={t.status} caption={mode === 'box' ? '4 ein · 4 halten · 4 aus · 4 halten' : '4 ein · 8 aus · so oft du magst'} />
      <TimerControls status={t.status} onStart={t.start} onPause={t.pause} onResume={t.resume} onRestart={t.restart} restartLabel={restartLabel} />
    </div>
  );
}
