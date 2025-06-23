import { StalkRow } from "@/types/User.t";
import { atom } from "recoil";

export const thiefComaprisonState = atom<StalkRow | null>({
  key: "compareThief",
  default: null,
});
