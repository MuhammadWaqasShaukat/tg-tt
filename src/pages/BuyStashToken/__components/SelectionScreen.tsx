import BuyStashCard from "@/components/UI/Cards/BuyStash";
import { useStashPkgQuery } from "@/hooks/useStashPkgs";

const SelectionScreen = () => {
  const { data: packages } = useStashPkgQuery();

  return (
    <div className="flex flex-col items-start justify-start w-full gap-12">
      <div className="flex flex-col items-start justify-start w-full gap-3">
        <p className="text-[1em] tracking-tightn font-josefin text-light-brown">
          By purchasing $STASH tokens, you will gain an advantage in the game by
          buying:
        </p>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <div className="flex flex-row items-center justify-between w-full ">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div className="size-5 bg bg-icon-info"></div>
              <p className="text-[1em] text-light-brown">Home items</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div className="size-5  bg bg-icon-info"></div>
              <p className="text-[1em] text-light-brown">Thief items</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <div className="flex flex-row items-center justify-start gap-2 ">
              <div className="size-5 bg bg-icon-info"></div>
              <p className="text-[1em] text-light-brown">Productivity items</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-6">
        {packages?.map((pkg: any, index: number) => (
          <BuyStashCard
            pkgId={pkg.id}
            key={pkg.id}
            price={pkg.price}
            counts={pkg.count}
            isPopular={index === 1 ? true : false}
          />
        ))}
      </div>
      <p className="text-[1em] tracking-tightn font-josefin text-light-brown">
        All packages are a one-time purchase with
        <span className="font-medium text-brown">
          {" "}
          no subscription required.
        </span>
      </p>
    </div>
  );
};

export default SelectionScreen;
