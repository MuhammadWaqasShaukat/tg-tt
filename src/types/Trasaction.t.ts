export const TransactionTypeMap: Record<string, string> = {
  LeagueUpgrade: "Purchase",
  Withdraw: "Withdrawal",
  StashPurchase: "Purchase"
};

export const TransactionTextMap: Record<string, string> = {
  LeagueUpgrade: "STARS",
  Withdraw: "LOOT",
  StashPurchase: "STASH"
};

export type TransactionResponse = {
  id: number;
  currency: string;
  amountInCurrency: number;
  lootAmount: number;
  stashAmount: number;
  type: string;
  createdOnUtc: number | string;
};


export type GroupedTxType = Record<string, TransactionResponse[]>;
