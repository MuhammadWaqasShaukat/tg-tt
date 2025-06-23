import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deactivateGuard = async () => {
  const data = await ApiService.delete(endpoints["userGuard"], {});
  return data;
};

export function useDeactivateQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deactivateGuard(),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"] as any);
    },
  });
}
