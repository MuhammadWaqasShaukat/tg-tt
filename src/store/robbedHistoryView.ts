import { atom } from "recoil";

export const robbedHistoryViewState = atom<boolean>({
  key: "robbedHistoryView",
  default: false,
});
