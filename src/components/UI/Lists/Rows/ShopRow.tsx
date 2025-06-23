import Button3 from "@/components/UI/Buttons/Button3";
import ImageBox from "@/components/UI/ImageBox";
import { ShopItemsURLs } from "@/constants/shopItems";
import { CurrentModalState } from "@/store/currentModal";
import { localizationState } from "@/store/localizations";
import { LocalizationType } from "@/types/localization.t";
import { ShopItem, ShopItemsModalMap } from "@/types/ShopItem.t";
import { ShopItemsNames } from "@/types/ShopItemsNames.t";
import { getFormatedText } from "@/utils/getFormatedText";
import { useRecoilState, useRecoilValue } from "recoil";

const ShopRow: React.FC<ShopItem> = ({
  // toolId,
  name,
  count,
  baseTokenPrice,
  type,
  // baseFiatPrice,
  // isInShop,
  // isRobberyUse,
  // isRobberUse,
  // maxUseQuantity,
  // maxDailyUse,
  // changeValue,
  // changeValue2,
}) => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);

  const currentModal = ShopItemsModalMap[type];
  const localization = useRecoilValue(localizationState);

  const getDescriptions = () => {
    const placeholders: { [key: string]: string } = {
      reinforcedVault: "35",
      temporaryGuards: "2",
      temporaryAlarmSystem: "1st",
      decoy: "5",
      crowbar: "35",
      snack: "5",
      fakeIdentity: "5",
      deepPockets: "50",
    };

    return getFormatedText(localization[key], placeholders[type], "text-brown");
  };

  const key = `item_description.${type}` as keyof LocalizationType;

  const handleShopRowClk = () => {
    setCurrentModal(currentModal);
  };
  return (
    <div
      onClick={() => handleShopRowClk()}
      className="flex py-2 flex-row justify-between items-center w-full border-t border-[#5A1319] border-opacity-20 gap-2 "
    >
      <div className="flex flex-row items-center justify-start gap-2">
        <ImageBox
          className="w-[11.6vw] max-w-12"
          imageURL={ShopItemsURLs[currentModal as ShopItemsNames]}
        />
        <div className="pt-1 space-y-1 w-[35vw] max-w-[180px]">
          <h2 className="text-[1.25em] font-bold leading-6 tracking-tight font-josefin capitalize whitespace-nowrap truncate">
            {name}
          </h2>
          <div className="flex flex-row items-end justify-end">
            <p className=" text-ellipsis font-josefin tracking-tight whitespace-nowrap truncate text-light-brown text-[1em]">
              {getDescriptions()}
            </p>
          </div>
        </div>
      </div>

      <span className="text-[1.25em] font-bold text-center leading-4 tracking-tight font-josefin px-2">
        {count}
      </span>
      <Button3
        buttonText={baseTokenPrice.toLocaleString()}
        acent="green"
        className=" w-max"
      ></Button3>
    </div>
  );
};

export default ShopRow;
