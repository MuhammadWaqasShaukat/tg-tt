import { Button } from "../Buttons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";
import usePocketInfo from "@/hooks/useGetPocketCap";
import { userState } from "@/store/User";
import { localizationState } from "@/store/localizations";
import TutorialArrow from "../TutorialArrow";
import { useEffect } from "react";
import { enableTourElements } from "@/utils/tourGuideHelper";

const RobMethodSheet: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const loggedInUser = useRecoilValue(userState);

  const setModal = useSetRecoilState(CurrentModalState);
  const localization = useRecoilValue(localizationState);
  const { getPocketStatus } = usePocketInfo();
  useEffect(() => {
    enableTourElements();
  }, []);
  const handleRobNow = () => {
    if (getPocketStatus()) {
      setModal("pockets-full");
      return;
    }
    onNext();
  };

  return (
    <Button
      data-tour-step="3"
      onClick={handleRobNow}
      acent="yellow"
      className="shadow-custom flex flex-row justify-center items-center text-[1.125em] gap-2 rounded-2xl relative "
    >
      {loggedInUser?.tutorial && <TutorialArrow className="-top-14" />}
      <span>{localization["consumable_screen.button"]}</span>
    </Button>
  );
};

export default RobMethodSheet;
