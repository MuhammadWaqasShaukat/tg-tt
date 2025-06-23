import { WinthdrawCardProps } from "@/types/WinthdrawCardProps";
import { atom } from "recoil";

export const selectedWithdrawalState = atom<WinthdrawCardProps | null>({
  key: "selectedWithdrawal",
  default: null,
});
