/** Inline hint – safety note under exercises, local-storage disclaimer. */
export interface NoticeProps {
  tone?: 'calm' | 'strong';
  icon?: import('../core/Icon').IconName | null;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Notice(props: NoticeProps): JSX.Element;
