import { atom } from "recoil";

export const robVictimState = atom<boolean>({
  key: "robVictim",
  default: false,
});
