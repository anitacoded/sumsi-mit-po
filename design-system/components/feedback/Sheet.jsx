import React, { useEffect } from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Sheet({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--surface-overlay)' }} />
      <div role="dialog" aria-modal="true" aria-label={title} style={{ position: 'relative', width: '100%', maxWidth: 560, maxHeight: '88%', overflow: 'auto', background: 'var(--cream)', borderTop: '2px solid var(--espresso)', borderLeft: '2px solid var(--espresso)', borderRight: '2px solid var(--espresso)', borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0', padding: '8px 20px 24px' }}>
        <div style={{ width: 44, height: 4, borderRadius: 4, background: 'var(--lilac)', margin: '4px auto 4px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 style={{ font: 'var(--type-h2)', margin: 0 }}>{title}</h2>
          <IconButton icon="x" label="Schließen" onClick={onClose} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
        {footer && <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>{footer}</div>}
      </div>
    </div>
  );
}
