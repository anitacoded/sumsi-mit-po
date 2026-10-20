/** On/off toggle with label – e.g. "Weniger Bewegung" (Live-Label, Schlüssel sumsi-reduce-motion). */
export interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
