import React from "react";
import Pill2 from "@/components/UI/Pills/Pill2";
import { PageProps } from "@/types/Page.t";
import { View } from "@/components/UI/View";
import { List } from "@/components/UI";
import LeaderboardListHeader from "@/components/UI/Lists/ListHeaders/LeaderboardListHeader";
import LeaderBoardRow from "@/components/UI/Lists/Rows/LeaderBoard";

const LeaderboardPool: React.FC<PageProps> = ({ onClose }) => {
  return (
    <View
      viewTitle="Sneaky Pool"
      allowSearch={false}
      backBtnClkHandler={onClose}
    >
      {/* next goal */}
      <div className="flex flex-col justify-start items-center gap-3 bg-[#F7E3DA] w-full p-4 rounded-2xl">
        <h2 className="text-[1.8em] text-[#39444D]">Be in the top 5</h2>
        <p className="text-[22px] font-josefin font-bold tracking-tighter text-light-brown text-center">
          until 1st August 2024
        </p>
        <div className=" flex flex-row justify-between items-center bg-red w-full px-4 py-2.5 rounded-md">
          <span className=" text-white">Total Rewards</span>
          <Pill2
            accent="blue"
            count={"12,000"}
            className="text-[1.2em] text-white -ml-2 pl-1 z-[9] !rounded-lg"
          >
            <div className=" h-[2.68vh] w-[5.80vw] mx-auto flex flex-col justify-center items-center z-10 relative">
              <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
            </div>
          </Pill2>
        </div>
      </div>

      <List>
        <LeaderboardListHeader />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((no) => (
          <LeaderBoardRow
            name="Simeonichki"
            position={no}
            score={9000}
            showTokens={true}
            key={no}
          />
        ))}
      </List>
    </View>
  );
};

export default LeaderboardPool;
