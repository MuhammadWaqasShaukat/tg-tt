import ShopItem from "../ShopItem";
import { Button } from "../Buttons";
import { shopState } from "@/store/shop";
import { useRecoilValue } from "recoil";
import { getShopItemByType } from "@/utils/getShopItem";

const ClaimFreeItemSheet = () => {
  const shop = useRecoilValue(shopState);
  const crowbar = getShopItemByType(shop, "crowbar", "thiefItems");
  const snack = getShopItemByType(shop, "snack", "productivityItems");
  const fakeIdentity = getShopItemByType(
    shop,
    "fakeIdentity",
    "productivityItems"
  );

  return (
    <>
      <div className="grid items-center justify-between w-full grid-cols-3 ">
        {crowbar && <ShopItem item={crowbar} category="thiefItems" />}
        {fakeIdentity && (
          <ShopItem item={fakeIdentity} category="productivityItems" />
        )}
        {snack && <ShopItem item={snack} category="productivityItems" />}
      </div>

      <Button
        acent="yellow"
        className="shadow-custom flex text-[1.13em] flex-row justify-center items-center gap-2 rounded-2xl"
      >
        <span>Claim For Free</span>
      </Button>
    </>
  );
};

export default ClaimFreeItemSheet;
