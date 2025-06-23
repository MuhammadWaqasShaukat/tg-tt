import ImageBox from "../ImageBox";

const RobMethod = ({ method }: { method: string }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" w-[8.21vw] h-[3.125vw] min-h-[28px] min-w-[34px]  bg-[#F88B7C] text-center rounded-3xl z-10">
        <span className="text-base text-white ">x2</span>
      </div>
      <ImageBox className=" h-[11.38vh] w-[24.64vw] shadow-custom-2 -mt-2" />
      <div className="flex flex-row items-center justify-start gap-2 mt-3 ">
        <div className="w-5 h-4 bg bg-icon-info"></div>
        <p className="text-base capitalize text-light-brown">{method}</p>
      </div>
    </div>
  );
};

export default RobMethod;
