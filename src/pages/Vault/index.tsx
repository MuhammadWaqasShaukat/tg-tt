import React, { useEffect } from "react";
import { Page } from "@/components/UI/Page";
import Pill2 from "@/components/UI/Pills/Pill2";
import { PageProps } from "@/types/Page.t";
import Pill from "@/components/UI/Pills";
import PillButton from "@/components/UI/Buttons/PillButton";
import VaultSheet from "@/components/UI/Sheets/VaultSheet";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/store/User";
import UserLeague from "@/components/UI/Cards/LeagueCard";
import { CurrentModalState } from "@/store/currentModal";
import { animationState } from "@/store/animation";
import { getShopItemByType } from "@/utils/getShopItem";
import { shopState } from "@/store/shop";
import { formatCompactNumber } from "@/utils/formatNumber";
import { ToolReqType } from "@/types/ToolReqBody.t";
import { useToolQuery } from "@/hooks/useTool";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { leagueState } from "@/store/userLeagues";
import { LeagueNames } from "@/types/User.t";
import { myLeagueState } from "@/store/myLeague";
import { localizationState } from "@/store/localizations";
import Timer from "@/components/UI/Timer";
import WithDraw from "./__components/WithDraw";
import PaidUpgrade from "./__components/PaidUpgrade";
import NaturalUpgrade from "./__components/NaturalUpgrade";
import { CurrentViewState } from "@/store/currentView";
import { upgradeTypeState } from "@/store/upgradeType";
import { useInfoModal } from "@/hooks/useInfoModal";
import { VaultNotification } from "@/types/App.t";
import { VAULT_NOTIFICATION } from "@/constants/vars";
import {
  dismissNotification,
  notificationLocalStorageHelper,
} from "@/utils/dissMissRobNotification";
import { attentionViewState } from "@/store/attentionView";
import { CallbackModalState } from "@/store/callbackModal";

const Vault: React.FC<PageProps> = ({ onClose }) => {
  const user = useRecoilValue(userState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const shop = useRecoilValue(shopState);
  const myLeague = useRecoilValue(myLeagueState);
  const localization = useRecoilValue(localizationState);
  const setView = useSetRecoilState(CurrentViewState);
  const [animation] = useRecoilState(animationState);

  const { openInfoModal } = useInfoModal();

  const expiryTimestamp = new Date(user?.vaultActiveUntil as Date);
  const vault = getShopItemByType(shop, "reinforcedVault", "homeItems");
  const { getVaultCap, getVaultStatus } = useVaultInfo();
  const { mutate: useTool } = useToolQuery();
  const setAttentionView = useSetRecoilState(attentionViewState);

  let viewTitle = localization["vault_screen.title"];

  const [, setCallBackModal] = useRecoilState(CallbackModalState);

  const userLeagues = useRecoilValue(leagueState);
  const _leagueId = user && user?.leagueId < 25 ? user?.leagueId + 1 : 2;
  const newLeagueLevel = animation
    ? getLeagueLevel(userLeagues as LeagueLevelType, user?.leagueId as number)
    : getLeagueLevel(userLeagues as LeagueLevelType, _leagueId);

  const body: ToolReqType = {
    usedFrom: 4,
    tools: [
      {
        toolId: vault?.toolId as string,
        count: 1,
      },
    ],
  };

  const [upgradeType, setUpgradeType] = useRecoilState(upgradeTypeState);
  useEffect(() => {
    if (getVaultStatus() >= 100) {
      setUpgradeType("normal");
    } else {
      setUpgradeType("paid");
    }

    let vaultNotification: VaultNotification | null =
      notificationLocalStorageHelper(VAULT_NOTIFICATION);

    if (
      vaultNotification &&
      vaultNotification.notifType &&
      vaultNotification.notified
    ) {
      dismissNotification(VAULT_NOTIFICATION, false, () => {
        setAttentionView("downgraded");
        setCallBackModal(null);
      });
    }
  }, []);

  const handleUpgradeBtnClick = () => {
    if (!user || !newLeagueLevel) return;
    if (upgradeType === "paid") {
      setView("upgrade-league-faster");
    } else {
      setView("upgrade-league-level");
    }
  };

  return (
    <Page
      id="vault-view"
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle={viewTitle}
      Sheet={{ StaticSheet: <VaultSheet /> }}
      className="!gap-4"
    >
      <div className="flex flex-col items-start justify-start gap-2 ">
        {user && (
          <Pill2
            accent="red"
            count={user.vaultGold.toLocaleString()}
            className="text-[2.25em] text-white -ml-3 pl-4"
            extended={true}
            extendedText={formatCompactNumber(getVaultCap() ?? 0)}
            onClickInfo={() => {
              openInfoModal("vault_screen.info_tip_max_amount_vault");
            }}
          >
            <div className="max-w-[96px] w-[20.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px] relative">
              <div className="absolute z-20 -top-1 -right-1">
                <Pill pilltext={`${getVaultStatus()?.toFixed(1)}%`} />
              </div>
              <div className="bg bg bg-chip-vault bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        )}
        <div className="space-y-4 ">
          <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
            {localization["vault_screen.info"]}
          </span>
          <div className="flex flex-row items-center justify-between w-full ">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div
                className="size-5 bg bg-icon-info"
                onClick={() => {
                  openInfoModal("vault_screen.info_tip_vault_reinforcement");
                }}
              ></div>
              <p className=" text-light-brown text-[1em]">
                Vault Reinforcement
              </p>
            </div>
            <div className="ml-auto">
              {user && !user.vaultActiveUntil && vault?.count == 0 ? (
                <PillButton
                  onClick={() => {
                    setCurrentModal("reinforcement-vault");
                  }}
                  acent="green"
                  className="text-[1em] flex flex-row justify-center items-center gap-2 !rounded-2xl"
                >
                  <span> Get</span>
                  <Pill2
                    accent="brown"
                    count={<>{vault?.baseTokenPrice.toLocaleString()}</>}
                    className="text-[1em] -ml-2 pl-1"
                  >
                    <div className=" w-[5.80vw]  aspect-square max-h-6 max-w-6 mx-auto flex flex-col justify-center items-center z-10 relative">
                      <div className="bg bg-chip-coin bg-center h-[100%] w-[100%] "></div>
                    </div>
                  </Pill2>
                </PillButton>
              ) : user && user.vaultActiveUntil ? (
                <div className=" bg-yellow flex flex-row justify-center items-center w-max gap-x-1.5 py-1 px-3 rounded-[10px]">
                  <div className="w-[3.38vw] aspect-square max-h-[14px] max-w-[14px]">
                    <div className="w-full h-full bg bg-icon-clock"></div>
                  </div>
                  <p className=" whitespace-nowrap text-[.875em] ">
                    <Timer
                      expiryTimestamp={new Date(expiryTimestamp as Date)}
                    />
                  </p>
                </div>
              ) : (
                <PillButton
                  onClick={() => useTool(body)}
                  acent="yellow"
                  className="text-[0.875em] flex flex-row justify-center items-center gap-2"
                >
                  <span> Use Now</span>
                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </PillButton>
              )}
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#CEACA7] w-full"></div>
        {user && (
          <UserLeague
            league={myLeague?.league as LeagueNames}
            leagueId={user.leagueId}
            allowDetails
          />
        )}
      </div>
      <div className="bg-[#F7E3DA] w-full p-6 rounded-2xl flex flex-col justify-center items-center gap-6">
        {upgradeType === "normal" ? (
          <NaturalUpgrade clkHandler={handleUpgradeBtnClick} />
        ) : (
          <PaidUpgrade clkHandler={handleUpgradeBtnClick} />
        )}
        <WithDraw />
      </div>
    </Page>
  );
};

export default Vault;
