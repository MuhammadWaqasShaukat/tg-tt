import { useEffect } from "react";
import ShopItem from "../ShopItem";
import { getShopItemByType } from "@/utils/getShopItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { shopState } from "@/store/shop";
import { useInfoModal } from "@/hooks/useInfoModal";
import { LocalizationType } from "@/types/localization.t";
import { robToolState } from "@/store/robTool";

const ProfileToolSheet = () => {
  const shop = useRecoilValue(shopState);
  const [, setRobTool] = useRecoilState(robToolState);

  const deepPockets = getShopItemByType(shop, "deepPockets", "thiefItems");
  const snack = getShopItemByType(shop, "snack", "productivityItems");
  const fakeIdentity = getShopItemByType(
    shop,
    "fakeIdentity",
    "productivityItems"
  );

  const { openInfoModal } = useInfoModal();

  const handleInfoClick = (infoKey: keyof LocalizationType) => {
    openInfoModal(infoKey);
  };

  useEffect(() => {
    return () => {
      setRobTool(null);
    };
  }, []);

  return (
    <div className="grid items-center justify-between w-full grid-cols-3 gap-5">
      {fakeIdentity && (
        <ShopItem
          item={fakeIdentity}
          category="productivityItems"
          onInfoClick={() =>
            handleInfoClick("thief_shop_Items.info_tip_fake_id")
          }
        />
      )}
      {snack && (
        <ShopItem
          item={snack}
          category="productivityItems"
          onInfoClick={() => handleInfoClick("thief_shop_Items.info_tip_snack")}
        />
      )}
      {deepPockets && (
        <ShopItem
          item={deepPockets}
          category="thiefItems"
          onInfoClick={() =>
            handleInfoClick("thief_shop_Items.info_tip_huge_bag")
          }
        />
      )}
    </div>
  );
};

export default ProfileToolSheet;
