import { InProgressRobbery } from "@/types/Rob.t";
import { atom } from "recoil";

export const inProgressRobberyState = atom<InProgressRobbery | null>({
  key: "inProgressRobbery",
  default: null,
});
