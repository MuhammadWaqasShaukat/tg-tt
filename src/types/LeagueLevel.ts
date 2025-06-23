import { LeagueNames } from "./User.t";

export type LeagueLevelType = {
  [key in LeagueNames]: Leagues[];
};
export const tierToLeagueMap: Record<number, LeagueNames> = {
  0: "beginner",
  1: "pickpocket",
  2: "burglar",
  3: "robber",
  4: "bandit",
  5: "swindler",
  6: "masters",
  7: "pros",
  8: "heisters",
  9: "virtuoso",
  10: "legendary",
};

export const nameToTierMap: Record<LeagueNames, number> = {
  beginner: 0,
  pickpocket: 1,
  burglar: 2,
  robber: 3,
  bandit: 4,
  swindler: 5,
  masters: 6,
  pros: 7,
  heisters: 8,
  virtuoso: 9,
  legendary: 10,
};

export type Leagues = {
  id: number;
  matchmakingTier: number;
  vaultTier: number;
  startCapacityTier: number;
  vaultMaxCapacity: number;
  robberExtractionRate: number;
  maxRobberPocketCapacity: number;
  maxRobberCapacityWithHugeBag: number;
  numberOfPlayers: number;
  circulatingGold: number;
};

export type UpgradeLeagueTableResponse = {
  leagueId: number;
  leagueName: string;
  price: number;
};
