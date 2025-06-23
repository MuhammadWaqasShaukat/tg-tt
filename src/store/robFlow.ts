import { atom } from "recoil";
import { RobFlowSteps } from "../types/RobFlow.t";

export const robStepState = atom<RobFlowSteps>({
  key: "robStep",
  default: "method-selection",
});
