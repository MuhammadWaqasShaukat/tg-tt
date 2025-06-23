import { leagueState } from "@/store/userLeagues";
import { LeagueNames } from "@/types/User.t";
import { formatCompactNumber } from "@/utils/formatNumber";
import { getLevelStars } from "@/utils/getLevelStars";
import { Fragment } from "react/jsx-runtime";
import { useRecoilState } from "recoil";

const LeagueLevel = ({ league }: { league: LeagueNames }) => {
  const [userLeagues] = useRecoilState(leagueState);
  return (
    <div className="w-full space-y-4">
      <div className="bg-[#BDE1E5] px-4 py-2 w-full rounded-xl">
        <div className="grid items-center grid-cols-5 gap-4">
          <div className="col-span-2">
            <span className="text-[1em] font-medium font-josefin leading-none">
              League
            </span>
          </div>
          <div className="col-start-3">
            <span className="text-[1em] font-medium font-josefin leading-none">
              Vault max
            </span>
          </div>
          <div className="col-start-4">
            <span className="text-[1em] font-medium font-josefin leading-none">
              Rob max
            </span>
          </div>
          <div className="col-start-5">
            <span className="text-[1em] font-medium font-josefin leading-none">
              Pocket max
            </span>
          </div>
        </div>
      </div>
      <div className="w-full space-y-2">
        <div className="grid grid-cols-5 gap-4 bg-[#FFFBF9] px-4 py-2 w-full rounded-xl">
          <div className="col-span-5">
            <h3 className="text-[1em] text-[#39444D] capitalize">{league}</h3>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 bg-[#ffffff] px-4 py-2 w-full rounded-xl">
          {userLeagues &&
            userLeagues[league].map((level) => (
              <Fragment key={level.id}>
                <div className="col-span-2">
                  <div className="grid grid-cols-6 ">
                    {getLevelStars(level.id, league)}
                  </div>
                </div>

                <div className="col-start-3">
                  <span className="text-[1em] font-medium font-josefin leading-none text-[#39444D]">
                    {formatCompactNumber(level.vaultMaxCapacity)}
                  </span>
                </div>
                <div className="col-start-4">
                  <span className="text-[1em] font-medium font-josefin leading-none text-[#39444D]">
                    {formatCompactNumber(level.robberExtractionRate)}
                  </span>
                </div>
                <div className="col-start-5">
                  <span className="text-[1em] font-medium font-josefin leading-none text-[#39444D]">
                    {formatCompactNumber(level.maxRobberPocketCapacity)}
                  </span>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueLevel;
