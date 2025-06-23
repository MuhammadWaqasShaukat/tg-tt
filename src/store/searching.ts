import { atom } from "recoil";

export const serachingState = atom<boolean>({
  key: "searching",
  default: false,
});
