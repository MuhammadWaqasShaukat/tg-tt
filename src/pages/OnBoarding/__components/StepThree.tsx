import { localizationState } from "@/store/localizations";
import { useRecoilValue } from "recoil";

const StepThree = () => {
  const localization = useRecoilValue(localizationState);

  return (
    <div className=" flex flex-col justify-start items-start flex-1 px-6 gap-6 py-[51px]">
      <h1 className="max-h-[100px] text-[2.25em] leading-normal">
        Choose your victim
      </h1>
      <span className="text-[1.375em] font-josefin  font-medium tracking-tight text-light-brown leading-7">
        {localization?.["tutorial_screen.target"]}
      </span>
      <div className="shadow-custom-2 w-[88.41vw] max-w-[336px] mx-auto  aspect-square bg-white rounded-[24px] flex flex-col justify-center items-center p-[21px]">
        <div className="w-full bg-[#FFEEE4] rounded-[24px]">
          <div className="bg bg-onboarding-screen-step-3 aspect-square"></div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
