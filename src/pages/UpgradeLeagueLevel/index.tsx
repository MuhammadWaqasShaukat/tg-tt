import Pill2 from "@/components/UI/Pills/Pill2";
import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import React from "react";
import UserLeague from "@/components/UI/Cards/LeagueCard";
import Pill from "@/components/UI/Pills";
import { userState } from "@/store/User";
import { useRecoilValue } from "recoil";
import UpgradeLeagueLevelSheet from "@/components/UI/Sheets/UpgradeLeagueLevelSheet";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { formatCompactNumber } from "@/utils/formatNumber";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import UpgradeLeagueInfo from "@/components/UpgradeLeagueInfo";

const UpgradeLeagueLevel: React.FC<PageProps> = ({ onClose }) => {
  const user = useRecoilValue(userState);

  const { getVaultCap, getVaultStatus } = useVaultInfo();

  const _leagueId = user && user?.leagueId < 25 ? user?.leagueId + 1 : 2;

  const userLeagues = useRecoilValue(leagueState);
  const newLeagueLevel = getLeagueLevel(
    userLeagues as LeagueLevelType,
    _leagueId
  );

  let viewTitle =
    user!.leagueId === 16 ? "Enter Premium Leagues" : "Upgrade League";

  return (
    <Page
      id="upgrade-league-level-view"
      allowNavigatingBack={true}
      viewTitle={viewTitle}
      allowSearch={false}
      backBtnClkHandler={onClose}
      className="!gap-6"
      Sheet={{ StaticSheet: <UpgradeLeagueLevelSheet /> }}
    >
      <Pill2
        accent="red"
        count={user?.vaultGold.toLocaleString() ?? "0"}
        className="text-[2.25em] text-white -ml-3 pl-4"
        extended={true}
        extendedText={formatCompactNumber(getVaultCap() ?? 0)}
      >
        <div className="max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px] relative">
          <div className="absolute z-20 -top-1 -right-1">
            <Pill pilltext={`${getVaultStatus()?.toFixed(1)}%`} />
          </div>
          <div className="bg bg bg-chip-vault bg-center h-[100%] w-[100%] z-10"></div>
        </div>
      </Pill2>

      <UserLeague
        league={newLeagueLevel?.league as LeagueNames}
        leagueId={newLeagueLevel?.leagueId as number}
        allowDetails
      />

      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      <div className="w-full space-y-6 ">
        <p className=" text-[1.375em] font-josefin text-light-brown tracking-tighter">
          The new <span className="font-bold ">Banger</span> League will make
          the:
        </p>
        <UpgradeLeagueInfo
          league={newLeagueLevel!.league}
          index={newLeagueLevel!.index}
        />
      </div>

      {/* <Button
        acent="ghost"
        className=" border-2 border-[#CEACA7] py-3 flex flex-row justify-center items-center gap-2 text-[1em] box-border"
      >
        <span className="">SEE ALL LEAGUES and Levels</span>
        <div className="w-4 h-4 bg bg-icon-arrow-right"></div>
      </Button> */}
    </Page>
  );
};

export default UpgradeLeagueLevel;
