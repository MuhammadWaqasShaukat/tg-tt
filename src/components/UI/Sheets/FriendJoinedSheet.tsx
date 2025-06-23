import { Button } from "../Buttons";
import { useSetRecoilState } from "recoil";
import { attentionViewState } from "@/store/attentionView";

const FriendJoinedSheet = () => {
  const setAttentionView = useSetRecoilState(attentionViewState);

  return (
    <>
      <Button
        acent="yellow"
        className="shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em]"
      >
        <span className=" capitalize">
          Rob <code>Friend Name </code>
        </span>
      </Button>
      <Button
        onClick={() => setAttentionView(null)}
        acent="ghost"
        className="border border-[#CEACA7] shadow-custom flex flex-row justify-center items-center gap-2 text-[1.25em] rounded-2xl"
      >
        <span>Skip For Now</span>
      </Button>
    </>
  );
};

export default FriendJoinedSheet;
