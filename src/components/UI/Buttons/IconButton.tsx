import React from "react";
import { ButtonProps } from "@/types/Buttons.t";

const IconButton: React.FC<ButtonProps> = ({
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
    {...rest }
      data-accent={acent}
      type={type}
      className={`btn w-[10.14vw] max-w-[42px] max-h-[42px] aspect-square grid place-content-center ${className}`}
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

export default IconButton;
