import { AchievementRowProp } from "@/types/Achievement.t";
import { atom } from "recoil";

export const currentAchivementState = atom<AchievementRowProp | null>({
  key: "achivement",
  default: null,
});
//
