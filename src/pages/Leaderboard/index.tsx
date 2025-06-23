import React, { useEffect } from "react";
import Pill2 from "@/components/UI/Pills/Pill2";
import { PageProps } from "@/types/Page.t";
import { Page } from "@/components/UI/Page";
import { Button } from "@/components/UI/Buttons";
import { CurrentViewState } from "@/store/currentView";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentAchivementState } from "@/store/achievement";
import { useLeaderBoardQuery } from "@/hooks/useLeaderBoard";
import { AchievementType, AchievementTypeMap } from "@/types/Achievement.t";
import { userState } from "@/store/User";

import LeaderboardPlayer from "@/components/UI/Table/Columns/LeaderboardPlayer";
import Position from "@/components/UI/Table/Columns/Position";
import Score from "@/components/UI/Table/Columns/Score";
import { ColumnConfig, TableProps } from "@/types/Table.t";
import { TableHeaderCell } from "@/components/UI/Table/TableHeaderCell";
import Table from "@/components/UI/Table";
import { localizationState } from "@/store/localizations";
import { getFormatedText } from "@/utils/getFormatedText";
import MyPosition from "./__components/MyPositions";
import { useInfoModal } from "@/hooks/useInfoModal";
import { getPositionedLeaderboard } from "@/utils/leaderboardPositionHelper";

const Leaderboard: React.FC<PageProps> = ({ onClose }) => {
  const setView = useSetRecoilState(CurrentViewState);
  const achievement = useRecoilValue(currentAchivementState);
  const [leaderboard, setLeaderboard] = React.useState<any>([]);
  const user = useRecoilValue(userState);
  const localization = useRecoilValue(localizationState);

  const { openInfoModal } = useInfoModal();

  const handleMoreInfoClk = () => {
    setView("leaderboard-pool");
  };

  const { data: leaderboardData, isLoading: loadingLeaderboardData } =
    useLeaderBoardQuery(
      AchievementTypeMap[achievement?.name as AchievementType]
    );

  const leaderboardColumns: ColumnConfig[] = [
    {
      Header: <TableHeaderCell className="col-span-3" headerTitle="player" />,
      Cell: (props: any) => (
        <LeaderboardPlayer user={props} className="col-span-3 " />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="#" />,
      accessor: "position",
      Cell: (position: number) => (
        <Position position={position} className="grid place-content-center" />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="score" />,
      accessor: "score",
      Cell: (score: number) => (
        <Score score={score} className="grid place-content-center" />
      ),
    },
  ];

  const leaderBoardTableProps: TableProps = {
    data: leaderboard ?? [],
    columns: leaderboardColumns,
    emptyStateMessage: "No data available",
    loading: loadingLeaderboardData,
  };

  useEffect(() => {
    if (leaderboardData) {
      setLeaderboard(getPositionedLeaderboard(leaderboardData.topUsers));
    }
  }, [leaderboardData]);

  return (
    <>
      <Page
        id="leader-board-view"
        allowNavigatingBack={true}
        viewTitle={
          localization[
            `achievements_screen.type_${achievement?.name as AchievementType}`
          ]
        }
        className="!gap-6 !pb-28"
        allowSearch={false}
        Sheet={null}
        backBtnClkHandler={onClose}
      >
        <div className="flex flex-col justify-start items-center gap-3 bg-[#F7E3DA] w-full p-4 rounded-2xl">
          <h2 className="text-[1.25em] text-[#39444D]">Your Next Goal</h2>
          <p className="text-[1.372em] font-josefin font-bold tracking-tighter text-light-brown text-center">
            {getFormatedText(
              localization[
                `achievements_screen.type_${
                  achievement?.name as AchievementType
                }_description`
              ],
              achievement!.requiredAmount.toLocaleString()
            )}
          </p>
          <div className=" flex flex-row justify-between items-center bg-[#FFF4DB] w-full px-4 py-2.5 rounded-md">
            <span className=" text-light-brown text-[1em]">Reward</span>
            <Pill2
              accent="grey"
              count={"50"}
              className="text-[1em] text-white -ml-2 pl-1 z-[9] !rounded-md py-0.5"
            >
              <div className="w-[5.80vw] aspect-square max-h-6 max-w-6 mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
        </div>
        {achievement?.hasPrizePoolForCurrentMonth && (
          <div className="flex flex-row items-center justify-between w-full bg-[#FFE4A4] px-2 py-1.5 rounded-xl">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div
                className="size-5 bg bg-icon-info aspect-square"
                onClick={() =>
                  openInfoModal("achievements_lb.info_tip_lb_prizepool")
                }
              ></div>
              <p className="text-[1em]  text-light-brown capitalize">
                prize pool <span className="uppercase text-brown">Open</span>
              </p>
            </div>
            <Button
              onClick={handleMoreInfoClk}
              acent="ghost"
              className="text-[.875em] flex flex-row justify-center items-center gap-2 border-2 rounded-[10px]  border-[#CEACA7] px-4 py-1 w-max"
            >
              <span className=" whitespace-nowrap"> More info</span>
              <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
            </Button>
          </div>
        )}

        <Table {...leaderBoardTableProps} className="grid grid-cols-5" />
      </Page>
      <div className="h-max fixed bottom-0 w-full px-5 py-4  max-w-[580px] flex flex-col justify-end position ">
        {leaderboardData && user && (
          <MyPosition
            className={"grid grid-cols-5 w-full p-1 shadow-custom-2"}
            position={leaderboardData?.yourPosition}
            score={leaderboardData?.yourScore}
            username={user?.username}
          />
        )}
      </div>
    </>
  );
};

export default Leaderboard;
