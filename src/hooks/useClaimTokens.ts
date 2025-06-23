import { useMutation, useQueryClient } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { showToast } from "@/utils/showToast";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/User";

const claimToken = async () => {
  return await ApiService.put(endpoints["tokens"], {});
};

export function useClaimToken() {
  const queryClient = useQueryClient();

  const user = useRecoilValue(userState);

  return useMutation({
    mutationFn: claimToken,
    onSuccess: () => {
      showToast(
        "success",
        `You have successfully claimed your ${user?.tokensToClaim} Stash!`
      );
      queryClient.invalidateQueries(["users"] as any);
    },
    onError: (error: any) => {
      showToast("error", error.response.data.errors[0]);
    },
  });
}
