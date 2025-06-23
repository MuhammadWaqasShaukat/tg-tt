import { atom } from "recoil";

export const serachQueryState = atom<string>({
  key: "searchQuery",
  default: "",
});
