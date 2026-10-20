/** 4/8 breathing visual: circle grows on Einatmen, shrinks on Ausatmen (sine eased). */
export interface CircleBreathProps {
  kind?: 'in' | 'out' | 'hold';
  progress?: number;
  size?: number;
  idle?: boolean;
  /** Freeze size; rely on phase label + countdown */
  reducedMotion?: boolean;
}
export declare function CircleBreath(props: CircleBreathProps): JSX.Element;
