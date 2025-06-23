import { useMutation, useQueryClient } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";

const removeFromStalkList = async (userRowId: string) => {
  await ApiService.delete(`${endpoints["userWantedById"]}${userRowId}`, {});
};

export function useRemoveFromList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromStalkList,
    onSuccess: () => {
      queryClient.invalidateQueries(["list"] as any);
    },
  });
}
