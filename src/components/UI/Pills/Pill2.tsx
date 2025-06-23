import React from "react";

type Pill2Props = {
  count: string;
  children: JSX.Element;
  className?: string;
  onClick?: () => void | null;
  accent: string;
  extended?: boolean;
};

const Pill2: React.FC<Pill2Props> = ({
  count,
  children,
  className,
  onClick,
  accent,
  extended = false,
}) => {
  return (
    <div
      className="flex flex-row items-center justify-start h-max relative"
      onClick={onClick}
    >
      <div>{children}</div>
      <div
        data-accent={accent}
        className={`pill-2  flex flex-row items-center justify-end z-[1px] rounded-r-xl relative ${className}`}
      >
        <span className=" px-2">{count}</span>
      </div>
      {extended && (
        <div className=" absolute left-[98%] w-max ">
          <div className="relative">
            <div className="absolute -top-[40%] left-[50%] -translate-x-[50%] w-5 h-5 bg bg-icon-info"></div>
            <div className="bg-[#9DC2C9] px-1.5 py-2 rounded-r-md ">
              <span className="text-[1.4em] text-white">82.5M</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pill2;
