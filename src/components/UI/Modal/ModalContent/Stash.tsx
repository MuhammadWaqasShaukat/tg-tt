import { useRecoilState } from "recoil";
import { CurrentViewState } from "../../../../store/currentView";
import { Button } from "../../Buttons";
import StashChipLarge from "../../Chips/ChipStashLarge";
import { CurrentModalState } from "../../../../store/currentModal";

const Stash = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);

  const handleBuyStashToken = () => {
    setCurrentModal(null);
    setView("buy-stash-token");
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <StashChipLarge
          count="1,982.34"
          iconSize=" w-[19.32vw] aspect-square"
          className="!bg-[#F88B7C] text-white  w-max h-[5.35vh]"
        />
        <ul className="px-4 text-left list-disc">
          <li>
            <span className="text-[1.6em] font-josefin  font-medium tracking-tighter text-light-brown">
              Consumables are only bought with $STASH.
            </span>
          </li>
          <li>
            <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
              $STASH is earned when you fill up your Vault with stolen $LOOT.
            </span>
          </li>
          <li>
            <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
              Inactivity in the game for more than 24h - stops the $STASH
              distribution.
            </span>
          </li>
        </ul>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <p className="text-[1.6em] text-left font-josefin  font-medium tracking-tighter text-light-brown">
          Your <span className="font-bold ">$STASH</span> reward logic:10%{" "}
          <span className="font-bold ">$LOOT</span> in Vault ={" "}
          <span className="font-bold ">+1.0 $STASH / h</span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full gap-2 ">
        <Button acent="ghost" className=" border border-[#CEACA7] py-2">
          <span className="text-[.75em] ">More Info</span>
        </Button>
        <Button acent="yellow" className="py-2 " onClick={handleBuyStashToken}>
          <span className="text-[.75em]">Buy $STASH</span>
        </Button>
      </div>
    </>
  );
};

export default Stash;
