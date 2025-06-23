import RobMethod from "@/components/UI/RobMethod";
import { Button } from "@/components/UI/Buttons";
import ImageBox from "@/components/UI/ImageBox";
import { useRecoilState } from "recoil";
import { robStepState } from "@/store/robFlow";

const Method = () => {
  const [, setRobStep] = useRecoilState(robStepState);
  return (
    <>
      <div className=" flex flex-col justify-start items-start gap-6 mt-[6%] w-full px-6 ">
        <div className="  flex-row flex justify-start items-center bg-[#FFFBF9] w-full rounded-2xl p-2">
          <ImageBox className=" h-[8.5vh] w-[18.4vw] shadow-custom-2" />

          <div className="flex flex-col justify-start items-center px-2 py-0.5 gap-3 rounded-lg">
            <h3 className=" text-[2em] text-[#39444D]">Burglar</h3>
            <div className="grid grid-cols-3 gap-1 ">
              <div className="bg bg-icon-star-filled h-[4vh] w-[8.7vw]"></div>
              <div className="bg bg-icon-star-filled h-[4vh] w-[8.7vw]"></div>
              <div className="bg bg-icon-star h-[4vh] w-[8.7vw]"></div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <div className="flex flex-row items-center justify-between w-full ">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <div className="w-5 h-4  bg bg-icon-info"></div>
            <p className="text-base  text-light-brown">Extraction max</p>
          </div>
          <div className="px-2 ml-auto bg-white  rounded-xl">
            <span className="text-base text-light-brown ">80K</span>
          </div>
        </div>
      </div>

      <div className=" bg-[#FFFBF9] w-full px-6 py-9 space-y-6 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto h-[50vh]">
        <div className=" space-y-[2.67vh]">
          <h1 className=" text-center capitalize text-[2.5em]">Select One</h1>
          <p className="text-center text-[1.5em]">
            Get the most out of the robbery by using special tools.
          </p>
        </div>

        <div className="flex flex-row items-center justify-between gap-8 ">
          <RobMethod method="decoy" />
          <RobMethod method="cross bar" />
          {/* <ImageBox className=" h-[11.38vh] w-[24.64vw] shadow-custom-2" /> */}
        </div>
        <Button
          onClick={() => {
            setRobStep("robbery-inprogress");
          }}
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2 mb-[14px]"
        >
          <span>Rob Now</span>
        </Button>
      </div>
    </>
  );
};

export default Method;
