import React from "react";
import { Button } from "../Buttons";
import { RobbingMeDetails } from "@/types/User.t";
import { useCatchAttackerQuery } from "@/hooks/useCatch";
import { formatDistanceToNow } from "date-fns";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { caughtThiefState } from "@/store/caughtThief";
import { CaughtThiefType } from "@/types/Caught.t";

const GettingRobbedAlerts: React.FC<RobbingMeDetails> = (attacker) => {
  const { mutate: catchAttacker } = useCatchAttackerQuery();
  const setCurrenctView = useSetRecoilState(CurrentViewState);
  const [, setCaughtThief] = useRecoilState(caughtThiefState);

  const handleCallPolice = (userRowId: string) => {
    setCaughtThief(
      (prev) =>
        ({
          ...prev,
          thief: attacker,
        } as CaughtThiefType)
    );
    catchAttacker(userRowId);
    setCurrenctView("catch-thief");
  };

  return (
    <div className=" flex flex-col justify-start items-start bg-[#FFFBF9CC] gap-2 px-6 pt-4 pb-5 rounded-3xl w-[88.41vw] max-w-[500px]">
      <h2 className=" font-josefin text-[1.375em] font-bold">
        <span className=" capitalize">{attacker.userName}</span> is robbing you!
      </h2>
      <div className=" flex flex-row justify-between items-center w-full">
        <div className=" flex flex-row justify-start items-center gap-1.5 w-3/5">
          <span className="text-[1em] text-left font-josefin text-light-brown font-medium">
            Started:
          </span>
          <span className="text-[1em] text-left font-josefin font-medium text-ellipsis truncate">
            {formatDistanceToNow(new Date(attacker.startedOn), {
              addSuffix: true,
            })}
          </span>
        </div>
        <div className=" w-0.5 h-4 bg-[#CEACA7] mx-2"></div>
        <div className=" flex flex-row justify-start items-center gap-1.5 w-2/5">
          <span className="text-[1em] text-left font-josefin  text-light-brown font-medium">
            Stolen:
          </span>
          <div className=" flex flex-row justify-start items-center ">
            <div className="w-[5.31vw] aspect-square max-h-[22px] max-w-[22px] mx-auto flex flex-col justify-center items-center z-10 relative">
              <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
            </div>
            <span className="text-[1em] text-left font-josefin font-medium">
              {attacker.alreadyStolen}
            </span>
          </div>
        </div>
      </div>
      <Button
        acent="yellow"
        className="!rounded-xl text-[1.25em] w-full "
        onClick={() => handleCallPolice(attacker.userRowId)}
      >
        <span>Call Police</span>
      </Button>
    </div>
  );
};

export default GettingRobbedAlerts;
