export type AchievementType =
  | "sneaky"
  | "crafty"
  | "vigilant"
  | "sloppy"
  | "wanted"
  | "sleepy"
  | "cautions"
  | "rich";

export interface AchievementRowProp
  extends React.HTMLAttributes<HTMLDivElement> {
  type: AchievementType;
  score: number | string;
  hasAward: boolean;
  achivementTitle?: "";
}
