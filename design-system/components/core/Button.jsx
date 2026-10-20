import React from 'react';
import { injectStyles } from './injectStyles.js';
import { Icon } from './Icon.jsx';

const CSS = `
.smp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:var(--touch-min);padding:0 20px;border:var(--stroke) solid var(--espresso);border-radius:var(--radius-md);font:var(--type-button);letter-spacing:var(--tracking-label);cursor:pointer;text-decoration:none;transition:transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out),background-color var(--dur-base) var(--ease-out);-webkit-tap-highlight-color:transparent}
.smp-btn:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}
.smp-btn--primary{background:var(--action-primary);color:var(--text-on-dark);box-shadow:var(--shadow-offset-sm)}
.smp-btn--primary:hover{background:var(--action-primary-hover);color:var(--cream)}
.smp-btn--secondary{background:var(--cream);color:var(--espresso);box-shadow:var(--shadow-offset-sm)}
.smp-btn--secondary:hover{background:var(--light-lavender);color:var(--espresso)}
.smp-btn--ghost{background:transparent;color:var(--espresso);border-color:transparent;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px}
.smp-btn--ghost:hover{background:var(--light-lavender);color:var(--espresso)}
.smp-btn:active:not(:disabled){transform:var(--press-shift);box-shadow:none}
.smp-btn--sm{min-height:40px;padding:0 14px;font-size:var(--size-sm)}
.smp-btn--lg{min-height:56px;padding:0 28px;font-size:var(--size-lg)}
.smp-btn--block{width:100%}
.smp-btn:disabled{background:var(--light-lavender);color:rgba(75,52,47,.55);border-color:rgba(75,52,47,.3);box-shadow:none;cursor:not-allowed}
`;

export function Button({ variant = 'primary', size = 'md', icon, iconRight, block, href, children, className = '', ...rest }) {
  injectStyles('btn', CSS);
  const cls = ['smp-btn', 'smp-btn--' + variant, size !== 'md' && 'smp-btn--' + size, block && 'smp-btn--block', className].filter(Boolean).join(' ');
  const iSize = size === 'sm' ? 18 : 20;
  const inner = (<>
    {icon && <Icon name={icon} size={iSize} />}
    {children}
    {iconRight && <Icon name={iconRight} size={iSize} />}
  </>);
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}
