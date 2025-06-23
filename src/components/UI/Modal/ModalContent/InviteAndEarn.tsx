import { useState } from "react";
import { Button } from "../../Buttons";
import LootChip from "../../Chips/ChipLoot";

const InviteAndEarn = () => {
  const [breakdownView, setBreakDownView] = useState<boolean>(false);

  return (
    <>
      {!breakdownView ? (
        <>
          <p className="text-[1.6em] text-left font-josefin  font-medium tracking-tighter text-light-brown">
            For every invited friend who creates an account you will instantly
            get <span className="font-bold ">20K $LOOT!</span> Your friend gets
            20K as well :)
          </p>

          <div className="h-[1px] bg-[#CEACA7] w-full"></div>

          <div className="flex flex-col items-start justify-start w-full gap-4 ">
            <div className="flex flex-row items-center justify-between w-full ">
              <p className="text-base text-light-brown">Friends Joined</p>
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="px-2 ml-auto bg-white rounded-xl ">
                  <span className="text-base text-light-brown ">2/20</span>
                </div>
                <Button
                  acent="ghost"
                  className=" border border-[#CEACA7] py-1 px-3 flex flex-row justify-center items-center gap-1 rounded-2xl  font-bold"
                >
                  <span className="text-sm ">View</span>
                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </Button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full ">
              <p className="text-base text-light-brown">$LOOT Earned</p>
              <div className="px-2 ">
                <div className="mr-4 text-base text-light-brown">
                  <LootChip
                    count="40044"
                    iconSize=" w-6 h-6"
                    className="bg-[#9DC2C9]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full ">
              <p className="text-base text-light-brown">Detailed Breakdown</p>
              <div className="ml-auto ">
                <Button
                  acent="ghost"
                  className=" border border-[#CEACA7] py-1 px-3 flex flex-row justify-center items-center gap-1 rounded-2xl  font-bold"
                  onClick={() => {
                    setBreakDownView(true);
                  }}
                >
                  <span className="text-sm ">View</span>
                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-base text-light-brown font-josefin">
            See how much $LOOT you can earn.
          </p>
          <div className="flex flex-col items-start justify-start w-full gap-1">
            <div className="flex flex-row items-center justify-between bg-[#BDE1E5] px-4 py-2 w-full rounded-xl">
              <p className="text-base font-medium font-josefin">
                Invited friends
              </p>
              <p className="text-base font-medium font-josefin">$LOOT bonus</p>
            </div>
            <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
              <span className="text-base font-medium font-josefin">1-20</span>
              <span className="text-dark-green text-base font-medium font-josefin">
                20K
              </span>
            </div>
            <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
              <span className="text-base font-medium font-josefin">21-50</span>
              <span className="text-dark-green text-base font-medium font-josefin">
                25K
              </span>
            </div>
            <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
              <span className="text-base font-medium font-josefin">50+</span>
              <span className="text-dark-green text-base font-medium font-josefin">
                30K
              </span>
            </div>
          </div>
        </>
      )}
      <div className="h-[1px] bg-[#CEACA7] w-full"></div>

      <div>
        <p className="text-[1.6em] text-left font-josefin  font-medium tracking-tighter">
          Your invitation link:
        </p>

        <a
          className="text-[1.6em] text-left font-josefin  font-bold tracking-tighter"
          href=""
        >
          https://tokenthieves.com/invite/128987111
        </a>
      </div>

      <Button acent="yellow" className="py-2 ">
        <span className="text-[.75em]">Copy Invitation Link</span>
      </Button>
    </>
  );
};

export default InviteAndEarn;
