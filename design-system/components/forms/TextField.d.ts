/** Labelled single-line input – used in the settings panel for custom YouTube/Spotify links. */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error text replaces hint; shown in Deep Plum */
  error?: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
