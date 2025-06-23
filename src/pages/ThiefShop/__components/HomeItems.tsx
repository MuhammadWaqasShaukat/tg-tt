import ShopRow from "@/components/UI/Lists/Rows/ShopRow";
import { useInfoModal } from "@/hooks/useInfoModal";
import { shopState } from "@/store/shop";
import { useRecoilState } from "recoil";

const HomeItems = () => {
  const [shop] = useRecoilState(shopState);
  const { openInfoModal } = useInfoModal();

  return (
    <div className="flex flex-col w-full items-start justify-start gap-2">
      <div className="flex flex-row items-center justify-start gap-2">
        <div
          className="size-5 bg bg-icon-info"
          onClick={() => {
            openInfoModal("thief_shop.info_tip_home_items");
          }}
        ></div>
        <span className=" text-[1.25em]">Home Items</span>
      </div>

      {shop.homeItems.map((item) => {
        return <ShopRow {...item} key={item.toolId} />;
      })}
    </div>
  );
};

export default HomeItems;
