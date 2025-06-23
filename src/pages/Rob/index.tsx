import Method from "./__components/Method";
import { useRecoilState, useRecoilValue } from "recoil";
import { robStepState } from "@/store/robFlow";
import InProgress from "./__components/InProgress";
import RunAway from "./__components/RunAway";
import Caught from "./__components/Caught";
import RobMethodSheet from "@/components/UI/Sheets/RobMethodSheet";
import RobInprogressSheet from "@/components/UI/Sheets/RobInprogressSheet";
import CaughtSheet from "@/components/UI/Sheets/CaughtSheet";
import RunAwaySheet from "@/components/UI/Sheets/RunAwaySheet";
import { Page } from "@/components/UI/Page";
import CloseButton from "@/components/UI/Buttons/CloseButton";
import RobberySuccessful from "./__components/RobberySuccessful";
import InviteAndEarnSheet from "@/components/UI/Sheets/InviteAndEarnSheet";
import InJail from "./__components/InJail";
import GoHomeSheet from "@/components/UI/Sheets/GoHomeSheet";
import { RobStepType } from "@/types/RobFlow.t";
import { robVictimState } from "@/store/choseVictim";
import { robToolState } from "@/store/robTool";
import { useRobVictim } from "@/hooks/useRob";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import useResetRobFlow from "@/hooks/useResetRobFlow";
import { getShopItemByType } from "@/utils/getShopItem";
import { shopState } from "@/store/shop";
import { ToolReqType, UsedToolType } from "@/types/ToolReqBody.t";
import { localizationState } from "@/store/localizations";
import RobMethodToolSheet from "@/components/UI/Sheets/RobMethodToolSheet";
import { SheetProps } from "@/types/View.t";

const Rob = ({ onClose }: { onClose: () => void }) => {
  const robSteps: RobStepType = {
    "method-selection": <Method />,
    "robbery-inprogress": <InProgress />,
    "run-away": <RunAway />,
    "get-caught": <Caught />,
    "robbery-success": <RobberySuccessful />,
    "in-jail": <InJail />,
  };

  const [inProgressRobbery, setInProgressRobbery] = useRecoilState(
    inProgressRobberyState
  );
  const localization = useRecoilValue(localizationState);

  const getSheet = (): { Sheet: SheetProps; Title: JSX.Element } => {
    const [robStep] = useRecoilState(robStepState);
    const robVictim = useRecoilValue(robVictimState);
    const robTool = useRecoilValue(robToolState);
    const shop = useRecoilValue(shopState);

    const { mutate: rob } = useRobVictim();
    // const inProgressRobbery = useRecoilValue(inProgressRobberyState);

    const decoy = getShopItemByType(shop, "decoy", "thiefItems");
    const crowbar = getShopItemByType(shop, "crowbar", "thiefItems");

    const handleNextMethodSlection = async () => {
      let _victimRowId = "";

      if (!robVictim) return;

      if ("userRowId" in robVictim) {
        _victimRowId = robVictim?.userRowId;
      } else {
        _victimRowId = robVictim?.userId;
      }
      const tools: any = {
        decoy: {
          toolId: decoy?.toolId as string,
          count: 1,
          victimRowId: _victimRowId,
        },
        crowbar: {
          toolId: crowbar?.toolId as string,
          count: 1,
          victimRowId: _victimRowId,
        },
      };

      const selectedTools: UsedToolType[] =
        robTool?.map((item) => tools[item?.type]) ?? [];

      const selectedThiefItems: ToolReqType = {
        usedFrom: 1,
        tools: selectedTools,
      };

      rob({
        victimId: _victimRowId,
        body: selectedThiefItems,
      });

      // setRobStep("robbery-inprogress");
    };

    if (robStep === "method-selection") {
      return {
        Sheet: {
          StaticSheet: <RobMethodSheet onNext={handleNextMethodSlection} />,
          DragableSheet: <RobMethodToolSheet />,
        },
        Title: (
          <>
            <span className="opacity-70">You will rob </span>{" "}
            <span className=" text-ellipsis line-clamp-1 block">
              {" "}
              {robVictim?.username}
            </span>
          </>
        ),
      };
    }
    if (robStep === "robbery-inprogress") {
      return {
        Sheet: {
          StaticSheet: (
            <RobInprogressSheet
              robberyEndTime={inProgressRobbery?.shouldFinishAt as string}
              robRateGoldPerSecond={
                inProgressRobbery?.robRateGoldPerSecond as number
              }
              robberyStartTime={inProgressRobbery?.startedAt as string}
              amount={inProgressRobbery?.goldStealedlSoFar as number}
            />
          ),
        },
        Title: (
          <>
            <span className=" opacity-70">You're robbing </span>{" "}
            <span className="text-ellipsis line-clamp-1 block">
              {" "}
              {robVictim?.username ?? inProgressRobbery?.victimUsername}
            </span>
          </>
        ),
      };
    }
    if (robStep === "get-caught") {
      return {
        Sheet: { StaticSheet: <CaughtSheet /> },
        Title: <>You’ve Been Caught</>,
      };
    }

    if (robStep === "run-away") {
      return {
        Sheet: { StaticSheet: <RunAwaySheet /> },
        Title: <>{localization["recall_screen.title"]}</>,
      };
    }
    if (robStep === "robbery-success") {
      return {
        Sheet: { StaticSheet: <InviteAndEarnSheet /> },
        Title: <>{localization["success_screen.title"]}</>,
      };
    }

    if (robStep === "in-jail") {
      return {
        Sheet: { StaticSheet: <GoHomeSheet /> },
        Title: <> You’ve Been Caught</>,
      };
    } else {
      return {
        Sheet: null,
        Title: <></>,
      };
    }
  };

  const robStep = useRecoilValue(robStepState);
  const { resetRobFlow } = useResetRobFlow();

  const handleClose = () => {
    // if (robStep !== "robbery-inprogress") {
    resetRobFlow();
    setInProgressRobbery(null);
    // }
    onClose();
  };

  return (
    <Page
      id="robbery-view"
      allowNavigatingBack={false}
      viewTitle={getSheet().Title}
      allowSearch={false}
      backBtnClkHandler={onClose}
      Sheet={getSheet().Sheet}
      className=""
      viewControls={() => <CloseButton handleClose={handleClose} />}
    >
      {robSteps[robStep]}
    </Page>
  );
};

export default Rob;
