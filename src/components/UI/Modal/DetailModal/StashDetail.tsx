// import { StashPerHour } from "@/constants/StashPerHourDistribution";
import { useStashPerHourDistributionQuery } from "@/hooks/useStashPerHourDistribution";
import { useEffect, useState } from "react";

type StashDistributionType = {
  percentage: { min: number; max: number };
  stash: string;
};

const StashDetail = () => {
  const { data } = useStashPerHourDistributionQuery();
  const [stashDistribution, setStashDistribution] = useState<
    StashDistributionType[]
  >([]);
  useEffect(() => {
    if (data) {
      const __ = data.map(
        (item: { groupDescription: string; stashHour: number }) => {
          const [minStr, maxStr] = item.groupDescription.split(" - ");
          const min = Number(minStr.trim());
          const max = Number(maxStr.trim());
          return {
            percentage: { min, max },
            stash: `+${item.stashHour}`,
          };
        }
      );
      setStashDistribution(__);
    }
  }, [data]);

  return (
    <div className="space-y-4 ">
      <p className="text-[1em] text-light-brown font-josefin text-left">
        $STASH distribution logic is based on how full your vault is.
      </p>
      <div className="flex flex-col items-start justify-start w-full gap-1">
        <div className="flex flex-row items-center justify-between bg-[#BDE1E5] px-4 py-2 w-full rounded-xl">
          <p className="text-[1em] font-medium font-josefin">% full Vault</p>
          <p className="text-[1em] font-medium font-josefin">$STASH / Hour</p>
        </div>
        {stashDistribution.map((rec, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl"
          >
            <span className="text-[1em] font-medium font-josefin">
              {`${rec.percentage.min}% - ${rec.percentage.max}%`}
            </span>
            <span className="text-dark-green text-[1em] font-medium font-josefin">
              {rec.stash}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StashDetail;
