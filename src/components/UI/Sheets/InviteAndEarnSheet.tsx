import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../Buttons";
import { localizationState } from "@/store/localizations";
import { CurrentModalState } from "@/store/currentModal";
import { userState } from "@/store/User";
import TutorialArrow from "../TutorialArrow";
import { useEffect } from "react";
import { enableTourElements } from "@/utils/tourGuideHelper";

const InviteAndEarnSheet = () => {
  const localization = useRecoilValue(localizationState);
  const setModal = useSetRecoilState(CurrentModalState);
  const loggedInUser = useRecoilValue(userState);
  useEffect(() => {
    enableTourElements();
  }, []);
  return (
    <Button
      data-tour-step="4"
      onClick={() => {
        setModal("invite-and-earn");
      }}
      acent="yellow"
      className="shadow-custom flex text-[1.13em] flex-row justify-center items-center gap-2 rounded-2xl"
    >
      {loggedInUser?.tutorial && <TutorialArrow className="-top-14" />}

      <span>{localization["catch_thief_screen.invite_friends_button"]}</span>
    </Button>
  );
};

export default InviteAndEarnSheet;
