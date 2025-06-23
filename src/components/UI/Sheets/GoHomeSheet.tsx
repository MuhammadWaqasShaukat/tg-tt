import { robStepState } from "@/store/robFlow";
import { Button } from "../Buttons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { localizationState } from "@/store/localizations";

const GoHomeSheet = () => {
  const setRobStep = useSetRecoilState(robStepState);
  const setView = useSetRecoilState(CurrentViewState);
  const localization = useRecoilValue(localizationState);

  return (
    <Button
      onClick={() => {
        setRobStep("method-selection");
        setView(null);
      }}
      acent="yellow"
      className="shadow-custom flex text-[1.13em] flex-row justify-center items-center gap-2 rounded-2xl"
    >
      <span>{localization["alarm_screen.home_button"]}</span>
    </Button>
  );
};

export default GoHomeSheet;
