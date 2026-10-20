import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Simple graphic motif per module – square+dot, circle, armchair glyph, or the approved bee. */
export function Motif({ kind, size = 64, basePath = '' }) {
  if (kind === 'bee') return <img src={basePath + 'assets/logo/sumsi-bee-transparent.png'} width={size * 1.25} height={size * 1.25} alt="" style={{ display: 'block', margin: -size * 0.12 }} />;
  if (kind === 'armchair') return <Icon name="armchair" size={size * 0.85} strokeWidth={1.75} color="var(--espresso)" />;
  if (kind === 'box') {
    const s = size * 0.72, d = Math.max(10, size * 0.2);
    return (
      <div style={{ width: s, height: s, border: '3px solid var(--espresso)', borderRadius: 4, position: 'relative' }}>
        <span style={{ position: 'absolute', width: d, height: d, borderRadius: '50%', background: 'var(--deep-plum)', top: -d / 2 - 1.5, left: -d / 2 - 1.5 }} />
      </div>
    );
  }
  const c = size * 0.6;
  return <div style={{ width: c, height: c, borderRadius: '50%', background: 'var(--purple)', border: '3px solid var(--espresso)', boxShadow: '0 0 0 ' + size * 0.12 + 'px var(--lilac)' }} />;
}
