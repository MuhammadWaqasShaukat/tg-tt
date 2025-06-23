import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Tabs } from "@/components/UI";
import { Button } from "@/components/UI/Buttons";
import { robVictimState } from "@/store/choseVictim";
import Rob from "../Rob";
import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import { CurrentModalState } from "@/store/currentModal";
import { useWantedQuery } from "@/hooks/useWanted";
import { useListQuery } from "@/hooks/useList";
import AllThievesPlayer from "@/components/UI/Table/Columns/AllThievesPlayer";
import StalkOrRemove from "@/components/UI/Table/Columns/StalkOrRemove";
import RobCell from "@/components/UI/Table/Columns/Rob";
import HitListPlayer from "@/components/UI/Table/Columns/HitListPlayer";
import { StalkRow, UserRow } from "@/types/User.t";
import RemoveFromList from "@/components/UI/Table/Columns/Remove";
import { serachQueryState } from "@/store/searchQuery";
import { localizationState } from "@/store/localizations";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { ColumnConfig, TableProps } from "@/types/Table.t";
import { TableHeaderCell } from "@/components/UI/Table/TableHeaderCell";
import Table from "@/components/UI/Table";
// import { useState } from "react";
import { ApiService } from "@/service";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { serachingState } from "@/store/searching";
import { CurrentViewState } from "@/store/currentView";
import { userState } from "@/store/User";

const fetchData = async (searchQuery: string) => {
  return await ApiService.get(
    `${endpoints["userList"]}?search=${searchQuery}`,
    {}
  );
};

const HitList: React.FC<PageProps> = ({ onClose }) => {
  const [robVictim, setRobVictim] = useRecoilState(robVictimState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const [searchQuery, setSearchQuery] = useRecoilState(serachQueryState);
  const localization = useRecoilValue(localizationState);
  const inProgressRobbery = useRecoilValue(inProgressRobberyState);
  const [activeTab, setActiveTab] = useState(1);
  const [, setView] = useRecoilState(CurrentViewState);
  const [, setSearching] = useRecoilState(serachingState);

  const user = useRecoilValue(userState);

  const tabChange = () => {
    setSearchQuery("");
    setSearching(false);
  };

  const { data: stalkList, isLoading: loadingWanted } = useWantedQuery();
  const { data: allThieves, isLoading: loadingAllThieves } = useListQuery();

  const { data: serachResults, isLoading: loadingSerachResults } = useQuery({
    queryKey: ["search-list-query", searchQuery],
    queryFn: () => {
      if (activeTab !== 1) return;
      else return fetchData(searchQuery as string);
    },
  });

  // Table configuration

  const hitlistColumns: ColumnConfig[] = [
    {
      Header: <TableHeaderCell className="col-span-4" headerTitle="player" />,
      Cell: (props: UserRow) => (
        <AllThievesPlayer user={props} className="col-span-4 " />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="stalk" />,
      Cell: (props: UserRow) => (
        <StalkOrRemove user={props} className="grid place-content-center" />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="rob" />,
      Cell: (props: UserRow, rowIndex?: number) => (
        <RobCell user={props} rowIndex={rowIndex} className="mx-auto" />
      ),
    },
  ];
  const stalkColumns: ColumnConfig[] = [
    {
      Header: <TableHeaderCell className="col-span-4" headerTitle="player" />,
      Cell: (props: StalkRow) => (
        <HitListPlayer user={props} className="col-span-4 " />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="stalk" />,
      Cell: (props: UserRow) => (
        <RemoveFromList user={props} className="grid place-content-center" />
      ),
    },
    {
      Header: <TableHeaderCell className="text-center" headerTitle="rob" />,
      Cell: (props: StalkRow) => <RobCell user={props} className="mx-auto" />,
    },
  ];

  const hitListTableProps: TableProps = {
    data: searchQuery ? serachResults : allThieves,
    columns: hitlistColumns,
    emptyStateMessage: "No data available",
    loading: searchQuery ? loadingSerachResults : loadingAllThieves,
  };
  const stalkListTableProps: TableProps = {
    data: stalkList ?? [],
    columns: stalkColumns,
    emptyStateMessage: "No data available",
    loading: loadingWanted,
  };

  // Tabs Configuration
  const tabData = [
    {
      label: localization["home_screen.stalk_list"],
      content: <Table {...stalkListTableProps} className="grid grid-cols-6" />,
    },
    {
      label: "All thieves",
      content: <Table {...hitListTableProps} className="grid grid-cols-6" />,
    },
  ];

  useEffect(() => {
    return () => {
      setSearchQuery("");
      setSearching(false);
    };
  }, []);

  return (
    <>
      {!robVictim && !inProgressRobbery && (
        <Page
          id="hitlist-view"
          allowNavigatingBack={true}
          viewTitle="Hit List"
          allowSearch
          backBtnClkHandler={onClose}
          className=""
          Sheet={null}
          scrollable={false}
        >
          <div className="flex flex-col items-start justify-start w-full gap-2">
            {searchQuery === "" && (
              <Button
                onClick={() => setCurrentModal("invite-and-earn")}
                acent="ghost"
                className=" border border-[#CEACA7] flex flex-row justify-center items-center gap-3 text-[1em]"
              >
                <div className="w-6 h-6 bg bg-icon-users"></div>
                <span className="capitalize ">invite your friends</span>
              </Button>
            )}
            <Tabs
              tabs={tabData}
              defaultActiveIndex={1}
              activeTab={setActiveTab}
              onTabChange={tabChange}
            />
          </div>
        </Page>
      )}
      {(robVictim || inProgressRobbery) && (
        <div className="flex flex-col w-full h-full ">
          <Rob
            onClose={() => {
              if (user?.tutorial) {
                setView(null);
              } else {
                setView("hit-list");
              }
              setRobVictim(null);
            }}
          />
        </div>
      )}
    </>
  );
};

export default HitList;
