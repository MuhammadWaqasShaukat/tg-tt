import Navbar from "./navbar";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { View } from "@/types/View.t";
import { userState } from "@/store/User";
import { useEffect, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myLeagueState } from "@/store/myLeague";
import { localizationState } from "@/store/localizations";
import { inProgressRobberyState } from "@/store/inProgressRobbery";
import { robStepState } from "@/store/robFlow";
import { formatCompactNumberHome } from "@/utils/formatNumber";
import { Button } from "@/components/UI/Buttons";
import Timer from "@/components/UI/Timer";
import { LeagueAssests } from "@/constants/leagues";
import { LeagueNames } from "@/types/User.t";
import { robVictimState } from "@/store/choseVictim";
import { ApiService } from "@/service";
import { endpoints } from "@/constants/API_ENDPOINTS";
import { motion } from "framer-motion";
import usePocketInfo from "@/hooks/useGetPocketCap";
import TutorialArrow from "@/components/UI/TutorialArrow";
import { enableTourElements } from "@/utils/tourGuideHelper";

const Room = () => {
  const [user] = useRecoilState(userState);
  const [, setView] = useRecoilState(CurrentViewState);

  const myLeague = useRecoilValue(myLeagueState);
  const localization = useRecoilValue(localizationState);
  const setRobStep = useSetRecoilState(robStepState);
  const { getPocketStatus } = usePocketInfo();

  const getThiefImageSrc = (): string => {
    if (!user) {
      return "./images/home-icon-robber.svg";
    }
    if (user.isInPrison) {
      return "./images/in-jail.svg";
    } else if (user.hugeBagIsActive && !user.iAmRobbing)
      return LeagueAssests[myLeague?.league as LeagueNames]?.backpack;
    else if (user.iAmRobbing) {
      return "./images/robbing.svg";
    } else {
      return LeagueAssests[myLeague?.league as LeagueNames]?.home;
    }
  };

  useEffect(() => {
    enableTourElements();
  }, []);

  const [thiefImageSrc, setThiefImageSrc] = useState(getThiefImageSrc());

  const [inProgressRobbery, setInProgressRobbery] = useRecoilState(
    inProgressRobberyState
  );
  const [_, setRobVictim] = useRecoilState(robVictimState);
  const robVictim = useRecoilValue(robVictimState);

  const navigate = useNavigate();

  const checkRobberyProgress = useCallback(async () => {
    if (user?.iAmRobbing && !inProgressRobbery) {
      if (!robVictim) {
        const data = await ApiService.get(
          `${endpoints["userList"]}?search=${user.iAmRobbing.victimUsername}`,
          {}
        );
        if (data) {
          setRobVictim(data[0]);
        }
      }
      setInProgressRobbery(user?.iAmRobbing);
      setView("hit-list");
      setRobStep("robbery-inprogress");
    }
  }, [user?.iAmRobbing?.victimUsername]);

  const toggleSlide = (currentView: View | null) => {
    setView(currentView);
  };

  const checkLoggedInStatus = useCallback(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "null");
    const token = loggedIn?.accessToken ?? null;

    if (!token) {
      navigate("/auth");
    }
  }, []);

  const { vaultGold, suspicionPoints, tokens, staminaPoints, robberGold } =
    useMemo(
      () => ({
        vaultGold: formatCompactNumberHome(user?.vaultGold ?? 0),
        suspicionPoints: formatCompactNumberHome(user?.suspicionPoints ?? 0),
        tokens: formatCompactNumberHome(user?.tokens ?? 0),
        staminaPoints: formatCompactNumberHome(user?.staminaPoints ?? 0),
        robberGold: formatCompactNumberHome(user?.robberGold ?? 0),
      }),
      [user]
    );

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const getVaultImageSrc = (): string => {
    if (user?.vaultActiveUntil) {
      return "./images/home-icon-vault-2.svg";
    } else if (user && user?.tokensToClaim > 0) {
      return "./images/home-icon-vault-3.svg";
    } else {
      return "./images/home-icon-vault.svg";
    }
  };

  useEffect(() => {
    setThiefImageSrc(getThiefImageSrc());
  }, [myLeague, user?.iAmRobbing, user?.inPrisonUntil, user]);

  return (
    <div
      style={{ backgroundPosition: "center 90%" }}
      className={`bg  bg-cover  w-full min-h-full relative overflow-hidden px-6 pt-6 pb-8 flex flex-col items-start justify-between z-20 ${
        user?.isInPrison ? "bg-room-grey" : "bg-room"
      }`}
    >
      <Navbar
        vaultGold={vaultGold}
        suspicionPoints={suspicionPoints}
        tokens={tokens}
        staminaPoints={staminaPoints}
        robberGold={robberGold}
      />

      {user?.isBeingRobbedAtTheMoment && (
        <div
          className="absolute top-[18%] right-[20%] w-[39.37vw] max-w-[163px] h-[9.49vh] max-h-[85px]"
          onClick={() => setView("alerts")}
        >
          <img
            src="./images/being-robbed.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      )}

      {/* alarm  */}
      <div className="absolute top-[35%] left-[25.5%] w-[11.59vw] h-[5.36vh] max-w-12 max-h-12">
        <button onClick={() => toggleSlide("alarm")} className="">
          <img
            src={
              user?.alarmSystemActiveUntil
                ? "./images/home-icon-alarm-2.svg"
                : "./images/home-icon-alarm.svg"
            }
            className="w-full h-full"
            alt=""
          />
        </button>
      </div>

      {/* Clipboard */}
      <button
        onClick={() => toggleSlide("hit-list")}
        className="absolute top-[27.5%] left-[55%] -translate-x-[55%]  w-[19vw] h-[13vh] max-w-[79px] max-h-[123px]"
      >
        <img
          src="./images/home-icon-stalk-list.svg"
          alt=""
          className="w-full h-full "
        />
      </button>

      {/* Shelf */}
      <div
        className={` absolute bg  ${
          user?.isInPrison ? "bg-shelf-grey" : "bg-shelf"
        }`}
      >
        <div className="relative w-full h-full">
          <button
            onClick={() => toggleSlide("achievements")}
            className="absolute top-[-96%] left-[30%] -translate-x-[30%] h-[100%] w-[100%] max-h-24 max-w-24 "
          >
            <div className="relative w-full h-full">
              <div className="  bg-[#FF5757CC] rounded-full absolute left-[25%] -translate-x-[25%] bottom-3">
                <span className=" text-[.75em] text-[#FFFBF9] px-2 py-1">
                  Rewards
                </span>
              </div>
              <img
                src="./images/home-icon-rewards.svg"
                alt=""
                className="h-full "
              />
            </div>
          </button>

          <button
            onClick={() => toggleSlide("history")}
            className="w-full h-full "
          >
            <div className="relative w-full h-full">
              {user && user.notSeenRobberiesCount > 0 && (
                <div className=" h-[29px] w-[29px] bg-[#FFFBF9] dropShadowFilter rounded-full text-[#FF5757CC] z-30 absolute right-0 top-3 grid place-content-center">
                  <span className=" text-[.925em] block leading-none font-bold">
                    {user.notSeenRobberiesCount >= 100
                      ? "99+"
                      : user.notSeenRobberiesCount}
                  </span>
                </div>
              )}
              <img
                src="./images/home-icon-history.svg"
                alt=""
                className="w-[68%] h-full absolute bottom-[-3%] right-1"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Thief */}
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: getPocketStatus() ? [1, 1.15, 1] : [1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        data-tour-step="5"
        onClick={() => toggleSlide("profile")}
        className="absolute bottom-[15%] left-[25%] -translate-x-[25%] h-[45%] z-30 max-h-[500px] max-w-[200px]"
      >
        <>
          {user?.tutorial && user?.robberGold && !user?.vaultGold ? (
            <TutorialArrow className="top-16 left-[40%] -translate-x-[40%]" />
          ) : (
            ""
          )}
          <img src={thiefImageSrc} alt="" className="w-full h-full" />
        </>
      </motion.button>

      {/* sofa  */}
      <div
        className={` absolute bg bg-sofa  ${
          user?.isInPrison ? "bg-sofa-grey" : "bg-sofa"
        }`}
      >
        <div className="relative w-full h-full z-30">
          <button onClick={() => toggleSlide("guard-dog")}>
            <img
              src={
                user?.guardActiveUntil
                  ? "./images/home-icon-dog-2.svg"
                  : "./images/home-icon-dog.svg"
              }
              className="h-auto w-[50%] max-w-[80px] max-h-[164px] absolute bottom-[40%] left-[77%] translate-x-[-75%]"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* table */}
      <div
        className={` absolute bg bg-table ${
          user?.isInPrison ? "bg-table-grey" : "bg-table"
        }`}
      >
        <div className="relative w-full h-full">
          <div className="absolute -top-[51%] left-[50%] -translate-x-[30%] h-[59%] w-[55%] max-w-[95px] max-h-[111px] ">
            <button className="w-full h-full cursor-pointer ">
              <img
                onClick={() => toggleSlide("thief-shop")}
                src="./images/home-icon-thief-shop.svg"
                alt=""
                className="w-full h-full"
              />
            </button>
          </div>

          <button
            data-tour-step="7"
            onClick={() => {
              toggleSlide("vault");
            }}
            className="absolute bottom-[17%] left-[10px] h-[60%] w-[60%] max-w-[95px] max-h-[102px] "
            data-has-token={user && user?.tokensToClaim > 0}
          >
            <div className=" h-full w-full relative">
              {user?.tutorial && user?.vaultGold ? (
                <TutorialArrow className="-top-4 left-[50%] -translate-x-[50%]" />
              ) : (
                ""
              )}
              <img
                src={getVaultImageSrc()}
                className="w-full h-full relative"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
      {/* Rob Button */}

      {user?.isInPrison ? (
        <div className="z-30 pointer-events-none ">
          <h2 className="text-[1.375em] font-josefin text-center px-4  text-white/70 -tracking-tighter leading-6">
            While in jail - you can’t stop robberies! Activate Guard dog! Time
            left:
          </h2>
          <h1 className=" text-center text-[2.25em] text-white">
            <Timer expiryTimestamp={new Date(user.inPrisonUntil as Date)} />
          </h1>
        </div>
      ) : user?.iAmRobbing ? (
        <div className="z-30 pointer-events-none mx-auto">
          <h2 className=" text-[2em]  text-center  text-black leading-none">
            You are Robbing {user.iAmRobbing.victimUsername}!
          </h2>
          <div className="flex flex-col items-center justify-center space-y-1 ">
            <h1 className=" text-center text-[2.25em] text-black">
              <Timer
                expiryTimestamp={new Date(user.iAmRobbing.shouldFinishAt)}
                short={true}
              />
            </h1>
            <span className=" capitalize font-josefin text-[1em] text-black font-semibold pointer-events-none leading-none text-center">
              {localization["home_screen.end_of_robbery_label"]}
            </span>
          </div>

          <Button
            data-tour-step="1"
            onClick={() => checkRobberyProgress()}
            acent="ghost"
            className="shadow-custom flex flex-row justify-center text-black items-center gap-2 text-[1.25em] mb-4 relative border-2 border-black pointer-events-auto"
          >
            {user?.tutorial && <TutorialArrow className="-top-14" />}
            <span>{localization["home_screen.see_more"]}</span>
          </Button>
        </div>
      ) : (
        <Button
          data-tour-step="1"
          onClick={() => {
            toggleSlide("hit-list");
          }}
          acent="yellow"
          className="shadow-custom pointer-events-all flex flex-row justify-center items-center gap-2 text-[1.251em] mb-6 relative z-40"
        >
          {user?.tutorial && !user?.robberGold && !user?.vaultGold && (
            <TutorialArrow className="-top-14" />
          )}

          <div className="w-5 h-5 bg bg-icon-attack"></div>
          <span className="p-0.5">
            {localization["home_screen.rob_button"]}
          </span>
        </Button>
      )}
    </div>
  );
};

export default Room;
