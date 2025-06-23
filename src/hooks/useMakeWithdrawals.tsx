import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { animationState } from "@/store/animation";
import { selectedWithdrawalState } from "@/store/withdrawls";
import { useMutation } from "@tanstack/react-query";
import { useRecoilState, useSetRecoilState } from "recoil";

const fetchData = async (withdrawalId: number | undefined) => {
  if (withdrawalId === undefined || !withdrawalId) return;

  return await ApiService.delete(endpoints["withdraw"], {
    data: { packageWithdrawId: withdrawalId },
  });
};

export function useMakeWithddrawalQuery() {
  const setAnimation = useSetRecoilState(animationState);
  const [selectedCard] = useRecoilState(selectedWithdrawalState);

  return useMutation({
    mutationFn: () => fetchData(selectedCard?.id),
    onSuccess: () => {
      setAnimation("loot-withdrawal-successfull");
    },
  });
}
