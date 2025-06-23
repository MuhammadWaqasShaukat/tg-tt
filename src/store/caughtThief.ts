import { CaughtThiefType } from "@/types/Caught.t";
import { atom } from "recoil";

const defaultCaughtThief: CaughtThiefType = {
  thief: {
    robRateGoldPerSecond: 0,
    userRowId: "0",
    startedOn: "",
    alreadyStolen: 0,
    userName: "thief",
  },
  caught: {
    caught: false,
    wentToPrison: false,
    goldTaken: 0,
    goldStolen:0,
  },
};

export const caughtThiefState = atom<CaughtThiefType>({
  key: "caughtThief",
  default: defaultCaughtThief,
});
