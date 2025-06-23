import { robStepState } from "@/store/robFlow";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../Buttons";
import { CurrentViewState } from "@/store/currentView";
import { localizationState } from "@/store/localizations";

const CaughtSheet = () => {
  const setRobStep = useSetRecoilState(robStepState);
  const setView = useSetRecoilState(CurrentViewState);
  const localization = useRecoilValue(localizationState);

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full gap-8 ">
        <Button
          onClick={() => {
            setRobStep("method-selection");
            setView(null);
          }}
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2 text-[1.375em] rounded-2xl"
        >
          <span>{localization["alarm_screen.home_button"]}</span>
        </Button>
      </div>
    </>
  );
};

export default CaughtSheet;
