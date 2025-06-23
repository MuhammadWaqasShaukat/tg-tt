import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { robStepState } from "@/store/robFlow";
import ProgressBarButton from "../Buttons/ProgressBarButton";
import { useTimer } from "react-timer-hook";
import { ApiService } from "@/service";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { useEffect, useRef, useState } from "react";
import { stolenAmountState } from "@/store/stolenAmount";
import { localizationState } from "@/store/localizations";
import { getFormatedText } from "@/utils/getFormatedText";
import { showToast } from "@/utils/showToast";
import { differenceInSeconds } from "date-fns";

const RobInprogressSheet = ({
  robberyEndTime,
  robRateGoldPerSecond,
  robberyStartTime,
  amount,
}: {
  robberyEndTime: string;
  robRateGoldPerSecond: number;
  robberyStartTime: string;
  amount: number;
}) => {
  const [, setRobStep] = useRecoilState(robStepState);
  const [progress, setProgress] = useState(0);
  const [canRunAway, setCanRunAway] = useState(false);
  const localization = useRecoilValue(localizationState);
  const setStolenAmount = useSetRecoilState(stolenAmountState);
  const amountSync = useRef(false);

  const expiryTimestamp = new Date(robberyEndTime);
  const startTimestamp = new Date(robberyStartTime);

  const { totalSeconds, seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => setRobStep("robbery-success"),
    interval: 1000,
  });

  useEffect(() => {
    setStolenAmount((prev) => {
      if (!amountSync.current) {
        amountSync.current = true;
        return amount + robRateGoldPerSecond;
      } else {
        return prev + robRateGoldPerSecond;
      }
    });

    const MAX_DURATION_SECONDS = Math.min(
      differenceInSeconds(expiryTimestamp, startTimestamp),
      5 * 60
    );

    const elapsedSeconds = differenceInSeconds(new Date(), startTimestamp);

    const clampedElapsed = Math.min(elapsedSeconds, MAX_DURATION_SECONDS);

    const calculatedProgress = (clampedElapsed / MAX_DURATION_SECONDS) * 100;

    setProgress(calculatedProgress);

    if (
      elapsedSeconds >= MAX_DURATION_SECONDS &&
      MAX_DURATION_SECONDS === 5 * 60 // 5 min
    ) {
      setCanRunAway(true);
    }
  }, [totalSeconds]);

  const handleRunAway = async () => {
    try {
      const res = await ApiService.post(endpoints["userRobRecall"], {});
      if (res) {
        setStolenAmount(res.stolenGold);
        setRobStep("run-away");
      }
    } catch (error: any) {
      showToast("error", error.response.data.errors[0]);
      return;
    }
  };

  return (
    <>
      <div className="space-y-1 ">
        <h1 className=" text-center capitalize text-[3.5em]">
          <>{minutes}m</> <>{seconds}s</>
        </h1>
        <p className="text-center text-[1.375em] tracking-tight font-josefin text-light-brown">
          {getFormatedText(localization["robbery_screen.time_left"], "")}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full gap-8 ">
        <ProgressBarButton
          disabled={!canRunAway}
          progress={progress}
          onClick={handleRunAway}
          className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl disabled:text-brown/20"
        >
          <span>{localization["robbery_screen.recall"]}</span>
        </ProgressBarButton>
      </div>
    </>
  );
};

export default RobInprogressSheet;
