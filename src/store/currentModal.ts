import { atom } from "recoil";
import { CurrentModalType } from "../types/CurrentModal.t";

export const CurrentModalState = atom<CurrentModalType | null>({
  key: "currentModal",
  default: null,
});
