import { endpoints } from "@/constants/API_ENDPOINTS";
import { X_SECRET_PASSWORD_HEADER } from "@/constants/vars";
import { ApiService } from "@/service";
import { animationState } from "@/store/animation";
import { CurrentViewState } from "@/store/currentView";
import { userState } from "@/store/User";
import { hasPremiumLeagueAlready } from "@/utils/hasPremiumLeagueAlready";
import { showToast } from "@/utils/showToast";
// import { CurrentViewState } from "@/store/currentView";
// import { showToast } from "@/utils/showToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
// import { useRecoilState } from "recoil";

const upgradeLeague = async (body: {
  upgradeLeagueId: number;
  isUpgradePayed: boolean;
  paymentId?: string;
}) => {
  return await ApiService.post(endpoints["leagueUpgrade"], body, {});
};


// temporary endpoint 

const markPaymentComplete = async (paymentId: string) => {
  const data = await ApiService.post(`${endpoints["paymentComplete"]}`, { paymentId }, {
    headers: {
      "X-Secret": X_SECRET_PASSWORD_HEADER,
    },
  });
  return data;
};


export function useUpGradeLeagueQuery() {
  const setView = useSetRecoilState(CurrentViewState);
  const setAnimation = useSetRecoilState(animationState);
  const user = useRecoilValue(userState);

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upgradeLeague,
    onSuccess: async (data, variables) => {
      if (variables.isUpgradePayed) {
        try {
          await markPaymentComplete(data.payment.id);
          await upgradeLeague({ upgradeLeagueId: variables.upgradeLeagueId, isUpgradePayed: variables.isUpgradePayed, paymentId: data.payment.id })
        } catch (error) {
          console.error("Failed to mark payment complete:", error);
        }
      }
      if(hasPremiumLeagueAlready(user!.leagueId))  // ((!hasPremiumLeagueAlready(user!.leagueId) && hasPremiumLeagueAlready(variables.upgradeLeagueId)) || (hasPremiumLeagueAlready(user!.leagueId)) ) {
        {setAnimation("league-upgrade-paid-successfull");
      } else {
        setAnimation("league-upgrade-normal-successfull");
      }

      setView("league-upgraded");
      queryClient.invalidateQueries(["users"] as any);
    },
    onError: (error: any) => {
      showToast("error", error.response.data.errors[0]);
    },
  });
}
