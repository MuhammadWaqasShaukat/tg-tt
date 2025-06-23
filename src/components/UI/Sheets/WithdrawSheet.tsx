import { selectedWithdrawalState } from "@/store/withdrawls";
import { useRecoilState } from "recoil";
import { Button } from "../Buttons";
import Pill2 from "../Pills/Pill2";
import { formatCompactNumber } from "@/utils/formatNumber";
import { useMakeWithddrawalQuery } from "@/hooks/useMakeWithdrawals";
import { showToast } from "@/utils/showToast";

const WithdrawSheet = () => {
  const [selectedCard] = useRecoilState(selectedWithdrawalState);

  const { mutateAsync: makeWithdrawal } = useMakeWithddrawalQuery();

  const handleMakeWithdrawal = async () => {
    try {
      if (selectedCard && selectedCard.id) {
        await makeWithdrawal();
      }
    } catch (error: any) {
      showToast("error", error.response.data.errors[0]);
    }
  };

  return (
    <div className=" space-y-6">
      <p className="text-[1em] tracking-tighter font-josefin text-light-brown">
        You have selected to withdraw &nbsp;
        <span className=" font-bold">
          {selectedCard?.lootAmount.toLocaleString()} $LOOT
        </span>
        &nbsp;from your balance. You will get it as a gift badge with Value{" "}
        <span className=" font-bold"> {selectedCard?.withdrawAmount}</span>{" "}
        Stars.
      </p>

      <ul className="list-disc px-4">
        <li>
          <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown leading-5">
            Once received - convert the gift to Stars.
          </span>
        </li>
        <li>
          <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown leading-5">
            Amount of Stars received might be different, due to Telegram
            conversion rules.
          </span>
        </li>
      </ul>

      <Button
        onClick={handleMakeWithdrawal}
        acent="green"
        className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl max-h-14"
      >
        <div className=" flex flex-row justify-center items-center gap-2 relative">
          <span>Withdraw</span>
          <Pill2
            accent="brown"
            count={formatCompactNumber(selectedCard?.lootAmount ?? 0)}
            className="text-[1.025em] -ml-2 rounded-r-md py-0.5"
            extended={false}
          >
            <div className="min-w-[38px] aspect-square  max-h-[38px] max-w-[38px] z-10">
              <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        </div>
      </Button>
    </div>
  );
};

export default WithdrawSheet;
