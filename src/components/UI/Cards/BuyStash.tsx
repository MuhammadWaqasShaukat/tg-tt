import { BuyStashCardProp } from "@/types/Card.t";
import { Button } from "../Buttons";
import PillButton from "../Buttons/PillButton";
import Pill2 from "../Pills/Pill2";
import Star from "../Star";
import { useBuyStashPkgQuery } from "@/hooks/useBuyStashPkgs";
import { useSetRecoilState } from "recoil";
import { boughtStashPackageState } from "@/store/boughtStashPackage";

const BuyStashCard: React.FC<BuyStashCardProp> = ({
  pkgId,
  price,
  counts,
  isPopular,
}) => {
  const { mutate: buyStash } = useBuyStashPkgQuery();

  const setBoughtStashPackage = useSetRecoilState(boughtStashPackageState);

  const handleBuyStashPackage = () => {
    setBoughtStashPackage({ id: pkgId, price: price, count: counts });
    buyStash(pkgId.toString());
  };

  return (
    <div
      className={`flex flex-row justify-between items-center border-3 border-[#CEACA7] py-6 px-2 rounded-3xl shadow-custom relative w-full ${
        !isPopular ? "bg-[#FFF4DB]" : "bg-[#FFE4A4]"
      }`}
      onClick={handleBuyStashPackage}
    >
      {isPopular && (
        <PillButton className="absolute -top-4 w-max text-[1em]">
          <span>Most popular</span>
        </PillButton>
      )}
      <Pill2
        accent="red"
        count={counts.toLocaleString()}
        className="text-[1.875em] text-white -ml-2 pl-1"
      >
        <div className=" w-[13.77vw] aspect-square max-h-[57px] max-w-[57px] mx-auto flex flex-col justify-center items-center z-10 relative">
          <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
        </div>
      </Pill2>

      <Button
        acent="green"
        className="flex flex-row items-center justify-center gap-[5px] px-4 py-3 rounded-2xl w-max text-[1.25em]"
      >
        <span>Pay</span>
        <Star counts={price} />
      </Button>
    </div>
  );
};

export default BuyStashCard;
