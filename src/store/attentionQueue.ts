import { atom } from "recoil";

export const attentionQueueState = atom<string[]>({
  key: "attentionQueue",
  default: [],
});
