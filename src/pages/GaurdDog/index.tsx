import { Button } from "@/components/UI/Buttons";
import ImageBox from "@/components/UI/ImageBox";
import Pill2 from "@/components/UI/Pills/Pill2";
import { View } from "@/components/UI/View";
import { AchivementImageURLS } from "@/constants/achivementsImageUrls";
import { PageProps } from "@/types/Page.t";

const GaurdDog: React.FC<PageProps> = ({ onClose }) => {
  return (
    <div className=" relative h-full">
      <View
        allowSearch={false}
        backBtnClkHandler={onClose}
        viewTitle="Guard Dog"
      >
        <div className=" flex flex-col justify-start items-start h-full space-y-4">
          <Pill2 accent="red" count="x2" className="text-[2.6em] text-white">
            <div className=" border-3 border-[#F0DAD2] bg-white h-[8.5vh] w-[18.35vw] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
              <div className="bg bg-img-gaurd-dog bg-center h-[100%] w-[100%] rounded-xl"></div>
            </div>
          </Pill2>
          <div className=" space-y-4">
            <span className="text-base font-josefin  font-medium tracking-tighter text-light-brown">
              This is your guard dog.
            </span>
            <ul className="list-disc px-4 space-y-4">
              <li>
                <span className="text-base font-josefin  font-medium tracking-tighter text-light-brown">
                  The Guard Dogs prevents anyone from robbing you for the time
                  they are active.
                </span>
              </li>
              <li>
                <span className="text-base font-josefin font-medium tracking-tighter text-light-brown">
                  Each Guard gives you 2 hours safe time.
                </span>
              </li>
              <li>
                <span className="text-base font-josefin font-medium tracking-tighter text-light-brown">
                  By default you receive one daily Guard dog which is active 6
                  hours.
                </span>
              </li>
              <li>
                <span className="text-base font-josefin font-medium tracking-tighter text-light-brown">
                  You can stack Guard dogs up to 12h/daily
                </span>
              </li>
            </ul>
          </div>
          <div className="h-[1px] bg-[#CEACA7] w-full"></div>

          <p className="text-[2em] tracking-tightn font-medium font-josefin text-light-brown">
            Achievement booster
          </p>
          <div className=" flex flex-row justify-between items-center w-full">
            <div className=" flex flex-row justify-start items-center gap-2">
              <div className=" bg bg-icon-info h-4 w-5"></div>
              <p className=" text-light-brown text-base">Sleepy</p>
            </div>
            <div className="ml-auto">
              <ImageBox
                className=" !aspect-square"
                imageURL={AchivementImageURLS["sleepy"]}
              />
            </div>
          </div>
        </div>
      </View>

      <div className=" bg-[#FFFBF9] w-screen px-6 py-9 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto  absolute bottom-0 -m-6">
        <div className=" space-y-2 ">
          <h2 className=" text-xl text-light-brown font-pineapple-days text-center px-4">
            One daily Guard Dog is active 6 hours.
          </h2>
        </div>

        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <span>Activate Dog</span>
        </Button>
      </div>
    </div>
  );
};

export default GaurdDog;
