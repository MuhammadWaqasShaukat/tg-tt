import { ShopType } from "@/types/ShopItem.t";
import { atom } from "recoil";

export const shopState = atom<ShopType>({
  key: "shop",
  default: {} as ShopType,
});
