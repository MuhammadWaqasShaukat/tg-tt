import ImageBox from "../../ImageBox";
import Divider from "../../Divider";
import Pill2 from "../../Pills/Pill2";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";
import { AchivementImageURLS } from "@/constants/achivementsImageUrls";
import { AchievementType } from "@/types/Achievement.t";
import { localizationState } from "@/store/localizations";
import { getFormatedText } from "@/utils/getFormatedText";
import { Button } from "../../Buttons";
import { CurrentViewState } from "@/store/currentView";
import { currentAchivementState } from "@/store/achievement";
import { useInfoModal } from "@/hooks/useInfoModal";

const Achievement = () => {
  const [currentModal, setCurrentModal] = useRecoilState(CurrentModalState);
  const setView = useSetRecoilState(CurrentViewState);
  const localization = useRecoilValue(localizationState);
  const achievement = useRecoilValue(currentAchivementState);
  const openLeaderBoard = () => {
    setCurrentModal(null);
    setView("leaderboard");
  };

  const { openInfoModal } = useInfoModal();

  return (
    <div className=" flex flex-col justify-center items-center w-full space-y-4">
      <ImageBox
        className=" w-[36.23vw] max-w-[150px] max-h-[150px] overflow-hidden !rounded-3xl border-[#F0DAD2] border-[3px] shadow-custom-3"
        imageURL={
          currentModal
            ? AchivementImageURLS[currentModal as AchievementType]
            : undefined
        }
        imageSize="w-[36.23vw] max-w-[150px] max-h-[150px]"
      />

      <span className=" font-josefin text-[1.25em] font-bold px-6 leading-6 text-[#5A1319]">
        {getFormatedText(
          localization[
            `achievements_screen.type_${
              currentModal as AchievementType
            }_description`
          ],
          String(achievement?.requiredAmount.toLocaleString()) ?? "0"
        )}
      </span>
      <Divider className="px-2" />
      <div className=" flex flex-row justify-between items-center  w-full py-2.5 rounded-md">
        <div className="flex flex-row items-center justify-start gap-2 ">
          <div
            className="size-5 bg bg-icon-info aspect-square"
            onClick={() => openInfoModal("achievements_screen.info_tip")}
          ></div>
          <span className=" text-light-brown text-[1em]">Reward</span>
        </div>
        <Pill2
          accent="grey"
          count={"50"}
          className="text-[1em] text-white -ml-2 pl-2 z-[9] !rounded-md !py-0.5"
        >
          <div className="w-[5.80vw] aspect-square max-h-6 max-w-6 mx-auto flex flex-col justify-center items-center z-10 relative">
            <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
          </div>
        </Pill2>
      </div>
      {achievement?.hasLeaderboardForCurrentMonth && (
        <Button
          acent="yellow"
          className="!text-[1rem]"
          onClick={openLeaderBoard}
        >
          View Leaderboard
        </Button>
      )}
    </div>
  );
};

export default Achievement;
