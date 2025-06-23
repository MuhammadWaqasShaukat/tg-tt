import { atom } from "recoil";

export const onboardingStepState = atom<number>({
  key: "onboardStep",
  default: 0,
});
