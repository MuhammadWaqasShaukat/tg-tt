import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentModalState } from "../../../../store/currentModal";
import { Button } from "../../Buttons";
import Pill2 from "../../Pills/Pill2";
import { CurrentDetailModalState } from "@/store/currentDetailModal";
import { userState } from "@/store/User";
import { formatCompactNumber } from "@/utils/formatNumber";
import usePocketInfo from "@/hooks/useGetPocketCap";

const LootInPocketsModal = () => {
  const [, setCurrentDetailModal] = useRecoilState(CurrentDetailModalState);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const user = useRecoilValue(userState);

  const { getPocketCap } = usePocketInfo();

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <Pill2
          accent="red"
          count={user?.robberGold.toLocaleString() ?? "0"}
          className="text-[2.25em] text-white -ml-8 pl-8"
          extended={true}
          extendedText={formatCompactNumber(getPocketCap() ?? 0)}
        >
          <div className="max-w-[96px] w-[20.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg bg-chip-loot-pocket bg-center h-[100%] w-[100%] z-10"></div>
          </div>
        </Pill2>

        <p className=" text-light-brown text-left font-josefin text-[1em] leading-5">
          You need to deposit all $LOOT in your Vault only once your pockets are
          full!
        </p>

        <p className=" text-light-brown text-left  font-josefin text-[1em] leading-5">
          You can increase the capacity of pockets and to{" "}
          <span className="font-bold ">rob more by using a Huge Bag item!</span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-2 ">
        <Button
          onClick={() => {
            setCurrentDetailModal("loot-in-pockets");
          }}
          acent="ghost"
          className=" border border-[#CEACA7] py-3 text-[1em]"
        >
          <span className="">More Info</span>
        </Button>
        <Button
          acent="yellow"
          className="py-3 text-[1em]"
          onClick={() => {
            setCurrentModal("huge-bag");
          }}
        >
          <span className="">Get Huge Bag</span>
        </Button>
      </div>
    </>
  );
};

export default LootInPocketsModal;
