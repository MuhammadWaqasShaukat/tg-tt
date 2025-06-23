import { robVictimState } from "@/store/choseVictim";
import { robStepState } from "@/store/robFlow";
import { robToolState } from "@/store/robTool";
import { useSetRecoilState } from "recoil";

const useResetRobFlow = () => {
  const setRobVictim = useSetRecoilState(robVictimState);
  const setRobStep = useSetRecoilState(robStepState);
  const setRobTool = useSetRecoilState(robToolState);

  function resetRobFlow() {
    setRobStep("method-selection");
    setRobVictim(null);
    setRobTool(null);
  }

  return { resetRobFlow };
};

export default useResetRobFlow;
