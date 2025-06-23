import BuyStashCard from "@/components/UI/Cards/BuyStash";
import { View } from "@/components/UI/View";
import { PageProps } from "@/types/Page.t";

const BuyStashToken: React.FC<PageProps> = ({ onClose }) => {
  return (
    <View
      className=" !gap-6"
      viewTitle="Buy $Stash"
      allowSearch={false}
      backBtnClkHandler={onClose}
    >
      <div className="space-y-12">
        <div className=" space-y-3">
          <p className="text-base tracking-tightn font-josefin text-light-brown">
            By purchasing $STASH tokens, you will gain an advantage in the game
            by buying:
          </p>
          <div className=" space-y-2">
            <div className="flex flex-row items-center justify-between w-full ">
              <div className="flex flex-row items-center justify-start gap-2 ">
                <div className="w-5 h-4  bg bg-icon-info"></div>
                <p className="text-base  text-light-brown">Home items</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full ">
              <div className="flex flex-row items-center justify-start gap-2 ">
                <div className="w-5 h-4  bg bg-icon-info"></div>
                <p className="text-base  text-light-brown">Thief items</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full ">
              <div className="flex flex-row items-center justify-start gap-2 ">
                <div className="w-5 h-4  bg bg-icon-info"></div>
                <p className="text-base  text-light-brown">
                  Productivity items
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" space-y-6 w-full">
          <BuyStashCard price={20} tokens={100} isPopular={false} />
          <BuyStashCard price={100} tokens={3000} isPopular={true} />
          <BuyStashCard price={1000} tokens={15000} isPopular={false} />
        </div>
        <p className="text-base tracking-tightn font-josefin text-light-brown">
          All packages are a one-time purchase with
          <span className=" font-medium text-brown">
            {" "}
            no subscription required.
          </span>
        </p>
      </div>
    </View>
  );
};

export default BuyStashToken;
