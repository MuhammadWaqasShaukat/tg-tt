import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const activateGuard = async () => {
  const data = await ApiService.put(endpoints["userGuard"], {});
  return data;
};

export function useActivateGuardQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => activateGuard(),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"] as any);
    },
  });
}
