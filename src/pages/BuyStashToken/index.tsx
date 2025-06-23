import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import SelectionScreen from "./__components/SelectionScreen";

const BuyStashToken: React.FC<PageProps> = ({ onClose }) => {
  return (
    <Page
      id="buy-stash-view"
      allowNavigatingBack={true}
      className=" !gap-6 !pb-8"
      viewTitle="Buy $Stash"
      allowSearch={false}
      backBtnClkHandler={onClose}
      Sheet={null}
    >
      <SelectionScreen />
    </Page>
  );
};

export default BuyStashToken;
