import LeaderboardPlayer from "@/components/UI/Table/Columns/LeaderboardPlayer";
import Position from "@/components/UI/Table/Columns/Position";
import Score from "@/components/UI/Table/Columns/Score";
import React from "react";

type PositionProps = {
  username: string;
  position: number;
  score: number;
  className?: string;
};

const MyPosition: React.FC<PositionProps> = (props) => {
  const { position, score, className } = props;
  return (
    <div
      className={`${className} bg-[#FFFBF9] border-2 border-[#CEACA7] rounded-xl`}
    >
      <LeaderboardPlayer user={props} className="col-span-3 " />
      <Position position={position} className="grid place-content-center" />
      <Score score={score} className="grid place-content-center" />
    </div>
  );
};

export default MyPosition;
