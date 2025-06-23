import { Page } from "@/components/UI/Page";
import Table from "@/components/UI/Table";

import HitListPlayer from "@/components/UI/Table/Columns/HitListPlayer";
import RemoveFromList from "@/components/UI/Table/Columns/Remove";
import RobCell from "@/components/UI/Table/Columns/Rob";
import { TableHeaderCell } from "@/components/UI/Table/TableHeaderCell";
import { useReferralsListQuery } from "@/hooks/useReferrals";
import { PageProps } from "@/types/Page.t";
import { ColumnConfig, TableProps } from "@/types/Table.t";
import { StalkRow, UserRow } from "@/types/User.t";
import React from "react";

const JoinedFriends: React.FC<PageProps> = ({ onClose }) => {
  const { data: joinedFriends, isLoading: joinedFriendLoading } =
    useReferralsListQuery();

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
      Cell: (props: StalkRow) => (
        <RobCell user={props} className="grid place-content-center" />
      ),
    },
  ];

  const joinedFriendsTable: TableProps = {
    data: joinedFriends?.invitedUsers ?? [],
    columns: stalkColumns,
    emptyStateMessage: "No data available",
    loading: joinedFriendLoading,
  };

  return (
    <Page
      id="joined-friend-view"
      allowNavigatingBack={true}
      viewTitle="Friends who joined"
      allowSearch={true}
      backBtnClkHandler={onClose}
      Sheet={null}
      className="!gap-6"
    >
      <Table {...joinedFriendsTable} className="grid grid-cols-6" />
    </Page>
  );
};

export default JoinedFriends;
