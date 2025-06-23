import { atom } from "recoil";

export const authMethodState = atom<"telegram" | "nickname" | null>({
  key: "authMethod",
  default: null,
});
