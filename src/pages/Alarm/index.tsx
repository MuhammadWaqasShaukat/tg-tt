import Counter from "@/components/Counter";
import { Button } from "@/components/UI/Buttons";
import Pill2 from "@/components/UI/Pills/Pill2";
import { View } from "@/components/UI/View";
import { PageProps } from "@/types/Page.t";

const Alarm: React.FC<PageProps> = ({ onClose }) => {
  return (
    <div className=" relative h-full">
      <View allowSearch={false} backBtnClkHandler={onClose} viewTitle="Alarm">
        <div className=" flex flex-col justify-start items-start h-full space-y-4">
          <Pill2 accent="red" count="x2" className="text-[2.6em] text-white">
            <div className=" border-3 border-[#F0DAD2] bg-white h-[8.5vh] w-[18.35vw] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
              <div className="bg bg-img-alarm bg-center h-[80%] w-[80%]"></div>
            </div>
          </Pill2>
          <div>
            <span className="text-base font-josefin  font-medium tracking-tighter text-light-brown">
              This is your alarm system.
            </span>
            <ul className="list-disc px-4">
              <li>
                <span className="text-base font-josefin  font-medium tracking-tighter text-light-brown">
                  The alarm is always active and sends you notification on the
                  5th minute when someone breaks in.
                </span>
              </li>
              <li>
                <span className="text-base font-josefin font-medium tracking-tighter text-light-brown">
                  You can always improve your alarm which will trigger
                  notification on the 1st minute.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </View>

      <div className=" bg-[#FFFBF9] w-screen px-6 py-9 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto  absolute bottom-0 -m-6">
        <div className=" space-y-2 ">
          <h2 className=" text-xl text-light-brown font-pineapple-days text-center px-4">
            One Improved alarm is active 2 hours.
          </h2>
          <span className="text-base text-center font-josefin font-medium tracking-tighter text-light-brown block">
            You can stack as many alarms as you want.
          </span>
        </div>

        <Counter />
        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <span>Improve Alarm</span>
        </Button>
      </div>
    </div>
  );
};

export default Alarm;
