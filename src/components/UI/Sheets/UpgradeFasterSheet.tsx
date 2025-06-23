import { useRecoilState } from "recoil";
import { Button } from "../Buttons";
import { CurrentViewState } from "@/store/currentView";

const UpgradeFasterSheet = () => {
  const [, setView] = useRecoilState(CurrentViewState);

  return (
    <Button
      onClick={() => setView("upgrade-league-faster-selection")}
      acent="yellow"
      className="shadow-custom text-[1.12em] flex flex-row justify-center items-center gap-2 rounded-2xl"
    >
      <span>Upgrade Faster</span>
    </Button>
  );
};

export default UpgradeFasterSheet;
