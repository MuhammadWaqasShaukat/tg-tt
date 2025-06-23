import { Button } from "../../Buttons";
import Tabs from "../../Tabs";

const TabFreeLeagues = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-1 mt-4">
      <div className="flex flex-row items-center justify-between bg-[#BDE1E5] px-4 py-2 w-full rounded-xl">
        <p className="text-[1em] font-medium font-josefin">Invited friends</p>
        <p className="text-[1em] font-medium font-josefin">$LOOT bonus</p>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">1-20</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          20K
        </span>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">21-50</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          25K
        </span>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">50+</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          30K
        </span>
      </div>
    </div>
  );
};

const TabPremiumLeagues = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-1 mt-4">
      <div className="flex flex-row items-center justify-between bg-[#BDE1E5] px-4 py-2 w-full rounded-xl">
        <p className="text-[1em] font-medium font-josefin">Invited friends</p>
        <p className="text-[1em] font-medium font-josefin">$LOOT bonus</p>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">1-20</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          20K
        </span>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">21-50</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          25K
        </span>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
        <span className="text-[1em] font-medium font-josefin">51+</span>
        <span className="text-dark-green text-[1em] font-medium font-josefin">
          30K
        </span>
      </div>
    </div>
  );
};

const InviteAndEarnDetail = () => {
  const tabData = [
    {
      label: "League 1-5",
      content: <TabFreeLeagues />,
    },
    {
      label: "League 6-",
      content: <TabPremiumLeagues />,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6 ">
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <p className="text-[1em] text-light-brown font-josefin">
          See how much $LOOT you can earn.
        </p>
        <Tabs tabs={tabData} defaultActiveIndex={1} />
      </div>
      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      <Button acent="yellow" className="py-3 px-12 text-[1em]">
        <span className="">Invite friends</span>
      </Button>

      <Button acent="yellow" className="py-3 px-12 text-[1em] w-max mx-auto">
        <span className="">Copy Invitation Link</span>
      </Button>
    </div>
  );
};

export default InviteAndEarnDetail;
