import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../../Buttons";
import { CurrentModalState } from "../../../../store/currentModal";
import Pill2 from "../../Pills/Pill2";
import { userState } from "@/store/User";

const StaminaModal = () => {
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const user = useRecoilValue(userState);

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <Pill2
          accent="red"
          count={user?.staminaPoints.toString() ?? "0"}
          className="text-[2.25em] text-white leading-none"
        >
          <div className=" border-3 border-[#F0DAD2] bg-white max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-chip-stamina bg-center h-[80%] w-[80%]"></div>
          </div>
        </Pill2>

        <ul className="px-4 text-left list-disc space-y-2">
          <li>
            <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown leading-5">
              Each time you start a robbery -1 stamina is reduced from your
              balance.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown leading-5">
              Your stamina regenerates with +1 every 2h.
            </span>
          </li>
        </ul>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <p className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown leading-">
          Need more Stamina now?
        </p>
      </div>

      <Button
        acent="yellow"
        className="flex flex-row items-center justify-center gap-2 py-3 text-[1em]"
        onClick={() => {
          setCurrentModal("snack");
        }}
      >
        <span className="capitalize">get a snack</span>
      </Button>
    </>
  );
};

export default StaminaModal;
