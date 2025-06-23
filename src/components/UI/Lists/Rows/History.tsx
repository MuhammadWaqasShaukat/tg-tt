import ImageBox from "../../ImageBox";
import LootChip from "../../Chips/ChipLoot";
import { Button } from "../../Buttons";

type historyType = "robbed" | "got-robbed";

interface HistoryProp {
  history: historyType;
}

const HistoryRow: React.FC<HistoryProp> = ({ history }) => {
  return (
    <div className=" pt-4 flex flex-row justify-between items-center w-full border-t border-[#5A1319] border-opacity-20 gap-3 max-h-[58px]">
      <div className="flex flex-row items-center justify-start flex-1">
        <ImageBox />
        <div className="pt-1 ml-4 ">
          <h2 className="text-xl font-bold leading-3 tracking-tight font-josefin">
            Martin S.
          </h2>
          <span className="text-sm text-light-brown font-josefin ">
            14:30 / Jan 1 '22
          </span>
        </div>
      </div>

      <div className="mr-6 w-max">
        <LootChip
          count="+11k"
          iconSize="h-6 w-6"
          className={`${history === "robbed" ? "!bg-[#9DC2C9]" : "!bg-[#F88B7C]"}  text-white text-base font-bold h-5`}
        />
      </div>
      <Button
        acent="brown"
        className=" h-[42px] !w-[42px] grid place-content-center"
      >
        <div className="w-6 h-6 bg bg-icon-attack "></div>
      </Button>
    </div>
  );
};

export default HistoryRow;
