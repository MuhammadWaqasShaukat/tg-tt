import React from "react";
import { ListHeaderType } from "@/types/LIst.t";
import { useRecoilValue } from "recoil";
import { localizationState } from "@/store/localizations";

const RewardListHeader: React.FC<ListHeaderType> = ({ className }) => {
  const localization = useRecoilValue(localizationState);

  return (
    <div
      className={`flex flex-row justify-between items-center w-full gap-[22px] ${className}`}
    >
      <div className="flex-1 ">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          {localization["achievements_screen.table_type_column"]}
        </span>
      </div>
      <div className="w-max">
        <span className="text-base text-center font-bold tracking-tighter capitalize font-josefin text-light-brown">
          {localization["achievements_screen.table_leaderboard_column"]}
        </span>
      </div>
    </div>
  );
};

export default RewardListHeader;
