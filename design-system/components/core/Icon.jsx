import React from 'react';
import { ICON_PATHS } from './iconPaths.js';

export function Icon({ name, size = 24, strokeWidth = 2, color = 'currentColor', label, style }) {
  const inner = ICON_PATHS[name] || '';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" role={label ? 'img' : undefined}
      aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: 'block', flex: 'none', ...style }} dangerouslySetInnerHTML={{ __html: inner }} />
  );
}
