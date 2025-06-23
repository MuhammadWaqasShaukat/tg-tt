import IconButton from "@/components/UI/Buttons/IconButton";
import ImageBox from "@/components/UI/ImageBox";
import ImprovedAchievement from "@/components/UI/ImprovedAchievement";
import { LeagueAssests } from "@/constants/leagues";
import useGetRobVictimLeague from "@/hooks/useGetRobVictimLeague";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { localizationState } from "@/store/localizations";
import { formatCompactNumber } from "@/utils/formatNumber";
import { getFormatedText } from "@/utils/getFormatedText";
import { useRecoilValue } from "recoil";

const RobberySuccessful = () => {
  const inProgressRobbery = useRecoilValue(inProgressRobberyState);
  const { getVictimLeague } = useGetRobVictimLeague();
  const victimLeague = getVictimLeague();

  const localization = useRecoilValue(localizationState);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6 ">
      <div className="flex flex-col items-center justify-center w-full gap-6 p-2 rounded-2xl">
        <div className="relative">
          <ImageBox
            className="w-[34.8vw] aspect-square max-h-36 max-w-36 overflow-hidden !rounded-3xl"
            imageURL={LeagueAssests[victimLeague.league].face}
            imageSize="w-[34.8vw] aspect-square max-h-36 max-w-36"
          />
          <IconButton
            acent="green"
            className="!aspect-square absolute -top-4 -right-4 rounded-lg  size-10"
            onClick={() => {}}
          >
            <div className="size-5 bg bg-icon-checked"></div>
          </IconButton>
        </div>
        <p className=" text-[1.375em] font-josefin w-full text-center ">
          {getFormatedText(
            localization["success_screen.info"],
            inProgressRobbery?.victimUsername || ""
          )}
          {/* <span className="capitalize ">
            {inProgressRobbery?.victimUsername}!
          </span> */}
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <div className="bg bg-chip-loot w-[13.5vw] aspect-square max-h-14 max-w-14 mt-2"></div>
            <p className=" text-[4em] leading-none">
              {formatCompactNumber(inProgressRobbery?.goldShouldSteal ?? 0)}
            </p>
          </div>
          <p>
            <span className=" font-medium font-josefin block text-[1.375em] text-center w-full tracking-tight">
              {/* Stolen out of */}
              {getFormatedText(
                localization["success_screen.stolen"],
                (inProgressRobbery?.goldShouldSteal ?? 0).toLocaleString()
              )}
            </span>
            {/* &nbsp;
            <span className=" font-josefin font-bold text-[1.375em] tracking-tighter">
              {inProgressRobbery?.goldShouldSteal}
            </span> */}
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      <div className="flex flex-col items-start justify-start w-full gap-2 ">
        <p className="text-[1.375em] tracking-tight font-josefin text-light-brown">
          {localization["catch_thief.improved_achievement_title"]}
        </p>

        <ImprovedAchievement
          tooltip={null}
          localizationKey="achievements_screen.type_sneaky"
          achievement="sneaky"
        />

        <ImprovedAchievement
          tooltip={null}
          localizationKey="achievements_screen.type_crafty"
          achievement="crafty"
        />

        <ImprovedAchievement
          tooltip={null}
          localizationKey="achievements_screen.type_rich"
          achievement="rich"
        />
      </div>
    </div>
  );
};

export default RobberySuccessful;
