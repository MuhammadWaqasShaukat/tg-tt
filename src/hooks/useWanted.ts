import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const data = await ApiService.get(endpoints["userWanted"], {});
  return data;
};

export function useWantedQuery() {
  return useQuery({
    queryKey: ["wanted"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}
