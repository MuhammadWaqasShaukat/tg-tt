import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { ReferralsType } from "@/types/Referallas.t";

const fetchData = async (): Promise<ReferralsType> => {
  const data = await ApiService.get(endpoints["userReferrals"], {});
  return data;
};

export function useReferralsListQuery() {
  return useQuery<ReferralsType>({
    queryKey: ["referrals-list-query"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}
