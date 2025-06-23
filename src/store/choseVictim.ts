import { HistoryRowType } from "@/types/History.t";
import { StalkRow, UserRow } from "@/types/User.t";
import { atom } from "recoil";

export const robVictimState = atom<UserRow | StalkRow | HistoryRowType | null>({
  key: "robVictim",
  default: null,
});
