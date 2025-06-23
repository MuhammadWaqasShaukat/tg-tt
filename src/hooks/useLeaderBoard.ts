import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { LeaderboardResponse } from "@/types/LeaderBoard.t";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (achivement: number): Promise<LeaderboardResponse> => {
  return await ApiService.get(
    `${endpoints["leaderboardsAllTime"]}?AchievementType=${achivement}`,
    {}
  );
};

export function useLeaderBoardQuery(achivement: number) {
  return useQuery({
    queryKey: ["leaderboard-query", achivement],
    queryFn: ({ queryKey }) => {
      return fetchData(Number(queryKey[1]));
    },
    staleTime: 1000 * 60 * 5,
  });
}
