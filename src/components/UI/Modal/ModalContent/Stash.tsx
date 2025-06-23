import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentViewState } from "../../../../store/currentView";
import { Button } from "../../Buttons";
import { CurrentModalState } from "../../../../store/currentModal";
import Pill2 from "../../Pills/Pill2";
import { CurrentDetailModalState } from "@/store/currentDetailModal";
import { userState } from "@/store/User";
import useVaultInfo from "@/hooks/useGetVaultCap";

const Stash = () => {
  const [, setCurrentDetailModal] = useRecoilState(CurrentDetailModalState);
  const [, setView] = useRecoilState(CurrentViewState);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const user = useRecoilValue(userState);
  let vaultPercentage = useVaultInfo().getVaultStatus();

  const handleBuyStashToken = () => {
    setCurrentModal(null);
    setView("buy-stash-token");
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <Pill2
          accent="red"
          count={user?.tokens.toLocaleString() ?? "0"}
          className="text-[2.25em] text-white -ml-3 pl-4"
        >
          <div className="max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg bg-chip-coin  bg-center h-[100%] w-[100%] z-10"></div>
          </div>
        </Pill2>
        <ul className="px-4 text-left list-disc">
          <li>
            <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown leading-5">
              Consumables are only bought with $STASH.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown leading-5">
              $STASH is earned when you fill up your Vault with stolen $LOOT.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown leading-5">
              Inactivity in the game for more than 24h - stops the $STASH
              distribution.
            </span>
          </li>
        </ul>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <p className="text-[1em] text-left font-josefin  font-medium tracking-tighter text-light-brown">
          Your <span className="font-bold ">$STASH</span> reward logic:
          <br />
          {vaultPercentage.toFixed(2)}%{" "}
          <span className="font-bold ">$LOOT</span> in Vault ={" "}
          <span className="font-bold ">
            {user?.tokensPerHour.toFixed(2)} $STASH / h
          </span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full gap-2 ">
        <Button
          onClick={() => setCurrentDetailModal("stash")}
          acent="ghost"
          className=" border border-[#CEACA7] py-3 text-[1em]"
        >
          <span className="">More Info</span>
        </Button>
        <Button
          acent="yellow"
          className="py-3 text-[1em] "
          onClick={handleBuyStashToken}
        >
          <span className="">Buy $STASH</span>
        </Button>
      </div>
    </>
  );
};

export default Stash;
