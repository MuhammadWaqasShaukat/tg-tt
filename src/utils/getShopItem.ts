import { ShopItemsNames, ShopType } from "@/types/ShopItem.t";

export const getShopItemByType = (
  shop: ShopType,
  itemType: ShopItemsNames,
  catgory: keyof ShopType
) => {
  return shop[catgory].find((item) => item.type === itemType);
};
