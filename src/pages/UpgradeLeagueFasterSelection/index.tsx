import ImageBox from "@/components/UI/ImageBox";
import { Page } from "@/components/UI/Page";
import Pill2 from "@/components/UI/Pills/Pill2";
import { LeagueAssests } from "@/constants/leagues";
import { useLeagueUpgradeTableQuery } from "@/hooks/useLeagueUpgradeTable";
import { useUpGradeLeagueQuery } from "@/hooks/useUpgradeLeague";
import { userState } from "@/store/User";
import { wantedLeagueState } from "@/store/wantedLeague";
import { UpgradeLeagueTableResponse } from "@/types/LeagueLevel";
import { PageProps } from "@/types/Page.t";
import { LeagueNames } from "@/types/User.t";
import {  useRecoilValue, useSetRecoilState } from "recoil";

const UpgradeLeagueFasterSelectionRow = ({
  leagueId,
  price,
  leagueName,
}: UpgradeLeagueTableResponse) => {
  const { mutate: upgradeLeague } = useUpGradeLeagueQuery();
  const setWantedLeague = useSetRecoilState(wantedLeagueState);
  const user = useRecoilValue(userState);
  let shouldDisabled = false;

  if (user) {
    if (user.leagueId === leagueId) {
      shouldDisabled = false;
    }
    if (user.leagueId === leagueId + 1) {
      shouldDisabled = true;
    }
  }

  const handleClick = () => {
    // setInfoView(true);
    setWantedLeague(leagueId);
    const body = {
      upgradeLeagueId: leagueId,
      isUpgradePayed: true,
    };
   upgradeLeague(body);
  };

  return (
    <button
      className="flex flex-row justify-between items-center  w-full gradient-1 rounded-full max-h-[70px] shadow-custom cursor-pointer disabled:opacity-50"
      onClick={handleClick}
      disabled={shouldDisabled}
    >
      <div className="flex flex-row items-center justify-start gap-3 ">
        <ImageBox
          imageURL={LeagueAssests[leagueName.toLowerCase() as LeagueNames].face}
          className=" !rounded-full overflow-hidden w-[18.4vw] aspect-square max-h-[76px] max-w-[76px] gradient-1 -m-1"
        />
        <span className=" text-[1.125em] capitalize">{leagueName}</span>
      </div>
      <div className=" bg-green  px-4 rounded-full  grid  place-content-center max-w-[26.57vw] h-[70px]">
        <Pill2
          accent="brown"
          count={price.toLocaleString()}
          className="text-[1.25em] pl-2 -ml-3.5 py-0.5 rounded-md"
        >
          <div className=" w-[9.18vw] max-h-[38px] max-w-[38px] aspect-square mx-auto flex flex-col justify-center items-center">
            <div className="bg bg-img-star z-10 bg-center h-[100%] w-[100%]"></div>
          </div>
        </Pill2>
      </div>
    </button>
  );
};

const UpgradeLeagueFasterSelection: React.FC<PageProps> = ({ onClose }) => {
  const { data: UpgradeLeagueData } = useLeagueUpgradeTableQuery();

  return (
    <Page
      id="upgrade-league-faster-selection"
      className="!pb-8"
      allowNavigatingBack
      viewTitle="Upgrade League"
      allowSearch={false}
      Sheet={null}
      backBtnClkHandler={onClose}
    >
      <div className="flex flex-col items-start justify-start w-full gap-6 ">
        <p className="text-[1em] tracking-tight font-medium font-josefin text-light-brown leading-5">
          For bigger capacity of your Vault, you need to upgrade. Upgrade is
          possible only when you fill up your Vault 100%. Or by purchase of a
          Bigger Vault in the Premium Leagues
        </p>

        <ul className="px-4 space-y-2 list-disc">
          <li>
            <span className="text-[1em] font-medium tracking-tighter text-light-brown leading-4">
              Allows you to Withdraw{" "}
              <span className="text-[#CEACA7] text-[1em]">$</span>
              LOOT as <span className="text-[#CEACA7] text-[1em]">$</span>TON
            </span>
          </li>
          <li>
            <span className="text-[1em] font-medium tracking-tighter text-light-brown leading-4">
              You can rob more
            </span>
          </li>
          <li>
            <span className="text-[1em] font-medium tracking-tighter text-light-brown leading-4">
              You can store more{" "}
              <span className="text-[#CEACA7] text-[1em]">$</span>LOOT in Vault
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full space-y-4 ">
        {UpgradeLeagueData?.map((row, index) => (
          <UpgradeLeagueFasterSelectionRow key={index} {...row} />
        ))}
      </div>
      <p className="text-[1em] tracking-tightn font-medium font-josefin text-light-brown">
        You can Upgrade to any of the Leagues above
      </p>
    </Page>
  );
};

export default UpgradeLeagueFasterSelection;
