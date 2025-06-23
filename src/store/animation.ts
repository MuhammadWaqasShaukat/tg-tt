import { atom } from "recoil";

export const animationState = atom<
  | "wallet-deposit"
  | "upgrade-league"
  | "stash-bought"
  | "league-upgrade-paid-successfull"
  | "league-upgrade-normal-successfull"
  | "league-upgrade-tutorial-successfull"
  | "loot-withdrawal-successfull"
  | null
>({
  key: "animation",
  default: null,
});
