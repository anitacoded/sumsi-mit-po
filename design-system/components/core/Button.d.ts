import type { IconName } from './Icon';
/**
 * Primary action button. Deep Plum fill with Espresso outline and a hard 2px offset shadow; presses "into" the page.
 * @startingPoint section="Core" subtitle="Primär-, Sekundär- und Ghost-Buttons" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Leading Lucide icon */
  icon?: IconName;
  /** Trailing Lucide icon (e.g. external-link) */
  iconRight?: IconName;
  /** Full width – for thumb-reachable mobile CTAs */
  block?: boolean;
  /** Renders an <a> instead of <button> */
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
