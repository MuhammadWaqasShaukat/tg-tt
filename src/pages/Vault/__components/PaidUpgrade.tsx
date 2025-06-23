import { Button } from "@/components/UI/Buttons";
import Pill2 from "@/components/UI/Pills/Pill2";

const PaidUpgrade: React.FC<{ clkHandler: () => void }> = ({ clkHandler }) => {
  return (
    <>
      <Button
        onClick={clkHandler}
        acent="green"
        className="shadow-custom text-[1.25em] flex flexclkHandler-row justify-center items-center gap-2 rounded-2xl max-h-14"
      >
        <div className=" flex flex-row justify-center items-center gap-2">
          <span>Upgrade League</span>
          <Pill2
            accent="brown"
            count="Pay"
            className="text-[1em] -ml-2.5 rounded-r-md pl-2.5  py-0.5"
            extended={false}
          >
            <div className="min-w-7 aspect-square  max-h-7 max-w-7 z-10">
              <div className="bg bg bg-img-star-bordered bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        </div>
      </Button>
      <div className="text-center ">
        <span className=" text-[1em] font-josefin text-light-brown">
          You can naturally Upgrade once you fill your Vault or Upgrade faster
          by paying.
        </span>
      </div>
    </>
  );
};

export default PaidUpgrade;
