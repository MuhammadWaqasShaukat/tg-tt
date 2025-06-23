import ImageBox from "../../ImageBox";
import { Button } from "../../Buttons";
import { useRecoilState } from "recoil";
import { robVictimState } from "../../../../store/choseVictim";
import { CurrentViewState } from "../../../../store/currentView";

const HitListRow = () => {
  const [robVictim, setRobVictim] = useRecoilState(robVictimState);
  const [, setView] = useRecoilState(CurrentViewState);
  const handleRowClick = () => {
    setView("statistics");
  };

  return (
    <div
      className="pt-4 flex flex-row justify-between items-end w-full border-t border-[#5A1319] border-opacity-20 gap-3 max-h-[58px]"
      onClick={handleRowClick}
    >
      <div className="flex flex-row items-end justify-start flex-1">
        <ImageBox />
        <div className="pt-1 ml-3 space-y-1 ">
          <h2 className="text-xl font-bold leading-4 tracking-tight  font-josefin">
            Martin S.
          </h2>
          <div className="flex flex-row items-end justify-end ">
            <div className="text-sm text-light-brown font-josefin ">
              All Time :
            </div>
            <div className="flex flex-row items-end gap-1 ">
              <span className="text-sm text-[#FF5757] font-josefin">
                -55.8k
              </span>
              <span className="text-sm text-dark-green font-josefin">
                +355.8k
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button
        acent="brown"
        className=" h-[4.6vh] !w-[10.14vw] aspect-square  grid place-content-center"
      >
        <div className="bg bg-icon-cross h-[4vh] w-[4vw] aspect-square"></div>
      </Button>
      <Button
        onClick={() => {
          setRobVictim(!robVictim);
        }}
        acent="brown"
        className="h-[4.6vh] !w-[10.14vw] aspect-square grid place-content-center"
      >
        <div className="bg bg-icon-attack h-[4vh] w-[4vw] aspect-square"></div>
      </Button>
    </div>
  );
};

export default HitListRow;
