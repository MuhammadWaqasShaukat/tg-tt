const LootChip = ({
  className,
  iconSize,
  count = "489",
}: {
  className?: string;
  iconSize?: string;
  count: string;
}) => {
  return (
    <div className="relative flex flex-col items-start justify-center h-max w-max outline-1">
      <div
        className={`bg bg-chip-loot h-10 w-10 bg-white rounded-full absolute -left-0.5 ${iconSize}`}
      ></div>
      <div className={`bg-[#FFEEE4] pl-[99%] pr-1.5 rounded-md ${className}`}>
        <span className="ml-1.5">{count}</span>
      </div>
    </div>
  );
};

export default LootChip;
