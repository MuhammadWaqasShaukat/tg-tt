import CloseButton from "@/components/UI/Buttons/CloseButton";
import IconButton from "@/components/UI/Buttons/IconButton";
import ImageBox from "@/components/UI/ImageBox";
import ImprovedAchievement from "@/components/UI/ImprovedAchievement";
import { Page } from "@/components/UI/Page";
import InviteAndEarnSheet from "@/components/UI/Sheets/InviteAndEarnSheet";
import { LeagueAssests } from "@/constants/leagues";
import { caughtThiefState } from "@/store/caughtThief";
import { localizationState } from "@/store/localizations";
import { PageProps } from "@/types/Page.t";
import { getFormatedText } from "@/utils/getFormatedText";
import { differenceInMinutes, parseISO } from "date-fns";
import React from "react";
import { useRecoilValue } from "recoil";

const CatchThief: React.FC<PageProps> = ({ onClose }) => {
  const caughtThief = useRecoilValue(caughtThiefState);
  const localization = useRecoilValue(localizationState);
  const now = new Date();
  const minutesAgo = differenceInMinutes(
    now,
    parseISO(caughtThief?.thief.startedOn as string)
  );

  if (!caughtThief) return;

  return (
    <Page
      id="catch-thief-view"
      allowNavigatingBack={false}
      allowSearch={false}
      viewTitle={localization["catch_thief_screen.title"]}
      Sheet={{ StaticSheet: <InviteAndEarnSheet /> }}
      viewControls={() => <CloseButton handleClose={onClose} />}
    >
      <div className="flex flex-col items-start justify-start w-full gap-6 ">
        <div className="flex flex-col items-center justify-center w-full gap-6 p-2 rounded-2xl">
          <div className="relative">
            <ImageBox
              className="w-[34.8vw] aspect-square max-h-36 max-w-36  overflow-hidden !rounded-3xl"
              imageURL={LeagueAssests["masters"].face}
              imageSize="w-[34.8vw] aspect-square max-h-36 max-w-36  overflow-hidden"
            />
            <IconButton
              acent="green"
              className="!aspect-square absolute -top-4 -right-4 rounded-lg"
              onClick={() => {}}
            >
              <div className="w-5 h-5 bg bg-icon-checked"></div>
            </IconButton>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <p className=" font-josefin text-center text-[1.375em] font-medium text-light-brown leading-7 tracking-tight">
              {caughtThief?.caught &&
                (caughtThief?.caught.wentToPrison ? (
                  <span>
                    {getFormatedText(
                      localization?.["catch_thief.catch_prison"],
                      caughtThief?.thief.userName
                    )}
                  </span>
                ) : minutesAgo <= 5 && !caughtThief?.caught.wentToPrison ? (
                  <span>
                    {getFormatedText(
                      localization?.["catch_thief.catch_until_five"],
                      caughtThief?.thief.userName
                    )}
                  </span>
                ) : (
                  <span>
                    {getFormatedText(
                      localization?.["catch_thief.catch_after_five"],
                      caughtThief?.thief.userName
                    )}
                  </span>
                ))}
            </p>
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div className="bg bg-chip-loot w-[13.5vw] aspect-square max-h-14 max-w-14"></div>

              <p className=" text-[4em]">
                {caughtThief?.caught && minutesAgo < 5
                  ? caughtThief.caught.goldStolen.toLocaleString()
                  : (
                      caughtThief.caught.goldStolen +
                      caughtThief.caught.goldTaken
                    ).toLocaleString()}
              </p>
            </div>
            {minutesAgo < 5 && !caughtThief?.caught.wentToPrison && (
              <span className="font-josefin text-center text-[#5A1319B2] text-[1.375em] font-medium tracking-tighter">
                Out of{" "}
                <span className="font-bold text-brown">
                  {(
                    caughtThief.caught.goldStolen + caughtThief.caught.goldTaken
                  ).toLocaleString()}
                </span>{" "}
                Stolen
              </span>
            )}
          </div>
        </div>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <div className="flex flex-col items-start justify-start w-full gap-2 ">
          <p className="text-[1.375em] tracking-tight font-josefin text-light-brown">
            {localization["catch_thief.improved_achievement_title"]}
          </p>
          {caughtThief?.caught.wentToPrison && (
            <ImprovedAchievement
              tooltip={{
                tooltipId: "tt-tooltip",
                tooltipContent: localization["guards_screen.info_tip_heading"],
              }}
              localizationKey="achievements_screen.type_vigilant"
              achievement="vigilant"
            />
          )}

          <ImprovedAchievement
            tooltip={{
              tooltipId: "tt-tooltip",
              tooltipContent: localization["guards_screen.info_tip_heading"],
            }}
            localizationKey="achievements_screen.type_cautious"
            achievement="cautious"
          />

          {minutesAgo <= 5 && !caughtThief?.caught.wentToPrison && (
            <ImprovedAchievement
              tooltip={{
                tooltipId: "tt-tooltip",
                tooltipContent: localization["guards_screen.info_tip_heading"],
              }}
              localizationKey="achievements_screen.type_rich"
              achievement="rich"
            />
          )}
        </div>
      </div>
    </Page>
  );
};

export default CatchThief;
