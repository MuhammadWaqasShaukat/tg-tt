import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useSetRecoilState } from "recoil";
import { animationState } from "@/store/animation";
import { CurrentViewState } from "@/store/currentView";

const depositInVaults = async () => {
  await ApiService.delete(endpoints["userPocket"], {});
};

export function useDepositInVaultQuery() {
  const setAnimation = useSetRecoilState(animationState);
  const setView = useSetRecoilState(CurrentViewState);
  return useMutation({
    mutationFn: depositInVaults,
    onSuccess: () => {
      setAnimation("wallet-deposit");
      setView("profile");
    },
  });
}
