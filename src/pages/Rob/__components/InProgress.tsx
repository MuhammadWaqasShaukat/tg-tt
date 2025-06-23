import { Button } from "@/components/UI/Buttons";
import IconButton from "@/components/UI/Buttons/IconButton";
import ImageBox from "@/components/UI/ImageBox";
import { robStepState } from "@/store/robFlow";
import { useRecoilState } from "recoil";

const InProgress = () => {
  const [, setRobStep] = useRecoilState(robStepState);

  return (
    <>
      <div className=" flex flex-col justify-start items-start gap-6 mt-[6%] w-full px-6 ">
        <div className="  flex-col flex justify-center items-center rounded-2xl p-2 w-full">
          <div className="relative">
            <ImageBox className=" h-[10.71vh] w-[23.18vw]" />
            <IconButton
              acent="brown"
              className="!rounded-xl aspect-square absolute -top-4 -right-4"
              onClick={() => {}}
            >
              <div className="bg bg-icon-attack h-6 w-6"></div>
            </IconButton>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <div className="bg bg-chip-loot h-[6.25vh] w-[13.5vw]"></div>
              <p className=" text-[5em]">4.4k</p>
            </div>
            <p>
              <span className=" font-medium font-josefin text-[1.75em] -tracking-tight">
                Stolen out of
              </span>
              <span className=" font-josefin font-bold text-[1.75em] -tracking-tighter">
                40K
              </span>
            </p>
          </div>
        </div>

        <div className=" flex flex-row justify-between items-center w-full">
          <div className=" flex flex-row justify-start items-center gap-2">
            <div className=" bg bg-icon-info h-4 w-5"></div>
            <p className=" text-light-brown text-base">Extraction max</p>
          </div>
          <div className=" bg-white px-2 rounded-xl ml-auto">
            <span className="text-base text-light-brown ">80K</span>
          </div>
        </div>
      </div>

      <div className=" bg-[#FFFBF9] w-full px-6 py-9 space-y-6 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto h-[30vh]">
        <div className=" space-y-1">
          <h1 className=" text-center capitalize text-[5em]">5m 24s</h1>
          <p className="text-center text-[2em] tracking-tight font-josefin text-light-brown">
            Time till end of the robbery
          </p>
        </div>

        <div className=" flex flex-row justify-between items-center gap-8 w-full ">
          <Button
            onClick={() => {
              setRobStep("run-away");
            }}
            acent="yellow"
            className="shadow-custom flex flex-row justify-center items-center gap-2 mb-[14px]"
          >
            <span>Run Away</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default InProgress;
