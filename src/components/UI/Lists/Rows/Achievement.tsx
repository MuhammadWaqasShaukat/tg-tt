import { useRecoilState } from "recoil";
import { AchivementImageURLS } from "../../../../constants/achivementsImageUrls";
import { AchievementRowProp } from "../../../../types/Achievement.t";
import ImageBox from "../../ImageBox";
import Pill from "../../Pills";
import { CurrentViewState } from "../../../../store/currentView";

const AchievementRow: React.FC<AchievementRowProp> = ({
  type = "sneaky",
  score = "0",
  hasAward = true,
  achivementTitle,
}) => {
  const [, setView] = useRecoilState(CurrentViewState);

  const openLeaderBoard = () => {
    setView("leaderboard");
  };

  return (
    <div className="pt-4 flex flex-row justify-between items-center w-full gap-10 max-h-[64px] border-t border-[#5A1319] border-opacity-20">
      <div className="flex-1 flex flex-row justify-start items-center">
        <ImageBox imageURL={AchivementImageURLS[type]} />
        <div className=" ml-4 pt-1 space-y-1">
          <h2 className=" text-xl font-bold font-josefin tracking-tight leading-4 capitalize">
            {achivementTitle ?? type}
          </h2>
        </div>
      </div>
      <Pill content={score} />
      {hasAward ? (
        <div
          onClick={openLeaderBoard}
          className=" h-[42px] w-[42px] bg-icon-achievement"
        ></div>
      ) : (
        <div className=" h-[42px] w-[42px]"></div>
      )}
    </div>
  );
};

export default AchievementRow;
