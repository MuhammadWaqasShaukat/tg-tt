import { PAID_LEAGUE_START } from "@/constants/vars";

export const hasPremiumLeagueAlready = (leagueId: number) => {
  return leagueId >= PAID_LEAGUE_START ? true : false;
};
