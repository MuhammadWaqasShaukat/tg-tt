import { useRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";

const LootPocketChip = ({
  className,
  iconSize,
  count = "489",
}: {
  className?: string;
  iconSize?: string;
  count: string;
}) => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  return (
    <button
      className="h-[4.46%] w-[10.62%] relative outline-1 flex flex-col justify-center items-start cursor-pointer"
      onClick={() => {
        setCurrentModal("loot-in-pockets");
      }}
    >
      <div
        className={`bg bg-chip-loot-pocket h-10 w-10  absolute -left-0.5 ${iconSize}`}
      ></div>
      <div className={`bg-[#FFEEE4] pl-[100%] pr-1.5 rounded-md ${className}`}>
        <span className="ml-1.5">{count}</span>
      </div>
    </button>
  );
};

export default LootPocketChip;
