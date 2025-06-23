import React, { useState } from "react";
import { Button } from "@/components/UI/Buttons";
import {
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "./__components";

const steps: { step: string; component: React.ReactNode }[] = [
  {
    step: "step-one",
    component: <StepOne />,
  },
  {
    step: "step-two",
    component: <StepTwo />,
  },
  {
    step: "step-three",
    component: <StepThree />,
  },
  {
    step: "step-four",
    component: <StepFour />,
  },
  {
    step: "step-five",
    component: <StepFive />,
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div
      className={`flex flex-col  h-full w-full  ${
        currentStep === 0 ? "bg bg-onboarding-screen bg-top" : "bg-[#FFEEE4]"
      }`}
    >
      {steps[currentStep].component}

      {/* steper */}
      <div className=" bg-white w-full px-6 py-9 space-y-6 rounded-[32px]">
        <div className="flex flex-row justify-center items-center gap-6">
          <div
            className={`h-6 w-6 rounded-full bg-[#FFE4A4] ${
              currentStep >= 0 ? "" : " opacity-50"
            }`}
          ></div>
          <div
            className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
              currentStep >= 1 ? "" : " opacity-50"
            }`}
          ></div>
          <div
            className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
              currentStep >= 2 ? "" : " opacity-50"
            }`}
          ></div>
          <div
            className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
              currentStep >= 3 ? "" : " opacity-50"
            }`}
          ></div>
        </div>
        <Button
          acent="yellow"
          className=" !w-full"
          onClick={() => {
            setCurrentStep((prev) => {
              if (currentStep === steps.length - 1) return 0;
              else return prev + 1;
            });
          }}
        >
          <span>Next</span>
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
