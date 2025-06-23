import { ShopItem } from "@/types/ShopItem.t";
import { atom } from "recoil";

export const robToolState = atom<ShopItem[] | null>({
  key: "robTool",
  default: null,
});
