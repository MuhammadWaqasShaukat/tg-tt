import { UserRow } from "@/types/User.t";
import React from "react";
import IconButton from "../../Buttons/IconButton";
import { useRemoveFromList } from "@/hooks/useRemoveFromList";
import { useAddToList } from "@/hooks/useAddToList";
import { userState } from "@/store/User";
import { useRecoilValue } from "recoil";
import { CellProps } from "@/types/Table.t";

const StalkOrRemove: React.FC<{
  user: UserRow;
  className?: string;
  cellProps?: CellProps;
}> = ({ user, className }) => {
  const { mutate: removeUser } = useRemoveFromList();
  const { mutate: addUser } = useAddToList();

  const loggedInUser = useRecoilValue(userState);

  return user.isStalked ? (
    <div className={`${className}`}>
      <IconButton
        acent="brown"
        className="!rounded-lg p-0 min-w-[42px] min-h-[42px]"
        onClick={() =>
          !loggedInUser?.tutorial ? removeUser(user.userRowId) : () => {}
        }
      >
        <div className="w-4 h-4 bg bg-icon-cross"></div>
      </IconButton>
    </div>
  ) : (
    <div className={`${className}`}>
      <IconButton
        acent="brown"
        className="!rounded-lg p-0 min-w-[42px] min-h-[42px]"
        onClick={() =>
          !loggedInUser?.tutorial ? addUser(user.userRowId) : () => {}
        }
      >
        <div className="w-6 h-6 bg bg-icon-binoc"></div>
      </IconButton>
    </div>
  );
};

export default StalkOrRemove;
