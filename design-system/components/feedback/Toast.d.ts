/** Brief confirmation ("Gespeichert.") – polite live region, auto-hide handled by caller. */
export interface ToastProps {
  children?: React.ReactNode;
  icon?: import('../core/Icon').IconName | null;
  visible?: boolean;
}
export declare function Toast(props: ToastProps): JSX.Element;
