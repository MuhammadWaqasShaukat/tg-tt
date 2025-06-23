import { useRecoilState } from "recoil";
import { List, Tabs } from "@/components/UI";
import { Button } from "@/components/UI/Buttons";
import AllThievesRow from "@/components/UI/Lists/Rows/AllThieves";
import HitListRow from "@/components/UI/Lists/Rows/HitList";
import SlideUp from "@/components/UI/SlideUp";
import { robVictimState } from "@/store/choseVictim";
import HitListHeader from "@/components/UI/Lists/ListHeaders/HitListHeader";
import Rob from "../Rob";
import { View } from "@/components/UI/View";

const tabData = [
  {
    label: "Stalk list",
    content: (
      <List className="!gap-10 mt-9">
        <HitListHeader />
        <div className="w-full space-y-4 ">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <HitListRow key={row} />
          ))}
        </div>
      </List>
    ),
  },
  {
    label: "All thieves",
    content: (
      <List className="!gap-10 mt-9">
        <HitListHeader />
        <div className="w-full space-y-4 ">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <AllThievesRow key={row} />
          ))}
        </div>
      </List>
    ),
  },
];

const HitList = ({ onClose }: { onClose: () => void }) => {
  const [robVictim, setRobVictim] = useRecoilState(robVictimState);

  return (
    <View viewTitle="Hit List" allowSearch backBtnClkHandler={onClose}>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <Button
          acent="ghost"
          className=" border border-[#CEACA7] flex flex-row justify-center items-center gap-3"
        >
          <div className="w-6 h-6 bg bg-icon-users"></div>
          <span>invite your friends</span>
        </Button>

        <Tabs tabs={tabData} />
      </div>

      <SlideUp isVisible={robVictim}>
        <div className=" bg-[#FFEEE4] h-full w-full pt-[5.8vh] flex flex-col">
          <Rob
            onClose={() => {
              setRobVictim(!robVictim);
            }}
          />
        </div>
      </SlideUp>
    </View>
  );
};

export default HitList;
