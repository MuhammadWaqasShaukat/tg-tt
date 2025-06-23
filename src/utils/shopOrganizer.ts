import { ShopItem, ShopType } from "@/types/ShopItem.t";

export function shopOrgnaizer(shopItems: ShopItem[]): ShopType {
  const categorizedItems: ShopType = {
    homeItems: [],
    thiefItems: [],
    productivityItems: [],
  };

  shopItems.forEach((item: ShopItem) => {
    if (
      ["reinforcedVault", "temporaryGuards", "temporaryAlarmSystem"].includes(
        item.type
      )
    ) {
      categorizedItems.homeItems.push(item);
    } else if (["deepPockets", "crowbar", "decoy"].includes(item.type)) {
      categorizedItems.thiefItems.push(item);
    } else if (["snack", "fakeIdentity"].includes(item.type)) {
      categorizedItems.productivityItems.push(item);
    }
  });

  return categorizedItems;
}
