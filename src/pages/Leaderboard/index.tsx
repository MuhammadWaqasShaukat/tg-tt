import React from "react";
import Pill2 from "@/components/UI/Pills/Pill2";
import { PageProps } from "@/types/Page.t";
import { View } from "@/components/UI/View";
import { Button } from "@/components/UI/Buttons";
import { List } from "@/components/UI";
import LeaderboardListHeader from "@/components/UI/Lists/ListHeaders/LeaderboardListHeader";
import LeaderBoardRow from "@/components/UI/Lists/Rows/LeaderBoard";
import { CurrentViewState } from "@/store/currentView";
import { useRecoilState } from "recoil";

const Leaderboard: React.FC<PageProps> = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const handleMoreInfoClk = () => {
    setView("leaderboard-pool");
  };

  return (
    <View viewTitle="sneaky" allowSearch={false}>
      {/* next goal */}
      <div className="flex flex-col justify-start items-center gap-3 bg-[#F7E3DA] w-full p-4 rounded-2xl">
        <h2 className="text-[1.8em] text-[#39444D]">Your Next Goal</h2>
        <p className="text-[22px] font-josefin font-bold tracking-tighter text-light-brown text-center">
          Complete 50 robberies in total
        </p>
        <div className=" flex flex-row justify-between items-center bg-[#FFF4DB] w-full px-4 py-2.5 rounded-md">
          <span className=" text-light-brown">Reward</span>
          <Pill2
            accent="blue"
            count={"50"}
            className="text-[1.2em] text-white -ml-2 pl-1 z-[9] !rounded-lg"
          >
            <div className=" h-[2.68vh] w-[5.80vw] mx-auto flex flex-col justify-center items-center z-10 relative">
              <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
            </div>
          </Pill2>
        </div>
      </div>
      {/* Price Pool Info */}
      <div className="flex flex-row items-center justify-between w-full bg-[#FFE4A4] px-2 py-1.5 rounded-xl">
        <div className="flex flex-row items-center justify-start gap-2 ">
          <div className="w-5 h-5 bg bg-icon-info aspect-square"></div>
          <p className="text-base  text-light-brown capitalize">
            prize pool <span className=" text-brown uppercase">Open</span>
          </p>
        </div>
        <Button
          onClick={handleMoreInfoClk}
          acent="ghost"
          className="text-sm flex flex-row justify-center items-center gap-2 border-2 border-[#CEACA7] p-3 w-max"
        >
          <span className=" whitespace-nowrap"> More info</span>
          <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
        </Button>
      </div>

      <List>
        <LeaderboardListHeader />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((no) => (
          <LeaderBoardRow
            name="Simeonichki"
            position={no}
            score={9000}
            showTokens={false}
            key={no}
          />
        ))}
      </List>
    </View>
  );
};

export default Leaderboard;
