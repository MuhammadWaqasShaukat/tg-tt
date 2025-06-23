import { atom } from "recoil";
import { User } from "@/types/User.t";

// const DefaultUser: User = {
//   robberGold: 0,
//   vaultGold: 0,
//   tokens: 0,
//   tokensPerHour: 0,
//   staminaPoints: 0,
//   suspicionPoints: 0,
//   suspicionPointsLastAdjusted: null,
//   suspicionPointsNextAdjustment: null,
//   isInPrison: false,
//   inPrisonUntil: null,
//   vaultGoldCap: 0,
//   robberGoldCap: 0,
//   isBeingRobbedAtTheMoment: false,
//   username: "default user",
//   iAmRobbing: null,
//   robbingMe: null,
//   tools: null,
//   notSeenRobberiesCount: 0,
//   alarmSystemActiveUntil: null,
//   hugeBagIsActive: false,
//   guardActiveUntil: null,
//   canUseFreeGuard: false,
//   staminaPointsNextUpdate: null,
//   vaultActiveUntil: null,
//   tokensToClaim: 0,
//   tutorial:null,
//   leagueId: 16,
//   telegramUser: "",
// };

export const userState = atom<User | null>({
  key: "user",
  default: null,
});
