export const endpoints = {
  // Achievements & Actions
  achievements: "/v1/achievements",
  achievementTypes: "/v1/achievements/types",
  actions: "/v1/actions",

  // Authentication
  token: "/v1/token",
  telegramToken: "v1/token/telegram",
  tokens: "/v1/tokens",
  tokenPerHourTable: "/v1/tokens/table",
  // Leaderboards
  leaderboardsAllTime: "/v1/leaderboards/all-time",
  leaderboardsMonth: "/v1/leaderboards/month",

  // Leagues
  leagues: "/v1/leagues",
  leagueById: "/v1/leagues/{leagueId}",
  leagueUpgrade: "/v1/leagues/upgrade",
  leagueUpgradeTable: "v1/leagues/upgrade/table",

  // Payments
  paymentComplete: "/v1/payments/complete",
  paymentById: "/v1/payments/",

  // System & Localizations
  localizationByLang: "/v1/sys/localizations",
  localizations: "/v1/sys/localizations",
  systemConfig: "/v1/sys/config",
  systemConfigByDevice: "/v1/sys/config/{deviceId}",

  // withdrawas
  withdraw: "/v2/withdraw",

  // transactions
  transactions: "/v1/fundsHistory",

  // Shop (V2)
  shop: "/v2/shop",
  shopPurchase: "/v2/shop/purchase/",
  shopStashPackages: "/v2/shop/stash/packages",
  shopStashPurchaseById: "/v2/shop/stash/purchase",
  shopStashPurchase: "/v2/shop/stash/purchase",

  // Users (V2)
  users: "/v2/users",
  telegramUser: "/v2/users/telegram",
  telegramUserAttach: "/v2/users/telegram/attach",
  userFirebaseToken: "/v2/users/firebase-token",
  userPushNotificationSeen: "/v2/users/push-notification-seen",
  userTool: "/v2/users/tool",
  userPocket: "/v2/users/pocket",
  userList: "/v2/users/list",
  userHistory: "/v2/users/history",
  userGuard: "/v2/users/guard",
  userReferrals: "/v2/users/referrals",
  userWanted: "/v2/users/wanted",
  userWantedById: "/v2/users/wanted/",

  // Users (V3 - Robbery & Combat)
  userRob: "/v3/users/rob/",
  userRobRecall: "/v3/users/rob/recall",
  userCatchByAttacker: "/v3/users/catch/",
};
