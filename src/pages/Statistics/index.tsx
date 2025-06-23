import React from "react";
import { PageProps } from "@/types/Page.t";
import RatingsInline from "@/components/UI/Ratings/RatingsInline";
import { Page } from "@/components/UI/Page";
import Pill2 from "@/components/UI/Pills/Pill2";
import StatisticsSheet from "@/components/UI/Sheets/StatisticsSheet";
import { useRecoilState } from "recoil";
import { thiefComaprisonState } from "@/store/thiefComaprison";
import { leagueState } from "@/store/userLeagues";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { LeagueAssests } from "@/constants/leagues";
import { LeagueNames } from "@/types/User.t";

const Statistics: React.FC<PageProps> = ({ onClose }) => {
  const [compareThief] = useRecoilState(thiefComaprisonState);
  const [userLeagues] = useRecoilState(leagueState);
  const _userLeague = getLeagueLevel(
    userLeagues as LeagueLevelType,
    compareThief?.userLeagueId as number
  );

  return (
    <>
      <Page
        id="statistics-view"
        allowNavigatingBack={true}
        viewTitle="Statistics"
        allowSearch={false}
        backBtnClkHandler={onClose}
        className="gap-6 "
        Sheet={{ StaticSheet: <StatisticsSheet /> }}
      >
        <div className="w-full space-y-9">
          <div className="w-full h-[30.13vh] min-h-[270px] flex flex-col p-4 relative items-center bg-white rounded-3xl modal-radial-gradient mx-auto overflow-hidden">
            <RatingsInline
              className="bg-blue"
              leagueId={compareThief?.userLeagueId as number}
            />
            <div className="blur-3xl aspect-square bg-blue/55 absolute top-[50%] -translate-y-[50%] rounded-full"></div>

            <img
              src={LeagueAssests[_userLeague?.league as LeagueNames].casual}
              alt=""
              className="z-10 my-auto object-contain w-full h-full max-w-full max-h-full"
            />
          </div>
          <h2 className="mx-4 text-4xl text-center">
            {compareThief?.username} vs. You
          </h2>
        </div>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <div className="w-full space-y-4 ">
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">Lost</p>

            <Pill2
              accent="red"
              count={compareThief!.goldStolenFromMe.toLocaleString()}
              className="text-[1em] text-white -ml-2 pl-1 z-[9] py-0.5 !rounded-md"
            >
              <div className=" w-[5.80vw] aspect-square max-h-6 max-w-6 mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">Stolen</p>
            <Pill2
              accent="grey"
              count={compareThief!.goldStolenByMe.toLocaleString()}
              className="text-[1em] text-white -ml-2 pl-1 z-[9] py-0.5 !rounded-md"
            >
              <div className=" w-[5.80vw] aspect-square max-h-6 max-w-6 mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">Get Robbed</p>
            <p className="text-[1em] text-red">
              {compareThief?.countRobbedMe} times
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">You Robbed</p>
            <p className="text-[1em] text-dark-green">
              {compareThief?.countRobbedByMe} times
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">Their Time</p>
            <p className="text-[1em] text-red">
              {compareThief?.timeRobbedFromMe}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-[1em] text-light-brown">Your Time</p>
            <p className="text-[1em] text-dark-green">
              {compareThief?.timeRobbedByMe}
            </p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Statistics;
