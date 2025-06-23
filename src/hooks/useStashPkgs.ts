import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { StashPackageType } from "@/types/StashPackge.t";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<StashPackageType[]> => {
  return await ApiService.get(endpoints["shopStashPackages"], {});
};

export function useStashPkgQuery() {
  return useQuery({
    queryKey: ["stash-package-query"],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60 * 5,
  });
}
