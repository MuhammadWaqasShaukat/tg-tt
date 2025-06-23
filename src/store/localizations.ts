import { LocalizationType } from "@/types/localization.t";
import { atom } from "recoil";
import { localizationEng } from "@/constants/localization";
export const localizationState = atom<LocalizationType>({
  key: "localization",
  default: localizationEng,
});
