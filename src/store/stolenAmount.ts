import { atom } from "recoil";

export const stolenAmountState = atom<number>({
  key: "stolenAmount",
  default: 0,
});
