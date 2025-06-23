import { myLeagueState } from "@/store/myLeague";
import { useRecoilState, useRecoilValue } from "recoil";
import WindrawChip from "../WindrawChip";
import { Button } from "../Buttons";
import Star from "../Star";
import { WinthdrawCardProps } from "@/types/WinthdrawCardProps";
import { selectedWithdrawalState } from "@/store/withdrawls";

const WithdrawCard: React.FC<WinthdrawCardProps> = ({
  id,
  lootAmount,
  withdrawCurrency,
  withdrawAmount,
}) => {
  const myLeague = useRecoilValue(myLeagueState);
  const [selectedCard, setSelectedCard] = useRecoilState(
    selectedWithdrawalState
  );
  return (
    <div
      onClick={() => {
        if (id === selectedCard?.id) {
          setSelectedCard(null);
        } else
          setSelectedCard({ id, lootAmount, withdrawAmount, withdrawCurrency });
      }}
      className={`flex  flex-row justify-between items-end border-3 border-[#CEACA7] py-6 px-2 rounded-3xl shadow-custom relative w-full ${
        selectedCard?.id === id ? "bg-[#FFE4A4]" : "bg-[#FFF4DB]"
      }`}
    >
      <div className="flex-1">
        <WindrawChip league={myLeague?.league!} lootAmmount={lootAmount} />
      </div>

      <div className=" flex flex-col items-center gap-5 ">
        {selectedCard?.id === id && (
          <Button
            acent="red"
            className=" py-1 px-2 w-max rounded-xl !bg-red-dark"
          >
            <span className=" font-normal uppercase text-[#FFEEE4]">
              cancel
            </span>
          </Button>
        )}
        <Button
          acent="green"
          className="flex flex-1 flex-row items-center justify-center gap-[5px] px-4 py-2 rounded-2xl w-max text-[1.25em]"
        >
          <span>apx.</span>
          <Star counts={withdrawAmount} />
        </Button>
      </div>
    </div>
  );
};

export default WithdrawCard;
