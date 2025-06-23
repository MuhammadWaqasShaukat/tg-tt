import { atom } from "recoil";
import { StashPurchaseFlow } from "@/types/StashPurchaseFlow";

export const stashPurcahaseState = atom<StashPurchaseFlow>({
  key: "stashPurcahaseStep",
  default: "selection",
});
