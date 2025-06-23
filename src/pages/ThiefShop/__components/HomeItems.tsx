import { List } from "@/components/UI";
import ImprovedAlarmRow from "@/components/UI/Lists/Rows/ThiefShopRows/ImprovedAlarmRow";
import ReInforcedVault from "@/components/UI/Lists/Rows/ThiefShopRows/ReinforcedVault";
import TemporaryGuards from "@/components/UI/Lists/Rows/ThiefShopRows/TemporaryGaurds";

const HomeItems = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className=" w-5 h-5 bg bg-icon-info"></div>
        <span className=" text-xl">Home Items</span>
      </div>
      <List className="w-full !gap-2">
        <TemporaryGuards />
        <ReInforcedVault />
        <ImprovedAlarmRow />
      </List>
    </div>
  );
};

export default HomeItems;
