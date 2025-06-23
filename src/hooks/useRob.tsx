import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { robStepState } from "@/store/robFlow";
import { stolenAmountState } from "@/store/stolenAmount";
import { showToast } from "@/utils/showToast";

const rob = async ({ victimId, body }: { victimId: any; body: any }) => {
  return await ApiService.post(`${endpoints["userRob"]}${victimId}`, body, {});
};

export function useRobVictim() {
  const setInProgressRobbery = useSetRecoilState(inProgressRobberyState);
  const setRobStep = useSetRecoilState(robStepState);
  const setStolenAmount = useSetRecoilState(stolenAmountState);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rob,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["shop-query"] as any);
      setInProgressRobbery(data);
      setStolenAmount(data.goldStealedlSoFar);
      setRobStep("robbery-inprogress");
    },
    onError: (error: any) => {
      showToast("error", error.response.data.errors[0]);
    },
  });
}
