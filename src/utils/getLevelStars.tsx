import { TIERS_STARS } from "@/constants/tiersStars";
import { nameToTierMap } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";

export const getLevelStars = (levelNo: number, league: LeagueNames) => {
  let stars: JSX.Element[] = [];

  const levels = nameToTierMap[league] < 6 ? 3 : 2;
  const filledStarlength = TIERS_STARS[levelNo].filledStars;

  const unFilledStarLength = levels - filledStarlength;

  if (league) {
    for (let i = 0; i < filledStarlength; i++) {
      stars.push(
        <div className="w-5 h-5" key={i * levelNo + "filled"}>
          <div className="w-full h-full bg bg-icon-star-filled"></div>
        </div>
      );
    }
    for (let i = 0; i < unFilledStarLength; i++) {
      stars.push(
        <div className="w-5 h-5" key={i * levelNo + "not-filled"}>
          <div className="bg bg-icon-star w-[96.5%] h-[96.5%]"></div>
        </div>
      );
    }
  }

  return stars;
};
