export type RobNotifiedType = { count: number | undefined; notified: boolean };
export type VaultNotification = {
  notifType: "low-vault" | "downgraded" | null;
  notified: boolean;
};
