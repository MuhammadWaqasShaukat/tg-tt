import ImageBox from "@/components/UI/ImageBox";
import ImprovedAchievement from "@/components/UI/ImprovedAchievement";
import Pill2 from "@/components/UI/Pills/Pill2";
import { localizationState } from "@/store/localizations";
import { useRecoilValue } from "recoil";

const InJail = () => {
  const localization = useRecoilValue(localizationState);

  return (
    <div className=" flex flex-col justify-start items-start gap-6 w-full">
      <div className="flex flex-col items-center justify-center w-full p-2 rounded-2xl gap-9">
        <ImageBox
          className="w-[34.8vw] aspect-square max-h-36 max-w-36 overflow-hidden !rounded-3xl"
          imageURL="./images/in-jail-sm.png"
          imageSize=" w-[34.8vw] aspect-square max-h-36 max-w-36"
        />
        <p className="text-[1.375em] tracking-tight font-josefin text-light-brown text-center leading-7">
          You have been caught and you ended up in Jail. The player who caught
          you will keep all the LOOT in your pockets now.
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
            count={"89,000"}
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
          localizationKey="achievements_screen.type_sneaky"
          achievement="sloppy"
        />
      </div>
    </div>
  );
};

export default InJail;
