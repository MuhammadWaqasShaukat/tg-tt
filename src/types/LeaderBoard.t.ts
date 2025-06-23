export interface LeaderBoardRowPropType
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  score: number | string;
  position: number;
  showTokens?: boolean;
}

export type TopUser = {
  username: string;
  score: number;
};

export type LeaderboardResponse = {
  yourScore: number;
  yourPosition: number;
  topUsers: TopUser[];
};

export type MonthlyLeaderboardResponse = LeaderboardResponse & {
  prizes: { rank: number, prize: number }[];
};
