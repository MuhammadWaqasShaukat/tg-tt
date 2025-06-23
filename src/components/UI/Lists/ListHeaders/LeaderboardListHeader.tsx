import React from "react";
import { ListHeaderType } from "@/types/LIst.t";

const LeaderboardListHeader: React.FC<ListHeaderType> = ({ className }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-full gap-[22px] ${className}`}
    >
      <div className="flex-[4] ">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Player
        </span>
      </div>
      <div className=" flex-1 px-1 text-center ">
        <span className="text-base  font-bold tracking-tighter capitalize font-josefin text-light-brown">
          #
        </span>
      </div>
      <div className="flex-1 px-2 text-center ">
        <span className="text-base font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Score
        </span>
      </div>
    </div>
  );
};

export default LeaderboardListHeader;
