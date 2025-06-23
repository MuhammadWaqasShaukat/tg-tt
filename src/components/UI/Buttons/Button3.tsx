import React from "react";
import { ButtonProps } from "@/types/Buttons.t";
import Pill2 from "../Pills/Pill2";

const Button3: React.FC<ButtonProps> = ({
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
    <button
      data-accent={acent}
      type={type}
      className={`${className} btn-3 w-full rounded-xl p-1`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
    >
      {/* {children} <StashChip count="23" iconSize="w-[5.3vw] h-[3.8vh]" /> */}

      <Pill2
        accent="green"
        count="12"
        className="text-[2em] !bg-[#FFEEE4] pr-1.5 pl-2 -ml-2 z-0 !rounded-lg"
      >
        <div className="z-10 flex flex-col items-center justify-center mx-auto ">
          <div className="bg bg-chip-coin bg-center h-[4.2vh] w-[9vw] z-10"></div>
        </div>
      </Pill2>
    </button>
  );
};

export default Button3;
