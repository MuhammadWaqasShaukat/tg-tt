import { robVictimState } from "@/store/choseVictim";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useRecoilState, useRecoilValue } from "recoil";

const useGetRobVictimLeague = () => {
  const robVictim = useRecoilValue(robVictimState);
  const [userLeagues] = useRecoilState(leagueState);

  const getVictimLeague = (): {
    leagueId: number;
    league: LeagueNames;
  } => {
    if (robVictim) {
      if ("leagueId" in robVictim) {
        const resp = getLeagueLevel(
          userLeagues as LeagueLevelType,
          robVictim.leagueId
        );
        return {
          leagueId: robVictim.leagueId,
          league: resp?.league as LeagueNames,
        };
      } else if ("userLeagueId" in robVictim) {
        const resp = getLeagueLevel(
          userLeagues as LeagueLevelType,
          robVictim?.userLeagueId
        );
        return {
          leagueId: robVictim.userLeagueId,
          league: resp?.league as LeagueNames,
        };
      } else {
        return {
          leagueId: 1,
          league: "pickpocket",
        };
      }
    }
    return {
      leagueId: 1,
      league: "pickpocket",
    };
  };

  return { getVictimLeague };
};

export default useGetRobVictimLeague;
