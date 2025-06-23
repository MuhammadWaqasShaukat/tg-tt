import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { getLevelStars } from "@/utils/getLevelStars";
import { useRecoilState } from "recoil";

const RatingsInline = ({
  className,
  leagueId,
}: {
  className?: string;
  leagueId: number;
}) => {
  const [userLeagues] = useRecoilState(leagueState);
  const resp = getLeagueLevel(userLeagues as LeagueLevelType, leagueId);

  return (
    <div
      className={`flex flex-row justify-start items-center gap-1 px-2 py-0.5 rounded-lg w-fit ${className}`}
    >
      <h3 className="text-[1em] text-[#39444D] capitalize">
        {resp?.league === "beginner" ? "pickpocket" : resp?.league}
      </h3>
      <div className="flex flex-row">
        {resp && getLevelStars(resp.leagueId, resp.league)}
      </div>
    </div>
  );
};

export default RatingsInline;
