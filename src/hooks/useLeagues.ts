import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { LeagueNamesArray, leagueState } from "@/store/userLeagues";
import { LeagueLevelType, tierToLeagueMap } from "@/types/LeagueLevel";
import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

export function useLeaguesQuery() {
  const setUserLeagues = useSetRecoilState(leagueState);

  const fetchData = async (setUserLeagues: (state: any) => void) => {
    const data = await ApiService.get(endpoints["leagues"], {});

    const groupedByLeague = LeagueNamesArray.reduce((acc, league) => {
      acc[league] = [];
      return acc;
    }, {} as LeagueLevelType);

    data.forEach((item: any) => {
      const league = tierToLeagueMap[item.matchmakingTier];
      if (league) {
        groupedByLeague[league].push(item);
      }
    });

    setUserLeagues(groupedByLeague);

    return groupedByLeague;
  };

  return useQuery({
    queryKey: ["leagues-query"],
    queryFn: () => fetchData(setUserLeagues),
    staleTime: 1000 * 60 * 5,
    retry: 5,
  });
}
