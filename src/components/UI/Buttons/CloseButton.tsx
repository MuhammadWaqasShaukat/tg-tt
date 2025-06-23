import { robStepState } from "@/store/robFlow";
import IconButton from "./IconButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/store/User";
import TutorialArrow from "../TutorialArrow";
import { useEffect } from "react";
import { enableTourElements } from "@/utils/tourGuideHelper";

const CloseButton = ({ handleClose }: { handleClose?: () => void }) => {
  const [robStep] = useRecoilState(robStepState);
  const loggedInUser = useRecoilValue(userState);
  useEffect(() => {
    enableTourElements();
  }, []);

  return (
    <IconButton
      data-tour-step="4"
      data-navigation="true"
      acent="brown"
      className="aspect-square w-[18.35vw] min-w-[42px] max-w-[42px] ml-auto !rounded-lg relative"
      onClick={handleClose}
    >
      {robStep === "robbery-success" && loggedInUser?.tutorial && (
        <TutorialArrow className="-bottom-14 -left-14 -rotate-[140deg]" />
      )}

      <div className="w-4 h-4 bg bg-icon-cross"></div>
    </IconButton>
  );
};

export default CloseButton;
