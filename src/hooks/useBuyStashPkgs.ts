import { endpoints } from "@/constants/API_ENDPOINTS";
import { X_SECRET_PASSWORD_HEADER } from "@/constants/vars";
import { ApiService } from "@/service";
import { CurrentViewState } from "@/store/currentView";
import { infoViewState } from "@/store/InfoView";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

const buyPkg = async (pkgId: string) => {
  const data = await ApiService.post(
    `${endpoints["shopStashPurchaseById"]}/${pkgId}`,
    {}
  );
  return data;
};

// temporary endpoints

const markPaymentComplete = async (paymentId: string) => {
  const data = await ApiService.post(
    `${endpoints["paymentComplete"]}`,
    { paymentId },
    {
      headers: {
        "X-Secret": X_SECRET_PASSWORD_HEADER,
      },
    }
  );
  return data;
};

const PurchaseComplete = async (paymentId: string) => {
  const data = await ApiService.post(
    `${endpoints["shopStashPurchase"]}?paymentId=${paymentId}`,
    {}
  );
  return data;
};

export function useBuyStashPkgQuery() {
  const setInfoView = useSetRecoilState(infoViewState);
  const setView = useSetRecoilState(CurrentViewState);
  return useMutation({
    mutationFn: buyPkg,
    onSuccess: async (data) => {
      if (data.id) {
        await markPaymentComplete(data.id);
        await PurchaseComplete(data.id);
      }
      setView("stash-purchased-successfull");
      setInfoView(true);
    },
  });
}
