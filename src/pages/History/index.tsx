import { Tabs } from "@/components/UI";
import { Page } from "@/components/UI/Page";

import HistoryPlayer from "@/components/UI/Table/Columns/HistoryPlayer";
import RobCell from "@/components/UI/Table/Columns/Rob";
import Stolen from "@/components/UI/Table/Columns/Stolen";
import { Tab } from "@/components/UI/Tabs";
import { useHistoryQuery } from "@/hooks/useHistory";
import { robVictimState } from "@/store/choseVictim";
import { userState } from "@/store/User";
import { HistoryRowType } from "@/types/History.t";
import { useRecoilState, useRecoilValue } from "recoil";
import Rob from "../Rob";
import { getHistoryByAction } from "@/utils/getHistoryByAction";
import { localizationState } from "@/store/localizations";
import { ColumnConfig, TableProps } from "@/types/Table.t";
import { TableHeaderCell } from "@/components/UI/Table/TableHeaderCell";
import Table from "@/components/UI/Table";
import { PageProps } from "@/types/Page.t";
import { useEffect } from "react";
import { ROB_NOTIFICATION } from "@/constants/vars";
import { notificationLocalStorageHelper } from "@/utils/dissMissRobNotification";
import { RobNotifiedType } from "@/types/App.t";
import { CurrentViewState } from "@/store/currentView";

export interface HistoryProps extends PageProps {
  tabsActiveIndex: number;
}

const History: React.FC<HistoryProps> = ({ onClose, tabsActiveIndex = 0 }) => {
  const { data: history, isLoading: loadingHistory } = useHistoryQuery();
  const [robVictim, setRobVictim] = useRecoilState(robVictimState);
  const localization = useRecoilValue(localizationState);
  const [, setView] = useRecoilState(CurrentViewState);

  const user = useRecoilValue(userState);
  const youRobbedColumns: ColumnConfig[] = [
    {
      Header: (
        <TableHeaderCell
          className="col-span-4"
          headerTitle={localization["history_screen.table_player_column"]}
        />
      ),
      Cell: (props: HistoryRowType) => (
        <HistoryPlayer user={props} className="col-span-4" />
      ),
    },
    {
      Header: (
        <TableHeaderCell
          className="text-center col-span-2"
          headerTitle={localization["history_screen.table_stolen_column"]}
        />
      ),
      accessor: "stollenGold",
      Cell: (stollenGold: number) => (
        <Stolen
          accent="grey"
          stollenGold={stollenGold}
          className="col-span-2 mx-auto"
        />
      ),
    },
    {
      Header: (
        <TableHeaderCell
          className="text-center"
          headerTitle={localization["history_screen.table_rob_column"]}
        />
      ),
      Cell: (props: any) => (
        <RobCell user={props} className="grid place-content-center" />
      ),
    },
  ];

  const beignRobbedColumns: ColumnConfig[] = [
    {
      Header: (
        <TableHeaderCell
          className="col-span-4"
          headerTitle={localization["history_screen.table_player_column"]}
        />
      ),
      Cell: (props: HistoryRowType) => (
        <HistoryPlayer user={props} className="col-span-4" />
      ),
    },
    {
      Header: (
        <TableHeaderCell
          className="col-span-2 text-center"
          headerTitle={localization["history_screen.table_stolen_column"]}
        />
      ),
      accessor: "stollenGold",
      Cell: (stollenGold: number) => (
        <Stolen
          accent="red"
          stollenGold={stollenGold}
          className="mx-auto col-span-2"
        />
      ),
    },
    {
      Header: (
        <TableHeaderCell
          className="text-center"
          headerTitle={localization["history_screen.table_rob_column"]}
        />
      ),
      Cell: (props: any) => (
        <RobCell user={props} className="grid place-content-center" />
      ),
    },
  ];

  const youRobbedTableProps: TableProps = {
    data: getHistoryByAction("Attacker", history) ?? [],
    columns: youRobbedColumns,
    emptyStateMessage: "No data available",
    loading: loadingHistory,
  };

  const beignRobbedTableProps: TableProps = {
    data: getHistoryByAction("Victim", history) ?? [],
    columns: beignRobbedColumns,
    emptyStateMessage: "No data available",
    loading: loadingHistory,
  };

  const tabData: Tab[] = [
    {
      label: localization["history_screen.tab_robbed"],
      content: (
        <Table {...youRobbedTableProps} className="grid grid-cols-7 !gap-1" />
      ),
    },
    {
      badge: { count: user?.notSeenRobberiesCount ?? 0 },
      label: localization["history_screen.tab_been_robbed"],
      content: (
        <Table {...beignRobbedTableProps} className="grid grid-cols-7 !gap-1" />
      ),
    },
  ];

  useEffect(() => {
    const robNotification: RobNotifiedType | null =
      notificationLocalStorageHelper(ROB_NOTIFICATION);
    if (robNotification) {
      const notification: RobNotifiedType = {
        count: 0,
        notified: false,
      };
      localStorage.setItem(ROB_NOTIFICATION, JSON.stringify(notification));
    }
  }, []);

  return (
    <>
      {!robVictim && (
        <Page
          id="history-view"
          allowNavigatingBack={true}
          viewTitle={localization["history_screen.title"]}
          allowSearch
          backBtnClkHandler={onClose}
          Sheet={null}
        >
          <Tabs tabs={tabData} defaultActiveIndex={tabsActiveIndex} />
        </Page>
      )}
      {robVictim && (
        <div className="flex flex-col w-full h-full ">
          <Rob
            onClose={() => {
              setView("history");
              setRobVictim(null);
            }}
          />
        </div>
      )}
    </>
  );
};

export default History;
