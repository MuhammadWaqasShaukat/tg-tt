import { CurrentModalState } from "@/store/currentModal";
import { infoState } from "@/store/info";
import { localizationState } from "@/store/localizations";
import { LocalizationType } from "@/types/localization.t";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function useInfoModal() {
  const localization = useRecoilValue(localizationState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const setInfo = useSetRecoilState(infoState);

  const openInfoModal = (localizationKey: keyof LocalizationType) => {
    setInfo(localization[localizationKey]);
    setCurrentModal("info");
  };

  return { openInfoModal };
}
