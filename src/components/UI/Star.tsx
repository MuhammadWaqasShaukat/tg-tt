const Star = ({ price }: { price: number }) => {
  return (
    <div className=" flex flex-row justify-center items-center bg-[#FFEEE4] rounded-md p-1.5 gap-1.25">
      <div className=" h-[1.90vh] w-[4.11vw] z-10 flex flex-row justify-center items-center">
        <div className="bg bg-img-star-bordered bg-center h-[100%] w-[100%] rounded-xl"></div>
      </div>
      <p className="text-[1em] leading-none">{price}</p>
    </div>
  );
};

export default Star;
