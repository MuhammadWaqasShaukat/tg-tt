import { Button } from "@/components/UI/Buttons";
import LootChip from "@/components/UI/Chips/ChipLoot";
import ImageBox from "@/components/UI/ImageBox";
import { robStepState } from "@/store/robFlow";
import { useRecoilState } from "recoil";

const Caught = () => {
  const [, setRobStep] = useRecoilState(robStepState);

  return (
    <>
      <div className=" flex flex-col justify-start items-start gap-6 mt-[6%] w-full px-6 ">
        <div className="  flex-col flex justify-center items-center rounded-2xl p-2 w-full gap-9">
          <ImageBox className=" h-[10.71vh] w-[23.18vw]" />
          <p className="text-[2em] tracking-tight font-josefin text-light-brown text-center">
            You have been caught by Simeonichki! Getting caught prior the first
            5 minutes of the robbery, results in losing some amount from your
            robbery.
          </p>
        </div>
        <div className=" flex flex-row justify-between items-center w-full">
          <div className=" flex flex-row justify-start items-center gap-2">
            <div className=" bg bg-icon-info h-4 w-5"></div>
            <p className=" text-light-brown text-base">You have lost</p>
          </div>
          <div className="ml-auto">
            <LootChip
              count="30"
              iconSize="!bg-transparent -left-2.5"
              className="!bg-[#F88B7C] text-white text-[20px] leading-5 h-6"
            />
          </div>
        </div>
        <div className="h-[1px] bg-[#CEACA7] w-full"></div>
        <p className="text-[2em] tracking-tight font-josefin text-light-brown">
          Improved achievements
        </p>
        <div className=" flex flex-col justify-start items-start w-full gap-2">
          <div className=" flex flex-row justify-between items-center w-full">
            <div className=" flex flex-row justify-start items-center gap-2">
              <div className=" bg bg-icon-info h-4 w-5"></div>
              <p className=" text-light-brown text-base">Sneaky</p>
            </div>
            <div className="ml-auto">
              <ImageBox className=" !aspect-square" />
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <div className=" flex flex-row justify-start items-center gap-2">
              <div className=" bg bg-icon-info h-4 w-5"></div>
              <p className=" text-light-brown text-base">sloppy</p>
            </div>
            <div className="ml-auto">
              <ImageBox className=" !aspect-square" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#FFFBF9] w-full px-6 py-9 space-y-6 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto">
        <div className=" flex flex-row justify-between items-center gap-8 w-full ">
          <Button
            onClick={() => {
              setRobStep("run-away");
            }}
            acent="yellow"
            className="shadow-custom flex flex-row justify-center items-center gap-2 mb-[14px]"
          >
            <span>Go Home</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Caught;
