import { useRecoilState } from "recoil";
import { CurrentModalState } from "../../../../store/currentModal";
import { Button } from "../../Buttons";
import LootPocketChipLarge from "../../Chips/ChipLootPocketLarge";

const LootInPocketsModal = () => {

  const [, setCurrentModal] = useRecoilState(CurrentModalState);

  return <>
    <div className="flex flex-col items-start justify-start gap-4 ">
      <LootPocketChipLarge
        count="249,999"
        iconSize=" w-[21.25vw] h-[9vh]"
        className="!bg-[#F88B7C] text-white  w-max h-[5.35vh]"
      />

      <p className=" text-light-brown text-left font-josefin text-[1.5em]">
        You need to deposit all $LOOT in your Vault only once your
        pockets are full!
      </p>

      <p className=" text-light-brown text-left  font-josefin text-[1.5em]">
        You can increase the capacity of pockets and to{" "}
        <span className="font-bold ">
          rob more by using a Huge Bag item!
        </span>
      </p>
    </div>
    <div className="flex flex-row items-center justify-between w-full gap-2 ">
      <Button acent="ghost" className=" border border-[#CEACA7] py-2">
        <span className="text-[.75em] ">More Info</span>
      </Button>
      <Button acent="yellow" className="py-2 " onClick={() => {
        setCurrentModal("huge-bag");
      }}>
        <span className="text-[.75em]">Get Huge Bag</span>
      </Button>
    </div>
  </>;
};

export default LootInPocketsModal;
