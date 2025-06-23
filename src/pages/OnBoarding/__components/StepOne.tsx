import { localizationState } from "@/store/localizations";
import { useRecoilValue } from "recoil";

const StepOne = () => {
  const localization = useRecoilValue(localizationState);

  return (
    <div className=" flex flex-col justify-center items-start flex-1 p-6 gap-6">
      <h1 className=" text-[2.25em] pr-4">
        {localization?.["tutorial_screen.welcome"]}
      </h1>

      <ul className="list-disc px-4 space-y-6">
        <li>
          <span className="text-[1.375em] font-josefin  font-medium tracking-tighter text-light-brown leading-7">
            {localization?.["tutorial_screen.intro_one"]}
          </span>
        </li>
        <li>
          <span className="text-[1.375em] font-josefin font-medium tracking-tighter text-light-brown leading-7">
            {localization?.["tutorial_screen.intro_two"]}
          </span>
        </li>
      </ul>
    </div>
  );
};
export default StepOne;
