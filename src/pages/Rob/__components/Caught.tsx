import ImageBox from "@/components/UI/ImageBox";
import ImprovedAchievement from "@/components/UI/ImprovedAchievement";
import Pill2 from "@/components/UI/Pills/Pill2";
import { LeagueAssests } from "@/constants/leagues";
import { localizationState } from "@/store/localizations";
import { userState } from "@/store/User";
import { useRecoilValue } from "recoil";

const Caught = () => {
  const user = useRecoilValue(userState);
  const localization = useRecoilValue(localizationState);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6 ">
      <div className="flex flex-col items-center justify-center w-full p-2 rounded-2xl gap-9">
        <ImageBox
          className="w-[34.8vw] aspect-square max-h-36 max-w-36  overflow-hidden !rounded-3xl"
          imageSize="min-w-[115%] mt-4 -ml-2"
          imageURL={LeagueAssests["masters"].casual}
        />
        <p className="text-[1.375em] tracking-tight font-josefin text-light-brown text-center leading-7">
          You have been caught by {user?.username}! Getting caught prior the
          first 5 minutes of the robbery, results in losing some amount from
          your robbery.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center justify-start gap-2 ">
          <div className="size-5 bg bg-icon-info"></div>
          <p className="text-[1em] text-light-brown">You have lost</p>
        </div>
        <div className="ml-auto">
          <Pill2
            accent="red"
            count={"30"}
            className="text-[1em] text-white -ml-2 pl-1 z-[9] !rounded-r-md py-0.5"
          >
            <div className="w-[5.80vw] aspect-square max-h-[38px] max-w-[38px] mx-auto flex flex-col justify-center items-center z-10 relative">
              <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
            </div>
          </Pill2>
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
          localizationKey="achievements_screen.type_sloppy"
          achievement="sloppy"
        />
      </div>
    </div>
  );
};

export default Caught;
