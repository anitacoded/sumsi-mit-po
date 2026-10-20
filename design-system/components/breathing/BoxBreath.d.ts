/** Box-breathing visual: a dot travels the square's edges (top = ein, right = halten, bottom = aus, left = halten). Pure visual; drive with useBreathTimer(BOX_PHASES). */
export interface BoxBreathProps {
  phaseIndex?: number;
  /** 0–1 within current phase */
  progress?: number;
  size?: number;
  /** Highlight the current edge in Purple */
  active?: boolean;
}
export declare function BoxBreath(props: BoxBreathProps): JSX.Element;
