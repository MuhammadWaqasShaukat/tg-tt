import { UserRow } from "@/types/User.t";
import React from "react";
import IconButton from "../../Buttons/IconButton";
import { useRemoveFromList } from "@/hooks/useRemoveFromList";
import { CellProps } from "@/types/Table.t";

const RemoveFromList: React.FC<{
  user: UserRow;
  className?: string;
  cellProps?: CellProps;
}> = ({ user, className }) => {
  const { mutate: removeUser } = useRemoveFromList();
  return (
    <div className={`${className}`}>
      <IconButton
        acent="brown"
        className="!rounded-lg p-0 min-w-[42px] min-h-[42px]"
        onClick={() => removeUser(user.userRowId)}
      >
        <div className="w-4 h-4 bg bg-icon-cross"></div>
      </IconButton>
    </div>
  );
};

export default RemoveFromList;
