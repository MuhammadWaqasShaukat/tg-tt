import { Page } from "@/components/UI/Page";
import GotRobbedSheet from "@/components/UI/Sheets/GotRobbedSheet";
import { ROB_NOTIFICATION } from "@/constants/vars";
import { attentionQueueState } from "@/store/attentionQueue";
import { attentionViewState } from "@/store/attentionView";
import { robbedHistoryViewState } from "@/store/robbedHistoryView";
import { dismissNotification } from "@/utils/dissMissRobNotification";
import { useRecoilState, useSetRecoilState } from "recoil";

const GotRobbed = () => {
  const setAttentionView = useSetRecoilState(attentionViewState);
  const setRobbedHistoryView = useSetRecoilState(robbedHistoryViewState);
  const [, setAttentionQueue] = useRecoilState(attentionQueueState);

  const onCloseHandler = () => {
    dismissNotification(ROB_NOTIFICATION, true, () => {
      setAttentionView(null);
    });
    setAttentionQueue((prev) => prev.filter((item) => item !== "got-robbed"));
  };

  return (
    <Page
      id="got-robbed-view"
      allowNavigatingBack={false}
      allowSearch={false}
      viewTitle=""
      className="bg-brown/65 flex flex-col justify-end items-end w-full h-full !px-0"
      Sheet={{ StaticSheet: <GotRobbedSheet /> }}
      hasPadding={false}
      handleBgClick={onCloseHandler}
    >
      <div
        className="relative grid w-full py-20 -mb-20 bg-red rounded-t-3xl place-content-center"
        onClick={() => setRobbedHistoryView(true)}
      >
        <div
          className="absolute h-2 -translate-x-1/2 rounded-full w-14 bg-brown top-3 left-1/2 cursor-grab"
          onClick={() => setRobbedHistoryView(true)}
        ></div>
        <div className="flex flex-col items-center justify-center gap-8 px-6 ">
          <h2 className=" text-[2.25em] text-center">You Got Robbed!</h2>
          <p className=" font-josefin text-center text-[1.375em] font-bold tracking-tight">
            You got robbed and you lost some $LOOT. You can invite friends which
            will give you $LOOT or you can skip for now and rob them back!
          </p>
        </div>
      </div>
    </Page>
  );
};

export default GotRobbed;
