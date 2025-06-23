import { useRecoilValue } from "recoil";
import { stolenAmountState } from "@/store/stolenAmount";

const StolenAmount = () => {
  const stolenAmount = useRecoilValue(stolenAmountState);

  return <p className=" text-[4em]">{stolenAmount.toFixed(0)}</p>;
};

export default StolenAmount;
