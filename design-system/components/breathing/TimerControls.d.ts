/** Starten / Pausieren / Fortsetzen / Neustart – Labels identisch mit der Live-Site. */
export interface TimerControlsProps {
  status: 'idle' | 'running' | 'paused';
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onRestart?: () => void;
  /** aria-label, z. B. "Boxatmung neu starten" */
  restartLabel?: string;
}
export declare function TimerControls(props: TimerControlsProps): JSX.Element;
