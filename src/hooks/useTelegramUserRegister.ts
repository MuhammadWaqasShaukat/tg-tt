import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loadingScreenState } from "@/store/loadingScreen";
import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { myLeagueState } from "@/store/myLeague";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useTelegramTokenQuery } from "./useTelegramToken";

const loginTG = async (username: string) => {
  //   const initData = window.Telegram.WebApp.initData || "";
  //   const urlParams = new URLSearchParams(initData);
  //   const userJson = urlParams.get("user") || "";

  //   let userObj = {};
  //   try {
  //     userObj = JSON.parse(userJson);
  //   } catch (e) {
  //     return;
  //   }

  var obj = {
    initData: window.Telegram.WebApp.initData,
    username,
    // invitedBy
    // tonWalletId
  };

  return await ApiService.post(`${endpoints["telegramUser"]}`, obj, {});
};

export function useAuthQuery() {
  const setLoadingScreen = useSetRecoilState(loadingScreenState);
  const { mutate: getToken } = useTelegramTokenQuery();
  const [user, setUser] = useRecoilState(userState);
  const userLeagues = useRecoilValue(leagueState);
  const setMyLeague = useSetRecoilState(myLeagueState);

  return useMutation({
    mutationFn: loginTG,
    onSuccess: (data) => {
      if (data) {
        setUser(user);
        getToken({ initData: window.Telegram.WebApp.initData });
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
