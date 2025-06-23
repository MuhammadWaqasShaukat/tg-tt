import React from "react";
import { Button } from "../Buttons";
import { RobbingMeDetails } from "@/types/User.t";

const GettingRobbedAlert2: React.FC<RobbingMeDetails> = ({
  // robRateGoldPerSecond,
  // userRowId,
  startedOn,
  // alreadyStolen,
  userName,
}) => {
  const getRelativeTime = (timeStarted: string) => timeStarted;

  return (
    <div className=" flex flex-row justify-between items-center  bg-[#FFFBF9CC] gap-2 !px-6 pt-4 pb-5 rounded-3xl w-[90vw]  sm:max-w-[500px]">
      <div className=" flex flex-col justify-start items-start ">
        <h2 className=" font-josefin text-[1.375em] font-medium">
          {userName} is robbing you!
        </h2>
        <p className="text-[1em] text-left font-josefin text-light-brown font-medium whitespace-nowrap">
          Robbery Started: &nbsp;
          <span className="text-[1em] text-left font-josefin font-medium text-brown">
            {getRelativeTime(startedOn)}
          </span>
        </p>
      </div>
      <Button
        acent="yellow"
        className="!rounded-xl px-1.5 py-3 text-[1.25em] w-max whitespace-nowrap "
      >
        <span>Call Police</span>
      </Button>
    </div>
  );
};

export default GettingRobbedAlert2;
