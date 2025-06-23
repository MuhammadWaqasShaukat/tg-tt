import React, { useEffect } from "react";
import Pill2 from "@/components/UI/Pills/Pill2";
import { PageProps } from "@/types/Page.t";
import { Page } from "@/components/UI/Page";
import { getNextMonth } from "@/utils/getNextMonth";
import { useMonthlyLeaderBoardQuery } from "@/hooks/useLeaderBoardMonthly";
import { AchievementType, AchievementTypeMap } from "@/types/Achievement.t";
import { useRecoilValue } from "recoil";
import { currentAchivementState } from "@/store/achievement";

import LeaderboardPlayer from "@/components/UI/Table/Columns/LeaderboardPlayer";
import Position from "@/components/UI/Table/Columns/Position";
import Score from "@/components/UI/Table/Columns/Score";
import { ColumnConfig, TableProps } from "@/types/Table.t";
import { TableHeaderCell } from "@/components/UI/Table/TableHeaderCell";
import Table from "@/components/UI/Table";
import { localizationState } from "@/store/localizations";
import { userState } from "@/store/User";
import MyPosition from "../Leaderboard/__components/MyPositions";
import { formatCompactNumber } from "@/utils/formatNumber";
import { getPositionedLeaderboard } from "@/utils/leaderboardPositionHelper";

const LeaderboardPool: React.FC<PageProps> = ({ onClose }) => {
  const [leaderboard, setLeaderboard] = React.useState<any>([]);
  const localization = useRecoilValue(localizationState);
  const user = useRecoilValue(userState);

  const achievement = useRecoilValue(currentAchivementState);
  const { data: leaderboardPool, isLoading: loadingleaderboardPoolData } =
    useMonthlyLeaderBoardQuery(
      AchievementTypeMap[achievement?.name as AchievementType]
    );

  const leaderPoolTotalPrize = leaderboardPool?.prizes.reduce(
    (acc, cur) => acc + cur.prize,
    0
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

  useEffect(() => {
    if (leaderboardPool) {
      setLeaderboard(
        getPositionedLeaderboard(
          leaderboardPool.topUsers,
          leaderboardPool.prizes
        )
      );
    }
  }, [leaderboardPool]);

  const leaderBoardTableProps: TableProps = {
    data: leaderboard ?? [],
    columns: leaderboardColumns,
    emptyStateMessage: "No data available",
    loading: loadingleaderboardPoolData,
  };

  return (
    <>
      <Page
        id="leaderboard-pool-view"
        allowNavigatingBack={true}
        viewTitle={
          localization[
            `achievements_screen.type_${achievement?.name as AchievementType}`
          ] + " pool"
        }
        allowSearch={false}
        backBtnClkHandler={onClose}
        Sheet={null}
        className="!gap-6 !pb-28"
      >
        {/* next goal */}
        <div className="flex flex-col justify-start items-center gap-3 bg-[#F7E3DA] w-full p-4 rounded-2xl">
          <h2 className="text-[1.25em] text-[#39444D]">
            Be in the top {leaderboardPool?.prizes.length}
          </h2>
          <p className="text-[1.372em] font-josefin font-bold tracking-tighter text-light-brown text-center leading-normal">
            Until {getNextMonth()}
          </p>
          <div className=" flex flex-row justify-between items-center bg-red w-full px-4 py-2.5 rounded-md">
            <span className=" text-white text-[1em]">Total Rewards</span>
            <Pill2
              accent="grey"
              count={formatCompactNumber(leaderPoolTotalPrize ?? 0)}
              className="text-[1.2em] text-white -ml-2 pl-1 z-[9] !rounded-md py-0.5"
            >
              <div className="w-[5.80vw] aspect-square max-h-[38px] max-w-[38px] mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
        </div>
        <Table {...leaderBoardTableProps} className="grid grid-cols-5" />
      </Page>

      <div className="h-max fixed bottom-0 w-full px-5 py-4  max-w-[580px] flex flex-col justify-end position ">
        {leaderboardPool && user && (
          <MyPosition
            className={"grid grid-cols-5 w-full p-1 shadow-custom-2"}
            position={leaderboardPool?.yourPosition}
            score={leaderboardPool?.yourScore}
            username={user?.username}
          />
        )}
      </div>
    </>
  );
};

export default LeaderboardPool;
