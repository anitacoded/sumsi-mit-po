/**
 * Complete breathing timer: visual + phase/countdown + controls, with state. One instance per view (max. one exercise runs at a time).
 * @startingPoint section="Breathing" subtitle="Boxatmung & 4/8-Atmung mit Timer" viewport="700x520"
 */
export interface BreathExerciseProps {
  /** box = 4·4·4·4 square; anything else (48 / lang / long) = 4 ein / 8 aus circle. Live-Site-Route: #lang, data-breath="long". */
  mode?: 'box' | '48' | 'lang' | 'long';
  restartLabel?: string;
  size?: number;
  reducedMotion?: boolean;
}
export declare function BreathExercise(props: BreathExerciseProps): JSX.Element;
