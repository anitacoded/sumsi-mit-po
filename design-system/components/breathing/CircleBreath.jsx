import React from 'react';

export function CircleBreath({ kind = 'in', progress = 0, size = 260, idle = false, reducedMotion = false }) {
  const min = .5, max = 1;
  const ease = p => .5 - Math.cos(Math.PI * p) / 2;
  let sc = kind === 'in' ? min + (max - min) * ease(progress) : max - (max - min) * ease(progress);
  if (idle || reducedMotion) sc = .75;
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', border: '2px dashed var(--lilac)' }} />
      <div style={{ position: 'absolute', width: size * min, height: size * min, borderRadius: '50%', border: '1.5px solid var(--border-soft)' }} />
      <div style={{ width: size, height: size, borderRadius: '50%', background: 'var(--lilac)', border: '3px solid var(--espresso)', transform: 'scale(' + sc + ')', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '42%', height: '42%', borderRadius: '50%', background: 'var(--purple)' }} />
      </div>
    </div>
  );
}
