/** Flat content surface. Defined edges (2px Espresso) instead of soft drop shadows. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'cream' | 'lavender' | 'lilac' | 'dark';
  outline?: 'strong' | 'soft' | 'none';
  /** Hard 4px offset shadow – only for elevated/interactive surfaces */
  shadow?: boolean;
  padding?: number | string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
