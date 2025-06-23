import { Page } from "@/components/UI/Page";
import FriendJoinedSheet from "@/components/UI/Sheets/FriendJoinedSheet";
import { attentionQueueState } from "@/store/attentionQueue";
import { attentionViewState } from "@/store/attentionView";
import { PageProps } from "@/types/Page.t";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const FriendJoined: React.FC<PageProps> = () => {
  const setAttentionView = useSetRecoilState(attentionViewState);
  const [, setAttentionQueue] = useRecoilState(attentionQueueState);

  const onCloseHandler = () => {
    setAttentionView(null);
    setAttentionQueue((prev) =>
      prev.filter((item) => item !== "friend-joined")
    );
  };

  return (
    <Page
      id="friend-joined-view"
      allowNavigatingBack={false}
      allowSearch={false}
      backBtnClkHandler={onCloseHandler}
      viewTitle=""
      className="bg-green/30 flex flex-col justify-end items-end w-full h-full !px-0"
      Sheet={{ StaticSheet: <FriendJoinedSheet /> }}
      hasPadding={false}
      handleBgClick={onCloseHandler}
    >
      <div className=" bg-green w-full rounded-t-3xl relative grid place-content-center py-20 -mb-20">
        <div className="h-2 rounded-full w-14 bg-brown absolute top-3 left-1/2 -translate-x-1/2"></div>
        <div className=" flex flex-col justify-center items-center gap-8 px-6">
          <h2 className=" text-[2.25em] text-center">Your friend joined</h2>
          <p className=" font-josefin text-center text-[1.375em] font-bold tracking-tight">
            <span className=" text-light-brown">
              <code>Friend Name </code>
            </span>
            just joined the game! Make sure to rob the hell out of them!
          </p>
        </div>
      </div>
    </Page>
  );
};

export default FriendJoined;
