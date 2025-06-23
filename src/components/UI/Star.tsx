const Star = ({ counts }: { counts: number }) => {
  return (
    <div className=" flex flex-row justify-center items-center bg-[#FFEEE4] rounded-md p-1.5 gap-1.25">
      <div className="w-[4.11vw] aspect-square max-h-[18px] max-w-[18px] z-10 flex flex-row justify-center items-center">
        <div className="bg bg-img-star-bordered bg-center h-[100%] w-[100%] rounded-xl"></div>
      </div>
      <p className="text-[1em] leading-none">{counts.toLocaleString()}</p>
    </div>
  );
};

export default Star;
