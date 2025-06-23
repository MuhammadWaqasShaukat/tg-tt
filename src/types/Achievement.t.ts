import { LocalizationType } from "./localization.t";

export type AchievementType =
  | "sneaky"
  | "crafty"
  | "vigilant"
  | "sloppy"
  | "wanted"
  | "sleepy"
  | "cautious"
  | "rich";

export const AchievementTypeMap: { [key in AchievementType]: number } = {
  sneaky: 1,
  cautious: 2,
  sloppy: 3,
  sleepy: 4,
  vigilant: 5,
  wanted: 6,
  rich: 7,
  crafty: 8,
};

export interface AchievementRowProp
  extends React.HTMLAttributes<HTMLDivElement> {
  achievementId: string;
  type: number;
  name: AchievementType;
  requiredAmount: number;
  currentAmount: number;
  hasLeaderboardForCurrentMonth: boolean;
  hasPrizePoolForCurrentMonth: boolean;
}

export type ImprovedAchievementType = {
  localizationKey: keyof LocalizationType,
  achievement: AchievementType,
  tooltip: null | {
    tooltipId: string
    tooltipContent: string
  }
}

