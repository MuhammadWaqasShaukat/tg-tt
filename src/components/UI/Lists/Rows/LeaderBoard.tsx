import { LeaderBoardRowPropType } from "../../../../types/LeaderBoard.t";
import LootChip from "../../Chips/ChipLoot";
import ImageBox from "../../ImageBox";

const LeaderBoardRow: React.FC<LeaderBoardRowPropType> = ({
  name,
  position,
  score,
  showTokens,
}) => {
  return (
    <div className="pt-4 flex flex-row justify-between items-end w-full border-t border-[#5A1319] border-opacity-20 gap-[22px] max-h-[58px]">
      <div className="flex-[5] flex flex-row justify-start items-center">
        <ImageBox className="w-[10.14vw] h-[4.69vh]" />
        <div className=" ml-4 pt-1 space-y-2">
          <h2 className=" text-xl font-bold font-josefin tracking-tight leading-4">
            {name}
          </h2>
          {showTokens && (
            <LootChip
              count="+1200"
              iconSize="h-6 w-6"
              className="!bg-[#9DC2C9] text-white text-base font-bold pl-6"
            />
          )}
        </div>
      </div>

      <div className="flex-1 text-center">
        <span className="text-xl font-bold font-josefin tracking-tight">
          {position}
        </span>
      </div>
      <div className=" flex-1 text-center">
        <span className="text-xl font-bold font-josefin tracking-tight">
          {score}
        </span>
      </div>
    </div>
  );
};

export default LeaderBoardRow;
