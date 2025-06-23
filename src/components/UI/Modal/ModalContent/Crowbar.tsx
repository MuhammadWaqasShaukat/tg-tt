import Pill2 from "../../Pills/Pill2";
import Counter from "../../../Counter";
import { Button2 } from "../../Buttons";
import { getShopItemByType } from "@/utils/getShopItem";
import { useShopItemPurcahse } from "@/hooks/usePurchaseShopItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { shopState } from "@/store/shop";
import { counterState } from "@/store/count";
import { useCallback, useEffect } from "react";
import { purchaseItemHelper } from "@/utils/buyItemsHelper";
import { localizationState } from "@/store/localizations";
import { showToast } from "@/utils/showToast";
import { getFormatedText } from "@/utils/getFormatedText";
import { useQueryClient } from "@tanstack/react-query";
import { CurrentModalState } from "@/store/currentModal";

const Crowbar = () => {
  const shop = useRecoilValue(shopState);
  const { mutateAsync: purchseItem } = useShopItemPurcahse();
  const item = getShopItemByType(shop, "crowbar", "thiefItems");
  const localization = useRecoilValue(localizationState);
  const queryClient = useQueryClient();
  const setCurrentModal = useSetRecoilState(CurrentModalState);

  const [count, setCount] = useRecoilState(counterState);
  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, []);
  const handlePurchase = useCallback(async () => {
    if (count <= 0) {
      showToast("error", "Choose the quantity you'd like to buy.");
      return;
    }
    if (item?.toolId) {
      try {
        await purchaseItemHelper(count, () => purchseItem(item.toolId));
        queryClient.invalidateQueries(["shop-query"] as any);
        showToast(
          "success",
          `You've purchased ${count} ${count > 1 ? "Crowbars" : "Crowbar"}.`
        );
      } catch (error) {
        showToast("error", "Oops! Something went wrong.");
      } finally {
        setCurrentModal(null);
      }
    }
  }, [count]);

  const handleClick = useCallback(() => {
    setTimeout(handlePurchase, 0);
  }, [handlePurchase]);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-6">
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <Pill2
          accent="red"
          count={`x${item?.count}`}
          className="text-[2.6em] text-white py-0.5 "
        >
          <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[76px] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-crowbar bg-center h-[100%] w-[100%] rounded-xl"></div>
          </div>
        </Pill2>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <p className="text-[1em] text-center font-josefin text-light-brown font-medium tracking-tighter leading-5">
            {getFormatedText(
              localization["item_description.crowbar"],
              "35",
              "text-brown font-bold"
            )}
          </p>
          <Counter
            min={1}
            counterType="buying"
            pricePerItem={item?.baseTokenPrice}
          />
        </div>
      </div>
      <Button2
        acent="green"
        className="flex-1 w-full 2.5em"
        buttonText={((item?.baseTokenPrice ?? 1) * count).toLocaleString()}
        onClick={handleClick}
      >
        <span>{localization["item_description.buy_button"]}</span>
      </Button2>
    </div>
  );
};

export default Crowbar;
