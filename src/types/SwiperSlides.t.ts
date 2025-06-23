import { LeagueNames } from "./User.t";

export type SlideItemProp = {
  league: LeagueNames;
  levels: number[];
  leagueId: number;
  upgraded: boolean;
  imageUrl: string;
  maxLeagueLevel: number
};