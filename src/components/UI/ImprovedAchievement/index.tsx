import { AchivementImageURLS } from "@/constants/achivementsImageUrls";
import { localizationState } from "@/store/localizations";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ImageBox from "../ImageBox";
import { ImprovedAchievementType } from "@/types/Achievement.t";
import { useEffect } from "react";
import { currentAchivementState } from "@/store/achievement";
import { useAchievementsQuery } from "@/hooks/useAchievements";
// import { CurrentModalState } from "@/store/currentModal";
// import { CurrentModalType } from "@/types/CurrentModal.t";
import { useInfoModal } from "@/hooks/useInfoModal";
import { LocalizationType } from "@/types/localization.t";

const ImprovedAchievement: React.FC<ImprovedAchievementType> = ({
  localizationKey,
  tooltip,
  achievement,
}) => {
  const { data: achievements } = useAchievementsQuery();
  const localization = useRecoilValue(localizationState);
  const setAchievement = useSetRecoilState(currentAchivementState);
  //   const setCurrentModal = useSetRecoilState(CurrentModalState);

  const { openInfoModal } = useInfoModal();

  useEffect(() => {
    if (achievements) {
      const currAchievement = achievements.find((a) => a.name === achievement);
      if (currAchievement) {
        setAchievement(currAchievement);
      }
    }
  }, []);

  const handleAchivementClik = () => {
    const key =
      `achievements_global.info_tip_${achievement}` as keyof LocalizationType;

    // if (tooltip?.tooltipContent) {
    openInfoModal(key);
    //   return;
    // }

    // setCurrentModal(achievement as CurrentModalType);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full ">
      <div className="flex flex-row items-center justify-start gap-2 ">
        <div
          className="size-5 bg bg-icon-info"
          onClick={handleAchivementClik}
          data-tooltip-id={tooltip?.tooltipId ? tooltip?.tooltipId : ""}
          data-tooltip-content={
            tooltip?.tooltipContent ? tooltip?.tooltipContent : ""
          }
        ></div>
        <p className="text-[1em]  text-light-brown">
          {localization[localizationKey]}
        </p>
      </div>
      <div className="ml-auto">
        <ImageBox
          className=" !aspect-square max-w-[42px] max-h-[42px]"
          imageURL={AchivementImageURLS[achievement]}
        />
      </div>
    </div>
  );
};

export default ImprovedAchievement;
