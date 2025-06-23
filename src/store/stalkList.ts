import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { StalkRow } from "@/types/User.t";
import { atom, selector } from "recoil";

export const stalkedState = atom<StalkRow[] | null>({
  key: "stalkList",
  default: null,
});

export const fetchStalkedSelector = selector<StalkRow[]>({
  key: "fetchStalkedSelector",
  get: async () => {
    try {
      const stalkedList = await ApiService.get(endpoints["userWanted"], {});
      return stalkedList;
    } catch (error) {
      return [] as StalkRow[];
    }
  },
});
