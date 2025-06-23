import ImageBox from "../../ImageBox";
import { Button } from "../../Buttons";

const AllThievesRow = () => {
  return (
    <div className=" pt-4 flex flex-row justify-between items-center w-full gap-3 max-h-[64px] border-t border-[#5A1319] border-opacity-20">
      <div className="flex flex-row items-center justify-start flex-1">
        <ImageBox />
        <div className="pt-1 ml-4 space-y-1 ">
          <h2 className="text-xl font-bold leading-4 tracking-tight  font-josefin">
            Martin S.
          </h2>
          <div className="flex flex-row justify-start items-center px-2 py-0.5 bg-white rounded-lg">
            <h3 className="text-base ">Pickpocket</h3>
            <div className="grid grid-cols-3 gap-1 ">
              <div className="w-[5.31vw] h-[2.46vh] bg bg-icon-star-filled"></div>
              <div className="w-[5.31vw] h-[2.46vh] bg bg-icon-star-filled"></div>
              <div className="w-[5.31vw] h-[2.46vh] bg bg-icon-star"></div>
            </div>
          </div>
        </div>
      </div>

      <Button
        acent="brown"
        className=" h-[4.6vh] !w-[10.14vw] grid place-content-center"
      >
        <div className="bg bg-icon-cross h-[4vh] w-[4vw] aspect-square "></div>
      </Button>
      <Button
        acent="brown"
        className=" h-[4.6vh] !w-[10.14vw] grid place-content-center"
      >
        <div className="bg bg-icon-attack h-[4vh] w-[4vw] aspect-square "></div>
      </Button>
    </div>
  );
};

export default AllThievesRow;
