import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { ToolReqType } from "@/types/ToolReqBody.t";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/utils/showToast";
import { robToolState } from "@/store/robTool";
import { useSetRecoilState } from "recoil";

const getTool = async (body: ToolReqType) => {
  const data = await ApiService.put(endpoints["userTool"], body, {});
  return data;
};

export function useToolQuery() {
  const queryClient = useQueryClient();
  const setRobTool = useSetRecoilState(robToolState);
  return useMutation({
    mutationFn: getTool,
    onSuccess: () => {
      showToast("success", "Your tool activated successfully");
      setRobTool(null);
      queryClient.invalidateQueries(["users"] as any);
    },
    onError: (error: any) => {
      showToast("error", error.response.data.errors[0]);
    },
  });
}
