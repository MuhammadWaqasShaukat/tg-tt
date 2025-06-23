export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  acent?: "green" | "yellow" | "red" | "white" | "brown" | "ghost";
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
  loading?: boolean;
}
