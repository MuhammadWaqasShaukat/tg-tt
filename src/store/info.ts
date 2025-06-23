import { atom } from "recoil";

export const infoState = atom<string | null>({
    key: "info",
    default: null,
});