export type InProgressRobbery = {
  goldInPockets: number;
  pocketsGoldCap: number;
  robPercOfPocketPerMinute: number;
  maxRobberyPercOfPocket: number;
  shouldFinishAt: string;
  goldShouldSteal: number;
  startedAt: string;
  goldStealedlSoFar: number;
  attackTools: any;
  robRateGoldPerSecond: number;
  victimRowId: string;
  victimUsername: string;
  robberyParticipantRowId: string;
  attackerRowId: string;
  attackerUsername: string;
  vaultProtectionPerc: number;
  robberyId: number;
};

export type InProgressRobberies = InProgressRobbery[];
