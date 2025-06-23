import Pill2 from "../../Pills/Pill2";
import Counter from "../../../Counter";
import { Button2 } from "../../Buttons";

const Decoy = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-6">
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <Pill2 accent="red" count="x2" className="text-[2.6em] text-white">
          <div className=" border-3 border-[#F0DAD2] bg-white h-[8.5vh] w-[18.35vw] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-decoy bg-center h-[100%] w-[100%] rounded-xl"></div>
          </div>
        </Pill2>
        <div className="flex flex-col items-center justify-start w-full gap-1">
          <div className="">
            <p className="text-[1.6em] text-center font-josefin text-light-brown font-medium tracking-tighter">
              <span className="font-bold ">Decoy </span> disables the targeted
              player Improved alarm if they have such is enabled. This will give
              you at least 5 minutes until they get the notification for the
              robbery.
            </p>
          </div>
          <Counter />
        </div>
      </div>
      <Button2 acent="green" className="flex-1 w-full">
        <span>Get</span>
      </Button2>
    </div>
  );
};

export default Decoy;
