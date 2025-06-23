import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../Buttons";
import { CurrentModalState } from "@/store/currentModal";
import { localizationState } from "@/store/localizations";
import { dismissNotification } from "@/utils/dissMissRobNotification";
import { attentionViewState } from "@/store/attentionView";
import { ROB_NOTIFICATION } from "@/constants/vars";

const GotRobbedSheet = () => {
  const setAttentionView = useSetRecoilState(attentionViewState);
  const setModal = useSetRecoilState(CurrentModalState);
  const localization = useRecoilValue(localizationState);

  return (
    <>
      <Button
        onClick={() => setModal("invite-and-earn")}
        acent="yellow"
        className="shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em]"
      >
        <span>{localization["catch_thief_screen.invite_friends_button"]}</span>
      </Button>
      <Button
        onClick={() =>
          dismissNotification(ROB_NOTIFICATION, true, () => {
            setAttentionView(null);
          })
        }
        acent="ghost"
        className="border border-[#CEACA7] shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em] rounded-2xl"
      >
        <span>Skip For Now</span>
      </Button>
    </>
  );
};

export default GotRobbedSheet;
