import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { WinthdrawCardProps } from "@/types/WinthdrawCardProps";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () : Promise<WinthdrawCardProps[]> => {
 return await ApiService.get(endpoints["withdraw"], {});
};

export function useWithddrawalQuery() {
  return useQuery({
    queryKey: ["withdrawl-list"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}