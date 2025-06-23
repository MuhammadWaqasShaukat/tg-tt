import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const data = await ApiService.get(endpoints["userList"], {});
  return data;
};

export function useListQuery() {
  return useQuery({
    queryKey: ["list"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}
