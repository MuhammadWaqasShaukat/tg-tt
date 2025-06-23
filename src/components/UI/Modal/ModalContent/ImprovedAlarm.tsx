import Counter from "../../../Counter";
import Pill2 from "../../Pills/Pill2";
import { Button2 } from "../../Buttons";

const ImprovedAlarm = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-6">
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <Pill2 accent="red" count="x2" className="text-[2.6em] text-white">
          <div className=" border-3 border-[#F0DAD2] bg-white h-[8.5vh] w-[18.35vw] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-alarm bg-center h-[80%] w-[80%]"></div>
          </div>
        </Pill2>
        <div className="flex flex-col items-center justify-start w-full gap-1">
          <div className="">
            <p className="text-[1.6em] text-center font-josefin  font-medium tracking-tighter">
              The Improved Alarm sends you notification on the 1st minute when
              someone initiates a robbery against you. This allows you to catch
              them while still not able to Run away!
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

export default ImprovedAlarm;
