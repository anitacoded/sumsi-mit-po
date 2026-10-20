import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Notice({ tone = 'calm', icon = 'info', children, style }) {
  const t = tone === 'strong' ? { background: 'var(--deep-plum)', color: 'var(--cream)', border: '2px solid var(--deep-plum)' } : { background: 'var(--light-lavender)', color: 'var(--espresso)', border: '1.5px solid var(--border-soft)' };
  return (
    <div role="note" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '12px 14px', borderRadius: 'var(--radius-md)', font: 'var(--type-body-sm)', ...t, ...style }}>
      {icon && <Icon name={icon} size={20} style={{ marginTop: 1 }} />}
      <div>{children}</div>
    </div>
  );
}
