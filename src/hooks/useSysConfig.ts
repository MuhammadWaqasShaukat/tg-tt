import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";

const getSystemConfigs = async () => {
  return await ApiService.get(endpoints["systemConfig"], {});
};

const useSystemConfigQuery = () => {
  return useQuery({
    queryKey: ["sys-config-query"],
    queryFn: getSystemConfigs,
    staleTime: 1000 * 60 * 5,
    retry: 5,
  });
};
export default useSystemConfigQuery;
