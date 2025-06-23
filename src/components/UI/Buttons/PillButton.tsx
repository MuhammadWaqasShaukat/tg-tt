import React from "react";
import { ButtonProps } from "@/types/Buttons.t";

const PillButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
  className,
  style,
  acent = "yellow",
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  return (
    <button
      data-accent={acent}
      type={type}
      className={`rounded-xl bg-yellow px-3 py-1 w-full text-sm ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default PillButton;
