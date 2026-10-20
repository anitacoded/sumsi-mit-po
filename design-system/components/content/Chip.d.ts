/** Small pill label for metadata (duration, rhythm, "Audio-Link"). The only pill-shaped element. */
export interface ChipProps {
  tone?: 'outline' | 'lavender' | 'plum' | 'mauve';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): JSX.Element;
