import { useMutation, useQueryClient } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { loadingScreenState } from "@/store/loadingScreen";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const getToken = async (body: { username: string }) => {
  return await ApiService.post(endpoints["token"], body, {});
};

export function useTokenQuery() {
  const setLoadingScreen = useSetRecoilState(loadingScreenState);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: getToken,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"] as any);
      if (data.accessToken) {
        const loggedIn = {
          isloggedIn: true,
          username: data.username,
          accessToken: data.accessToken,
        };
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
        setLoadingScreen(false);
        navigate("/");
      }
    },
  });
}
