import React, { useId } from 'react';
import { injectStyles } from '../core/injectStyles.js';

const CSS = `
.smp-field{display:flex;flex-direction:column;gap:6px}
.smp-field label{font:var(--type-label);color:var(--espresso)}
.smp-field input{min-height:var(--touch-min);padding:0 14px;border:var(--stroke) solid var(--espresso);border-radius:var(--radius-sm);background:var(--cream);color:var(--espresso);font:var(--type-body);width:100%}
.smp-field input::placeholder{color:rgba(75,52,47,.55)}
.smp-field input:focus{outline:none;border-color:var(--deep-plum);box-shadow:0 0 0 3px var(--lilac)}
.smp-field input:disabled{background:var(--light-lavender);border-color:rgba(75,52,47,.3)}
.smp-field__hint{font:var(--type-body-sm);font-size:var(--size-xs);color:var(--text-muted)}
.smp-field--error input{border-color:var(--deep-plum);background:var(--light-lavender)}
.smp-field--error .smp-field__hint{color:var(--deep-plum);font-weight:500}
`;

export function TextField({ label, hint, error, id, ...rest }) {
  injectStyles('field', CSS);
  const auto = useId();
  const fid = id || auto;
  return (
    <div className={'smp-field' + (error ? ' smp-field--error' : '')}>
      {label && <label htmlFor={fid}>{label}</label>}
      <input id={fid} aria-invalid={!!error} aria-describedby={hint || error ? fid + '-h' : undefined} {...rest} />
      {(error || hint) && <span id={fid + '-h'} className="smp-field__hint">{error || hint}</span>}
    </div>
  );
}
