import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";
const robbingMe = async () => {
  return await ApiService.get(`${endpoints["userRob"]}`, {});
};

export function useRobbingMeQuery() {
  return useQuery({
    queryKey: ["robbing-me-query"],
    queryFn: () => robbingMe(),
    refetchInterval: 1000 * 10,
  });
}
