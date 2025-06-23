const StepThree = () => {
  return (
    <div className=" flex flex-col justify-start items-start flex-1 px-6 gap-6 py-[51px]">
      <h1 className="max-h-[100px] text-4xl pr-4 leading-normal">
        Choose your victim
      </h1>
      <span className="text-[22px] font-josefin  font-medium tracking-tighter text-light-brown">
        Once you see the list with other thieves in the game - you can
        cherrypick someone to rob!
      </span>
      <div className="shadow-custom-2 h-[366px] w-full bg-white rounded-[24px] flex flex-col justify-center items-center p-[21px]">
        <div className="w-full bg-[#FFEEE4] rounded-[24px]">
          <div className="bg bg-onboarding-screen-step-3 aspect-square"></div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
