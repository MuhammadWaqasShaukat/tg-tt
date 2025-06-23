import UpgradingAnimation from "@/components/UpgradingAnimation";
import UpgradingAnimationNormal from "@/components/UpgradingAnimationNormal";
import { animationState } from "@/store/animation";
import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useRecoilState, useRecoilValue } from "recoil";

const LeagueUpgraded = () => {
  const user = useRecoilValue(userState);

  const [animation] = useRecoilState(animationState);
  const userLeagues = useRecoilValue(leagueState);

  const _leagueId = user && user?.leagueId < 25 ? user?.leagueId + 1 : 2;
  const newLeagueLevel = animation
    ? getLeagueLevel(userLeagues as LeagueLevelType, user?.leagueId as number)
    : getLeagueLevel(userLeagues as LeagueLevelType, _leagueId);

  return (
    <>
      {animation === "league-upgrade-paid-successfull" ? (
        <UpgradingAnimation
          newLeagueLevel={newLeagueLevel}
          username={user?.username || ""}
        />
      ) 
      : (
        <UpgradingAnimationNormal />
      )}
    </>
  );
};

export default LeagueUpgraded;
