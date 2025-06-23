export type ShopItemCategory = "homeItems" | "thiefItems" | "productivityItems";

export interface ShopItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ShopItem;
  category: ShopItemCategory;
  onInfoClick?: () => void;
}

export type ShopType = {
  homeItems: ShopItem[];
  thiefItems: ShopItem[];
  productivityItems: ShopItem[];
};

export const ShopItemsModalMap: any = {
  reinforcedVault: "reinforcement-vault",
  temporaryGuards: "guard-dog",
  temporaryAlarmSystem: "improved-alarm",
  decoy: "decoy",
  crowbar: "crowbar",
  snack: "snack",
  fakeIdentity: "fake-id",
  deepPockets: "huge-bag",
};

export type ShopItemsNames =
  | "reinforcedVault"
  | "temporaryGuards"
  | "temporaryAlarmSystem"
  | "snack"
  | "crowbar"
  | "decoy"
  | "fakeIdentity"
  | "deepPockets";

export type ShopItem = {
  toolId: string;
  name: string;
  count: number;
  type: string;
  baseTokenPrice: number;
  baseFiatPrice: number;
  isInShop: boolean;
  isRobberyUse: boolean;
  isRobberUse: boolean;
  maxUseQuantity: number;
  maxDailyUse: number;
  changeValue: number;
  changeValue2: null;
};
