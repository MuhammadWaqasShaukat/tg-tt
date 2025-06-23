import IconButton from "@/components/UI/Buttons/IconButton";
import StolenAmount from "@/components/UI/Cards/StolenAmount";
import Divider from "@/components/UI/Divider";
import ImageBox from "@/components/UI/ImageBox";
import { LeagueAssests } from "@/constants/leagues";
import useGetRobVictimLeague from "@/hooks/useGetRobVictimLeague";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { userState } from "@/store/User";
import { LeagueNames } from "@/types/User.t";
import { useRecoilValue } from "recoil";
import RobberyInfo from "./RobberyInfo";

const InProgress = () => {
  const inProgressRobbery = useRecoilValue(inProgressRobberyState);
  const user = useRecoilValue(userState);
  const { getVictimLeague } = useGetRobVictimLeague();
  const victimLeague = getVictimLeague();
  // const localization = useRecoilValue(localizationState);

  const getFormatedNumber = () => {
    if (user && user.iAmRobbing && user.iAmRobbing.goldShouldSteal) {
      return inProgressRobbery!.goldShouldSteal.toLocaleString();
    }
    return 0;
  };

  return (
    <>
      <div className=" flex flex-col justify-start items-start gap-6 w-full ">
        <div className="flex flex-col items-center justify-center w-full p-2 rounded-2xl">
          <div className="relative">
            <ImageBox
              className=" w-[23.18vw] aspect-square max-h-24 max-w-24 overflow-hidden !rounded-2xl"
              imageURL={LeagueAssests[victimLeague.league as LeagueNames].face}
              imageSize="w-[23.18vw] aspect-square max-h-24 max-w-24"
            />
            <IconButton
              acent="brown"
              className="!rounded-xl aspect-square absolute -top-4 -right-4 size-10"
              onClick={() => {}}
            >
              <div className="size-6 bg bg-icon-attack"></div>
            </IconButton>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div className="bg bg-chip-loot w-[13.5vw] aspect-square max-h-14 max-w-14"></div>
              <StolenAmount />
            </div>
            <p>
              <span className=" font-medium font-josefin text-[1.375em] -tracking-tight">
                Stolen out of
              </span>
              &nbsp;
              <span className=" font-josefin font-bold text-[1.375em] -tracking-tighter">
                {getFormatedNumber()}
              </span>
            </p>
          </div>
        </div>
        <Divider />
        <RobberyInfo />
      </div>
    </>
  );
};

export default InProgress;
