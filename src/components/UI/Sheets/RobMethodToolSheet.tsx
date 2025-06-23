import { localizationState } from "@/store/localizations";
import { shopState } from "@/store/shop";
import { getShopItemByType } from "@/utils/getShopItem";
import { useRecoilValue } from "recoil";
import ShopItem from "../ShopItem";

const RobMethodToolSheet = () => {
  const shop = useRecoilValue(shopState);
  const crowbar = getShopItemByType(shop, "crowbar", "thiefItems");
  const decoy = getShopItemByType(shop, "decoy", "thiefItems");
  const localization = useRecoilValue(localizationState);

  return (
    <div>
      <div className="">
        <h1 className=" text-center capitalize text-[2.25em]">
          {localization["consumable_screen.title"]}
        </h1>
        <p className="text-center text-[1.375em] font-josefin text-light-brown">
          {localization["consumable_screen.description"]}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between gap-8 ">
        {decoy && <ShopItem item={decoy} category="thiefItems" />}
        {crowbar && <ShopItem item={crowbar} category="thiefItems" />}
      </div>
    </div>
  );
};

export default RobMethodToolSheet;
