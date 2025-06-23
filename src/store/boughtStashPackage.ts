import { StashPackageType } from "@/types/StashPackge.t";
import { atom } from "recoil";

export const boughtStashPackageState = atom<StashPackageType | null>({
  key: "boughtStashPackage",
  default: null,
});
