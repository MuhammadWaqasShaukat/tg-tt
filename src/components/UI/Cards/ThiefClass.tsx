import ImageBox from "../ImageBox";

const ThiefClass = () => {
  return (
    <div className=" flex flex-row justify-between items-center bg-[#FFFBF9] w-full rounded-2xl p-2">
      <div className="  flex-row flex justify-start items-center ">
        <ImageBox className=" h-[8.5vh] w-[18.4vw] shadow-custom-2" />
        <div className="flex flex-col justify-start items-center px-2 py-0.5 gap-3 rounded-lg">
          <h3 className=" text-[2em] text-[#39444D]">Burglar</h3>
          <div className="grid grid-cols-3 gap-1 ">
            <div className="bg bg-icon-star-filled h-[4vh] w-[8.7vw]"></div>
            <div className="bg bg-icon-star-filled h-[4vh] w-[8.7vw]"></div>
            <div className="bg bg-icon-star h-[4vh] w-[8.7vw]"></div>
          </div>
        </div>
      </div>
      <button className=" bg bg-icon-arrow h-4 w-4 rotate-180"></button>
    </div>
  );
};

export default ThiefClass;
