import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Toast({ children, icon = 'check', visible = true }) {
  return (
    <div role="status" aria-live="polite" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 'var(--radius-md)', background: 'var(--espresso)', color: 'var(--cream)', font: 'var(--type-label)', boxShadow: '3px 3px 0 var(--purple)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(8px)', transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)', pointerEvents: 'none' }}>
      {icon && <Icon name={icon} size={18} />}{children}
    </div>
  );
}
