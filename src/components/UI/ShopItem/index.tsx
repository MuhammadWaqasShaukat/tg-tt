import { ShopItemsNames } from "@/types/ShopItemsNames.t";
import ImageBox from "../ImageBox";
import { ShopItemsURLs } from "@/constants/shopItems";
import {
  ShopItem as ShopItemType,
  ShopItemProps,
  ShopItemsModalMap,
} from "@/types/ShopItem.t";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { robToolState } from "@/store/robTool";
import Button4 from "../Buttons/Button4";
import { CurrentModalState } from "@/store/currentModal";
import { userState } from "@/store/User";
import { showToast } from "@/utils/showToast";

const ShopItem: React.FC<ShopItemProps> = ({ item, onInfoClick = null }) => {
  const [robTool, setRobTool] = useRecoilState(robToolState);
  const currentModal = ShopItemsModalMap[item.type];
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const handleGetToolClk = () => {
    setCurrentModal(currentModal);
  };

  const user = useRecoilValue(userState);

  const handleShopItemSelection = (item: ShopItemType) => {
    if (item.type === "deepPockets" && user?.hugeBagIsActive) {
      showToast("error", "Huge Bag is already active!");
      return;
    }
    setRobTool((prevTools) => {
      const isSelected = prevTools?.some(
        (_item) => _item.toolId === item.toolId
      );

      return isSelected
        ? prevTools?.filter((_item) => _item.toolId !== item.toolId) || []
        : [...(prevTools || []), item];
    });
  };

  const isItemSelected = () => {
    return robTool?.some((tool) => tool.type === item.type) ?? false;
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {item?.count == 0 ? (
        <Button4
          buttonText={item?.baseTokenPrice.toLocaleString()}
          onClick={handleGetToolClk}
          acent="green"
          className="z-10 w-max"
        ></Button4>
      ) : (
        <div
          className={` w-[8.21vw]  max-h-min max-w-min  min-w-[34px] text-center rounded-3xl z-10 py-1 bg-[#F88B7C] grid place-content-center`}
        >
          <span className=" block text-[1em] text-white leading-none ">
            x{isItemSelected() ? item?.count - 1 : item?.count}
          </span>
        </div>
      )}
      <div onClick={() => handleShopItemSelection(item)}>
        <ImageBox
          className={`!w-[34.64vw] !aspect-square !max-h-[102px] !max-w-[102px] shadow-custom-2 -mt-2.5 border-3   grid place-content-center  ${
            isItemSelected()
              ? "!bg-[#DBFAFF] border-[#F88B7C]"
              : "!bg-transparent border-[#F0DAD2]"
          }`}
          imageURL={ShopItemsURLs[currentModal as ShopItemsNames]}
          imageSize="min-w-20"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-2 mt-3 ">
        <div
          className="size-5 bg bg-icon-info"
          onClick={() => onInfoClick!()}
        ></div>
        <p className="text-[0.9em] uppercase text-light-brown whitespace-nowrap text-ellipsis">
          {item?.type == "fakeIdentity" ? "Fake ID" : item?.name}
        </p>
      </div>
    </div>
  );
};

export default ShopItem;
