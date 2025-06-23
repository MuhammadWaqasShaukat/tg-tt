import { CellProps } from "@/types/Table.t";
import React from "react";

const Score: React.FC<{
  score: number;
  className: string;
  cellProps?: CellProps;
}> = ({ score, className }) => {
  return (
    <div className={`${className}`}>
      <span className="text-[1.25em]  font-bold font-josefin tracking-tight">
        {score.toLocaleString()}
      </span>
    </div>
  );
};

export default Score;
