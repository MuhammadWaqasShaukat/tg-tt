import { atom, selector } from "recoil";
import { LeagueLevelType, tierToLeagueMap } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import { ApiService } from "@/service";
import { endpoints } from "@/constants/API_ENDPOINTS";

export const leagueState = atom<LeagueLevelType | null>({
  key: "userLeagues",
  default: null,
});

export const LeagueNamesArray: LeagueNames[] = [
  "beginner",
  "pickpocket",
  "burglar",
  "robber",
  "bandit",
  "swindler",
  "masters",
  "pros",
  "heisters",
  "virtuoso",
  "legendary",
];

export const fetchLeaguesSelector = selector<LeagueLevelType>({
  key: "fetchLeaguesSelector",
  get: async () => {
    try {
      const rawData = await ApiService.get(endpoints["leagues"], {});

      const groupedByLeague = LeagueNamesArray.reduce((acc, league) => {
        acc[league] = [];
        return acc;
      }, {} as LeagueLevelType);

      rawData.forEach((item: any) => {
        const league = tierToLeagueMap[item.matchmakingTier];
        if (league) {
          groupedByLeague[league].push(item);
        }
      });

      return groupedByLeague;
    } catch (error) {
      //console.error("Error fetching leagues:", error);
      return {} as LeagueLevelType; // Return an empty object with the expected type
    }
  },
});
