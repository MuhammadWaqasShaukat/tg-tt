import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { MonthlyLeaderboardResponse } from "@/types/LeaderBoard.t";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (achivement: number): Promise<MonthlyLeaderboardResponse> => {
  const currentMonth = new Date().toISOString().slice(0, 7);
  return await ApiService.get(
    `${endpoints["leaderboardsMonth"]}?Month=${currentMonth}&AchievementType=${achivement}`,
    {}
  );
};

export function useMonthlyLeaderBoardQuery(achivement: number) {
  return useQuery({
    queryKey: ["monthly-leaderboard-query", achivement],
    queryFn: ({ queryKey }) => {
      return fetchData(Number(queryKey[1]));
    },
    staleTime: 1000 * 60 * 5,
  });
}
