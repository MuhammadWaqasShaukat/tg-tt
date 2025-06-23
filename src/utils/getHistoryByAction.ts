import { HistoryRowType } from "@/types/History.t";

export const getHistoryByAction = (
  action: "Victim" | "Attacker",
  history: HistoryRowType[]
) => {
  let filteredHistory: HistoryRowType[] = [];
  if (history) {
    filteredHistory = history.filter((item) => action === item.action);
  }
  return filteredHistory;
};
