import type { IconName } from './Icon';
/** Square icon-only button (48px touch target) for back, settings, close. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  /** Required accessible label (German), e.g. "Zurück" */
  label: string;
  variant?: 'plain' | 'outline' | 'filled';
  size?: 'sm' | 'md';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
