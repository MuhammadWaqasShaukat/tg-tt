import { LeagueNames } from "@/types/User.t";
import { atom } from "recoil";

export const myLeagueState = atom<{
  league: LeagueNames;
  index: number;
} | null>({
  key: "myLeague",
  default: null,
});
