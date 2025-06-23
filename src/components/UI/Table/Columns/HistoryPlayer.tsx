import React from "react";
import ImageBox from "../../ImageBox";
import Pill from "../../Pills";
import { format } from "date-fns";

const HistoryPlayer: React.FC<any> = ({ user, className }) => {
  const formatDateAndTime = (createdOnUnixTime: number) => {
    return format(new Date(createdOnUnixTime), "HH:mm / MMM dd ''yy");
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-start flex-1">
        <ImageBox className=" max-w-[42px] max-h-[42px] min-h-10 min-w-10" />
        <div className="pt-1 ml-2 max-w-[41vw]">
          <h2 className="text-[1.25em] font-bold leading-6 tracking-tight truncate text-ellipsis font-josefin ">
            {user.username}
          </h2>
          <div className="flex flex-row items-center justify-start gap-1 ">
            {!user.isSeen && (
              <Pill
                pilltext={"New"}
                className=" !bg-red-dark text-white !text-[.75em] border-2 border-white"
              />
            )}
            <span className="text-[.875em] text-light-brown font-josefin pt-1 whitespace-nowrap">
              {formatDateAndTime(user.createdOnUnixTime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPlayer;
