import { atom } from "recoil";

type attentionViewType = "friend-joined" | "got-robbed" | "downgraded" | null;

export const attentionViewState = atom<attentionViewType>({
  key: "attentionView",
  default: null,
});
