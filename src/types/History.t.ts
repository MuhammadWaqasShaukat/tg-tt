export interface HistoryRowType {
  robberyParticipantId: string;
  userId: string;
  username: string;
  stollenGold: number;
  action: "Victim" | "Attacker";
  createdOnUtc: string;
  createdOnUnixTime: number;
  createdOnHuman: string;
  isSeen: boolean;
}
