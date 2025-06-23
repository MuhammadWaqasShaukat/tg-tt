import React from "react";
import Pill2 from "../../Pills/Pill2";
import { formatCompactNumberHome } from "@/utils/formatNumber";
import { CellProps } from "@/types/Table.t";

const Stolen: React.FC<{
  stollenGold: number;
  className?: string;
  accent: "red" | "grey";
  cellProps?: CellProps;
}> = ({ stollenGold, className, accent }) => {
  return (
    <div className={`${className} px-1 w-max`}>
      <Pill2
        accent={accent}
        count={formatCompactNumberHome(stollenGold)}
        className="text-[1em] text-white -ml-1 rounded-r-md py-0.5"
        extended={false}
      >
        <div className="max-w-6 max-h-6 w-[5.80vw] aspect-square mx-auto z-10">
          <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
        </div>
      </Pill2>
    </div>
  );
};

export default Stolen;
