import React from "react";
import { ButtonProps } from "@/types/Buttons.t";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
  className,
  style,
  acent = "primary",
  ariaLabel,
  loading,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
 ...rest 
}) => {
  return (
    <button
    {...rest}
      data-accent={acent}
      type={type}
      className={`${className} btn w-full`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
    >
      {loading ? <></> : children}
    </button>
  );
};

export default Button;
