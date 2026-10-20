import React, { useId } from 'react';

export function Switch({ checked, onChange, label, description, disabled }) {
  const id = useId();
  return (
    <label htmlFor={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, minHeight: 48, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .55 : 1 }}>
      <span>
        <span style={{ display: 'block', font: 'var(--type-label)', fontSize: 'var(--size-md)' }}>{label}</span>
        {description && <span style={{ display: 'block', font: 'var(--type-body-sm)', fontSize: 'var(--size-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{description}</span>}
      </span>
      <span style={{ position: 'relative', flex: 'none', width: 52, height: 30 }}>
        <input id={id} type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)}
          style={{ position: 'absolute', inset: 0, opacity: 0, margin: 0, cursor: 'inherit' }} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 999, border: '2px solid var(--espresso)', background: checked ? 'var(--deep-plum)' : 'var(--light-lavender)', transition: 'background-color var(--dur-base) var(--ease-out)' }} />
        <span aria-hidden="true" style={{ position: 'absolute', top: 5, left: checked ? 27 : 5, width: 20, height: 20, borderRadius: '50%', background: 'var(--cream)', border: '2px solid var(--espresso)', transition: 'left var(--dur-base) var(--ease-out)' }} />
      </span>
    </label>
  );
}
