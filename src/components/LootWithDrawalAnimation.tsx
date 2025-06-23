import { userState } from "@/store/User";
import { formatCompactNumber } from "@/utils/formatNumber";
import { useRecoilState, useRecoilValue } from "recoil";
import Pill2 from "./UI/Pills/Pill2";
import { animationState } from "@/store/animation";
import { useEffect, useRef, useState } from "react";
import { selectedWithdrawalState } from "@/store/withdrawls";

const LootWithdrawalAnimation = () => {
  const user = useRecoilValue(userState);
  const [animation, setAnimation] = useRecoilState(animationState);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCard, setSelectedCard] = useRecoilState(
    selectedWithdrawalState
  );
  const currentHoldingsRef = useRef<string | null>(
    formatCompactNumber(user!.vaultGold - selectedCard!.lootAmount) ?? null
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    if (animation) {
      timer = setTimeout(() => {
        setFadeOut(true);
        clearTimeout(timer);
      }, 4500);
      removeTimer = setTimeout(() => {
        setAnimation(null);
        clearTimeout(removeTimer);
        setSelectedCard(null);
      }, 6000);
    }
  }, [animation]);

  return (
    <div
      data-loot-withdrawal="vault"
      className={`animate-bgColorChangeGreen  bg bg-green flex flex-col px-[5.8%] items-center justify-center w-full h-dvh scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div className="congrats-screen-bg h-1/2 w-[110%] absolute pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-[2.25em] text-center w-2/3">
            Great job, {user!.username}!
          </h1>
          <p className="text-center text-[1.375em] font-josefin">
            Your withdrawal of {selectedCard?.lootAmount.toLocaleString()} $LOOT
            is in progress. You should get your gift soon!
          </p>
          <h2 className="text-[2.25em] text-center">
            Your current Vault holdings:
          </h2>
        </div>

        <Pill2
          accent="red"
          count={currentHoldingsRef.current!}
          className="text-[3.375em] text-white -ml-2 pl-1"
        >
          <div className="w-[28.99vw] max-w-[120px] max-h-[120px] aspect-square mx-auto flex flex-col justify-center items-center z-10 relative">
            <div className="bg bg-chip-loot bg-center h-[100%] w-[100%]"></div>
          </div>
        </Pill2>
      </div>
    </div>
  );
};

export default LootWithdrawalAnimation;
