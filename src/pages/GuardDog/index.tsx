import Pill2 from "@/components/UI/Pills/Pill2";
import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import GuardDogSheet from "@/components/UI/Sheets/GuardDogSheet";
import { shopState } from "@/store/shop";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getShopItemByType } from "@/utils/getShopItem";
import { sheetState } from "@/store/sheetStatus";
import { useEffect } from "react";
import { localizationState } from "@/store/localizations";
import { userState } from "@/store/User";
import ImprovedAchievement from "@/components/UI/ImprovedAchievement";

const GuardDog: React.FC<PageProps> = ({ onClose }) => {
  const localization = useRecoilValue(localizationState);
  const user = useRecoilValue(userState);

  const shop = useRecoilValue(shopState);
  const temporaryGuards = getShopItemByType(
    shop,
    "temporaryGuards",
    "homeItems"
  );

  const setSheetEnabled = useSetRecoilState(sheetState);

  useEffect(() => {
    if (
      temporaryGuards &&
      temporaryGuards.count == 0 &&
      !user?.canUseFreeGuard
    ) {
      setSheetEnabled(false);
    }
  }, [temporaryGuards, user]);

  return (
    <Page
      id="guard-dog-view"
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle={localization["guards_screen.title"]}
      Sheet={{
        StaticSheet: <GuardDogSheet temporaryGuards={temporaryGuards} />,
      }}
    >
      <div className="flex flex-col items-start justify-start h-full space-y-4 ">
        <Pill2
          accent="red"
          count={`x${temporaryGuards?.count}`}
          className="text-[2.6em] text-white"
        >
          <div className=" border-3 border-[#F0DAD2] bg-white aspect-square max-w-[76px] w-[18.35vw] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-gaurd-dog bg-center h-[100%] w-[100%] rounded-xl"></div>
          </div>
        </Pill2>
        <div className="space-y-4 ">
          <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
            {localization["guards_screen.info"]}
          </span>
          <ul className="px-4 space-y-4 list-disc">
            <li>
              <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
                {localization["guards_screen.info_1"]}
              </span>
            </li>
            <li>
              <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
                {localization["guards_screen.info_2"]}
              </span>
            </li>
            <li>
              <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
                {localization["guards_screen.info_3"]}
              </span>
            </li>
            <li>
              <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
                {localization["guards_screen.info_4"]}
              </span>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <p className="text-[1em] tracking-tightn font-medium font-josefin text-light-brown">
          {localization["guards_screen.info_tip_heading"]}
        </p>

        <ImprovedAchievement
          tooltip={null}
          localizationKey="achievements_screen.type_sleepy"
          achievement="sleepy"
        />
      </div>
    </Page>
  );
};

export default GuardDog;
