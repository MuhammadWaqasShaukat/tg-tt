import Pill2 from "@/components/UI/Pills/Pill2";
import { Page } from "@/components/UI/Page";
import { PageProps } from "@/types/Page.t";
import AlarmSheet from "@/components/UI/Sheets/AlarmSheet";
import { shopState } from "@/store/shop";
import { useRecoilState, useRecoilValue } from "recoil";
import { getShopItemByType } from "@/utils/getShopItem";
import { useEffect } from "react";
import { sheetState } from "@/store/sheetStatus";
import { localizationState } from "@/store/localizations";

const Alarm: React.FC<PageProps> = ({ onClose }) => {
  const shop = useRecoilValue(shopState);
  const alarms = getShopItemByType(shop, "temporaryAlarmSystem", "homeItems");
  const [, setSheetEnabled] = useRecoilState(sheetState);
  const localization = useRecoilValue(localizationState);

  useEffect(() => {
    if (alarms && alarms.count <= 0) {
      setSheetEnabled(false);
    }
  }, [alarms]);

  return (
    <Page
      id="alarm-view"
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle={localization["alarm_screen.title"]}
      Sheet={{ StaticSheet: <AlarmSheet alarms={alarms} /> }}
      className="!gap-2"
    >
      <div className="flex flex-col items-start justify-start h-full space-y-4 ">
        <Pill2
          accent="red"
          count={`x${alarms?.count}`}
          className="text-[2.25em] text-white"
        >
          <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw] max-w-[76px] mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
            <div className="bg bg-img-alarm bg-center h-[80%] w-[80%]"></div>
          </div>
        </Pill2>
        <div>
          <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
            {localization["alarm_screen.info"]}
          </span>
          <ul className="px-4 list-disc">
            <li>
              <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
                {localization["alarm_screen.info_1"]}
              </span>
            </li>
            <li>
              <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
                {localization["alarm_screen.info_2"]}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default Alarm;
