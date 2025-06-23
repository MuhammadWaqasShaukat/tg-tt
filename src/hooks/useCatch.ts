import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { caughtThiefState } from "@/store/caughtThief";
import { useRecoilState } from "recoil";
import { CaughtThiefType } from "@/types/Caught.t";

const catchThief = async (attackerRowId: string) => {
  return await ApiService.post(
    `${endpoints["userCatchByAttacker"]}${attackerRowId}`,
    {}
  );
};

export function useCatchAttackerQuery() {
  const [, setCaughtThief] = useRecoilState(caughtThiefState);

  return useMutation({
    mutationFn: catchThief,
    onSuccess: (data) => {
      setCaughtThief(
        (prev) =>
          ({
            ...prev,
            caught: data,
          } as CaughtThiefType)
      );
    },
  });
}
