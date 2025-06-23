import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useRecoilValue } from "recoil";

const usePocketInfo = () => {
  const user = useRecoilValue(userState);
  const userLeagues = useRecoilValue(leagueState);

  function getPocketCap() {
    if (!userLeagues || !user) return;

    const resp = getLeagueLevel(userLeagues as LeagueLevelType, user.leagueId);
    if (user.hugeBagIsActive) {
      const leage =
        userLeagues[resp?.league as LeagueNames][resp?.index as number];
      return leage.maxRobberCapacityWithHugeBag;
    } else {
      const leage =
        userLeagues[resp?.league as LeagueNames][resp?.index as number];
      return leage.maxRobberPocketCapacity;
    }
  }

  function getPocketStatus() {
    const pocketCap = getPocketCap() ?? 0;

    if (!user) return;

    if (user.robberGold < pocketCap) {
      return false;
    } else {
      return true;
    }
  }

  function getPocketTax() {
    if (!user) return;

    const _robberGold = user.robberGold ?? 0;
    if (_robberGold === 0) return 0;
    return _robberGold * 0.1;
  }

  return { getPocketCap, getPocketStatus, getPocketTax };
};

export default usePocketInfo;
