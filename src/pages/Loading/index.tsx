import Loader from "@/components/UI/Loader";
import { Page } from "@/components/UI/Page";
import useLangLocalizationQuery from "@/hooks/useLangLocalization";
import { useLeaguesQuery } from "@/hooks/useLeagues";
import { useLeagueUpgradeTableQuery } from "@/hooks/useLeagueUpgradeTable";
import { useShopQuery } from "@/hooks/useShop";
import { useStashPerHourDistributionQuery } from "@/hooks/useStashPerHourDistribution";
import useSystemConfigQuery from "@/hooks/useSysConfig";
import { useUserQuery } from "@/hooks/useUser";
import { loadingScreenState } from "@/store/loadingScreen";
import { myLeagueState } from "@/store/myLeague";
import { leagueState } from "@/store/userLeagues";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Loading = () => {
  const setLoadingScreen = useSetRecoilState(loadingScreenState);
  const userLeagues = useRecoilValue(leagueState);
  const setMyLeague = useSetRecoilState(myLeagueState);
  const { data: leaguesData } = useLeaguesQuery();
  const { data: configData } = useSystemConfigQuery();
  const { data: langData } = useLangLocalizationQuery();
  const { data: userData } = useUserQuery();
  const { data: shopData } = useShopQuery();
  const { data: stashPerHour } = useStashPerHourDistributionQuery();
  const { data: leagueUpgradeTable } = useLeagueUpgradeTableQuery();

  const totalRequests = 7;
  const [progress, setProgress] = useState(0);

  //Tg Implementation

  // Track progress as queries update
  useEffect(() => {
    const completedRequests = [
      shopData,
      leaguesData,
      configData,
      langData,
      userData,
      stashPerHour,
      leagueUpgradeTable,
    ].filter(Boolean).length;
    const newProgress = Math.floor((completedRequests / totalRequests) * 100);
    setProgress(newProgress);

    if (userData) {
      let temp: { league: LeagueNames; index: number } | null = null;

      if (userLeagues) {
        temp = getLeagueLevel(userLeagues, userData.leagueId);
      }

      if (temp) {
        setMyLeague(temp);
      }
    }
  }, [
    shopData,
    leaguesData,
    configData,
    langData,
    userData,
    stashPerHour,
    leagueUpgradeTable,
  ]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setLoadingScreen(false), 500);
    }
  }, [progress]);

  return (
    <Page
      id="loading-view"
      allowNavigatingBack={false}
      allowSearch={false}
      Sheet={null}
      className="!gap-0 bg bg-loading-screen py-10"
      scrollable
      hasPadding={false}
    >
      <div
        className={`flex flex-col justify-between  h-[85dvh] w-full  gap-9 px-[5.8%]`}
      >
        <div>
          <h1 className=" text-[3.75em] w-full text-center text-outline">
            Token <br /> thieves
          </h1>
        </div>
        <div className="w-full text-center ">
          <span className=" text-center font-josefin text-[1.25em] uppercase font-bold">
            Loading...
          </span>
          <Loader progress={progress} />
        </div>
      </div>
    </Page>
  );
};

export default Loading;
