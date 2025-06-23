import React from "react";
import { ButtonProps } from "@/types/Buttons.t";
import StashChip from "../Chips/ChipStash";

const Button2: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
  className,
  style,
  acent = "primary",
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <button
        data-accent={acent}
        type={type}
        className={`${className} btn w-full flex flex-row justify-center items-center gap-2 rounded-2xl`}
        style={style}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={ariaLabel}
      >
        {children} <StashChip count="23" />
      </button>

      <div className=" bg-white flex flex-row justify-center items-center gap-1 w-max px-3 py-1.5 rounded-3xl">
        <span className="text-base font-bold tracking-tighter text-light-brown font-josefin">
          Balance
        </span>
        <span className="w-1 h-1 rounded-full bg-light-brown"></span>
        <span className="text-base font-bold tracking-tighter text-light-brown font-josefin">
          981
        </span>
      </div>
    </div>
  );
};

export default Button2;
