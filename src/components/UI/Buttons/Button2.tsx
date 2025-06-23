import React from "react";
import { ButtonProps } from "@/types/Buttons.t";
import Pill2 from "../Pills/Pill2";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/User";

interface Button2Props extends ButtonProps {
  icon?: React.ReactNode;
  buttonText: string;
}

const Button2: React.FC<Button2Props> = ({
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
  icon,
  buttonText = "22",
}) => {
  const user = useRecoilValue(userState);
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
        {children}{" "}
        {icon ?? (
          <Pill2
            accent="brown"
            count={buttonText}
            className="text-[1em] -ml-2 rounded-r-md py-0.5"
            extended={false}
          >
            <div className="aspect-square h-[38px] w-[38px] mx-auto flex flex-col justify-center items-center z-10 relative">
              <div className="bg bg bg-chip-coin bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        )}
      </button>

      <div className=" bg-white flex flex-row justify-center items-center gap-1 w-max px-3 py-1 rounded-3xl max-h-[23px]">
        <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin">
          Balance
        </span>
        <span className="w-1 h-1 rounded-full bg-light-brown"></span>
        <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin">
          {user?.tokens.toLocaleString() ?? 0}
        </span>
      </div>
    </div>
  );
};

export default Button2;
