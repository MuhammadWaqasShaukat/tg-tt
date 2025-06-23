import { atom } from "recoil";

export const sheetState = atom<boolean>({
  key: "sheetEnabled",
  default: true,
});
