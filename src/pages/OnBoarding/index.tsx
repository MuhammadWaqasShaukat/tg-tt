import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/UI/Buttons";
import { StepFour, StepOne, StepThree, StepTwo } from "./__components";
import { Page } from "@/components/UI/Page";
import { useRecoilState, useRecoilValue } from "recoil";
import { onboardingStepState } from "@/store/onboarding";
import Auth from "../Auth";
import { useNavigate } from "react-router-dom";
import { localizationState } from "@/store/localizations";

const StepperSheet = () => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const localization = useRecoilValue(localizationState);

  const [onboardingStep, setOnboardingStep] =
    useRecoilState(onboardingStepState);

  const loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "null");
  const token = loggedIn?.accessToken ?? null;

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return (
    <>
      <div
        className="flex flex-row items-center justify-center gap-6 mx-auto"
        ref={sheetRef}
      >
        <div
          onClick={() => setOnboardingStep(0)}
          className={`h-6 w-6 rounded-full bg-[#FFE4A4] ${
            onboardingStep >= 0 ? "" : " opacity-50"
          }`}
        ></div>
        <div
          onClick={() => setOnboardingStep(1)}
          className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
            onboardingStep >= 1 ? "" : " opacity-50"
          }`}
        ></div>
        <div
          onClick={() => setOnboardingStep(2)}
          className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
            onboardingStep >= 2 ? "" : " opacity-50"
          }`}
        ></div>
        <div
          onClick={() => setOnboardingStep(3)}
          className={` h-6 w-6 rounded-full bg-[#FFE4A4]  ${
            onboardingStep >= 3 ? "" : " opacity-50"
          }`}
        ></div>
      </div>
      <Button
        acent="yellow"
        className=" !w-full"
        onClick={() => {
          setOnboardingStep((prev) => {
            return prev + 1;
          });
        }}
      >
        <span>{localization?.["tutorial_screen.next_button"]}</span>
      </Button>
    </>
  );
};

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
];

const Onboarding = () => {
  const onboardingStep = useRecoilValue(onboardingStepState);
  const containerRef = useRef<HTMLDivElement>(null);
  // const onBoardingViewRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    // if (onBoardingViewRef.current) {
    const container = document.getElementById("onboarding-view");

    // onBoardingViewRef.current.scrollTop = 0;

    if (!container) {
      return;
    }
    container.scrollTop = 0;
    // }
  }, [onboardingStep]);

  return (
    <div
      className=" fixed sm:max-w-[580px] left-1/2 -translate-x-1/2 w-full"
      ref={containerRef}
    >
      {onboardingStep > 3 ? (
        <Auth />
      ) : (
        <Page
          id="onboarding-view"
          allowNavigatingBack={false}
          allowSearch={false}
          Sheet={{ StaticSheet: <StepperSheet /> }}
          className="!px-0 !pt-0 !gap-0 "
          scrollable
          hasPadding={false}
        >
          <div
            className={`flex flex-col overflow-y-scroll w-full scroll-container  ${
              onboardingStep === 0
                ? "bg bg-onboarding-screen bg-top pt-80"
                : "bg-[#FFEEE4]"
            }`}
            // style={{ height: "inherit" }}
          >
            {steps[onboardingStep].component}
          </div>
        </Page>
      )}
    </div>
  );
};

export default Onboarding;
