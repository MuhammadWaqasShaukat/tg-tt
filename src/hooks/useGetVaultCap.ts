import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useRecoilValue } from "recoil";

const useVaultInfo = () => {
  const user = useRecoilValue(userState);
  const userLeagues = useRecoilValue(leagueState);

  function getVaultCap() {
    if (!userLeagues || !user) return;
    const resp = getLeagueLevel(userLeagues as LeagueLevelType, user.leagueId);
    const leage =
      userLeagues[resp?.league as LeagueNames][resp?.index as number];
    return leage.vaultMaxCapacity;
  }

  function getVaultStatus(): number {
    if (!user) return 0;

    const cap = getVaultCap() ?? 0;
    if (cap === 0) return 0;

    const percentage = (user.vaultGold / cap) * 100;

    return percentage ?? 0;
  }

  function getVaultTax() {
    if (!user) return;

    const _vaultGold = user.vaultGold ?? 0;
    if (_vaultGold === 0) return 0;
    return _vaultGold * 0.1;
  }

  return { getVaultCap, getVaultStatus, getVaultTax };
};

export default useVaultInfo;
