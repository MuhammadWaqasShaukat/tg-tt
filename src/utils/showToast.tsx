import { toast } from "react-toastify";
import BasicAlerts from "@/components/UI/NotificationAndAlerts/BasicAlerts";

export const showToast = (type: any, error: any) => {
  toast(<BasicAlerts type={type} description={error} />, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    closeButton: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    className:
      "bg-[#FFFBF9F2] rounded-2xl flex flex-row justify-start items-start p-5 gap-3 w-[90vw] sm:max-w-[500px] mx-auto my-2",
  });
};
