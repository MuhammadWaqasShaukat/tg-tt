import CloseButton from "@/components/UI/Buttons/CloseButton";
import ImageBox from "@/components/UI/ImageBox";
import { Page } from "@/components/UI/Page";
import UpgradeFasterSheet from "@/components/UI/Sheets/UpgradeFasterSheet";
import { LeagueAssests } from "@/constants/leagues";
import { myLeagueState } from "@/store/myLeague";
import { userState } from "@/store/User";
import { PageProps } from "@/types/Page.t";
import { LeagueNames } from "@/types/User.t";
import { useRecoilValue } from "recoil";

const LeagueRow = ({
  league,
  premiumLeague = false,
}: {
  league: LeagueNames;
  premiumLeague: boolean;
}) => {
  const myLeague = useRecoilValue(myLeagueState);

  return (
    <div className="flex flex-row items-center justify-between w-full ">
      <div className="relative flex flex-row items-center justify-start gap-2 ">
        {myLeague?.league === league ? (
          <>
            <div className=" bg-[#FF5757] outline outline-white absolute right-[100%] tracking-tighter z-0 pl-3 -mr-2 pr-4 rounded-xl">
              <span className=" capitalize text-white font-josefin font-bold text-[1em] leading-5 relative ">
                you
              </span>
            </div>
            <div className="bg-white px-2.5 py-1 rounded-lg outline outline-[#FF5757] relative z-0 ">
              <h3 className="text-[1em] text-[#39444D] capitalize">{league}</h3>
            </div>
          </>
        ) : (
          <>
            {premiumLeague && <div className="w-4 h-4 bg bg-icon-lock"></div>}
            <div className=" bg-white px-2.5 py-1 rounded-lg">
              <h3 className="text-[1em] text-[#39444D] capitalize">{league}</h3>
            </div>
          </>
        )}
      </div>
      <ImageBox
        imageURL={LeagueAssests[league].face}
        className={`w-[7.73vw] aspect-square max-h-8 max-w-8 ${
          myLeague?.league === league
            ? " outline-[#FF5757] rounded-lg outline"
            : " "
        }`}
      />
    </div>
  );
};

const UpgradeLeagueFaster: React.FC<PageProps> = ({ onClose }) => {
  const user = useRecoilValue(userState);

  const freeLeagues: LeagueNames[] = [
    "pickpocket",
    "burglar",
    "robber",
    "bandit",
    "swindler",
  ];
  const premiumLeagues: LeagueNames[] = [
    "masters",
    "pros",
    "heisters",
    "virtuoso",
    "legendary",
  ];

  return (
    <Page
      id="upgrade-league-faster-view"
      className="!gap-4 !bg-yellow bg bg-falling-star bg-cover"
      allowNavigatingBack={false}
      viewTitle={`Hey, ${user?.username}!`}
      allowSearch={false}
      viewControls={() => <CloseButton handleClose={onClose} />}
      Sheet={{ StaticSheet: <UpgradeFasterSheet /> }}
    >
      <p className=" font-bold font-josefin text-[1.375em] tracking-tighter leading-7">
        Once you enter Premium Leagues, you will be able to Withdraw your LOOT
        as $TON currency!
      </p>

      <div className=" flex flex-col justify-start items-start w-full pr-[38px] pl-[42px] py-0 gap-2">
        {/* free-league */}
        {freeLeagues.map((fl) => (
          <LeagueRow league={fl} premiumLeague={false} key={fl} />
        ))}
      </div>
      <div className="relative border-3 border-white rounded-3xl pr-[38px] pl-[18px] py-8 w-full mt-4 ">
        <div className=" bg-red border-3 border-white rounded-3xl px-4 pb-1.5 max-h-fit absolute -top-5 left-[50%] -translate-x-[50%] opacity-100">
          <span className="text-[1em] whitespace-nowrap text-white font-josefin font-bold p-0 -tracking-wider leading-none">
            Premium Leagues
          </span>
        </div>
        <div
          className={`flex flex-col items-start justify-start w-full gap-2  ${
            user && user.leagueId >= 17 ? "opacity-100" : "opacity-40"
          }`}
        >
          {/* premium-league */}
          {premiumLeagues.map((pl) => (
            <LeagueRow league={pl} premiumLeague={true} key={pl} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default UpgradeLeagueFaster;
