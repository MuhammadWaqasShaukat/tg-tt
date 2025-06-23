import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { localizationState } from "@/store/localizations";
import { LocalizationType } from "@/types/localization.t";
import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

const useLangLocalizationQuery = () => {
  const setLocalization = useSetRecoilState(localizationState);

  const getLocalizations = async ({
    lang,
    langVersion,
  }: {
    lang: string;
    langVersion: number;
  }): Promise<LocalizationType> => {
    const data = await ApiService.get(
      `${endpoints["localizationByLang"]}/${lang}/${langVersion}`,
      {}
    );

    setLocalization(data);

    return data;
  };

  const lang = "en",
    langVersion = 1662965490000;

  return useQuery({
    queryKey: ["localization-query"],
    queryFn: () => getLocalizations({ lang, langVersion }),
    retry: 5,
  });
};
export default useLangLocalizationQuery;
