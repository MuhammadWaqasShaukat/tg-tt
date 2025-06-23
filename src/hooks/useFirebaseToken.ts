import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";

const firebaseToken = async (body: { firebaseToken: string }) => {
  await ApiService.put(endpoints["userFirebaseToken"], body, {});
};

export function useFirebaseTokenQuery() {
  return useMutation({
    mutationFn: firebaseToken,
    onSuccess: () => {},
  });
}
