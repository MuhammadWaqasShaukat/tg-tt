import { Button } from "../Buttons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { localizationState } from "@/store/localizations";
import { attentionViewState } from "@/store/attentionView";
import { attentionQueueState } from "@/store/attentionQueue";
import { CurrentModalState } from "@/store/currentModal";

const AttentionSheet = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const localization = useRecoilValue(localizationState);
  const [, setAttentionQueue] = useRecoilState(attentionQueueState);
  const setAttentionView = useSetRecoilState(attentionViewState);
  const setModal = useSetRecoilState(CurrentModalState);

  const onCloseHandler = (fn: () => void) => {
    setAttentionView(null);
    setAttentionQueue((prev) => prev.filter((item) => item !== "downgraded"));
    fn();
  };

  return (
    <>
      <Button
        onClick={() => onCloseHandler(() => setView("hit-list"))}
        acent="yellow"
        className="shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em] rounded-2xl"
      >
        <div className="w-5 h-5 bg bg-icon-attack"></div>
        <span>{localization["home_screen.rob_button"]}</span>
      </Button>
      <Button
        onClick={() => onCloseHandler(() => setModal("invite-and-earn"))}
        acent="ghost"
        className="border border-[#CEACA7] shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em] rounded-2xl"
      >
        <span>{localization["catch_thief_screen.invite_friends_button"]}</span>
      </Button>
    </>
  );
};

export default AttentionSheet;
