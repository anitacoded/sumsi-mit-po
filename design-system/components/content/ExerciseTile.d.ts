/**
 * Clickable dashboard tile for one exercise module – the core SUMSI pattern. Solid color, 2px Espresso outline, 4px hard offset shadow.
 * @startingPoint section="Content" subtitle="Übungskacheln fürs Dashboard" viewport="700x420"
 */
export interface ExerciseTileProps {
  title: string;
  /** One short line, e.g. "Summen statt Scrollen." */
  subtitle?: string;
  motif?: 'bee' | 'armchair' | 'box' | 'circle';
  tone?: 'lilac' | 'mauve' | 'lavender' | 'cream';
  /** Small chip top-right, e.g. "4·4·4·4" or "Audio" */
  meta?: string;
  layout?: 'square' | 'wide';
  basePath?: string;
  onClick?: () => void;
  href?: string;
}
export declare function ExerciseTile(props: ExerciseTileProps): JSX.Element;
