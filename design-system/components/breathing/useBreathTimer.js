import { useEffect, useRef, useState, useCallback } from 'react';

export const BOX_PHASES = [
  { label: 'Einatmen', secs: 4, kind: 'in' },
  { label: 'Halten', secs: 4, kind: 'hold' },
  { label: 'Ausatmen', secs: 4, kind: 'out' },
  { label: 'Halten', secs: 4, kind: 'hold' },
];
export const FOUR_EIGHT_PHASES = [
  { label: 'Einatmen', secs: 4, kind: 'in' },
  { label: 'Ausatmen', secs: 8, kind: 'out' },
];

export function useBreathTimer(phases) {
  const [status, setStatus] = useState('idle');
  const [t, setT] = useState(0);
  const base = useRef(0), startAt = useRef(0), raf = useRef(0);
  const total = phases.reduce((a, p) => a + p.secs, 0) * 1000;
  const tick = useCallback(() => {
    setT(base.current + performance.now() - startAt.current);
    raf.current = requestAnimationFrame(tick);
  }, []);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const statusRef = useRef(status); statusRef.current = status;
  // Live-Site-Verhalten: verborgener Tab pausiert die Übung.
  useEffect(() => {
    const onVis = () => { if (document.hidden && statusRef.current === 'running') pauseRef.current(); };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  const pauseRef = useRef(null);
  const start = () => { base.current = 0; startAt.current = performance.now(); setT(0); setStatus('running'); cancelAnimationFrame(raf.current); raf.current = requestAnimationFrame(tick); };
  const pause = pauseRef.current = () => { cancelAnimationFrame(raf.current); base.current = base.current + performance.now() - startAt.current; setT(base.current); setStatus('paused'); };
  const resume = () => { startAt.current = performance.now(); setStatus('running'); raf.current = requestAnimationFrame(tick); };
  const restart = () => { cancelAnimationFrame(raf.current); base.current = 0; setT(0); setStatus('idle'); };
  const inCycle = t % total;
  const cycle = Math.floor(t / total);
  let acc = 0, idx = 0;
  for (; idx < phases.length; idx++) { const d = phases[idx].secs * 1000; if (inCycle < acc + d) break; acc += d; }
  idx = Math.min(idx, phases.length - 1);
  const phase = phases[idx];
  const into = inCycle - acc;
  return {
    status, phase, phaseIndex: idx, cycle,
    progress: status === 'idle' ? 0 : into / (phase.secs * 1000),
    remaining: status === 'idle' ? phase.secs : Math.max(1, Math.ceil(phase.secs - into / 1000)),
    start, pause, resume, restart,
  };
}
