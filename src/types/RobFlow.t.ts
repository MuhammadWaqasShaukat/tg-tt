export type RobFlowSteps =
  | "method-selection"
  | "robbery-inprogress"
  | "run-away"
  | "get-caught"
  | "robbery-success"
  | "in-jail";

export type RobStepType = {
  [key in RobFlowSteps]: React.ReactNode;
};
