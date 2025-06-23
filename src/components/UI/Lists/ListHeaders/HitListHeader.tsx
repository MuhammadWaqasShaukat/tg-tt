import { ListHeaderType } from "@/types/LIst.t";

const HitListHeader: React.FC<ListHeaderType> = ({ className }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-full gap-[22px] ${className}`}
    >
      <div className="flex-1 ">
        <span className="text-base font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Player
        </span>
      </div>
      <div className=" w-max">
        <span className="text-base font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Stalk
        </span>
      </div>
      <div className=" w-max">
        <span className="text-base font-bold tracking-tighter capitalize font-josefin text-light-brown">
          Rob
        </span>
      </div>
    </div>
  );
};

export default HitListHeader;
