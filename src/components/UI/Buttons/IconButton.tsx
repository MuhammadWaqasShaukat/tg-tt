import React from "react";
import { ButtonProps } from "@/types/Buttons.t";
import Loader from "../Loader";

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
}) => {
  return (
    <button
      data-accent={acent}
      type={type}
      className={`btn h-[4.6vh] w-[10.14vw] aspect-square grid place-content-center ${className}`}
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

export default IconButton;
