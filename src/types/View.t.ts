export type View =
  | "hit-list"
  | "history"
  | "achievements"
  | "rewards"
  | "thief-shop"
  | "alarm"
  | "vault"
  | "guard-dog"
  | "buy-stash-token"
  | "leaderboard"
  | "leaderboard-pool"
  | "statistics";

export interface ViewType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  allowSearch: boolean;
  backBtnClkHandler?: () => void;
  viewTitle: string;
}
