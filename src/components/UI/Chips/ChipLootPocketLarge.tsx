const LootPocketChipLarge = ({
  className,
  iconSize,
  count = "489",
}: {
  className?: string;
  iconSize?: string;
  count: string;
}) => {
  return (
    <div className="relative flex flex-col items-start justify-center h-max outline-1">
      <div
        className={`z-10 bg bg-chip-loot-pocket h-10 w-10  absolute -left-0.5 ${iconSize}`}
      ></div>
      <div
        className={` bg-[#FFEEE4] ml-4 pl-[65%] pr-1.5 flex flex-col justify-center rounded-xl relative ${className} `}
      >
        <span className=" text-[2.8em]">{count}</span>
        <div className=" absolute left-[99%]  h-max w-max ">
          <div className="relative">
            <div className="absolute -top-[50%] left-[50%] -translate-x-[50%] w-5 h-5 bg bg-icon-info"></div>
            <div className="bg-[#9DC2C9] px-1.5 py-1 rounded-r-md">
              <span className=" text-[1.4em]">250k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LootPocketChipLarge;
