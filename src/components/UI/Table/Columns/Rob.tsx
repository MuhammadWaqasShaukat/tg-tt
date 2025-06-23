import React, { useEffect } from "react";
import IconButton from "../../Buttons/IconButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { robVictimState } from "@/store/choseVictim";
import { StalkRow, UserRow } from "@/types/User.t";
import { userState } from "@/store/User";
import { HistoryRowType } from "@/types/History.t";
import { showToast } from "@/utils/showToast";
import { localizationState } from "@/store/localizations";
import { CellProps } from "@/types/Table.t";
import TutorialArrow from "../../TutorialArrow";
import { enableTourElements } from "@/utils/tourGuideHelper";

const RobCell: React.FC<{
  user: UserRow | StalkRow | HistoryRowType;
  className?: string;
  cellProps?: CellProps;
  rowIndex?: number;
}> = ({ user, className, rowIndex }) => {
  const setRobVictim = useSetRecoilState(robVictimState);
  const loggedInUser = useRecoilValue(userState);
  const localization = useRecoilValue(localizationState);

  useEffect(() => {
    enableTourElements();
  }, []);
  return (
    <div
    
    >
      <IconButton
      {...(rowIndex === 0 ? { "data-tour-step": "2" } : {})}
      onClick={() => {
        if (loggedInUser?.iAmRobbing) {
          showToast(
            "error",
            localization["backend_robbery.err_already_doing_robbery"]
          );
          return;
        } else {
          setRobVictim(user);
        }
      }}
        acent="brown"
         className={`!rounded-lg p-0 min-w-[42px] min-h-[42px] relative ${className}`}
      >
        {rowIndex == 0 && loggedInUser?.tutorial && (
          <TutorialArrow className="-bottom-14 -left-14 -rotate-[140deg]" />
        )}
        <div className="w-6 h-6 bg bg-icon-attack"></div>
      </IconButton>
    </div>
  );
};

export default RobCell;
