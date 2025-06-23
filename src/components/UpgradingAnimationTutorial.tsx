import UserLeague from "@/components/UI/Cards/LeagueCard";
import { CurrentViewState } from "@/store/currentView";
import { infoViewState } from "@/store/InfoView";
import { userState } from "@/store/User";
import { LeagueNames } from "@/types/User.t";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Divider from "./UI/Divider";
import { Button } from "./UI/Buttons";
import CloseButton from "./UI/Buttons/CloseButton";
import { wantedLeagueState } from "@/store/wantedLeague";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { leagueState } from "@/store/userLeagues";

const UpgradingAnimationTutorial: React.FC<{
  newLeagueLevel: {
    league: LeagueNames;
    index: number;
    leagueId: number;
  } | null;
  username: string;
}> = ({ newLeagueLevel, username }) => {
  const [hideSection, setHideSection] = useState(false);
  const user = useRecoilValue(userState);
  const wantedLeague = useRecoilValue(wantedLeagueState);
  const [, setInfoView] = useRecoilState(infoViewState);
  const [, setView] = useRecoilState(CurrentViewState);

  const leagues = useRecoilValue(leagueState);
  const currentLeague = getLeagueLevel(leagues!, wantedLeague!);

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const [sheetHeight, setSheetHeight] = useState(0);

  useLayoutEffect(() => {
    if (sheetRef.current) {
      setSheetHeight(sheetRef.current.offsetHeight + 20);
    }
  }, [hideSection]);

  const handleClose = () => {
    setInfoView(false);
    setView(null);
  };

  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setHideSection(true);
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    if (refOne.current && refTwo.current && refThree.current) {
      let refOneHeight = refOne.current.getBoundingClientRect().height + 40;
      refThree.current.style.transform = `translateY(${refOneHeight}px)`;
      refOne.current.style.marginBottom =
        refThree.current.getBoundingClientRect().height + 80 + "px";
    }
  }, []);

  useEffect(() => {
    if (hideSection && refTwo.current) {
      refThree.current!.classList.remove("absolute");
      refThree.current!.style.transition = "transform 0.2s ease-out";
      refThree.current!.style.transform = "translateY(0)";
      refThree.current!.style.marginBlock = "60px";
    }
  }, [hideSection]);

  return (
    <>
      <div
       data-upgrade-type="paid"
        data-league-level={hideSection ? "" : newLeagueLevel?.league}
        className={`animate-bgColorChangeGreen  bg bg-green flex flex-col px-[5.8%] items-start w-full h-dvh scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto ${
          hideSection ? "justify-start" : "justify-center"
        }`}
        style={{ paddingBottom: sheetHeight }}
      >
        {hideSection && (
          <div className="flex flex-row items-start justify-between w-full mt-[5.8vh] text-left">
            <h1 className=" text-[2.25em] capitalize ">
              Successful League Upgrade
            </h1>
            <CloseButton handleClose={handleClose} />
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`flex flex-col items-center justify-center w-full h-full opacity-1 relative`}
          >
            {!hideSection && (
              <div
                id="congrats"
                className=" w-full h-full absolute top-0 left-0 congrats-screen-bg"
              ></div>
            )}

            <div ref={refThree} className="absolute top-0 ">
              <UserLeague
                league={currentLeague?.league as LeagueNames}
                leagueId={currentLeague?.leagueId as number}
                allowDetails={false}
                className="w-max "
              />

              {hideSection && (
                <p className=" text-[1.25em] text-center font-medium font-josefin mt-3 text-[#5A1319B2]">
                  Has been successfully purchased
                </p>
              )}
            </div>
            {hideSection && (
              <div className="congrats-screen-bg h-1/2 w-[110%] absolute pointer-events-none"></div>
            )}
            <div
              ref={refOne}
              className={`flex flex-col items-center justify-center gap-8  ${
                hideSection ? "hidden" : ""
              }`}
            >
              <h1 className="text-[2.25em] text-center w-2/3 capitalize">
                Great job, <br /> {username}!
              </h1>
              <p className="text-center font-josefin text-[1.375em] font-bold">
                You’ve upgraded your League successfully!
              </p>
            </div>
            <div
              ref={refTwo}
              className=" flex flex-col items-center justify-center w-full"
            >
              {!hideSection ? (
                <div className="flex flex-col items-center justify-center  gap-8 text-center">
                  <h2 className=" text-[2.25em]">
                    Let’s go Steal some LOOT now!
                  </h2>
                  <span className="text-[1.375em] font-bold font-josefin ">
                    Let’s see what those thieves have in their pockets :)
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          {hideSection && (
            <div
              className={`content-slide space-y-6 transition-opacity duration-75 w-full  ${
                hideSection ? "opacity-100" : "opacity-0"
              }`}
            >
              <Divider />

              <div className="flex flex-col items-start justify-start w-full gap-9 ">
                <p className="text-[1.375em] tracking-tighter font-josefin text-light-brown">
                  Great job,{" "}
                  <span className="font-bold uppercase ">
                    {user?.username}!
                  </span>
                  <br /> Your new League allows you to:
                </p>
                <div className="flex flex-col items-start justify-start w-full gap-2">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="size-5 bg bg-icon-info"></div>
                    <p className="text-[1em] text-light-brown">Rob more!</p>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-2 ">
                    <div className="size-5 bg bg-icon-info"></div>
                    <p className="text-[1em]  text-light-brown">
                      Withdraw $LOOT! (check settings Menu)
                    </p>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-2 ">
                    <div className="size-5 bg bg-icon-info"></div>
                    <p className="text-[1em]  text-light-brown">
                      Productivity Items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {hideSection && (
        <div
          ref={sheetRef}
          id="sheet"
          className="z-50 fixed bg-[#FFFBF9] w-full px-6 py-9 rounded-t-[32px] flex flex-col justify-center items-center gap-6 mt-auto bottom-0 left-0"
        >
          <Button
            onClick={() => {
              handleClose();
              setView("hit-list");
            }}
            acent="white"
            className="flex  border border-[#CEACA7] flex-row items-center justify-center w-full gap-[5px] px-4 py-3 rounded-2xl text-[1.25em]"
          >
            <span>Or start robbing!</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default UpgradingAnimationTutorial;
