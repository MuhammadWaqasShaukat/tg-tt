import { useRecoilValue, useSetRecoilState } from "recoil";
import { AchivementImageURLS } from "@/constants/achivementsImageUrls";
import { AchievementRowProp } from "@/types/Achievement.t";
import ImageBox from "../../ImageBox";
import Pill from "../../Pills";
import { CurrentViewState } from "@/store/currentView";
import { CurrentModalState } from "@/store/currentModal";
import { CurrentModalType } from "@/types/CurrentModal.t";
import { currentAchivementState } from "@/store/achievement";
import { formatCompactNumberHome } from "@/utils/formatNumber";
import { localizationState } from "@/store/localizations";

const PrizePoolIcon = ({ clkHandler }: { clkHandler: () => void }) => {
  return (
    <div
      onClick={clkHandler}
      className=" h-[42px] w-[42px] bg-icon-achievement"
    ></div>
  );
};
const LeaderBoardIcon = ({ clkHandler }: { clkHandler: () => void }) => {
  return (
    <div
      onClick={clkHandler}
      className=" h-[42px] w-[42px] bg-icon-achievement-leaderboard"
    ></div>
  );
};

const AchievementRow: React.FC<AchievementRowProp> = (achievement) => {
  const setView = useSetRecoilState(CurrentViewState);
  const setAchievement = useSetRecoilState(currentAchivementState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const localization = useRecoilValue(localizationState);

  const openLeaderBoard = () => {
    setAchievement(achievement);
    setView("leaderboard");
  };

  const openAchievementModal = () => {
    setAchievement(achievement);
    setCurrentModal(achievement.name as CurrentModalType);
  };
  return (
    <div className="py-4 flex flex-row justify-between items-center w-full gap-10  border-t border-[#5A1319] border-opacity-20">
      <div className="flex flex-row items-center justify-start flex-1">
        <div onClick={openAchievementModal}>
          <ImageBox
            imageURL={AchivementImageURLS[achievement.name]}
            className=" max-w-[42px] max-h-[42px] cursor-pointer"
          />
        </div>
        <div className=" ml-4 ">
          <h2 className=" text-[1.25em] font-bold font-josefin tracking-tight leading-4 capitalize">
            {localization[`achievements_screen.type_${achievement.name}`]}
          </h2>
        </div>
      </div>
      <Pill
        pilltext={`${formatCompactNumberHome(
          achievement.currentAmount
        )} / ${formatCompactNumberHome(achievement.requiredAmount)}`}
      />
      {achievement.hasLeaderboardForCurrentMonth &&
      achievement.hasPrizePoolForCurrentMonth ? (
        <PrizePoolIcon clkHandler={openLeaderBoard} />
      ) : achievement.hasLeaderboardForCurrentMonth ? (
        <LeaderBoardIcon clkHandler={openLeaderBoard} />
      ) : (
        <div className=" h-[42px] w-[42px]"></div>
      )}
    </div>
  );
};

export default AchievementRow;
