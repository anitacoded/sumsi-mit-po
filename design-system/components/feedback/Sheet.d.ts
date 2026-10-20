/** Bottom sheet for settings – discreet, dismissible (backdrop, ×, Esc). Positions absolutely inside its nearest positioned ancestor. */
export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children?: React.ReactNode;
  /** Action row, e.g. <Button>Speichern</Button> */
  footer?: React.ReactNode;
}
export declare function Sheet(props: SheetProps): JSX.Element | null;
