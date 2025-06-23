import { Button } from "@/components/UI/Buttons";
import Divider from "@/components/UI/Divider";
import Pill2 from "@/components/UI/Pills/Pill2";
import ThiefCarousel from "@/components/UI/Swiper";
import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import React, { useEffect, useState } from "react";
import LeagueLevel from "@/components/UI/LeagueLevels/LeagueLevel";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { leagueState } from "@/store/userLeagues";
import { userState } from "@/store/User";
import { updateSwiperSlides } from "@/utils/updateSwiperSlides";
import { SwiperSlides } from "@/constants/SwiperSlides";
import { SlideItemProp } from "@/types/SwiperSlides.t";

import { useMemo } from "react";
import { CurrentViewState } from "@/store/currentView";
const LeagueInfo: React.FC<PageProps> = ({ onClose, pageTitle }) => {
  const user = useRecoilValue(userState);
  const setView = useSetRecoilState(CurrentViewState);
  const updatedSwiperSlides = useMemo(() => {
    return updateSwiperSlides(SwiperSlides, user?.leagueId as number);
  }, [SwiperSlides, user?.leagueId]);

  const [activeLeague, setActiveLeague] = useState<SlideItemProp>(
    updatedSwiperSlides[0]
  );
  const userLeagues = useRecoilValue(leagueState);

  const handleUpgradeLeagueLevel = () => {
    setView("upgrade-league-faster-selection");
  };

  const [leagueAggregation, setLeagueAggregation] = useState<{
    playersInLeague: number;
    circulatingGold: number;
  }>({
    playersInLeague: 0,
    circulatingGold: 0,
  });

  useEffect(() => {
    let players = 0,
      gold = 0;
    if (userLeagues && activeLeague) {
      userLeagues[activeLeague.league].map((level) => {
        players += level.numberOfPlayers;
        gold += level.circulatingGold;
      });
    }
    setLeagueAggregation({
      playersInLeague: players,
      circulatingGold: gold,
    });
  }, [activeLeague, userLeagues]);

  return (
    <Page
      id="league-info-view"
      allowNavigatingBack={true}
      viewTitle={pageTitle ?? "League Info"}
      allowSearch={false}
      backBtnClkHandler={onClose}
      className="!gap-0"
      Sheet={null}
      scrollable
    >
      <div className="w-full space-y-3">
        <ThiefCarousel
          slides={updatedSwiperSlides}
          setActiveLeague={setActiveLeague}
        />
        <div className="bg-[#F7E3DA] w-full p-4 rounded-2xl flex flex-col justify-center items-center gap-3">
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown text-left">
              Players in League
            </p>
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="px-2 ml-auto bg-white rounded-xl ">
                <span className="text-[1em] text-light-brown ">
                  {leagueAggregation.playersInLeague.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-between w-full ">
            <p className="text-[1em] text-light-brown text-left">
              $LOOT in Circulation
            </p>
            <Pill2
              accent="grey"
              count={leagueAggregation.circulatingGold.toLocaleString()}
              className="text-[1em] text-white -ml-4 pl-2 py-0.5  z-[9] !rounded-md "
            >
              <div className="w-[6.76vw] aspect-square max-h-6 max-w-7 ml-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
        </div>

        <p className="text-[1em] text-left font-josefin text-light-brown font-medium tracking-tighter mb-1">
          Once you fill in your Vault - you will have the option to upgrade it
          to the next legue.
        </p>
        <Divider />

        <p className="text-[1em] text-left font-josefin text-light-brown font-medium tracking-tighter mt-1">
          When you upgrade your League - you will be able to store more $LOOT in
          your Vault and to rob more in each attack!
        </p>

        <LeagueLevel league={activeLeague.league} />
      </div>
      <Button
        onClick={handleUpgradeLeagueLevel}
        acent="yellow"
        className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl mb-6 disabled:bg-yellow/50 disabled:hover:bg-yellow/50"
      >
        <span>Upgrade now</span>
      </Button>
    </Page>
  );
};

export default LeagueInfo;
