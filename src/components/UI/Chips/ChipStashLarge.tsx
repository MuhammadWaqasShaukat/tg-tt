const StashChipLarge = ({
  className,
  iconSize,
  count = "489",
}: {
  className?: string;
  iconSize?: string;
  count: string;
}) => {
  return (
    <div className="relative flex flex-col items-start justify-center outline-1">


      <div className={`bg-[#BDE1E5] absolute flex flex-col justify-center items-center  border-[7px]  border-white rounded-full -left-0.5 ${iconSize} `}>
        <div
          className={`bg bg-chip-coin w-[110%] aspect-square `}
        ></div>
      </div>
      <div className={`bg-[#FFEEE4] ml-8 pl-[50%] pr-1.5 flex flex-col justify-center rounded-xl ${className}`}>
        <span className="text-[2.8em]">{count}</span>
      </div>
    </div>
  );
};

export default StashChipLarge;
