import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { UpgradeLeagueTableResponse } from "@/types/LeagueLevel";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<UpgradeLeagueTableResponse[]> => {
  return await ApiService.get(`${endpoints["leagueUpgradeTable"]}`, {});
};

export function useLeagueUpgradeTableQuery() {
  return useQuery({
    queryKey: ["league-upgrade-table-query"],
    queryFn: fetchData,
    retry: 5,
  });
}
