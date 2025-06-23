import React from "react";
import { ListHeaderType } from "@/types/LIst.t";

const RewardListHeader: React.FC<ListHeaderType> = ({ className }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-full gap-[22px] ${className}`}
    >
      <div className="flex-1 ">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Achievement
        </span>
      </div>
      <div className="w-max">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Leaderbord
        </span>
      </div>
    </div>
  );
};

export default RewardListHeader;
