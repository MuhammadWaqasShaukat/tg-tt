import { atom } from "recoil";

export const loadingScreenState = atom<boolean>({
  key: "loadingScreen",
  default: true,
});
