import { CurrentModalState } from "@/store/currentModal";
import { CurrentViewState } from "@/store/currentView";
import { userState } from "@/store/User";
import { useSetRecoilState } from "recoil";

const useAppRest = () => {
  const setView = useSetRecoilState(CurrentViewState);
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const setUser = useSetRecoilState(userState);

  const resetApp = () => {
    setView(null);
    setCurrentModal(null);
    setUser(null);
  };

  return resetApp;
};

export default useAppRest;
