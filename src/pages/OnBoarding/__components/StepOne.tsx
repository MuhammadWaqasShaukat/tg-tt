const StepOne = () => {
  return (
    <div className=" flex flex-col justify-end items-start flex-1 p-6 gap-6">
      <h1 className=" text-4xl pr-4">Welcome to Token Thieves 1</h1>
      <span className="text-[22px] font-josefin  font-medium tracking-tighter text-light-brown">
        The most important button in the game! From here you target your victim
        and you initiate a robbery!
      </span>
      <ul className="list-disc px-4">
        <li>
          <span className="text-[22px] font-josefin  font-medium tracking-tighter text-light-brown">
            A game where your trickery and cunning are generously rewarded!
          </span>
        </li>
        <li>
          <span className="text-[22px] font-josefin font-medium tracking-tighter text-light-brown">
            But, you know ... in order to do so, you need to initiate a robbery
            first. Check how it’s done!
          </span>
        </li>
      </ul>
    </div>
  );
};
export default StepOne;
