import React from "react";
import { ButtonProps } from "@/types/Buttons.t";
import Pill2 from "../Pills/Pill2";

interface Button3Props extends ButtonProps {
  buttonText: string;
}

const Button3: React.FC<Button3Props> = ({
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
  buttonText,
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
      <Pill2
        accent="green"
        count={buttonText}
        className="text-[1.5em] !bg-[#FFEEE4] pl-1 -ml-2 z-0 !rounded-md py-0.5"
      >
        <div className="z-10 flex flex-col items-center justify-center mx-auto ">
          <div className="bg bg-chip-coin bg-center  w-[9vw] aspect-square max-w-[38px] z-10"></div>
        </div>
      </Pill2>
    </button>
  );
};

export default Button3;
