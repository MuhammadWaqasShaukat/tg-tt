import { CurrentModalState } from "@/store/currentModal";
import { CurrentViewState } from "@/store/currentView";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface Pill2Props extends React.HTMLAttributes<HTMLDivElement> {
  count: string | JSX.Element;
  children: JSX.Element;
  className?: string;
  onClick?: () => void | null;
  accent: string;
  extended?: boolean;
  extendedText?: string;
  onClickInfo?: () => void;
}

const Pill2: React.FC<Pill2Props> = ({
  count,
  children,
  className,
  onClick,
  accent,
  extended = false,
  extendedText,
  onClickInfo,
}) => {
  const setView = useSetRecoilState(CurrentViewState);
  const [currentModal, setCurrentModal] = useRecoilState(CurrentModalState);

  return (
    <div
      className="flex flex-row items-center justify-start relative w-fit"
      onClick={onClick}
    >
      {children}
      <div
        data-accent={accent}
        className={`pill-2  flex flex-row items-center z-[1] rounded-r-lg leading-none  relative ${className}`}
      >
        <span className=" px-2 leading-none pb-0.5 w-full text-center">
          {count}
        </span>
      </div>
      {extended && (
        <div className=" absolute left-full w-max z-0">
          <div className="relative">
            <div
              onClick={() => {
                if (onClickInfo) {
                  onClickInfo();
                } else {
                  if (currentModal) {
                    setCurrentModal(null);
                  }
                  setView("league-info");
                }
              }}
              className="absolute -top-[40%] left-[50%] -translate-x-[50%] w-5 h-5 bg bg-icon-info z-[1] cursor-pointer"
            ></div>
            <div className="bg-[#747474] px-1.5 py-1 rounded-r-md relative -ml-0.5">
              <span className="text-[1em] text-white">{extendedText}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pill2;
