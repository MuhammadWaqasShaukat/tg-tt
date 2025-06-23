import { View } from "@/components/UI/View";
import PillButton from "@/components/UI/Buttons/PillButton";
import Pill2 from "@/components/UI/Pills/Pill2";
import HomeItems from "./__components/HomeItems";
import ThiefItems from "./__components/ThiefItems";
import ProductivityItems from "./__components/ProductivityItems";

const ThiefShop = ({ onClose }: { onClose: () => void }) => {
  return (
    <View
      viewTitle="Thief Shop"
      allowSearch={false}
      backBtnClkHandler={onClose}
    >
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div className="flex flex-row items-center justify-between w-full ">
          <span className="text-base text-light-brown">$Stash Balance</span>
          <div className="flex flex-row items-center justify-start gap-2">
            <Pill2
              accent="blue"
              count="2000"
              className="text-[1.6em] text-white pl-4 pr-2 py-0  "
            >
              <div className="h-[3.8vh] w-[6.8vw] aspect-square mx-auto  -mr-2 !z-0  flex flex-col justify-center items-center">
                <div className="bg bg-chip-coin z-10 bg-center h-[100%] w-[100%]"></div>
              </div>
            </Pill2>

            {/* <div className='mr-2'>
                            <StashChip count='2000' iconSize='h-6 w-6' className='!bg-[#9DC2C9] !pl-[55%]  text-white h-6 text-base' />
                        </div> */}
            <PillButton acent="yellow" className="text-sm">
              <span> get stash</span>
            </PillButton>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <span className="text-base text-light-brown">Get a free item</span>
          <div className="flex flex-row items-center justify-start ">
            <PillButton acent="yellow">
              <span> Invite 10 Friends</span>
            </PillButton>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-6 px-4 py-2 bg-white rounded-xl">
        <span className="flex-1 text-base font-josefin">Item</span>
        <span className="text-base font-josefin">You have</span>
        <span className="text-base font-josefin">Get</span>
      </div>

      <div className="w-full space-y-6">
        <HomeItems />
        <ThiefItems />
        <ProductivityItems />
      </div>
    </View>
  );
};

export default ThiefShop;
