import { List } from "@/components/UI";
import CrowbarRow from "@/components/UI/Lists/Rows/ThiefShopRows/Crowbar";
import Decoy from "@/components/UI/Lists/Rows/ThiefShopRows/Decoy";
import HugeBagRow from "@/components/UI/Lists/Rows/ThiefShopRows/HugeBag";

const ThiefItems = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className=" w-5 h-5 bg bg-icon-info"></div>
        <span className=" text-xl">Thief Items</span>
      </div>
      <List className="w-full">
        <Decoy />
        <HugeBagRow />
        <CrowbarRow />
      </List>
    </div>
  );
};

export default ThiefItems;
