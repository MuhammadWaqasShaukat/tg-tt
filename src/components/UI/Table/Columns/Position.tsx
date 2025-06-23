import { CellProps } from "@/types/Table.t";
import React from "react";

const Position: React.FC<{
  position: number;
  className: string;
  cellProps?: CellProps;
}> = ({ position, className }) => {
  return (
    <div className={`${className}`}>
      <span className="text-[1.25em]  font-bold font-josefin tracking-tight">
        {position}
      </span>
    </div>
  );
};

export default Position;
