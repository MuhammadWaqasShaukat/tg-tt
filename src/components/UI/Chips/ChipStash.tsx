import { useRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";

const StashChip = ({
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
    <div
      className="relative flex flex-col items-start justify-center  outline-1"
      onClick={() => {
        setCurrentModal("stash");
      }}
    >
      <div
        className={`bg bg-chip-coin h-10 w-10 bg-white rounded-full absolute -left-0.5 ${iconSize}`}
      ></div>
      <div className={`bg-[#FFEEE4] pl-[100%] pr-1.5 rounded-md ${className}`}>
        <span className="ml-1.5">{count}</span>
      </div>
    </div>
  );
};

export default StashChip;
