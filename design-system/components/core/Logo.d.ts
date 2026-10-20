/** Approved SUMSI MIT PO logo artwork (PNG). Never redraw the bee. */
export interface LogoProps {
  /** horizontal = bee left + wordmark right (header); bee = bee alone; full = stacked main logo; wordmark = text only */
  variant?: 'horizontal' | 'bee' | 'full' | 'wordmark';
  /** Bee height in px */
  size?: number;
  /** Prefix to reach the design-system root, e.g. "../../" */
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
