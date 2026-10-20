import React from 'react';
import { Button } from '../core/Button.jsx';

export function TimerControls({ status, onStart, onPause, onResume, onRestart, restartLabel }) {
  if (status === 'idle') return <div style={{ display: 'flex', width: '100%' }}><Button size="lg" icon="play" block onClick={onStart}>Starten</Button></div>;
  return (
    <div style={{ display: 'flex', gap: 12, width: '100%' }}>
      {status === 'running'
        ? <Button size="lg" icon="pause" block onClick={onPause}>Pausieren</Button>
        : <Button size="lg" icon="play" block onClick={onResume}>Fortsetzen</Button>}
      <Button size="lg" variant="secondary" icon="rotate-ccw" onClick={onRestart} aria-label={restartLabel || 'Neu starten'}>Neustart</Button>
    </div>
  );
}
