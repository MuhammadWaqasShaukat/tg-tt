import CloseButton from "@/components/UI/Buttons/CloseButton";
import UserLeague from "@/components/UI/Cards/LeagueCard";
import { Page } from "@/components/UI/Page";
import AttentionSheet from "@/components/UI/Sheets/AttentionSheet";
import { VAULT_NOTIFICATION } from "@/constants/vars";
import { attentionViewState } from "@/store/attentionView";
import { CallbackModalState } from "@/store/callbackModal";
import { CurrentModalState } from "@/store/currentModal";
import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { VaultNotification } from "@/types/App.t";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { PageProps } from "@/types/Page.t";
import {
  dismissNotification,
  notificationLocalStorageHelper,
} from "@/utils/dissMissRobNotification";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Attention: React.FC<PageProps> = ({ onClose }) => {
  let vaultNotification: VaultNotification | null =
    notificationLocalStorageHelper(VAULT_NOTIFICATION);

  const [downgraded] = useState(vaultNotification?.notifType);
  const user = useRecoilValue(userState);

  const [userLeagues] = useRecoilState(leagueState);
  const _userLeague = getLeagueLevel(
    userLeagues as LeagueLevelType,
    user?.leagueId as number
  );

  const [callBackModal] = useRecoilState(CallbackModalState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);

  const setAttentionView = useSetRecoilState(attentionViewState);

  const handleClose = () => {
    vaultNotification = notificationLocalStorageHelper(VAULT_NOTIFICATION);

    if (vaultNotification) {
      dismissNotification(VAULT_NOTIFICATION, true, () => {
        setAttentionView(null);
      });
      if (callBackModal) {
        setCurrentModal(callBackModal);
      }
    }
  };

  return (
    <Page
      id="attention-view"
      allowNavigatingBack={false}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle=""
      className="bg-red !gap-0 !z-50"
      Sheet={{ StaticSheet: <AttentionSheet /> }}
    >
      <div className="flex w-full flex-row justify-end items-center  gap-3">
        <span className=" text-[2.25em] font-bonld w-full text-right">
          Close
        </span>
        <CloseButton handleClose={handleClose} />
      </div>

      <div className=" flex flex-col justify-center items-center h-full gap-10 mb-4">
        {downgraded == "downgraded" ? (
          <>
            <div className=" flex flex-col justify-center items-center gap-8">
              <h2 className=" text-[2.25em] text-center">
                You’ve Been Downgraded!
              </h2>
              <p className=" font-josefin text-center text-[1.375em]">
                <span className=" font-bold ">{user?.username},</span>
                your League/Tier have been downgraded{" "}
                <span className=" font-bold ">
                  after reaching 0% vault capacity.
                </span>
              </p>
            </div>
            <div className="h-0.5 w-full bg-brown"></div>
            <div className=" flex flex-col justify-center items-center w-full gap-4">
              <span className="text-[1.375em] font-josefin font-bold">
                Your current Tier is:
              </span>
              <UserLeague
                leagueId={_userLeague?.leagueId ?? 1}
                league={_userLeague?.league ?? "pickpocket"}
                allowDetails={false}
              />
            </div>
          </>
        ) : (
          <>
            <div className=" flex flex-col justify-center items-center gap-8">
              <h2 className=" text-[2.25em]">Attention!</h2>
              <p className=" font-josefin text-center text-[1.375em]">
                <span className=" font-bold ">{user?.username},</span> note that
                if your Vault drops below 5%, you will be downgraded to your
                previous level or league.
              </p>
            </div>
            <div className="!h-0.5 w-full bg-brown"></div>
            <div className=" flex flex-col justify-center items-center w-full gap-4">
              <span className="text-[1.375em] font-josefin font-bold">
                Your current league is:
              </span>
              <UserLeague
                leagueId={_userLeague?.leagueId ?? 1}
                league={_userLeague?.league ?? "pickpocket"}
                allowDetails={false}
              />
            </div>
          </>
        )}
      </div>
    </Page>
  );
};

export default Attention;
