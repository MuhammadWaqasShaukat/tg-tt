import { atom } from "recoil";

export const counterState = atom<number>({
  key: "counter",
  default: 0,
});
