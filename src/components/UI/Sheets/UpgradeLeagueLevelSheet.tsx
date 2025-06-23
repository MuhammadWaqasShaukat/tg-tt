import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../Buttons";
import Pill2 from "../Pills/Pill2";
import { CurrentViewState } from "@/store/currentView";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { formatCompactNumber } from "@/utils/formatNumber";
import { useUpGradeLeagueQuery } from "@/hooks/useUpgradeLeague";
import { userState } from "@/store/User";
import { wantedLeagueState } from "@/store/wantedLeague";
import TutorialArrow from "../TutorialArrow";
import { FREE_LEAGUES_END, PAID_LEAGUE_START } from "@/constants/vars";
import { useEffect } from "react";
import { enableTourElements } from "@/utils/tourGuideHelper";

const UpgradeLeagueLevelSheet = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const { getVaultTax, getVaultStatus } = useVaultInfo();
  const user = useRecoilValue(userState);

  const setWantedLeague = useSetRecoilState(wantedLeagueState);

  const { mutate: upgradeLeague } = useUpGradeLeagueQuery();

    useEffect(() => {
      enableTourElements();
    }, []);

  const handleUpgradeClick = () => {
    if (!user) return;

    const isPaid = getVaultStatus() < 100;
    if (isPaid) {
      setView("upgrade-league-faster");
    }
     else {
      const wantedLeague = user.leagueId + 1;

      const body = {
        upgradeLeagueId: wantedLeague,
        isUpgradePayed: wantedLeague == PAID_LEAGUE_START ? true : false,
      };

      setWantedLeague(wantedLeague);
      upgradeLeague(body);
    }
  };

  return (
    <>

      <p className="text-left text-[1em] tracking-tight font-josefin text-light-brown">
        {user!.leagueId == FREE_LEAGUES_END ?
          "In order to enter the Paid Leagues, where you can start withdrawing your Loot currency, you will need to make a payment. The amount of stars - depends on the Amount of LOOT that you have in your Vault!"
          : "Every Vault upgrade is subject to protection fee. The 10% fee securesyour $STASH distribution."
        }</p>
      { user!.leagueId !== FREE_LEAGUES_END ? (
        // Natural Upgrade
        <Button
        data-tour-step="9"
          onClick={() => handleUpgradeClick()}
          acent="green"
          className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl"
        >
          {user?.tutorial && user?.vaultGold ? (
            <TutorialArrow className="top-14 " />
          ): null}
          <div className=" flex flex-row justify-center items-center gap-2">
            <span>Upgrade League</span>
            <Pill2
              accent="brown"
              count={  formatCompactNumber(getVaultStatus() >=100 ? getVaultTax()! : 777)}
              className="text-[1.25em] -ml-1 rounded-r-md py-0.5"
              extended={false}
            >
              <div className="min-w-[38px] aspect-square  max-h-[38px] max-w-[38px] z-10">
                <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
              </div>
            </Pill2>
          </div>
        </Button>
      ) : (
          // Paid Upgrade
          <Button
            onClick={() => handleUpgradeClick()}
            acent="green"
            className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl"
          >
            <div className=" flex flex-row justify-center items-center gap-2">
              <span>Enter Premium</span>
              <Pill2
                accent="green"
                count="1000"
                className="text-[1.25em] -ml-2.5 rounded-r-md pl-2 py-0.5"
                extended={false}
              >
                <div className="min-w-7 aspect-square  max-h-7 max-w-7 z-10">
                  <div className="bg bg bg-img-star-bordered bg-center h-[100%] w-[100%] z-10"></div>
                </div>
              </Pill2>
            </div>
          </Button>
        )
        //  : (
        //   <Button
        //     onClick={() => handleUpgradeClick()}
        //     acent="green"
        //     className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl"
        //   >
        //     <div className=" flex flex-row justify-center items-center gap-2">
        //       <span>Upgrade League</span>
        //       <Pill2
        //         accent="brown"
        //         count="777"
        //         className="text-[1.25em] -ml-2.5 rounded-r-md pl-2 py-0.5"
        //         extended={false}
        //       >
        //         <div className="min-w-7 aspect-square  max-h-7 max-w-7 z-10">
        //           <div className="bg bg bg-img-star-bordered bg-center h-[100%] w-[100%] z-10"></div>
        //         </div>
        //       </Pill2>
        //     </div>
        //   </Button>
        // )
        }
    </>
  );
};

export default UpgradeLeagueLevelSheet;
