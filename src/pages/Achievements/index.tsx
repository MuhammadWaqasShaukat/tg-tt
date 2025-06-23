import { View } from "@/components/UI/View";
import AchievementRow from "@/components/UI/Lists/Rows/Achievement";
import RewardListHeader from "@/components/UI/Lists/ListHeaders/RewardListHeader";
import { List } from "@/components/UI";

const Achievements = ({ onClose }: { onClose: () => void }) => {
  return (
    <View
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle="Achievemets"
    >
      <List>
        <RewardListHeader />
        <AchievementRow type="sneaky" score={"10/20"} hasAward />
        <AchievementRow type="crafty" score={"4/20"} hasAward />
        <AchievementRow type="sloppy" score={"9/20"} hasAward />
        <AchievementRow type="wanted" score={"20/20"} hasAward />
        <AchievementRow type="sleepy" score={"0/20"} hasAward />
        <AchievementRow type="rich" score={"1/20"} hasAward />
        <AchievementRow type="cautions" score={"6/20"} hasAward={false} />
        <AchievementRow type="vigilant" score={"8/20"} hasAward={false} />
      </List>
    </View>
  );
};

export default Achievements;
