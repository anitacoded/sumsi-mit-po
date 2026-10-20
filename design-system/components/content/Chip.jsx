import React from 'react';

const TONES = {
  outline: { background: 'var(--cream)', color: 'var(--espresso)', border: '1.5px solid var(--espresso)' },
  lavender: { background: 'var(--light-lavender)', color: 'var(--deep-plum)', border: '1.5px solid transparent' },
  plum: { background: 'var(--deep-plum)', color: 'var(--cream)', border: '1.5px solid var(--deep-plum)' },
  mauve: { background: 'var(--mauve)', color: 'var(--espresso)', border: '1.5px solid var(--espresso)' },
};

export function Chip({ tone = 'outline', children, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--weight-medium) var(--size-xs)/1 var(--font-body)', padding: '6px 10px', borderRadius: 'var(--radius-round)', whiteSpace: 'nowrap', ...TONES[tone], ...style }}>{children}</span>
  );
}
