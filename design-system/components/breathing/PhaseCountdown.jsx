import React from 'react';

export function PhaseCountdown({ label, remaining, status = 'running', caption }) {
  const idle = status === 'idle';
  return (
    <div aria-live="polite" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span style={{ font: 'var(--weight-semibold) var(--size-xl)/1.2 var(--font-display)', color: 'var(--deep-plum)' }}>{idle ? 'Bereit?' : status === 'paused' ? 'Pausiert' : label}</span>
      <span style={{ font: 'var(--type-timer)', fontVariantNumeric: 'tabular-nums', color: 'var(--espresso)', minWidth: '1.2em', opacity: status === 'paused' ? .45 : 1 }}>{remaining}</span>
      {caption && <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{caption}</span>}
    </div>
  );
}
