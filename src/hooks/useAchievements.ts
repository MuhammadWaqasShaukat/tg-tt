import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { AchievementRowProp } from "@/types/Achievement.t";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<AchievementRowProp[]> => {
  return await ApiService.get(endpoints["achievements"], {});
};

export function useAchievementsQuery() {
  return useQuery({
    queryKey: ["achievements"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}
