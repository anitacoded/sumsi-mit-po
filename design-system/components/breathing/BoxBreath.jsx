import React from 'react';

export function BoxBreath({ phaseIndex = 0, progress = 0, size = 240, active = true }) {
  const t = (phaseIndex + progress) / 4;
  const e = t * 4, s = size;
  let x, y;
  if (e < 1) { x = e * s; y = 0; } else if (e < 2) { x = s; y = (e - 1) * s; } else if (e < 3) { x = s - (e - 2) * s; y = s; } else { x = 0; y = s - (e - 3) * s; }
  const edges = [
    { top: -3, left: 0, width: s, height: 6 }, { top: 0, left: s - 3, width: 6, height: s },
    { top: s - 3, left: 0, width: s, height: 6 }, { top: 0, left: -3, width: 6, height: s },
  ];
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: s, height: s, margin: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--light-lavender)', border: '3px solid var(--espresso)', borderRadius: 6 }} />
      {active && <div style={{ position: 'absolute', borderRadius: 3, background: 'var(--purple)', ...edges[phaseIndex] }} />}
      <div style={{ position: 'absolute', width: 28, height: 28, borderRadius: '50%', background: 'var(--deep-plum)', border: '3px solid var(--espresso)', left: x - 14, top: y - 14 }} />
    </div>
  );
}
