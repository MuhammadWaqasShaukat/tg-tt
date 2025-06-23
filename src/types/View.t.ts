export type View =
  | "room"
  | "hit-list"
  | "history"
  | "achievements"
  | "thief-shop"
  | "alarm"
  | "alerts"
  | "vault"
  | "guard-dog"
  | "buy-stash-token"
  | "leaderboard"
  | "leaderboard-pool"
  | "statistics"
  | "profile"
  | "friends-list"
  | "upgrade-league-level"
  | "withdraw"
  | "upgrade-league-faster"
  | "upgrade-league-faster-selection"
  | "league-info"
  | "catch-thief"
  | "stash-purchased-successfull"
  | "league-upgrade-successfull"
  | "attention"
  | "league-upgraded"
  | "withdraw"
  | "transactions";

export type SheetProps = null | {
  DragableSheet?: JSX.Element;
  StaticSheet?: JSX.Element;
};

export interface ViewType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  allowSearch: boolean;
  allowNavigatingBack: boolean;
  backBtnClkHandler?: () => void;
  viewTitle?: string | JSX.Element;
  viewControls?: () => React.ReactNode;
  slidUpView?: boolean;
  Sheet: SheetProps;
  scrollable?: boolean;
  hasPadding?: boolean;
  handleBgClick?: (args: any) => void;
}
