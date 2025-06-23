import { Button } from "../Buttons";
import { shopState } from "@/store/shop";
import { useRecoilState, useRecoilValue } from "recoil";
import { getShopItemByType } from "@/utils/getShopItem";
import { robToolState } from "@/store/robTool";
import { ToolReqType, UsedToolType } from "@/types/ToolReqBody.t";
import { useToolQuery } from "@/hooks/useTool";

const ProfileSheet = () => {
  const [robTool] = useRecoilState(robToolState);

  const shop = useRecoilValue(shopState);

  const deepPockets = getShopItemByType(shop, "deepPockets", "thiefItems");
  const snack = getShopItemByType(shop, "snack", "productivityItems");
  const fakeIdentity = getShopItemByType(
    shop,
    "fakeIdentity",
    "productivityItems"
  );

  const { mutate: useTool } = useToolQuery();

  const tools: any = {
    deepPockets: {
      toolId: deepPockets?.toolId as string,
      count: 1,
    },
    snack: {
      toolId: snack?.toolId as string,
      count: 1,
    },

    fakeIdentity: {
      toolId: fakeIdentity?.toolId as string,
      count: 1,
    },
  };

  const handleUseItem = () => {
    const selectedTools: UsedToolType[] =
      robTool?.map((item) => tools[item?.type]) ?? [];

    const useItems: ToolReqType = {
      usedFrom: 2,
      tools: selectedTools,
    };
    if (useItems) useTool(useItems);
  };
  return (
    <Button
      disabled={robTool && robTool.length > 0 ? false : true}
      onClick={handleUseItem}
      acent="yellow"
      className="shadow-custom flex text-[1.13em] flex-row justify-center items-center gap-2 rounded-2xl"
    >
      <span>Use item</span>
    </Button>
  );
};

export default ProfileSheet;
