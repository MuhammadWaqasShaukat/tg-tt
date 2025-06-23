import { LeagueNames, StalkRow } from "@/types/User.t";
import { formatCompactNumber } from "@/utils/formatNumber";
import React from "react";
import ImageBox from "../../ImageBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { thiefComaprisonState } from "@/store/thiefComaprison";
import { LeagueAssests } from "@/constants/leagues";
import { leagueState } from "@/store/userLeagues";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { CellProps } from "@/types/Table.t";

const HitListPlayer: React.FC<{
  user: StalkRow;
  className?: string;
  cellProps?: CellProps;
}> = ({ user, className }) => {
  const setView = useSetRecoilState(CurrentViewState);
  const setCompareThief = useSetRecoilState(thiefComaprisonState);
  const userLeagues = useRecoilValue(leagueState);

  const getSourceImage = (): LeagueNames => {
    if (userLeagues) {
      const _userLeague = getLeagueLevel(userLeagues, user.userLeagueId);
      return _userLeague?.league as LeagueNames;
    } else {
      return "heisters";
    }
  };

  const handleRowClick = () => {
    setView("statistics");
    setCompareThief(user);
  };

  return (
    <div className={`${className}`}>
      <div
        className="flex flex-row items-center justify-start flex-1 w-full"
        onClick={handleRowClick}
      >
        <ImageBox
          className=" max-w-[42px] max-h-[42px] min-w-[42px] min-h-[42px]"
          imageURL={LeagueAssests[getSourceImage()].face}
        />
        <div className="w-full pt-1 ml-3 space-y-1 max-w-[45vw]">
          <h2 className="text-[1.25em] font-bold leading-6 tracking-tight font-josefin  text-left truncate text-ellipsis">
            {user.username}
          </h2>
          <div className="flex flex-row items-end justify-start ">
            <div className="text-[.875em] text-light-brown font-josefin ">
              All Time :
            </div>
            <div className="flex flex-row items-start gap-1 ">
              <span className="text-[.875em] text-[#FF5757] font-josefin">
                - {formatCompactNumber(user.goldStolenFromMe ?? 0)}
              </span>
              <span className="text-[.875em] text-dark-green font-josefin">
                + {formatCompactNumber(user.goldStolenByMe ?? 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitListPlayer;
