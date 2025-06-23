import React from "react";
import ImageBox from "../../ImageBox";
import Pill2 from "../../Pills/Pill2";
import { CellProps } from "@/types/Table.t";
import { formatCompactNumber } from "@/utils/formatNumber";

const LeaderboardPlayer: React.FC<{
  user: {
    username: string;
    position: number;
    score: number;
    showPrize?: boolean;
    prize?: number | null;
  };
  className?: string;
  cellProps?: CellProps;
}> = ({ user, className }) => {
  //TODO: need to use these prizes
  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-start ">
        <ImageBox className=" max-w-[42px] max-h-[42px]" />
        <div className="pt-1 ml-4 space-y-2 max-w-[35vw]">
          <h2 className=" text-[1.25em] font-bold font-josefin tracking-tight leading-6 truncate text-ellipsis">
            {user.username}
          </h2>
          {user.showPrize && user.prize && (
            <div className="w-max">
              <Pill2
                accent="grey"
                count={formatCompactNumber(user.prize)}
                className="text-[1em] text-white -ml-2 rounded-r-md py-0.5"
                extended={false}
              >
                <div className="max-w-6 max-h-6 w-[5.80vw] aspect-square mx-auto z-10">
                  <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
                </div>
              </Pill2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPlayer;
