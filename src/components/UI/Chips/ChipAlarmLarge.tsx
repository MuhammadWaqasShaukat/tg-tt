

const AlarmChipLarge = ({
  className,
  iconSize,
  count = "489",

}: {
  className?: string;
  iconSize?: string;
  count: string;
}) => {

  return (
    <button className="relative flex flex-col items-start justify-center cursor-pointer outline-1">
      <div className={`bg-white absolute flex flex-col justify-center items-center  border-2  border-[#F0DAD2] rounded-md -left-0.5 ${iconSize} `}>
        <div
          className={`bg bg-chip-alarm w-[80%] aspect-square `}
        ></div>
      </div>
      <div className={`bg-[#FFEEE4] ml-8 pl-[60%] pr-1.5 flex flex-col justify-center rounded-xl ${className}`}>
        <span className="text-[2.8em]">{count}</span>
      </div>
    </button>
  );
};

export default AlarmChipLarge;
