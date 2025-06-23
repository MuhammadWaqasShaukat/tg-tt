import { ListHeaderType } from "@/types/LIst.t";
import React from "react";

const HistoryListHeader: React.FC<ListHeaderType> = ({ className }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-full gap-[22px] ${className}`}
    >
      <div className="flex-1 ">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Player
        </span>
      </div>
      <div className=" w-max px-1">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Stolen
        </span>
      </div>
      <div className=" w-max px-2">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Rob
        </span>
      </div>
    </div>
  );
};

export default HistoryListHeader;
