import { Button } from "../../Buttons";
import { CurrentModalState } from "../../../../store/currentModal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Pill2 from "../../Pills/Pill2";
import { userState } from "@/store/User";

const Alarm = () => {
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const user = useRecoilValue(userState);
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <Pill2
          accent="red"
          count={`${user?.suspicionPoints}/5`}
          className="text-[2.25em] text-white leading-none rounded-md py-0.5"
        >
          <div className=" border-3 border-[#F0DAD2] bg-white max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-chip-alarm bg-center h-[80%] w-[80%]"></div>
          </div>
        </Pill2>

        <ul className="px-4 text-left list-disc">
          <li>
            <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
              Each time you're caught during a robbery, you get +1 Suspicion
              point.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
              Accumulating these increases your risk of jail time.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
              Each point increases the chance of being thrown in jail with +20%
              when caught again.
            </span>
          </li>
          <li>
            <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
              Points decrease naturally by -1 every hour.
            </span>
          </li>
        </ul>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <p className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
          Need to reduce suspicion?
        </p>
      </div>

      <Button
        acent="yellow"
        className="flex flex-row items-center justify-center gap-2 py-3 text-[1em]"
        onClick={() => {
          setCurrentModal("fake-id");
        }}
      >
        <span className=" capitalize">Buy Fake ID</span>
      </Button>
    </>
  );
};

export default Alarm;
