import { List } from "@/components/UI";
import SnackRow from "@/components/UI/Lists/Rows/ThiefShopRows/HugeBag";

const ProductivityItems = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className=" w-5 h-5 bg bg-icon-info"></div>
        <span className=" text-xl">Productivity Items</span>
      </div>
      <List className="w-full">
        <SnackRow />
      </List>
    </div>
  );
};

export default ProductivityItems;
