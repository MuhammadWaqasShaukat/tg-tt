import ImageBox from "../ImageBox";
import { LeagueAssests } from "@/constants/leagues";
import { useRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { LeagueCardProp } from "@/types/Card.t";
import { getLevelStars } from "@/utils/getLevelStars";

const UserLeague: React.FC<LeagueCardProp> = ({
  league,
  leagueId,
  allowDetails = true,
  className,
}) => {
  const [, setView] = useRecoilState(CurrentViewState);

  const viewLeagues = () => {
    setView("league-info");
  };

  return (
    <div
      className={`${className} flex flex-row justify-between items-center bg-[#FFFBF9] w-full rounded-2xl p-4`}
      onClick={() => (allowDetails ? viewLeagues() : null)}
    >
      <div className="  flex-row flex justify-start items-center ">
        <ImageBox
          className=" w-[18.4vw] aspect-square max-h-[76px] max-w-[76px] shadow-custom-2"
          imageURL={LeagueAssests[league].face}
        />
        <div className="flex flex-col justify-start  px-2 py-0.5 gap-3 rounded-lg">
          <h3 className=" text-[1.625em] text-[#39444D] capitalize">
            {league === "beginner" ? "pickpocket" : league}
          </h3>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <div className="grid grid-cols-6 ">
                {getLevelStars(leagueId, league)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {allowDetails && (
        <button className=" bg bg-icon-arrow h-4 w-4 aspect-square rotate-180"></button>
      )}
    </div>
  );
};

export default UserLeague;
