/** Graphic motif per exercise module: bee (Hummelmodus), armchair (Innere Oma), box (Boxatmung), circle (4/8-Atmung). */
export interface MotifProps {
  kind: 'bee' | 'armchair' | 'box' | 'circle';
  size?: number;
  basePath?: string;
}
export declare function Motif(props: MotifProps): JSX.Element;
