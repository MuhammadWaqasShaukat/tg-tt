const StepFour = () => {
  return (
    <div className=" flex flex-col justify-start items-start flex-1 px-6 gap-6 py-[51px]">
      <h1 className="max-h-[100px] text-4xl pr-4 leading-normal">
        Boost your robbery
      </h1>
      <span className="text-[22px] font-josefin  font-medium tracking-tighter text-light-brown">
        Once you have targeted a victim, you can boost your robbery with some
        tools for improved performance.
      </span>
      <div className="shadow-custom-2 h-[366pxw] w-full bg-white rounded-[24px] flex flex-col justify-center items-center p-[21px]">
        <div className="w-full bg-[#fffbf9] rounded-[24px]">
          <div className="bg bg-onboarding-screen-step-4 aspect-square "></div>
        </div>
      </div>
    </div>
  );
};
export default StepFour;
