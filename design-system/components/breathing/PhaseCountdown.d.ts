/** Phase label + big countdown number – the always-visible status for breathing timers. */
export interface PhaseCountdownProps {
  label: string;
  remaining: number;
  status?: 'idle' | 'running' | 'paused';
  /** Small line below, e.g. "Runde 3" */
  caption?: string;
}
export declare function PhaseCountdown(props: PhaseCountdownProps): JSX.Element;
