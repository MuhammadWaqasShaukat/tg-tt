import { LeagueNames } from "@/types/User.t";
import Pill2 from "./Pills/Pill2";

const WindrawChip = ({
  league,
  lootAmmount,
}: {
  league: LeagueNames;
  lootAmmount: number;
}) => {
  return (
    <div className="size-[124px] blob relative bg-[#fec94a] border-white border-[6px]">
      <div data-league-withdraw={league} className="blob z-10 relative"></div>

      <div className="absolute top-3 -left-2 z-0">
        <Pill2
          accent="green"
          count={lootAmmount.toLocaleString()}
          className="text-[1.5em] -ml-2 rounded-r-md py-1 px-0.5 "
          extended={false}
        >
          <div className="size-11 aspect-square  z-10">
            <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
          </div>
        </Pill2>
      </div>
    </div>
  );
};

export default WindrawChip;
