export type IconName = 'settings'|'arrow-left'|'play'|'pause'|'rotate-ccw'|'external-link'|'x'|'headphones'|'armchair'|'square'|'circle'|'check'|'info'|'volume-2'|'music'|'wind';
/** Lucide glyph (2px stroke, round caps) from the bundled subset. */
export interface IconProps {
  name: IconName;
  /** px, default 24 */
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** Accessible label; omit for decorative icons */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
