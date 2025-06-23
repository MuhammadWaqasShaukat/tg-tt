import IconButton from "@/components/UI/Buttons/IconButton";
import Method from "./__components/Method";
import { useRecoilState } from "recoil";
import { robStepState } from "@/store/robFlow";
import InProgress from "./__components/InProgress";
import RunAway from "./__components/RunAway";
import Caught from "./__components/Caught";

type RobStepType = {
  [key: string]: React.ReactNode;
};

const robSteps: RobStepType = {
  "method-selection": <Method />,
  "robbery-inprogress": <InProgress />,
  "run-away": <RunAway />,
  "get-caught": <Caught />,
};

const Rob = ({ onClose }: { onClose: () => void }) => {
  const [robStep] = useRecoilState(robStepState);
  return (
    <div className="flex flex-col items-start justify-start w-full h-full ">
      <div className=" flex flex-row justify-start items-start min-h-[71px] px-6 w-full">
        <>
          {(robStep == "method-selection" ||
            robStep == "robbery-inprogress") && (
            <h1 className="text-[2.5em]">
              <span className=" opacity-70">You will rob </span> Simeonichki
            </h1>
          )}
          {robStep == "run-away" && (
            <h1 className="text-[2.5em]">You Ran away!</h1>
          )}
          {robStep == "get-caught" && (
            <h1 className="text-[2.5em]"> You’ve Been Caught</h1>
          )}
        </>
        <IconButton
          acent="brown"
          className="!rounded-xl aspect-square  ml-auto"
          onClick={onClose}
        >
          <div className="w-4 h-4 bg bg-icon-cross"></div>
        </IconButton>
      </div>
      {robSteps[robStep]}
    </div>
  );
};

export default Rob;
