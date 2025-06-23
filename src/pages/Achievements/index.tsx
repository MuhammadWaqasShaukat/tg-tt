import { Page } from "@/components/UI/Page";
import AchievementRow from "@/components/UI/Lists/Rows/Achievement";
import RewardListHeader from "@/components/UI/Lists/ListHeaders/RewardListHeader";
import { List } from "@/components/UI";
import { useAchievementsQuery } from "@/hooks/useAchievements";
import { AchievementRowProp } from "@/types/Achievement.t";
import { useRecoilValue } from "recoil";
import { localizationState } from "@/store/localizations";
import { PageProps } from "@/types/Page.t";

const Achievements: React.FC<PageProps> = ({ onClose }) => {
  const { data: achievements } = useAchievementsQuery();
  const localization = useRecoilValue(localizationState);

  return (
    <Page
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle={localization["achievements_screen.title"]}
      Sheet={null}
      id="achievements-view"
    >
      <List className="space-y-1">
        <RewardListHeader />
        <div className="w-full">
          {achievements?.map((achievement: AchievementRowProp) => (
            <AchievementRow {...achievement} key={achievement.achievementId} />
          ))}
        </div>
      </List>
    </Page>
  );
};

export default Achievements;
