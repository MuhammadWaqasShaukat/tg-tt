import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";

const purchaseShopItem = async (toolRowId: string) => {
  await ApiService.post(`${endpoints["shopPurchase"]}${toolRowId}`, {});
};

export function useShopItemPurcahse() {
  return useMutation({
    mutationFn: purchaseShopItem,
    retry: 5,
  });
}
