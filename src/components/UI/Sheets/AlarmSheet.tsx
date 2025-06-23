import Counter from "@/components/Counter";
import { useEffect } from "react";
import { Button } from "../Buttons";
import { ShopItem } from "@/types/ShopItem.t";
import { sheetState } from "@/store/sheetStatus";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentModalState } from "@/store/currentModal";
import { useToolQuery } from "@/hooks/useTool";
import { ToolReqType } from "@/types/ToolReqBody.t";
import { counterState } from "@/store/count";
import { userState } from "@/store/User";
import Timer from "../Timer";
import { localizationState } from "@/store/localizations";
import { CurrentViewState } from "@/store/currentView";
import { formatCompactNumber } from "@/utils/formatNumber";

const AlarmSheet = ({ alarms }: { alarms: ShopItem | undefined }) => {
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const [counter, setCounter] = useRecoilState(counterState);
  const user = useRecoilValue(userState);
  const [sheetEnabled] = useRecoilState(sheetState);
  const localization = useRecoilValue(localizationState);
  const setView = useSetRecoilState(CurrentViewState);

  const { mutate: useTool } = useToolQuery();

  const body: ToolReqType = {
    usedFrom: 3,
    tools: [
      {
        toolId: alarms?.toolId as string,
        count: counter,
      },
    ],
  };

  const handleUseAlarm = () => {
    useTool(body);
  };

  useEffect(() => {
    return () => setCounter(0);
  }, []);

  return user?.alarmSystemActiveUntil ? (
    <>
      <div className="">
        <h2 className=" text-[1.25em] text-light-brown font-pineapple-days text-center px-4">
          {localization["alarm_screen.info_sticky_footer_heading"]}
        </h2>
        <h1 className=" text-center capitalize text-[2.25em]">
          <Timer
            expiryTimestamp={new Date(user.alarmSystemActiveUntil as Date)}
          />
        </h1>
      </div>
      <Button
        onClick={() => setView(null)}
        acent="white"
        className="shadow-custom flex flex-row justify-center rounded-2xl items-center gap-2 text-[1.25em] border-2 border-[#CEACA7]"
      >
        <span className="">{localization["alarm_screen.home_button"]}</span>
      </Button>
    </>
  ) : (
    <>
      <div className="space-y-2 ">
        <h2 className=" text-[1.25em] text-light-brown font-pineapple-days text-center px-4">
          {localization["alarm_screen.info_sticky_footer_heading"]}
        </h2>
        <span className="text-[1em] text-center font-josefin font-medium tracking-tighter text-light-brown block">
          {localization["alarm_screen.info_sticky_footer_sub_heading"]}
        </span>
      </div>

      <Counter max={alarms?.count} counterType="using" />

      {sheetEnabled ? (
        <Button
          onClick={handleUseAlarm}
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center rounded-2xl gap-2 text-[1.25em]"
        >
          <span className="">
            {localization?.["alarm_screen.reinforce_button"]}
          </span>
        </Button>
      ) : (
        <>
          <Button
            onClick={() => setCurrentModal("improved-alarm")}
            acent="yellow"
            className="shadow-custom flex flex-row justify-center items-center rounded-2xl gap-2 text-[1.25em]"
          >
            <span className="">
              {localization["alarm_screen.get_alarm_button"]}
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

export default AlarmSheet;
