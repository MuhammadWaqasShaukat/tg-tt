import Button3 from "@/components/UI/Buttons/Button3";
import ImageBox from "@/components/UI/ImageBox";
import { CurrentModalState } from "@/store/currentModal";
import { useRecoilState } from "recoil";

const TemporaryGuards = () => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);

  const openTemporaryGaurdsModal = () => {
    setCurrentModal("guard-dog");
  };

  return (
    <div className="pt-4 flex flex-row justify-between items-center w-full border-t border-[#5A1319] border-opacity-20 gap-3 max-h-[58px]">
      <div className="flex flex-row items-center justify-start flex-1 w-full">
        <ImageBox className="w-[11.6vw] h-[5.4vh]" />
        <div className="pt-1 ml-3 space-y-1 w-[42vw]">
          <h2 className="text-xl font-bold leading-4 tracking-tight font-josefin capitalize">
            Temporary Guards
          </h2>
          <div className="flex flex-row items-end justify-end">
            <p className=" text-ellipsis font-josefin tracking-tight whitespace-nowrap truncate text-light-brown text-[1.6em]">
              There 3x some description There 3x some description
            </p>
          </div>
        </div>
      </div>

      <span className="text-xl text-center font-bold leading-4 tracking-tight font-josefin px-2">
        4
      </span>
      <Button3
        onClick={openTemporaryGaurdsModal}
        acent="green"
        className=" w-max"
      ></Button3>
    </div>
  );
};

export default TemporaryGuards;
