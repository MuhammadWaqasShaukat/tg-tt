import { atom } from "recoil";

export const wantedLeagueState = atom<number | null>({
  key: "wantedLeague",
  default: null,
});
