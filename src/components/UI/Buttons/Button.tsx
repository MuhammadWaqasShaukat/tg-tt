import React from "react";
import Loader from "../Loader";
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
}) => {
  return (
    <button
      data-accent={acent}
      type={type}
      className={`btn w-full ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
