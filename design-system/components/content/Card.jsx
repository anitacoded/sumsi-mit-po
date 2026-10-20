import React from 'react';

const TONES = { cream: 'var(--cream)', lavender: 'var(--light-lavender)', lilac: 'var(--lilac)', dark: 'var(--espresso)' };

export function Card({ tone = 'cream', outline = 'strong', shadow = false, padding = 20, children, style, ...rest }) {
  const border = outline === 'none' ? 'none' : outline === 'soft' ? '1.5px solid var(--border-soft)' : '2px solid var(--espresso)';
  return (
    <div style={{ background: TONES[tone], color: tone === 'dark' ? 'var(--cream)' : 'var(--espresso)', border, borderRadius: 'var(--radius-lg)', padding, boxShadow: shadow ? 'var(--shadow-offset)' : 'none', ...style }} {...rest}>
      {children}
    </div>
  );
}
