import { Button } from "../../Buttons";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { CurrentModalState } from "@/store/currentModal";
import Pill2 from "../../Pills/Pill2";
import { useReferralsListQuery } from "@/hooks/useReferrals";
import { CurrentDetailModalState } from "@/store/currentDetailModal";
import { localizationState } from "@/store/localizations";

const InviteAndEarn = () => {
  const [, setView] = useRecoilState(CurrentViewState);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const [, setCurrentDetailModal] = useRecoilState(CurrentDetailModalState);
  const localization = useRecoilValue(localizationState);

  const { data: referrals } = useReferralsListQuery();

  const handleViewJoinedFriendsClk = () => {
    setCurrentModal(null);
    setView("friends-list");
  };

  return (
    <>
      <p className="text-[1em] text-left font-josefin  font-medium tracking-tighter text-light-brown">
        For every invited friend who creates an account you will instantly get{" "}
        <span className="font-bold ">20K $LOOT!</span> Your friend gets 20K as
        well :)
      </p>

      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      <div className="flex flex-col items-start justify-start w-full gap-4 ">
        <div className="flex flex-row items-center justify-between w-full ">
          <p className="text-[1em] text-light-brown text-left">
            {localization["invite_earn.info_text_conversion"]}
          </p>
          <div>
            <Button
              onClick={() =>
                window.open(
                  localization["invite_earn.info_text_conversion_link"],
                  "_blank"
                )
              }
              acent="ghost"
              className="text-[.825em]  border border-[#CEACA7] py-1 px-3 flex flex-row justify-center items-center gap-1 rounded-xl  font-bold"
            >
              <span className="">See How</span>
              <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full ">
          <p className="text-[1em] text-light-brown text-left">
            Friends Joined
          </p>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="px-2 ml-auto bg-white rounded-xl space-x-1">
              <span className="text-[1em] text-light-brown">
                {referrals?.invitedUsers.length}
              </span>
              <span className="text-[1em] text-light-brown">/</span>
              <span className="text-[1em] text-light-brown">
                {referrals?.invitedCount}
              </span>
            </div>
            <Button
              onClick={handleViewJoinedFriendsClk}
              acent="ghost"
              className="text-[.825em] border border-[#CEACA7] py-1 px-3 flex flex-row justify-center items-center gap-1 rounded-xl  font-bold"
            >
              <span className="">View</span>
              <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
            </Button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full ">
          <p className="text-[1em] text-light-brown text-left">$LOOT Earned</p>
          <Pill2
            accent="grey"
            count={
              referrals?.invitedRewardReceivedCount.toLocaleString() ?? "0"
            }
            className="text-[1em] text-white -ml-2 pl-2 rounded-r-md py-0.5"
            extended={false}
          >
            <div className="max-w-6 max-h-6 w-[5.80vw] aspect-square mx-auto z-10">
              <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        </div>

        <div className="flex flex-row items-center justify-between w-full ">
          <p className="text-[1em] text-light-brown text-left">
            Detailed Breakdown
          </p>
          <div className="ml-auto ">
            <Button
              acent="ghost"
              className="text-[.825em]  border border-[#CEACA7] py-1 px-3 flex flex-row justify-center items-center gap-1 rounded-xl  font-bold"
              onClick={() => setCurrentDetailModal("invite-and-earn")}
            >
              <span className="">View</span>
              <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
            </Button>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      {/* <div className=" w-full truncate text-ellipsis">
        <p className="text-[1em] text-left font-josefin  font-medium tracking-tighter">
          Your invitation link:
        </p>

        <a
          className="text-[1em] text-left font-josefin font-bold tracking-tighter block w-full"
          href=""
        >
          https://tokenthieves.com/invite/128987111
        </a>
      </div> */}

      <Button acent="yellow" className="py-3 px-12 text-[1em] w-max mx-auto">
        <span className="">Invite friends</span>
      </Button>

      <Button acent="yellow" className="py-3 px-12 text-[1em] w-max mx-auto">
        <span className="">Copy Invitation Link</span>
      </Button>
    </>
  );
};

export default InviteAndEarn;
