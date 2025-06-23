import Counter from "../../../Counter";
import Pill2 from "../../Pills/Pill2";
import { Button2 } from "../../Buttons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { shopState } from "@/store/shop";
import { useShopItemPurcahse } from "@/hooks/usePurchaseShopItem";
import { getShopItemByType } from "@/utils/getShopItem";
import { purchaseItemHelper } from "@/utils/buyItemsHelper";
import { counterState } from "@/store/count";
import { useCallback, useEffect } from "react";
import { localizationState } from "@/store/localizations";
import { showToast } from "@/utils/showToast";
import { getFormatedText } from "@/utils/getFormatedText";
import { useQueryClient } from "@tanstack/react-query";
import { CurrentModalState } from "@/store/currentModal";

const GaurdDog = () => {
  const shop = useRecoilValue(shopState);
  const { mutateAsync: purchseItem } = useShopItemPurcahse();
  const item = getShopItemByType(shop, "temporaryGuards", "homeItems");
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
          `You've purchased ${count} ${count > 1 ? "Guard Dogs" : "Guard Dog"}.`
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
          className="text-[2.6em] text-white"
        >
          <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw] max-w-[76px] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-gaurd-dog bg-center h-[100%] w-[100%] rounded-lg"></div>
          </div>
        </Pill2>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <p className="text-[1em] text-center font-josefin  font-medium tracking-tighter leading-5">
            {getFormatedText(
              localization["item_description.temporaryGuards"],
              "2",
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
        onClick={handleClick}
        buttonText={((item?.baseTokenPrice ?? 1) * count).toLocaleString()}
        acent="green"
        className="flex-1 w-full p-2.5"
      >
        <span>{localization["item_description.buy_button"]}</span>
      </Button2>
    </div>
  );
};

export default GaurdDog;
