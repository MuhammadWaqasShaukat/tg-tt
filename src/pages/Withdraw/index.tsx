import LootWithdrawalAnimation from "@/components/LootWithDrawalAnimation";
import WithdrawCard from "@/components/UI/Cards/WithdrawCard";
import { Page } from "@/components/UI/Page";
import WithdrawSheet from "@/components/UI/Sheets/WithdrawSheet";
import { useInfoModal } from "@/hooks/useInfoModal";
import { useWithddrawalQuery } from "@/hooks/useWithdrawals";
import { animationState } from "@/store/animation";
import { userState } from "@/store/User";
import { selectedWithdrawalState } from "@/store/withdrawls";
import { PageProps } from "@/types/Page.t";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Withdraw: React.FC<PageProps> = ({ onClose }) => {
  const user = useRecoilValue(userState);
  const [selectedCard, setSelectedCard] = useRecoilState(
    selectedWithdrawalState
  );

  const { openInfoModal } = useInfoModal();

  const { data: withdrawal } = useWithddrawalQuery();

  const [animation] = useRecoilState(animationState);

  useEffect(() => {
    return () => {
      setSelectedCard(null);
    };
  }, []);

  return (
    <>
      {animation === "loot-withdrawal-successfull" ? (
        <LootWithdrawalAnimation />
      ) : (
        <Page
          id="withdraw-view"
          allowNavigatingBack={true}
          allowSearch={false}
          backBtnClkHandler={onClose}
          viewTitle={"Withdraw"}
          Sheet={selectedCard ? { StaticSheet: <WithdrawSheet /> } : null}
        >
          <div className=" w-full space-y-3">
            <p className=" text-light-brown text-[1em] font-josefin font-medium">
              By withdrawing your $LOOT, you agree that you will get a gift,
              valued the amount of Stars you see
            </p>

            <div className="flex flex-row items-center justify-start gap-2 ">
              <div
                className="size-5 bg bg-icon-info"
                onClick={() =>
                  openInfoModal("withdraw_packages.info_tip_withdraw")
                }
              ></div>
              <p className=" text-light-brown text-[1em]">
                Get the gift & Convert to STARS
              </p>
            </div>

            <div className=" bg-white flex flex-row justify-center items-center gap-1 w-max px-3 py-1 rounded-3xl max-h-[23px] mx-auto">
              <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin leading-none">
                Your Balance
              </span>
              <span className="w-1 h-1 rounded-full bg-light-brown"></span>
              <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin leading-none">
                {user?.vaultGold.toLocaleString()}
              </span>
            </div>
            {selectedCard ? (
              <WithdrawCard
                key={selectedCard.id}
                id={selectedCard.id}
                lootAmount={selectedCard.lootAmount}
                withdrawAmount={selectedCard.withdrawAmount}
                withdrawCurrency={selectedCard.withdrawCurrency}
              />
            ) : (
              withdrawal?.map((t) => (
                <WithdrawCard
                  key={t.id}
                  id={t.id}
                  lootAmount={t.lootAmount}
                  withdrawAmount={t.withdrawAmount}
                  withdrawCurrency={t.withdrawCurrency}
                />
              ))
            )}
          </div>
        </Page>
      )}
    </>
  );
};

export default Withdraw;
