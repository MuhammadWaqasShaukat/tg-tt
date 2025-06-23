import { atom } from "recoil";
import { CurrentModalType } from "../types/CurrentModal.t";

export const CallbackModalState = atom<CurrentModalType | null>({
  key: "callbackModal",
  default: null,
});
