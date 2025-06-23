import { BuyStashCardProp } from "@/types/Card.t";
import { Button } from "../Buttons";
import PillButton from "../Buttons/PillButton";
import Pill2 from "../Pills/Pill2";
import Star from "../Star";

const BuyStashCard: React.FC<BuyStashCardProp> = ({
  price,
  tokens,
  isPopular,
}) => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-full  border-3 border-[#CEACA7] py-6 px-4 rounded-3xl shadow-custom relative ${
        !isPopular ? "bg-[#FFF4DB]" : "bg-[#FFE4A4]"
      }`}
    >
      {isPopular && (
        <PillButton className=" absolute -top-4 w-max">
          <span>Most popular</span>
        </PillButton>
      )}
      <Pill2
        accent="red"
        count={tokens.toString()}
        className="text-[3em] text-white -ml-2 pl-1 z-[9]"
      >
        <div className=" h-[6.36vh] w-[13.77vw] mx-auto flex flex-col justify-center items-center z-10 relative">
          <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
        </div>
      </Pill2>

      <Button
        acent="green"
        className=" flex flex-row justify-center items-center py-3 px-4 rounded-2xl w-max gap-2"
      >
        <span>Get</span>
        <Star price={price} />
      </Button>
    </div>
  );
};

export default BuyStashCard;
