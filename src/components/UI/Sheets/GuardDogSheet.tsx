import { Button } from "../Buttons";
import { useActivateGuardQuery } from "@/hooks/useActivateGuard";
import { useDeactivateQuery } from "@/hooks/useDeactivateGuard";
import { userState } from "@/store/User";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Counter from "@/components/Counter";
import { sheetState } from "@/store/sheetStatus";
import { ShopItem } from "@/types/ShopItem.t";
import { counterState } from "@/store/count";
import { useToolQuery } from "@/hooks/useTool";
import { ToolReqType } from "@/types/ToolReqBody.t";
import { useEffect } from "react";
import { CurrentModalState } from "@/store/currentModal";
import Timer from "../Timer";
import { localizationState } from "@/store/localizations";
import { formatCompactNumber } from "@/utils/formatNumber";

const GuardDogSheet = ({
  temporaryGuards,
}: {
  temporaryGuards: ShopItem | undefined;
}) => {
  const setCurrentModal = useSetRecoilState(CurrentModalState);

  const { mutate: activateDogFn } = useActivateGuardQuery();
  const { mutate: deactivateDogFn } = useDeactivateQuery();

  const localization = useRecoilValue(localizationState);

  const user = useRecoilValue(userState);
  const [counter, setCounter] = useRecoilState(counterState);

  const sheetEnabled = useRecoilValue(sheetState);

  const handleActivateDog = () => {
    activateDogFn();
  };

  const handleDeactivateDog = () => {
    deactivateDogFn();
  };

  const { mutate: useTool } = useToolQuery();

  const body: ToolReqType = {
    usedFrom: 5,
    tools: [
      {
        toolId: temporaryGuards?.toolId as string,
        count: counter,
      },
    ],
  };

  const handleUseTemporaryGuard = () => {
    useTool(body);
  };

  useEffect(() => {
    return () => setCounter(0);
  }, []);

  return user?.guardActiveUntil ? (
    <>
      <div className="space-y-2 ">
        <h2 className=" text-[1.25em] text-light-brown font-pineapple-days text-center px-4">
          You Guard Dog is active
        </h2>
        <h1 className=" text-center capitalize text-[2.25em]">
          <Timer expiryTimestamp={new Date(user.guardActiveUntil as Date)} />
        </h1>
      </div>
      <Button
        onClick={handleDeactivateDog}
        acent="white"
        className="shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em] border-2 border-[#CEACA7] rounded-2xl"
      >
        <span className="">{localization["guards_screen.cancel_guards"]}</span>
      </Button>
    </>
  ) : user?.canUseFreeGuard ? (
    <>
      <div className="space-y-2 ">
        <h2 className=" text-[1.25em] text-light-brown font-pineapple-days text-center px-4">
          {localization["guards_screen.free_guard_footer_heading"]}
        </h2>
      </div>

      <Button
        onClick={handleActivateDog}
        acent="yellow"
        className="shadow-custom text-[1.13em] flex flex-row justify-center items-center gap-2 rounded-2xl"
      >
        <span>{localization["guards_screen.free_guard_button"]}</span>
      </Button>
    </>
  ) : (
    <>
      <div className="space-y-2 ">
        <span className="text-[1.25em] text-center  font-medium tracking-tighter text-light-brown block">
          {localization[".item_guard_footer_heading"]}
        </span>
      </div>

      <Counter max={temporaryGuards?.count} counterType="using" />

      {sheetEnabled ? (
        <Button
          onClick={handleUseTemporaryGuard}
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center rounded-2xl gap-2 text-[1.25em]"
        >
          <span className="">{localization["guards_screen.button"]}</span>
        </Button>
      ) : (
        <>
          <Button
            onClick={() => setCurrentModal("guard-dog")}
            acent="yellow"
            className="shadow-custom flex flex-row justify-center items-center rounded-2xl gap-2 text-[1.25em]"
          >
            <span className="">
              {localization["guards_screen.get_guard_dog_button"]}
            </span>
          </Button>

          <div className=" bg-white flex flex-row justify-center items-center gap-1 w-max px-3 py-1 rounded-3xl max-h-[23px]">
            <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin">
              Balance
            </span>
            <span className="w-1 h-1 rounded-full bg-light-brown"></span>
            <span className="text-[1em] font-bold tracking-tighter text-light-brown font-josefin">
              {formatCompactNumber(user?.tokens ?? 0)}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default GuardDogSheet;
