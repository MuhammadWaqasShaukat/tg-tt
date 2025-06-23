import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";
const fetchData = async () => {
  const data = await ApiService.get(endpoints["tokenPerHourTable"], {});
  return data;
};

export function useStashPerHourDistributionQuery() {
  return useQuery({
    queryKey: ["stash-per-hour-query"],
    queryFn: () => fetchData(),
    retry: 5,
  });
}
