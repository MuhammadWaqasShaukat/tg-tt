import { atom } from "recoil";

export const infoViewState = atom<boolean>({
  key: "infoView",
  default: false,
});
