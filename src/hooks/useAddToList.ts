import { useMutation, useQueryClient } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";

const addToStalkList = async (userRowId: string) => {
  await ApiService.post(`${endpoints["userWantedById"]}${userRowId}`, {});
};

export function useAddToList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToStalkList,
    onSuccess: () => {
      queryClient.invalidateQueries(["list"] as any);
    },
  });
}
