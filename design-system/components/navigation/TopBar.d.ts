/**
 * App header: back (exercise views) or logo (dashboard) on the left, settings on the right.
 * @startingPoint section="Navigation" subtitle="Header mit Logo/Zurück und Einstellungen" viewport="700x200"
 */
export interface TopBarProps {
  title?: string;
  onBack?: () => void;
  onSettings?: () => void;
  showLogo?: boolean;
  basePath?: string;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
