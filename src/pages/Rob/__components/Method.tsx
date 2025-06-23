import UserLeague from "@/components/UI/Cards/LeagueCard";
import Divider from "@/components/UI/Divider";
import useGetRobVictimLeague from "@/hooks/useGetRobVictimLeague";
// import { localizationState } from "@/store/localizations";
// import { userState } from "@/store/User";
// import { leagueState } from "@/store/userLeagues";
// import { LeagueLevelType } from "@/types/LeagueLevel";
// import { formatCompactNumber } from "@/utils/formatNumber";
// import { getLeagueLevel } from "@/utils/getLeagueLevel";
// import { useRecoilValue } from "recoil";
import RobberyInfo from "./RobberyInfo";

const Method = () => {
  const { getVictimLeague } = useGetRobVictimLeague();
  const victimLeague = getVictimLeague();

  return (
    <>
      <UserLeague {...victimLeague} allowDetails={false} />
      <Divider />
      <RobberyInfo />
    </>
  );
};

export default Method;
