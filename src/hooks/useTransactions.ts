import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { TransactionResponse } from "@/types/Trasaction.t";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<TransactionResponse[]> => {
  return await ApiService.get(endpoints["transactions"], {});
};

export function useUserTransactionQuery() {
  return useQuery({
    queryKey: ["user-trasactions"],
    queryFn: fetchData,
  });
}
