import React from 'react';
import { injectStyles } from './injectStyles.js';
import { Icon } from './Icon.jsx';

const CSS = `
.smp-ibtn{display:inline-flex;align-items:center;justify-content:center;width:var(--touch-min);height:var(--touch-min);border-radius:var(--radius-md);border:var(--stroke) solid transparent;background:transparent;color:var(--espresso);cursor:pointer;transition:background-color var(--dur-base) var(--ease-out),transform var(--dur-fast);-webkit-tap-highlight-color:transparent;padding:0}
.smp-ibtn:hover{background:var(--light-lavender)}
.smp-ibtn:active{transform:scale(.94)}
.smp-ibtn:focus-visible{outline:var(--focus-outline);outline-offset:2px}
.smp-ibtn--outline{border-color:var(--espresso);background:var(--cream)}
.smp-ibtn--filled{border-color:var(--espresso);background:var(--deep-plum);color:var(--cream)}
.smp-ibtn--filled:hover{background:var(--espresso)}
.smp-ibtn--sm{width:40px;height:40px}
`;

export function IconButton({ icon, label, variant = 'plain', size = 'md', className = '', ...rest }) {
  injectStyles('ibtn', CSS);
  const cls = ['smp-ibtn', variant !== 'plain' && 'smp-ibtn--' + variant, size === 'sm' && 'smp-ibtn--sm', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 20 : 22} />
    </button>
  );
}
