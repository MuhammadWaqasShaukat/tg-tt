import React from "react";
import { ViewType } from "../../../types/View.t";
import IconButton from "../Buttons/IconButton";

export const View: React.FC<ViewType> = ({
  children,
  allowSearch = true,
  className,
  backBtnClkHandler,
  viewTitle,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start w-full gap-9 ${className}`}
    >
      <div className="flex flex-row items-center justify-start w-full gap-3">
        <IconButton acent="brown" className="" onClick={backBtnClkHandler}>
          <div className="w-4 h-4 bg bg-icon-arrow"></div>
        </IconButton>
        <h1 className="text-4xl">{viewTitle}</h1>
        {allowSearch && (
          <IconButton acent="ghost" className="ml-auto ">
            <div className="w-6 h-6 bg bg-icon-search"></div>
          </IconButton>
        )}
      </div>
      {children}
    </div>
  );
};
