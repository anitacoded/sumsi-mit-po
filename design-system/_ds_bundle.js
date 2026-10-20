/* @ds-bundle: {"format":4,"namespace":"SUMSIMITPODesignSystem_132750","components":[{"name":"BoxBreath","sourcePath":"components/breathing/BoxBreath.jsx"},{"name":"BreathExercise","sourcePath":"components/breathing/BreathExercise.jsx"},{"name":"CircleBreath","sourcePath":"components/breathing/CircleBreath.jsx"},{"name":"PhaseCountdown","sourcePath":"components/breathing/PhaseCountdown.jsx"},{"name":"TimerControls","sourcePath":"components/breathing/TimerControls.jsx"},{"name":"BOX_PHASES","sourcePath":"components/breathing/useBreathTimer.js"},{"name":"FOUR_EIGHT_PHASES","sourcePath":"components/breathing/useBreathTimer.js"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Chip","sourcePath":"components/content/Chip.jsx"},{"name":"ExerciseTile","sourcePath":"components/content/ExerciseTile.jsx"},{"name":"Motif","sourcePath":"components/content/Motif.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/iconPaths.js"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"MusicLinks","sourcePath":"components/forms/MusicLinkForm.jsx"},{"name":"MusicLinkForm","sourcePath":"components/forms/MusicLinkForm.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"DEFAULT_MUSIC_LINKS","sourcePath":"components/forms/musicLinks.js"},{"name":"ALLOWED_MUSIC_HOSTS","sourcePath":"components/forms/musicLinks.js"},{"name":"STORAGE_KEYS","sourcePath":"components/forms/musicLinks.js"},{"name":"ROUTES","sourcePath":"components/forms/musicLinks.js"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/breathing/BoxBreath.jsx":"5616fa69b3a6","components/breathing/BreathExercise.jsx":"80d341e71fca","components/breathing/CircleBreath.jsx":"1e266c5e800e","components/breathing/PhaseCountdown.jsx":"cd5fdb03b382","components/breathing/TimerControls.jsx":"197bad7f0a38","components/breathing/useBreathTimer.js":"30a79f1c7587","components/content/Card.jsx":"434bab9e2b34","components/content/Chip.jsx":"41fe28852b6f","components/content/ExerciseTile.jsx":"333c18d2d69e","components/content/Motif.jsx":"845e39363050","components/core/Button.jsx":"8578dc8c278f","components/core/Icon.jsx":"4bfbe6a21c37","components/core/IconButton.jsx":"98d15eef62a7","components/core/Logo.jsx":"29c9384e5474","components/core/iconPaths.js":"d8a9f282c10c","components/core/injectStyles.js":"38a7f680d308","components/feedback/Notice.jsx":"6b1d478ba1fc","components/feedback/Sheet.jsx":"a515aee66f38","components/feedback/Toast.jsx":"35deddfb86ad","components/forms/MusicLinkForm.jsx":"84d16258aba0","components/forms/Switch.jsx":"67705703e8e7","components/forms/TextField.jsx":"454dfafcb4cd","components/forms/musicLinks.js":"03e2f6c899f3","components/navigation/TopBar.jsx":"65cdb1287bdb","guidelines/doc-page.js":"f52ae9c02fca","ui_kits/app/App.jsx":"b23e4bb3fd3f","ui_kits/app/AudioExercise.jsx":"fcf163d369f2","ui_kits/app/BreathView.jsx":"da6cea179a08","ui_kits/app/Dashboard.jsx":"866f14601e2b","ui_kits/app/ExerciseShell.jsx":"f4e486d6d7fb","ui_kits/app/SettingsSheet.jsx":"27635230cfd1"},"inlinedExternals":[],"unexposedExports":[{"name":"injectStyles","sourcePath":"components/core/injectStyles.js"},{"name":"loadMusicLink","sourcePath":"components/forms/MusicLinkForm.jsx"},{"name":"readSaved","sourcePath":"components/forms/musicLinks.js"},{"name":"saveValue","sourcePath":"components/forms/musicLinks.js"},{"name":"useBreathTimer","sourcePath":"components/breathing/useBreathTimer.js"},{"name":"validMusicUrl","sourcePath":"components/forms/musicLinks.js"}]} */

(() => {

const __ds_ns = (window.SUMSIMITPODesignSystem_132750 = window.SUMSIMITPODesignSystem_132750 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/breathing/BoxBreath.jsx
try { (() => {
function BoxBreath({
  phaseIndex = 0,
  progress = 0,
  size = 240,
  active = true
}) {
  const t = (phaseIndex + progress) / 4;
  const e = t * 4,
    s = size;
  let x, y;
  if (e < 1) {
    x = e * s;
    y = 0;
  } else if (e < 2) {
    x = s;
    y = (e - 1) * s;
  } else if (e < 3) {
    x = s - (e - 2) * s;
    y = s;
  } else {
    x = 0;
    y = s - (e - 3) * s;
  }
  const edges = [{
    top: -3,
    left: 0,
    width: s,
    height: 6
  }, {
    top: 0,
    left: s - 3,
    width: 6,
    height: s
  }, {
    top: s - 3,
    left: 0,
    width: s,
    height: 6
  }, {
    top: 0,
    left: -3,
    width: 6,
    height: s
  }];
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: s,
      height: s,
      margin: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--light-lavender)',
      border: '3px solid var(--espresso)',
      borderRadius: 6
    }
  }), active && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      borderRadius: 3,
      background: 'var(--purple)',
      ...edges[phaseIndex]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--deep-plum)',
      border: '3px solid var(--espresso)',
      left: x - 14,
      top: y - 14
    }
  }));
}
Object.assign(__ds_scope, { BoxBreath });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/BoxBreath.jsx", error: String((e && e.message) || e) }); }

// components/breathing/CircleBreath.jsx
try { (() => {
function CircleBreath({
  kind = 'in',
  progress = 0,
  size = 260,
  idle = false,
  reducedMotion = false
}) {
  const min = .5,
    max = 1;
  const ease = p => .5 - Math.cos(Math.PI * p) / 2;
  let sc = kind === 'in' ? min + (max - min) * ease(progress) : max - (max - min) * ease(progress);
  if (idle || reducedMotion) sc = .75;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px dashed var(--lilac)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: size * min,
      height: size * min,
      borderRadius: '50%',
      border: '1.5px solid var(--border-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--lilac)',
      border: '3px solid var(--espresso)',
      transform: 'scale(' + sc + ')',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '42%',
      height: '42%',
      borderRadius: '50%',
      background: 'var(--purple)'
    }
  })));
}
Object.assign(__ds_scope, { CircleBreath });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/CircleBreath.jsx", error: String((e && e.message) || e) }); }

// components/breathing/PhaseCountdown.jsx
try { (() => {
function PhaseCountdown({
  label,
  remaining,
  status = 'running',
  caption
}) {
  const idle = status === 'idle';
  return /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--size-xl)/1.2 var(--font-display)',
      color: 'var(--deep-plum)'
    }
  }, idle ? 'Bereit?' : status === 'paused' ? 'Pausiert' : label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-timer)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--espresso)',
      minWidth: '1.2em',
      opacity: status === 'paused' ? .45 : 1
    }
  }, remaining), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { PhaseCountdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/PhaseCountdown.jsx", error: String((e && e.message) || e) }); }

// components/breathing/useBreathTimer.js
try { (() => {
const {
  useEffect,
  useRef,
  useState,
  useCallback
} = React;
const BOX_PHASES = [{
  label: 'Einatmen',
  secs: 4,
  kind: 'in'
}, {
  label: 'Halten',
  secs: 4,
  kind: 'hold'
}, {
  label: 'Ausatmen',
  secs: 4,
  kind: 'out'
}, {
  label: 'Halten',
  secs: 4,
  kind: 'hold'
}];
const FOUR_EIGHT_PHASES = [{
  label: 'Einatmen',
  secs: 4,
  kind: 'in'
}, {
  label: 'Ausatmen',
  secs: 8,
  kind: 'out'
}];
function useBreathTimer(phases) {
  const [status, setStatus] = useState('idle');
  const [t, setT] = useState(0);
  const base = useRef(0),
    startAt = useRef(0),
    raf = useRef(0);
  const total = phases.reduce((a, p) => a + p.secs, 0) * 1000;
  const tick = useCallback(() => {
    setT(base.current + performance.now() - startAt.current);
    raf.current = requestAnimationFrame(tick);
  }, []);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const statusRef = useRef(status);
  statusRef.current = status;
  // Live-Site-Verhalten: verborgener Tab pausiert die Übung.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden && statusRef.current === 'running') pauseRef.current();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  const pauseRef = useRef(null);
  const start = () => {
    base.current = 0;
    startAt.current = performance.now();
    setT(0);
    setStatus('running');
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  };
  const pause = pauseRef.current = () => {
    cancelAnimationFrame(raf.current);
    base.current = base.current + performance.now() - startAt.current;
    setT(base.current);
    setStatus('paused');
  };
  const resume = () => {
    startAt.current = performance.now();
    setStatus('running');
    raf.current = requestAnimationFrame(tick);
  };
  const restart = () => {
    cancelAnimationFrame(raf.current);
    base.current = 0;
    setT(0);
    setStatus('idle');
  };
  const inCycle = t % total;
  const cycle = Math.floor(t / total);
  let acc = 0,
    idx = 0;
  for (; idx < phases.length; idx++) {
    const d = phases[idx].secs * 1000;
    if (inCycle < acc + d) break;
    acc += d;
  }
  idx = Math.min(idx, phases.length - 1);
  const phase = phases[idx];
  const into = inCycle - acc;
  return {
    status,
    phase,
    phaseIndex: idx,
    cycle,
    progress: status === 'idle' ? 0 : into / (phase.secs * 1000),
    remaining: status === 'idle' ? phase.secs : Math.max(1, Math.ceil(phase.secs - into / 1000)),
    start,
    pause,
    resume,
    restart
  };
}
Object.assign(__ds_scope, { BOX_PHASES, FOUR_EIGHT_PHASES, useBreathTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/useBreathTimer.js", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  cream: 'var(--cream)',
  lavender: 'var(--light-lavender)',
  lilac: 'var(--lilac)',
  dark: 'var(--espresso)'
};
function Card({
  tone = 'cream',
  outline = 'strong',
  shadow = false,
  padding = 20,
  children,
  style,
  ...rest
}) {
  const border = outline === 'none' ? 'none' : outline === 'soft' ? '1.5px solid var(--border-soft)' : '2px solid var(--espresso)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: TONES[tone],
      color: tone === 'dark' ? 'var(--cream)' : 'var(--espresso)',
      border,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: shadow ? 'var(--shadow-offset)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Chip.jsx
try { (() => {
const TONES = {
  outline: {
    background: 'var(--cream)',
    color: 'var(--espresso)',
    border: '1.5px solid var(--espresso)'
  },
  lavender: {
    background: 'var(--light-lavender)',
    color: 'var(--deep-plum)',
    border: '1.5px solid transparent'
  },
  plum: {
    background: 'var(--deep-plum)',
    color: 'var(--cream)',
    border: '1.5px solid var(--deep-plum)'
  },
  mauve: {
    background: 'var(--mauve)',
    color: 'var(--espresso)',
    border: '1.5px solid var(--espresso)'
  }
};
function Chip({
  tone = 'outline',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--weight-medium) var(--size-xs)/1 var(--font-body)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-round)',
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'horizontal',
  size = 48,
  basePath = '',
  style
}) {
  const bee = basePath + 'assets/logo/sumsi-bee-transparent.png';
  const word = basePath + 'assets/logo/sumsi-wordmark-transparent.png';
  const full = basePath + 'assets/logo/sumsi-logo-transparent.png';
  const img = {
    display: 'block'
  };
  if (variant === 'bee') return /*#__PURE__*/React.createElement("img", {
    src: bee,
    width: size,
    height: size,
    alt: "SUMSI MIT PO",
    style: {
      ...img,
      ...style
    }
  });
  if (variant === 'full') return /*#__PURE__*/React.createElement("img", {
    src: full,
    width: size,
    height: size,
    alt: "SUMSI MIT PO",
    style: {
      ...img,
      ...style
    }
  });
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement("img", {
    src: word,
    height: size * 0.5,
    alt: "SUMSI MIT PO",
    style: {
      ...img,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bee,
    width: size,
    height: size,
    alt: "",
    style: img
  }), /*#__PURE__*/React.createElement("img", {
    src: word,
    height: size * 0.36,
    alt: "SUMSI MIT PO",
    style: img
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/iconPaths.js
try { (() => {
// Lucide 0.460.0 (ISC) – copied programmatically from lucide-static
const ICON_PATHS = {
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\" />",
  "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" /> <rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" />",
  "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /> <path d=\"M3 3v5h5\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "headphones": "<path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\" />",
  "armchair": "<path d=\"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3\" /> <path d=\"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z\" /> <path d=\"M5 18v2\" /> <path d=\"M19 18v2\" />",
  "square": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /> <path d=\"M16 9a5 5 0 0 1 0 6\" /> <path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" />",
  "music": "<path d=\"M9 18V5l12-2v13\" /> <circle cx=\"6\" cy=\"18\" r=\"3\" /> <circle cx=\"18\" cy=\"16\" r=\"3\" />",
  "wind": "<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\" /> <path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\" /> <path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\" />"
};
Object.assign(__ds_scope, { ICON_PATHS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconPaths.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  label,
  style
}) {
  const inner = __ds_scope.ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Motif.jsx
try { (() => {
/** Simple graphic motif per module – square+dot, circle, armchair glyph, or the approved bee. */
function Motif({
  kind,
  size = 64,
  basePath = ''
}) {
  if (kind === 'bee') return /*#__PURE__*/React.createElement("img", {
    src: basePath + 'assets/logo/sumsi-bee-transparent.png',
    width: size * 1.25,
    height: size * 1.25,
    alt: "",
    style: {
      display: 'block',
      margin: -size * 0.12
    }
  });
  if (kind === 'armchair') return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "armchair",
    size: size * 0.85,
    strokeWidth: 1.75,
    color: "var(--espresso)"
  });
  if (kind === 'box') {
    const s = size * 0.72,
      d = Math.max(10, size * 0.2);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: s,
        height: s,
        border: '3px solid var(--espresso)',
        borderRadius: 4,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        width: d,
        height: d,
        borderRadius: '50%',
        background: 'var(--deep-plum)',
        top: -d / 2 - 1.5,
        left: -d / 2 - 1.5
      }
    }));
  }
  const c = size * 0.6;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: c,
      height: c,
      borderRadius: '50%',
      background: 'var(--purple)',
      border: '3px solid var(--espresso)',
      boxShadow: '0 0 0 ' + size * 0.12 + 'px var(--lilac)'
    }
  });
}
Object.assign(__ds_scope, { Motif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Motif.jsx", error: String((e && e.message) || e) }); }

// components/core/injectStyles.js
try { (() => {
const done = new Set();
function injectStyles(id, css) {
  if (typeof document === 'undefined' || done.has(id)) return;
  done.add(id);
  const s = document.createElement('style');
  s.setAttribute('data-smp', id);
  s.textContent = css;
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { injectStyles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/injectStyles.js", error: String((e && e.message) || e) }); }

// components/content/ExerciseTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const TONES = {
  lilac: 'var(--lilac)',
  mauve: 'var(--mauve)',
  lavender: 'var(--light-lavender)',
  cream: 'var(--cream)'
};
function ExerciseTile({
  title,
  subtitle,
  motif,
  tone = 'lilac',
  meta,
  layout = 'square',
  basePath = '',
  onClick,
  href,
  ...rest
}) {
  __ds_scope.injectStyles('tile', CSS);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'smp-tile' + (layout === 'wide' ? ' smp-tile--wide' : ''),
    style: {
      background: TONES[tone] || tone
    },
    onClick: onClick,
    href: href,
    type: href ? undefined : 'button'
  }, rest), meta && /*#__PURE__*/React.createElement("span", {
    className: "smp-tile__meta"
  }, meta), motif && /*#__PURE__*/React.createElement("span", {
    className: "smp-tile__motif"
  }, /*#__PURE__*/React.createElement(__ds_scope.Motif, {
    kind: motif,
    size: 64,
    basePath: basePath
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("h3", {
    className: "smp-tile__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "smp-tile__sub"
  }, subtitle)));
}
Object.assign(__ds_scope, { ExerciseTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExerciseTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block,
  href,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectStyles('btn', CSS);
  const cls = ['smp-btn', 'smp-btn--' + variant, size !== 'md' && 'smp-btn--' + size, block && 'smp-btn--block', className].filter(Boolean).join(' ');
  const iSize = size === 'sm' ? 18 : 20;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iSize
  }));
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/breathing/TimerControls.jsx
try { (() => {
function TimerControls({
  status,
  onStart,
  onPause,
  onResume,
  onRestart,
  restartLabel
}) {
  if (status === 'idle') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    icon: "play",
    block: true,
    onClick: onStart
  }, "Starten"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      width: '100%'
    }
  }, status === 'running' ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    icon: "pause",
    block: true,
    onClick: onPause
  }, "Pausieren") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    icon: "play",
    block: true,
    onClick: onResume
  }, "Fortsetzen"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: onRestart,
    "aria-label": restartLabel || 'Neu starten'
  }, "Neustart"));
}
Object.assign(__ds_scope, { TimerControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/TimerControls.jsx", error: String((e && e.message) || e) }); }

// components/breathing/BreathExercise.jsx
try { (() => {
function BreathExercise({
  mode = 'box',
  size = 220,
  reducedMotion = false,
  restartLabel
}) {
  const t = __ds_scope.useBreathTimer(mode === 'box' ? __ds_scope.BOX_PHASES : __ds_scope.FOUR_EIGHT_PHASES);
  const idle = t.status === 'idle';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: size + 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, mode === 'box' ? /*#__PURE__*/React.createElement(__ds_scope.BoxBreath, {
    phaseIndex: t.phaseIndex,
    progress: reducedMotion ? 0 : t.progress,
    size: size,
    active: !idle
  }) : /*#__PURE__*/React.createElement(__ds_scope.CircleBreath, {
    kind: t.phase.kind,
    progress: t.progress,
    size: size + 20,
    idle: idle,
    reducedMotion: reducedMotion
  })), /*#__PURE__*/React.createElement(__ds_scope.PhaseCountdown, {
    label: t.phase.label,
    remaining: t.remaining,
    status: t.status,
    caption: mode === 'box' ? '4 ein · 4 halten · 4 aus · 4 halten' : '4 ein · 8 aus · so oft du magst'
  }), /*#__PURE__*/React.createElement(__ds_scope.TimerControls, {
    status: t.status,
    onStart: t.start,
    onPause: t.pause,
    onResume: t.resume,
    onRestart: t.restart,
    restartLabel: restartLabel
  }));
}
Object.assign(__ds_scope, { BreathExercise });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/breathing/BreathExercise.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 'md',
  className = '',
  ...rest
}) {
  __ds_scope.injectStyles('ibtn', CSS);
  const cls = ['smp-ibtn', variant !== 'plain' && 'smp-ibtn--' + variant, size === 'sm' && 'smp-ibtn--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 20 : 22
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function Notice({
  tone = 'calm',
  icon = 'info',
  children,
  style
}) {
  const t = tone === 'strong' ? {
    background: 'var(--deep-plum)',
    color: 'var(--cream)',
    border: '2px solid var(--deep-plum)'
  } : {
    background: 'var(--light-lavender)',
    color: 'var(--espresso)',
    border: '1.5px solid var(--border-soft)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "note",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      font: 'var(--type-body-sm)',
      ...t,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Sheet.jsx
try { (() => {
const {
  useEffect
} = React;
function Sheet({
  open,
  onClose,
  title,
  children,
  footer
}) {
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 560,
      maxHeight: '88%',
      overflow: 'auto',
      background: 'var(--cream)',
      borderTop: '2px solid var(--espresso)',
      borderLeft: '2px solid var(--espresso)',
      borderRight: '2px solid var(--espresso)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 4,
      borderRadius: 4,
      background: 'var(--lilac)',
      margin: '4px auto 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Schlie\xDFen",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  icon = 'check',
  visible = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--espresso)',
      color: 'var(--cream)',
      font: 'var(--type-label)',
      boxShadow: '3px 3px 0 var(--purple)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(8px)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',
      pointerEvents: 'none'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useId
} = React;
function Switch({
  checked,
  onChange,
  label,
  description,
  disabled
}) {
  const id = useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      minHeight: 48,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      fontSize: 'var(--size-md)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--size-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      width: 52,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      border: '2px solid var(--espresso)',
      background: checked ? 'var(--deep-plum)' : 'var(--light-lavender)',
      transition: 'background-color var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 5,
      left: checked ? 27 : 5,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--cream)',
      border: '2px solid var(--espresso)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
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
function TextField({
  label,
  hint,
  error,
  id,
  ...rest
}) {
  __ds_scope.injectStyles('field', CSS);
  const auto = useId();
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: 'smp-field' + (error ? ' smp-field--error' : '')
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    "aria-invalid": !!error,
    "aria-describedby": hint || error ? fid + '-h' : undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    id: fid + '-h',
    className: "smp-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/musicLinks.js
try { (() => {
// Übernommen aus app.js der Live-Site – gleiche Defaults, Hosts und Speicherschlüssel.
const DEFAULT_MUSIC_LINKS = {
  hummel: 'https://www.youtube.com/results?search_query=lofi+chill+music',
  oma: 'https://www.youtube.com/results?search_query=cozy+jazz+relaxing'
};
const ALLOWED_MUSIC_HOSTS = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtu.be', 'open.spotify.com'];
const STORAGE_KEYS = {
  linkHummel: 'sumsi-link-hummel',
  linkOma: 'sumsi-link-oma',
  reduceMotion: 'sumsi-reduce-motion'
};
const ROUTES = ['hummel', 'oma', 'box', 'lang'];
function validMusicUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && ALLOWED_MUSIC_HOSTS.includes(url.hostname) && !url.username && !url.password && !url.port ? url.href : null;
  } catch (e) {
    return null;
  }
}
function readSaved(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}
function saveValue(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}
Object.assign(__ds_scope, { DEFAULT_MUSIC_LINKS, ALLOWED_MUSIC_HOSTS, STORAGE_KEYS, ROUTES, validMusicUrl, readSaved, saveValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/musicLinks.js", error: String((e && e.message) || e) }); }

// components/forms/MusicLinkForm.jsx
try { (() => {
const {
  useState,
  useId
} = React;
function loadMusicLink(mode) {
  return __ds_scope.validMusicUrl(__ds_scope.readSaved(mode === 'oma' ? __ds_scope.STORAGE_KEYS.linkOma : __ds_scope.STORAGE_KEYS.linkHummel)) || __ds_scope.DEFAULT_MUSIC_LINKS[mode];
}

/** App-Konstanten und Helfer der Live-Site, gebündelt (Großbuchstabe → im Namespace sichtbar). */
const MusicLinks = {
  load: loadMusicLink,
  validate: __ds_scope.validMusicUrl,
  DEFAULTS: __ds_scope.DEFAULT_MUSIC_LINKS,
  HOSTS: __ds_scope.ALLOWED_MUSIC_HOSTS,
  STORAGE_KEYS: __ds_scope.STORAGE_KEYS,
  ROUTES: __ds_scope.ROUTES
};
function MusicLinkForm({
  mode = 'hummel',
  label = 'YouTube- oder Spotify-Link',
  onChange
}) {
  const key = mode === 'oma' ? __ds_scope.STORAGE_KEYS.linkOma : __ds_scope.STORAGE_KEYS.linkHummel;
  const [value, setValue] = useState(() => loadMusicLink(mode));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const id = useId();
  const submit = e => {
    e.preventDefault();
    const url = __ds_scope.validMusicUrl(value.trim());
    if (!url) {
      setError('Bitte verwende einen gültigen YouTube- oder Spotify-Link mit https://.');
      setStatus('');
      return;
    }
    setError('');
    setValue(url);
    onChange && onChange(url);
    setStatus(__ds_scope.saveValue(key, url) ? 'Gespeichert. Dein Link bleibt in diesem Browser.' : 'Link übernommen. Dauerhaftes Speichern ist in diesem Browser nicht verfügbar.');
  };
  const reset = () => {
    const d = __ds_scope.DEFAULT_MUSIC_LINKS[mode];
    setValue(d);
    setError('');
    onChange && onChange(d);
    setStatus(__ds_scope.saveValue(key, d) ? 'Standardlink wiederhergestellt.' : 'Standardlink für diese Sitzung wiederhergestellt.');
  };
  return /*#__PURE__*/React.createElement("form", {
    "data-mode": mode,
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 200px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: id,
    name: "url",
    type: "url",
    inputMode: "url",
    label: label,
    value: value,
    error: error,
    placeholder: mode === 'oma' ? 'https://www.youtube.com/…' : 'https://open.spotify.com/…',
    onChange: e => {
      setValue(e.target.value);
      setError('');
    }
  })), !error && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    style: {
      flex: 'none'
    }
  }, "Speichern")), error && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    block: true
  }, "Speichern"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "rotate-ccw",
    onClick: reset
  }, "Standard wiederherstellen"), /*#__PURE__*/React.createElement("p", {
    role: "status",
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, status)));
}
Object.assign(__ds_scope, { loadMusicLink, MusicLinks, MusicLinkForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MusicLinkForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  onBack,
  onSettings,
  showLogo,
  basePath = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 64,
      padding: '8px 12px'
    }
  }, onBack && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Zur\xFCck",
    onClick: onBack
  }), showLogo && /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "horizontal",
    size: 44,
    basePath: basePath,
    style: {
      marginLeft: 4
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), !title && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), onSettings && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "settings",
    label: "Einstellungen",
    onClick: onSettings
  }));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// guidelines/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
// Routen, Speicherschlüssel und Defaults wie in app.js der Live-Site.
const APP_ROUTES = ['hummel', 'oma', 'box', 'lang'];
const routeFromHash = () => {
  const r = location.hash.slice(1);
  return APP_ROUTES.includes(r) ? r : '';
};
function App() {
  const loadMusicLink = window.SUMSIMITPODesignSystem_132750.MusicLinks.load;
  const [route, setRoute] = React.useState(routeFromHash());
  const [settings, setSettings] = React.useState(null);
  const [links, setLinks] = React.useState(() => ({
    hummel: loadMusicLink('hummel'),
    oma: loadMusicLink('oma')
  }));
  const mq = React.useMemo(() => matchMedia('(prefers-reduced-motion: reduce)'), []);
  const readRm = () => {
    try {
      return localStorage.getItem('sumsi-reduce-motion') === 'true';
    } catch (e) {
      return false;
    }
  };
  const [rm, setRm] = React.useState(() => mq.matches || readRm());
  React.useEffect(() => {
    const f = () => {
      setRoute(routeFromHash());
      setSettings(null);
    };
    addEventListener('popstate', f);
    addEventListener('hashchange', f);
    return () => {
      removeEventListener('popstate', f);
      removeEventListener('hashchange', f);
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.classList.toggle('reduced-motion', rm);
  }, [rm]);
  React.useEffect(() => {
    const t = {
      hummel: 'Hummelmodus',
      oma: 'Innere Oma',
      box: 'Boxatmung',
      lang: '4/8-Atmung'
    }[route];
    document.title = (t ? t + ' · ' : '') + 'SUMSI MIT PO · Kleine Pausen für laute Köpfe';
  }, [route]);
  const go = r => {
    if (r === route) return;
    history.pushState({
      sumsiNavigation: true
    }, '', r ? '#' + r : location.pathname + location.search);
    setRoute(r);
  };
  const back = () => {
    if (history.state && history.state.sumsiNavigation) history.back();else {
      history.replaceState(null, '', location.pathname + location.search);
      setRoute('');
    }
  };
  const setReduced = v => {
    setRm(v);
    try {
      localStorage.setItem('sumsi-reduce-motion', String(v));
    } catch (e) {}
  };
  let view;
  if (route === 'hummel' || route === 'oma') view = /*#__PURE__*/React.createElement(AudioExercise, {
    key: route,
    kind: route,
    url: links[route],
    onBack: back,
    openSettings: () => setSettings(route)
  });else if (route === 'box' || route === 'lang') view = /*#__PURE__*/React.createElement(BreathView, {
    key: route,
    mode: route,
    onBack: back,
    reducedMotion: rm || mq.matches
  });else view = /*#__PURE__*/React.createElement(Dashboard, {
    go: go,
    openSettings: () => setSettings('all')
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      overflow: 'auto',
      background: 'var(--cream)'
    }
  }, view, /*#__PURE__*/React.createElement(SettingsSheet, {
    open: !!settings,
    focus: settings === 'all' ? null : settings,
    onClose: () => setSettings(null),
    setLink: (m, u) => setLinks(l => ({
      ...l,
      [m]: u
    })),
    reducedMotion: rm,
    setReducedMotion: setReduced
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AudioExercise.jsx
try { (() => {
function AudioExercise({
  kind,
  url,
  onBack,
  openSettings
}) {
  const {
    Button,
    Card,
    Notice
  } = window.SUMSIMITPODesignSystem_132750;
  const hummel = kind === 'hummel';
  return /*#__PURE__*/React.createElement(ExerciseShell, {
    route: kind,
    onBack: onBack,
    motif: hummel ? 'bee' : 'armchair',
    tone: hummel ? 'lavender' : 'mauve',
    title: hummel ? 'Hummelmodus' : 'Innere Oma',
    eyebrow: hummel ? 'Summen statt Scrollen.' : 'Ein Ort, an dem niemand etwas von dir will.',
    lead: hummel ? 'Für die 37 offenen Tabs in deinem Kopf. Dein Sound. Dein kleines Ausklinken.' : 'Du musst heute niemandem etwas beweisen. Mach’s dir erst mal gemütlich.'
  }, /*#__PURE__*/React.createElement(Card, {
    tone: hummel ? 'lilac' : 'mauve',
    shadow: true,
    style: {
      minHeight: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-bold) var(--size-2xl)/1.1 var(--font-display)',
      letterSpacing: '-.02em',
      textAlign: 'center'
    }
  }, hummel ? /*#__PURE__*/React.createElement(React.Fragment, null, "Kopf aus.", /*#__PURE__*/React.createElement("br", null), "Sound an.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Du machst", /*#__PURE__*/React.createElement("br", null), "das schon."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    iconRight: "external-link",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "music-link",
    "data-mode": kind
  }, hummel ? 'Musik öffnen' : 'Gemütlichkeit öffnen'), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "\xD6ffnet YouTube oder Spotify in einem neuen Tab."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    block: true,
    icon: "settings",
    onClick: openSettings,
    "aria-label": 'Link für ' + (hummel ? 'Hummelmodus' : 'Innere Oma') + ' anpassen'
  }, "Link anpassen")));
}
window.AudioExercise = AudioExercise;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AudioExercise.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BreathView.jsx
try { (() => {
function BreathView({
  mode,
  onBack,
  reducedMotion
}) {
  const {
    BreathExercise,
    Notice
  } = window.SUMSIMITPODesignSystem_132750;
  const box = mode === 'box';
  return /*#__PURE__*/React.createElement(ExerciseShell, {
    route: mode,
    onBack: onBack,
    motif: box ? 'box' : 'circle',
    tone: box ? 'lilac' : 'cream',
    title: box ? 'Boxatmung' : '4/8-Atmung',
    eyebrow: box ? 'Vier Ecken gegen Gedankenspaghetti.' : 'Länger aus. Etwas ruhiger.',
    lead: box ? 'Vier Sekunden einatmen, halten, ausatmen, halten. Ein kleiner Rahmen für einen vollen Kopf.' : 'Vier Sekunden ein. Acht Sekunden aus. Folge dem Kreis und lass die Schultern sinken.'
  }, /*#__PURE__*/React.createElement("div", {
    "data-breath": box ? 'box' : 'long',
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BreathExercise, {
    mode: box ? 'box' : 'lang',
    size: box ? 190 : 200,
    reducedMotion: reducedMotion,
    restartLabel: (box ? 'Boxatmung' : '4/8-Atmung') + ' neu starten'
  })), /*#__PURE__*/React.createElement(Notice, null, "Atme bequem, ohne Druck. Unangenehm oder schwindelig? Pausiere und atme normal weiter."));
}
window.BreathView = BreathView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BreathView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
function Dashboard({
  go,
  openSettings
}) {
  const {
    TopBar,
    ExerciseTile
  } = window.SUMSIMITPODesignSystem_132750;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    showLogo: true,
    onSettings: openSettings,
    basePath: "../../"
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    style: {
      padding: '8px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("section", {
    id: "dashboard",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-accent)'
    }
  }, "Dein Kopf hat 37 Tabs offen? Hi."), /*#__PURE__*/React.createElement("h1", {
    id: "dashboard-title",
    style: {
      font: 'var(--type-h1)',
      letterSpacing: '-.02em'
    }
  }, "Was brauchst du gerade?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Du musst gerade gar nichts. Such dir eine Pause.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ExerciseTile, {
    title: "Hummelmodus",
    subtitle: "Summen statt Scrollen.",
    motif: "bee",
    tone: "lavender",
    meta: "01",
    basePath: "../../",
    href: "#hummel",
    "data-open": "hummel",
    onClick: e => {
      e.preventDefault();
      go('hummel');
    }
  }), /*#__PURE__*/React.createElement(ExerciseTile, {
    title: "Innere Oma",
    subtitle: "Ein Ort, an dem niemand etwas von dir will.",
    motif: "armchair",
    tone: "mauve",
    meta: "02",
    href: "#oma",
    "data-open": "oma",
    onClick: e => {
      e.preventDefault();
      go('oma');
    }
  }), /*#__PURE__*/React.createElement(ExerciseTile, {
    title: "Boxatmung",
    subtitle: "Vier Ecken gegen Gedankenspaghetti.",
    motif: "box",
    tone: "lilac",
    meta: "03",
    href: "#box",
    "data-open": "box",
    onClick: e => {
      e.preventDefault();
      go('box');
    }
  }), /*#__PURE__*/React.createElement(ExerciseTile, {
    title: "4/8-Atmung",
    subtitle: "L\xE4nger aus. Etwas ruhiger.",
    motif: "circle",
    tone: "cream",
    meta: "04",
    href: "#lang",
    "data-open": "lang",
    onClick: e => {
      e.preventDefault();
      go('lang');
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-accent)'
    }
  }, "Kein Konto. Kein M\xFCssen. Einfach kurz du."))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ExerciseShell.jsx
try { (() => {
const SHELL_INDEX = {
  hummel: 1,
  oma: 2,
  box: 3,
  lang: 4
};
function ExerciseShell({
  route,
  title,
  eyebrow,
  lead,
  motif,
  tone,
  onBack,
  children
}) {
  const {
    Button,
    Chip,
    Motif
  } = window.SUMSIMITPODesignSystem_132750;
  const bg = {
    lilac: 'var(--lilac)',
    mauve: 'var(--mauve)',
    lavender: 'var(--light-lavender)',
    cream: 'var(--cream)'
  }[tone];
  const h = React.useRef(null);
  React.useEffect(() => {
    h.current && h.current.focus({
      preventScroll: true
    });
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: route,
    className: 'exercise-view view-' + route,
    "aria-labelledby": route + '-title',
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      textDecoration: 'none'
    }
  }, "Alle Pausen"), /*#__PURE__*/React.createElement(Chip, null, "Pause ", String(SHELL_INDEX[route]).padStart(2, '0'), " / 04")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      borderRadius: 14,
      border: '2px solid var(--espresso)',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    kind: motif,
    size: 44,
    basePath: "../../"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    id: route + '-title',
    ref: h,
    tabIndex: -1,
    style: {
      font: 'var(--type-h1)',
      letterSpacing: '-.02em',
      outline: 'none'
    }
  }, title))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, lead), children));
}
window.ExerciseShell = ExerciseShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ExerciseShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SettingsSheet.jsx
try { (() => {
function SettingsSheet({
  open,
  onClose,
  focus,
  setLink,
  reducedMotion,
  setReducedMotion
}) {
  const {
    Sheet,
    MusicLinkForm,
    Switch,
    Notice
  } = window.SUMSIMITPODesignSystem_132750;
  const showH = !focus || focus === 'hummel',
    showO = !focus || focus === 'oma';
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: focus === 'hummel' ? 'Link für Hummelmodus' : focus === 'oma' ? 'Link für Innere Oma' : 'Einstellungen'
  }, showH && /*#__PURE__*/React.createElement(MusicLinkForm, {
    mode: "hummel",
    label: focus ? 'YouTube- oder Spotify-Link' : 'Hummelmodus · YouTube- oder Spotify-Link',
    onChange: u => setLink('hummel', u)
  }), showO && /*#__PURE__*/React.createElement(MusicLinkForm, {
    mode: "oma",
    label: focus ? 'YouTube- oder Spotify-Link' : 'Innere Oma · YouTube- oder Spotify-Link',
    onChange: u => setLink('oma', u)
  }), !focus && /*#__PURE__*/React.createElement(Switch, {
    label: "Weniger Bewegung",
    description: "Kreis und Punkt bewegen sich nicht. Phase und Sekunden bleiben sichtbar.",
    checked: reducedMotion,
    onChange: setReducedMotion
  }), /*#__PURE__*/React.createElement(Notice, {
    icon: "info"
  }, "Einstellungen bleiben lokal in diesem Browser."));
}
window.SettingsSheet = SettingsSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SettingsSheet.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BoxBreath = __ds_scope.BoxBreath;

__ds_ns.BreathExercise = __ds_scope.BreathExercise;

__ds_ns.CircleBreath = __ds_scope.CircleBreath;

__ds_ns.PhaseCountdown = __ds_scope.PhaseCountdown;

__ds_ns.TimerControls = __ds_scope.TimerControls;

__ds_ns.BOX_PHASES = __ds_scope.BOX_PHASES;

__ds_ns.FOUR_EIGHT_PHASES = __ds_scope.FOUR_EIGHT_PHASES;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ExerciseTile = __ds_scope.ExerciseTile;

__ds_ns.Motif = __ds_scope.Motif;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.MusicLinks = __ds_scope.MusicLinks;

__ds_ns.MusicLinkForm = __ds_scope.MusicLinkForm;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.DEFAULT_MUSIC_LINKS = __ds_scope.DEFAULT_MUSIC_LINKS;

__ds_ns.ALLOWED_MUSIC_HOSTS = __ds_scope.ALLOWED_MUSIC_HOSTS;

__ds_ns.STORAGE_KEYS = __ds_scope.STORAGE_KEYS;

__ds_ns.ROUTES = __ds_scope.ROUTES;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
