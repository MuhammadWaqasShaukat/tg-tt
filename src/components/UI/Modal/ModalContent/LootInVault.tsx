import { useRecoilState } from "recoil";
import { Button } from "../../Buttons";
import Pill2 from "../../Pills/Pill2";
import RatingsInline from "../../Ratings/RatingsInline";
import { CurrentViewState } from "@/store/currentView";
import { CurrentModalState } from "@/store/currentModal";
import { userState } from "@/store/User";
import { formatCompactNumber } from "@/utils/formatNumber";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { LeagueAssests } from "@/constants/leagues";
import { LeagueNames } from "@/types/User.t";

const LootInVaultModal = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const [user] = useRecoilState(userState);

  const handleOnLeagueClk = () => {
    setView("league-info");
    setCurrentModal(null);
  };

  const [userLeagues] = useRecoilState(leagueState);
  const { league } = getLeagueLevel(
    userLeagues as LeagueLevelType,
    user?.leagueId as number
  ) ?? { league: "pickpocket" };

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 ">
        <Pill2
          accent="red"
          count={user?.vaultGold.toLocaleString() ?? "0"}
          className="text-[2.25em] text-white -ml-3 pl-4"
          extended={true}
          extendedText={formatCompactNumber(user?.vaultGoldCap ?? 0)}
        >
          <div className="max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg bg-chip-vault bg-center h-[100%] w-[100%] z-10"></div>
          </div>
        </Pill2>

        <div className="flex flex-col w-[76vw] max-h-[288px]  sm:max-w-[450px] sm:max-h-[450px] mx-auto  p-4 aspect-square relative justify-center items-center bg-white rounded-3xl modal-radial-gradient">
          <RatingsInline
            className="bg-green absolute top-4 !py-0"
            leagueId={user?.leagueId ?? 1}
          />
          <div className="w-[45%] blur-3xl aspect-square bg-green/55 absolute top-[50%] -translate-y-[50%] rounded-full"></div>
          <img
            src={LeagueAssests[league as LeagueNames].casual}
            alt={league}
            className="z-10 object-contain  h-full my-auto w-[80%]"
          />
        </div>

        <p className=" text-light-brown text-left font-josefin text-[1em] leading-5">
          Your Vault is holding all <span className="font-bold ">$LOOT</span>{" "}
          rewards and what you manage to rob from others.
        </p>

        <p className=" text-light-brown text-left  font-josefin text-[1em] leading-5">
          Once you deposit <span className="font-bold ">$LOOT</span> in your
          Vault - you start getting <span className="font-bold ">$STASH</span>{" "}
          rewards.
        </p>
      </div>

      {/* <Button
        acent="ghost"
        className=" border border-[#CEACA7] py-3 flex flex-row justify-center items-center gap-2 text-[1em] box-border"
      >
        <span className="">Withdraw</span>
        <div className="w-4 h-4 bg bg-icon-arrow-right"></div>
      </Button> */}
      <Button
        onClick={handleOnLeagueClk}
        acent="ghost"
        className=" border border-[#CEACA7] py-3 flex flex-row justify-center items-center gap-2 text-[1em] box-border"
      >
        <span className="">leagues Info</span>
        <div className="w-4 h-4 bg bg-icon-arrow-right"></div>
      </Button>
    </>
  );
};

export default LootInVaultModal;
