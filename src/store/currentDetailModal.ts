import { atom } from "recoil";
import { MoreInfoModalType } from "../types/CurrentModal.t";

export const CurrentDetailModalState = atom<MoreInfoModalType | null>({
  key: "currentDetailModal",
  default: null,
});
