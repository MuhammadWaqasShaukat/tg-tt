import { Page } from "@/components/UI/Page";
import PillButton from "@/components/UI/Buttons/PillButton";
import Pill2 from "@/components/UI/Pills/Pill2";
import HomeItems from "./__components/HomeItems";
import ThiefItems from "./__components/ThiefItems";
import ProductivityItems from "./__components/ProductivityItems";
import { List } from "@/components/UI";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { useState } from "react";
import ClaimFreeItemSheet from "@/components/UI/Sheets/ClaimFreeItemSheet";
import { userState } from "@/store/User";
import { localizationState } from "@/store/localizations";
import { PageProps } from "@/types/Page.t";

const ThiefShop: React.FC<PageProps> = ({ onClose }) => {
  const [, setView] = useRecoilState(CurrentViewState);
  const [claimFreeItem] = useState(false);
  const user = useRecoilValue(userState);
  const localization = useRecoilValue(localizationState);

  return (
    <Page
      id="thief-shop-view"
      allowNavigatingBack={true}
      viewTitle={localization["home_screen.thief_shop"]}
      allowSearch={false}
      backBtnClkHandler={onClose}
      Sheet={claimFreeItem ? { StaticSheet: <ClaimFreeItemSheet /> } : null}
      scrollable={false}
      className="!gap-0"
    >
      <div className="flex flex-col items-start justify-start w-full gap-3 pt-2">
        <div className="flex flex-row items-center justify-between w-full">
          <span className="text-[1em] text-light-brown">$Stash Balance</span>
          <div className="flex flex-row items-center justify-start gap-2">
            <Pill2
              accent="grey"
              count={user!.tokens.toLocaleString()}
              className="text-[1em] text-white pl-2 py-0.5 max-h-5 rounded-r-md "
            >
              <div className=" w-[6.8vw] max-h-6 max-w-6 aspect-square mx-auto  -mr-2 flex flex-col justify-center items-center">
                <div className="bg bg-chip-coin z-10 bg-center h-[100%] w-[100%]"></div>
              </div>
            </Pill2>

            <PillButton
              acent="yellow"
              className="text-[.875em] capitalize"
              onClick={() => setView("buy-stash-token")}
            >
              <span> get $Stash</span>
            </PillButton>
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-between w-full">
          <span className="text-[1em] text-light-brown">Get a free item</span>
          <div className="flex flex-row items-center justify-start text-[.875em]">
            {user?.tokens === 0 ? (
              <PillButton
                acent="yellow"
                onClick={() => setCurrentModal("invite-and-earn")}
              >
                <span> Invite 10 Friends</span>
              </PillButton>
              ) : (
               <PillButton acent="yellow" onClick={() => setClaimFreeItem(true)}>
                 <span>Claim your free item</span>
               </PillButton>
             )} 
          </div>
        </div> */}
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-6 px-4 py-1  bg-white rounded-xl">
        <span className="flex-1 text-base font-josefin">Item</span>
        <span className="text-base font-josefin">You have</span>
        <span className="text-base font-josefin">Get</span>
      </div>

      <div className="space-y-6 w-full">
        <List className="space-y-1 w-full ">
          <HomeItems />
          <ThiefItems />
          <ProductivityItems />
        </List>
      </div>
    </Page>
  );
};

export default ThiefShop;
