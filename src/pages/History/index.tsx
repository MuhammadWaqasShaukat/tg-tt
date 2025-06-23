import { List, Tabs } from "@/components/UI";
import HistoryListHeader from "@/components/UI/Lists/ListHeaders/HistoryListHeader";
import HistoryRow from "@/components/UI/Lists/Rows/History";
import { View } from "@/components/UI/View";

const tabData = [
  {
    label: "You robbed",
    content: (
      <List className="!gap-10 mt-9">
        <HistoryListHeader />
        <div className="w-full space-y-4 ">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <HistoryRow key={row} history="robbed" />
          ))}
        </div>
      </List>
    ),
  },
  {
    label: "Been robbed by",
    content: (
      <List className="!gap-10 mt-9">
        <HistoryListHeader />
        <div className="w-full space-y-4 ">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <HistoryRow key={row} history="got-robbed" />
          ))}
        </div>
      </List>
    ),
  },
];

const History = ({ onClose }: { onClose: () => void }) => {
  return (
    <View viewTitle="History" allowSearch backBtnClkHandler={onClose}>
      <Tabs tabs={tabData} />
    </View>
  );
};

export default History;
