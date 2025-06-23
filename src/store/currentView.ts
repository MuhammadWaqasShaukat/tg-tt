import { atom } from "recoil";
import { View } from "../types/View.t";

export const CurrentViewState = atom<View | null>({
  key: "currentView",
  default: null,
});