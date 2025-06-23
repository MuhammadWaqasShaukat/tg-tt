import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loadingScreenState } from "@/store/loadingScreen";
import { userState } from "@/store/User";
import { useTokenQuery } from "./useToken";
import { leagueState } from "@/store/userLeagues";
import { myLeagueState } from "@/store/myLeague";
import { LeagueNames, User } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";

const login = async (body: { username: string }): Promise<User> => {
  return await ApiService.post(`${endpoints["users"]}`, body, {});
};

export function useAuthQuery() {
  const setLoadingScreen = useSetRecoilState(loadingScreenState);
  const { mutate: getToken } = useTokenQuery();
  const [user, setUser] = useRecoilState(userState);
  const userLeagues = useRecoilValue(leagueState);
  const setMyLeague = useSetRecoilState(myLeagueState);

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data) {
        setUser(user);
        getToken({ username: data.username });
        setLoadingScreen(true);

        let temp: { league: LeagueNames; index: number } | null = null;

        if (userLeagues) {
          temp = getLeagueLevel(userLeagues, data.leagueId);
        }

        if (temp) {
          setMyLeague(temp);
        }
      }
    },
  });
}
