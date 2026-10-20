import React from 'react';
import { injectStyles } from '../core/injectStyles.js';
import { Motif } from './Motif.jsx';

const CSS = `
.smp-tile{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:12px;min-height:168px;padding:16px;border:var(--stroke) solid var(--espresso);border-radius:var(--radius-lg);box-shadow:var(--shadow-offset);color:var(--espresso);text-align:left;cursor:pointer;font:inherit;width:100%;transition:transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out);-webkit-tap-highlight-color:transparent;text-decoration:none}
.smp-tile:hover{transform:translate(-1px,-1px);box-shadow:5px 5px 0 var(--espresso)}
.smp-tile:active{transform:translate(3px,3px);box-shadow:1px 1px 0 var(--espresso)}
.smp-tile:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}
.smp-tile__motif{display:flex;align-items:center;justify-content:flex-start;height:72px}
.smp-tile__title{font:var(--weight-bold) var(--size-lg)/var(--leading-tight) var(--font-display);letter-spacing:-.01em;margin:0}
.smp-tile__sub{font:var(--weight-regular) var(--size-sm)/1.35 var(--font-body);margin:4px 0 0}
.smp-tile__meta{position:absolute;top:12px;right:12px;font:var(--weight-medium) var(--size-xs)/1 var(--font-body);background:var(--cream);border:1.5px solid var(--espresso);border-radius:var(--radius-round);padding:5px 8px}
.smp-tile--wide{flex-direction:row;align-items:center;min-height:112px}
`;
const TONES = { lilac: 'var(--lilac)', mauve: 'var(--mauve)', lavender: 'var(--light-lavender)', cream: 'var(--cream)' };

export function ExerciseTile({ title, subtitle, motif, tone = 'lilac', meta, layout = 'square', basePath = '', onClick, href, ...rest }) {
  injectStyles('tile', CSS);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={'smp-tile' + (layout === 'wide' ? ' smp-tile--wide' : '')} style={{ background: TONES[tone] || tone }} onClick={onClick} href={href} type={href ? undefined : 'button'} {...rest}>
      {meta && <span className="smp-tile__meta">{meta}</span>}
      {motif && <span className="smp-tile__motif"><Motif kind={motif} size={64} basePath={basePath} /></span>}
      <span>
        <h3 className="smp-tile__title">{title}</h3>
        {subtitle && <p className="smp-tile__sub">{subtitle}</p>}
      </span>
    </Tag>
  );
}
