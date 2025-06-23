import { Button } from "@/components/UI/Buttons";
import IconButton from "@/components/UI/Buttons/IconButton";
import Pill2 from "@/components/UI/Pills/Pill2";
import { Page } from "@/components/UI/Page";
import { CurrentModalState } from "@/store/currentModal";
import { PageProps } from "@/types/Page.t";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ProfileSheet from "@/components/UI/Sheets/ProfileSheet";
import UserLeague from "@/components/UI/Cards/LeagueCard";
import { userState } from "@/store/User";
import { animationState } from "@/store/animation";
import { formatCompactNumber } from "@/utils/formatNumber";
import { useDepositInVaultQuery } from "@/hooks/useDepositInVault";
import usePocketInfo from "@/hooks/useGetPocketCap";
import { LeagueNames } from "@/types/User.t";
import { myLeagueState } from "@/store/myLeague";
import { useInfoModal } from "@/hooks/useInfoModal";
import TutorialArrow from "@/components/UI/TutorialArrow";
import { enableTourElements } from "@/utils/tourGuideHelper";
import ProfileToolSheet from "@/components/UI/Sheets/profileToolSheet";

const Preferences = () => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);

  return (
    <IconButton
      acent="ghost"
      className="ml-auto"
      onClick={() => {
        setCurrentModal("profile-info");
      }}
    >
      <div className="w-6 h-6 bg bg-icon-gear"></div>
    </IconButton>
  );
};

const Profile: React.FC<PageProps> = ({ onClose, pageTitle }) => {
  const user = useRecoilValue(userState);
  const [animation, setAnimation] = useRecoilState(animationState);
  const [fadeOut, setFadeOut] = useState(false);
  const myLeague = useRecoilValue(myLeagueState);

  const { mutate: depositInvault } = useDepositInVaultQuery();
  const { getPocketStatus, getPocketCap } = usePocketInfo();
  const [lockedGold, setLockedGold] = useState<number | null>(null);
  useEffect(() => {
    enableTourElements();
  }, []);

  const { openInfoModal } = useInfoModal();

  useEffect(() => {
    if (lockedGold === null && user?.robberGold != null) {
      setLockedGold(user.robberGold);
    }
  }, [user, lockedGold]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    if (animation) {
      timer = setTimeout(() => {
        setFadeOut(true);
        clearTimeout(timer);
      }, 4500);
      removeTimer = setTimeout(() => {
        setAnimation(null);
        clearTimeout(removeTimer);
      }, 6000);
    }
  }, [animation]);

  return (
    <>
      {user &&
        (animation === "wallet-deposit" ? (
          <div
            className={`bg-blue flex flex-col px-[5.8%] items-start w-full h-dvh scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto congrats-screen-bg justify-center ${
              fadeOut ? "fade-out" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full gap-10">
              <div className="congrats-screen-bg h-1/2 w-[110%] absolute pointer-events-none"></div>

              <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-[2.25em] text-center w-2/3">
                  Great job, {user.username}!
                </h1>
                <p className="text-center text-[1.375em]">
                  You’ve deposited {lockedGold?.toLocaleString()}! $LOOT in your
                  Vault.
                </p>
              </div>

              <Pill2
                accent="red"
                count={formatCompactNumber(lockedGold!)}
                className="text-[3.375em] text-white -ml-2 pl-1"
              >
                <div className="w-[28.99vw] max-w-[120px] max-h-[120px] aspect-square mx-auto flex flex-col justify-center items-center z-10 relative">
                  <div className="bg bg-chip-loot bg-center h-[100%] w-[100%]"></div>
                </div>
              </Pill2>
            </div>
          </div>
        ) : (
          <Page
            id="profile-view"
            allowNavigatingBack={true}
            viewControls={() => <Preferences />}
            viewTitle={pageTitle ?? user.username}
            allowSearch={false}
            backBtnClkHandler={onClose}
            Sheet={{
              StaticSheet: <ProfileSheet />,
              DragableSheet: <ProfileToolSheet />,
            }}
            scrollable
            className="!gap-2"
          >
            <UserLeague
              league={myLeague?.league as LeagueNames}
              leagueId={user.leagueId}
              allowDetails
            />

            <div className="space-y-2">
              <h2 className="text-[1.25em] font-medium">$Loot in pockets</h2>

              <Pill2
                accent="red"
                count={user.robberGold.toLocaleString()}
                className="text-[2.25em] text-white -ml-10 pl-10"
                extended={true}
                extendedText={formatCompactNumber(getPocketCap() ?? 0)}
                onClickInfo={() => {
                  openInfoModal("thief_screen.info_tip_max_amount_pockets");
                }}
              >
                <div className="max-w-[96px] w-[20.35vw] aspect-square  z-10 flex flex-col justify-center items-center rounded-[14px] relative">
                  <div className="bg bg bg-chip-loot-pocket bg-center h-[100%] w-[100%] z-10"></div>
                </div>
              </Pill2>
            </div>

            <div
              className={`${
                !getPocketStatus() ? "bg-[#F7E3DA]" : "bg-[#FFE5EB]"
              } w-full p-7 rounded-2xl flex flex-col justify-center items-center gap-6`}
            >
              <Button
                data-tour-step="6"
                disabled={!getPocketStatus()}
                onClick={() => depositInvault()}
                acent="green"
                className="shadow-custom flex flex-row justify-center items-center gap-2 rounded-2xl text-[1.25em] relative py-3"
              >
                {user?.tutorial && user?.robberGold && !user?.vaultGold ? (
                  <TutorialArrow className="-top-14 left-1/2 -translate-x-1/2" />
                ) : (
                  ""
                )}

                <span>Deposit in vault</span>
              </Button>

              {!getPocketStatus() ? (
                <p className="text-[1em] text-center font-josefin font-medium tracking-tighter text-light-brown">
                  Action is available once when you fill up your pockets.
                </p>
              ) : (
                <p className="text-[1em] text-left font-josefin font-medium tracking-tighter text-light-brown">
                  Your pockets can hold limited amount of $LOOT. You can deposit
                  in your Vault only when you fill them up!
                </p>
              )}
            </div>
          </Page>
        ))}
    </>
  );
};

export default Profile;
