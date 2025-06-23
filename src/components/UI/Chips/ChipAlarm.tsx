import { useRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";

const AlarmChip = ({
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
        setCurrentModal("alarm");
      }}
    >
      <div
        className={`bg bg-chip-alarm h-10 w-10 bg-white absolute -left-0.5 ${iconSize}`}
      ></div>
      <div className={`bg-[#FFEEE4] pl-[100%] pr-1.5 rounded-md ${className}`}>
        <span className="ml-1.5">{count}</span>
      </div>
    </button>
  );
};

export default AlarmChip;
