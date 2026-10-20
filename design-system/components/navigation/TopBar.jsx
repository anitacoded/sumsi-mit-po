import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Logo } from '../core/Logo.jsx';

export function TopBar({ title, onBack, onSettings, showLogo, basePath = '' }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 64, padding: '8px 12px' }}>
      {onBack && <IconButton icon="arrow-left" label="Zurück" onClick={onBack} />}
      {showLogo && <Logo variant="horizontal" size={44} basePath={basePath} style={{ marginLeft: 4 }} />}
      {title && <span style={{ font: 'var(--type-h3)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>}
      {!title && <span style={{ flex: 1 }} />}
      {onSettings && <IconButton icon="settings" label="Einstellungen" onClick={onSettings} />}
    </header>
  );
}
