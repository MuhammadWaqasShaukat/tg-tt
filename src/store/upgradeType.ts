import { atom } from "recoil";

export const upgradeTypeState = atom<"normal" | "paid">({
  key: "upgradeType",
  default: "normal",
});
