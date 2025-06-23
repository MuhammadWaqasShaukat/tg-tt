import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async () => {
  const data = await ApiService.get(endpoints["userHistory"], {});
  return data;
};

export function useHistoryQuery() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["history-query"],
    queryFn: async () => {
      const data = await fetchData();
      queryClient.invalidateQueries({ queryKey: ["users"] });
      return data;
    },
    staleTime: 0,

  });
}
