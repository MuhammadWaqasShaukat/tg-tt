import { Button } from "@/components/UI/Buttons";
import { localizationState } from "@/store/localizations";
import { useRecoilValue } from "recoil";

const StepTwo = () => {
  const localization = useRecoilValue(localizationState);

  return (
    <div className=" flex flex-col w-full justify-start items-start flex-1 px-6 gap-6 py-[51px]">
      <h1 className="h-[100px] text-[2.25em] text-left">How to start?</h1>
      <span className="text-[1.375em] font-josefin  font-medium tracking-tighter leading-7 text-light-brown">
        {localization?.["tutorial_screen.rob"]}
      </span>
      <div className="w-[88.41vw] max-w-[336px]  aspect-square bg-white rounded-[24px] flex flex-col justify-center items-center p-[21px] mx-auto">
        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <div className="bg bg-icon-attack h-5 w-5"></div>
          <span>{localization?.["home_screen.rob_button"]}</span>
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
