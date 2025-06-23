export type LeagueNames =
  | "beginner"
  | "pickpocket"
  | "burglar"
  | "robber"
  | "bandit"
  | "swindler"
  | "masters"
  | "pros"
  | "heisters"
  | "virtuoso"
  | "legendary";

export type LeagueImagesType = {
  [key in LeagueNames]: {
    face: string;
    casual: string;
    backpack: string;
    home: string;
  };
};

export interface UserResType {
  robberGold: number;
  vaultGold: number;
  tokens: number;
  tokensPerHour: number;
  staminaPoints: number;
  suspicionPoints: number;
  suspicionPointsLastAdjusted: string | null;
  suspicionPointsNextAdjustment: string | null;
  isInPrison: boolean;
  inPrisonUntil: null | Date;
  vaultGoldCap: number;
  robberGoldCap: number;
  isBeingRobbedAtTheMoment: boolean;
  username: string;
  iAmRobbing: RobberyDetails | null;
  robbingMe: RobbingMeDetails[] | null;
  tools: null;
  notSeenRobberiesCount: number;
  alarmSystemActiveUntil: Date | null;
  hugeBagIsActive: boolean;
  guardActiveUntil: string | null | Date;
  canUseFreeGuard: boolean;
  staminaPointsNextUpdate: string | null;
  vaultActiveUntil: string | null | Date;
  tokensToClaim: number;
  tutorial: {
    isActive: boolean;
  };
  leagueId: number;
  telegramUser: string;
}

export interface User extends UserResType {}

interface BaseType {
  userRowId: string;
  username: string;
}

export interface UserRow extends BaseType {
  isStalked: boolean;
  leagueId: number;
}

export interface StalkRow extends BaseType {
  isActive: boolean;
  userLeagueId: number;
  userMatchmakingTier: number;
  timeRobbedFromMe: string;
  countRobbedMe: number;
  countStoppedByMe: number;
  goldStolenFromMe: number;
  timeRobbedByMe: string;
  countRobbedByMe: number;
  countStoppedMe: number;
  goldStolenByMe: number;
}

export interface RobberyDetails {
  goldInPockets: number;
  pocketsGoldCap: number;
  robPercOfPocketPerMinute: number;
  maxRobberyPercOfPocket: number;
  shouldFinishAt: string;
  goldShouldSteal: number;
  startedAt: string;
  goldStealedlSoFar: number;
  attackTools: string[] | null;
  robRateGoldPerSecond: number;
  victimRowId: string;
  victimUsername: string;
  robberyParticipantRowId: string;
  attackerRowId: string;
  attackerUsername: string;
  vaultProtectionPerc: number;
  robberyId: number;
}

export interface RobbingMeDetails {
  robRateGoldPerSecond: number;
  userRowId: string;
  startedOn: string;
  alreadyStolen: number;
  userName: string;
}

export type CaughtAttackerType = {
  goldTaken: number;
  caught: boolean;
  wentToPrison: boolean;
  goldStolen:number,
};
