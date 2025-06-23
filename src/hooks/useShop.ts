import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { shopState } from "@/store/shop";
import { shopOrgnaizer } from "@/utils/shopOrganizer";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

const fetchData = async (setShop: (data: any) => void) => {
  const data = await ApiService.get(endpoints["shop"], {});
  setShop(shopOrgnaizer(data));
  return data;
};

export function useShopQuery() {
  const [, setShop] = useRecoilState(shopState);

  return useQuery({
    queryKey: ["shops-query"],
    queryFn: () => fetchData(setShop),
    staleTime: 1000 * 60 * 5,
    retry: 5,
  });
}
