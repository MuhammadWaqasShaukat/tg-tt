import { Button } from "@/components/UI/Buttons";

const StepTwo = () => {
  return (
    <div className=" flex flex-col justify-start items-start flex-1 px-6 gap-6 py-[51px]">
      <h1 className="h-[100px] text-4xl pr-4">How to start?</h1>
      <span className="text-[22px] font-josefin  font-medium tracking-tighter text-light-brown">
        The most important button in the game! From here you target your victim
        and you initiate a robbery!
      </span>
      <div className="h-[366px] w-full bg-white rounded-[24px] flex flex-col justify-center items-center p-[21px]">
        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <div className="bg bg-icon-attack h-5 w-5"></div>
          <span>Rob Now</span>
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
