import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";
import useResetRobFlow from "./useResetRobFlow";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { robStepState } from "@/store/robFlow";
import { userState } from "@/store/User";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { leagueState } from "@/store/userLeagues";
import { myLeagueState } from "@/store/myLeague";
import { LeagueNames } from "@/types/User.t";

export function useUserQuery() {
  const { resetRobFlow } = useResetRobFlow();
  const view = useRecoilValue(CurrentViewState);
  const robStep = useRecoilValue(robStepState);
  const [, setUser] = useRecoilState(userState);
  const userLeagues = useRecoilValue(leagueState);
  const [myLeague, setMyLeague] = useRecoilState(myLeagueState);

  const fetchData = async (cb: () => void) => {
    const data = await ApiService.get(endpoints["users"], {});

    if (
      data &&
      !data.iAmRobbing &&
      view !== "hit-list" &&
      robStep !== "method-selection"
    ) {
      cb();
    }

    if (data) {
      setUser(data);
      if (data) {
        let temp: { league: LeagueNames; index: number } | null = null;

        if (userLeagues) {
          temp = getLeagueLevel(userLeagues, data.leagueId);
        }

        if (temp && temp.league !== myLeague?.league) {
          setMyLeague(temp);
        }
      }
    }
    return data;
  };

  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchData(resetRobFlow),
    refetchInterval: 1000 * 10,
  });
}
