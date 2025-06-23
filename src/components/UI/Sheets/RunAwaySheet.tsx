import { Button } from "../Buttons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { CurrentModalState } from "@/store/currentModal";
import { localizationState } from "@/store/localizations";

const RunAwaySheet = () => {
  const inProgressRobbery = useRecoilValue(inProgressRobberyState);
  const setModal = useSetRecoilState(CurrentModalState);
  const localization = useRecoilValue(localizationState);

  return (
    <>
      <div className="space-y-1 ">
        <p className="text-center text-[1.375em] tracking-tight font-josefin text-light-brown">
          You successfully robbed &nbsp;
          <span className=" text-brown">
            {inProgressRobbery?.victimUsername} and ran away.
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-8 ">
        <Button
          onClick={() => setModal("invite-and-earn")}
          acent="yellow"
          className="flex flex-row justify-center items-center gap-3 text-[1.25em] relative rounded-2xl"
        >
          <span className="capitalize ">
            {localization["catch_thief_screen.invite_friends_button"]}
          </span>
        </Button>
      </div>
    </>
  );
};

export default RunAwaySheet;
