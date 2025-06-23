import React from "react";
import { View } from "@/components/UI/View";
import Pill2 from "@/components/UI/Pills/Pill2";
import { Button } from "@/components/UI/Buttons";
import { PageProps } from "@/types/Page.t";
import Pill from "@/components/UI/Pills";
import PillButton from "@/components/UI/Buttons/PillButton";
import ThiefClass from "@/components/UI/Cards/ThiefClass";

const Vault: React.FC<PageProps> = ({ onClose }) => {
  return (
    <div className=" relative h-full">
      <View allowSearch={false} backBtnClkHandler={onClose} viewTitle="Vault">
        <div className=" flex flex-col justify-start items-start h-full gap-4">
          <Pill2
            accent="red"
            count="58,500,000"
            className="text-[2.8em] text-white !h-12 -ml-10 pl-10"
            extended={true}
          >
            <div className="h-[8.5vh] w-[18.35vw]  z-10 flex flex-col justify-center items-center relative ">
              <div className=" absolute -top-1 -right-1">
                <Pill content={"24%"} />
              </div>
              <div className="bg bg-chip-vault bg-center h-[100%] w-[100%] rounded-xl"></div>
            </div>
          </Pill2>
          <div className=" space-y-4">
            <span className="text-base font-josefin  font-medium tracking-tighter text-light-brown">
              The Vault is holding all $LOOT that you manage to rob from other
              thieves.
            </span>
            <div className=" flex flex-row justify-between items-center w-full">
              <div className=" flex flex-row justify-start items-center gap-2">
                <div className=" bg bg-icon-info h-4 w-5"></div>
                <p className=" text-light-brown text-base">
                  Vault Reinforcement
                </p>
              </div>
              <div className="ml-auto">
                <PillButton
                  acent="yellow"
                  className="text-sm flex flex-row justify-center items-center gap-2"
                >
                  <span> Use Now</span>
                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </PillButton>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#CEACA7] w-full"></div>
          <ThiefClass />
        </div>
        <div className="bg-[#F7E3DA] w-full p-6 rounded-[32px] flex flex-col justify-center items-center gap-6">
          <Button
            acent="green"
            className="shadow-custom flex flex-row justify-center items-center gap-2 rounded-2xl"
          >
            <span>Upgrade League level</span>
          </Button>
          <div className="w-full space-y-3">
            <Button
              acent="ghost"
              className="border-2 border-[#CEACA7] shadow-custom flex flex-row justify-center items-center gap-2 rounded-2xl"
            >
              <div className="w-4 h-4 bg bg-icon-lock"></div>
              <span>Withdraw</span>
            </Button>
            <div className=" flex flex-row justify-center items-center gap-2">
              <div className="w-4 h-4 bg bg-icon-info"></div>
              <span className=" text-[1.6em] font-josefin text-light-brown">
                League <span className=" font-bold">“Masters”</span> needed
              </span>
            </div>
          </div>
        </div>
      </View>

      <div className=" bg-[#FFFBF9] w-screen px-6 py-9 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto  absolute bottom-0 -m-6">
        <div className=" flex flex-row justify-between items-start gap-4">
          <p className="text-[1.6em] text-left font-josefin text-light-brown font-medium tracking-tighter">
            Your Vault is 71% full and gives 1.23 $STASH / Hour
          </p>
          <Button
            acent="ghost"
            className="text-sm flex flex-row justify-center items-center gap-2 border-2 border-[#CEACA7] p-3 w-max"
          >
            <span className=" whitespace-nowrap"> More info</span>
            <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
          </Button>
        </div>
        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <span>
            Claim Stash <span className="text-light-brown">(218.4)</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Vault;
