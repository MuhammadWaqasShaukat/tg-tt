import { Button } from "@/components/UI/Buttons";
import ImageBox from "@/components/UI/ImageBox";
import { Page } from "@/components/UI/Page";
import { AchivementImageURLS } from "@/constants/achivementsImageUrls";
import { AchievementType } from "@/types/Achievement.t";
const Achievement = ({
  onClose,
  achievement,
}: {
  onClose: () => void;
  achievement: {
    name: AchievementType;
    description: string | JSX.Element;
  };
}) => {
  return (
    <Page
      id="achivement-view"
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle="Achievement"
      Sheet={null}
      className="relative  !gap-4"
    >
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-6 ">
        <div className="w-full ">
          <h1 className=" font-josefin text-light-brown text-[1.375em] text-center font-medium">
            New Achievement!
          </h1>
          <span className="block text-[2.25em] leading-none text-center">
            {achievement.name}
          </span>
        </div>
        <ImageBox
          className="w-[35.75vw] aspect-square  max-w-[148px] max-h-[148px] !rounded-3xl overflow-hidden"
          imageURL={AchivementImageURLS[achievement.name]}
        />
        <p className=" font-josefin text-light-brown text-[1.375em] text-center w-4/5 font-medium">
          {achievement.description}
        </p>
      </div>
      <Button
        acent="yellow"
        className="shadow-custom flex flex-row justify-center items-center rounded-2xl gap-2 text-[1.25em] mb-4"
      >
        <span className="">All Achievements</span>
      </Button>
    </Page>
  );
};

export default Achievement;
