import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { UserRow } from "@/types/User.t";
import { atom, selector } from "recoil";

export const AllThievesState = atom<UserRow[] | null>({
  key: "allThieves",
  default: null,
});

export const fetchAllThievesSelector = selector<UserRow[]>({
  key: "fetchAllThievesSelector",
  get: async () => {
    try {
      const AllThieves = await ApiService.get(endpoints["userList"], {});
      return AllThieves;
    } catch (error) {
      return [] as UserRow[];
    }
  },
});
