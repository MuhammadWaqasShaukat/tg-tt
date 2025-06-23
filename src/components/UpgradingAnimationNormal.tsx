import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { wantedLeagueState } from "@/store/wantedLeague";
import { LeagueNames } from "@/types/User.t";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import UserLeague from "./UI/Cards/LeagueCard";
import { animationState } from "@/store/animation";
import { TIERS_STARS } from "@/constants/tiersStars";
import { CurrentViewState } from "@/store/currentView";
import { hasPremiumLeagueAlready } from "@/utils/hasPremiumLeagueAlready";

const UpgradingAnimationNormal = () => {
  const user = useRecoilValue(userState);
  const [animation, setAnimation] = useRecoilState(animationState);
  const [fadeOut, setFadeOut] = useState(false);
  const [, setView] = useRecoilState(CurrentViewState);

  const wantedLeague = useRecoilValue(wantedLeagueState);
  const leagues = useRecoilValue(leagueState);
  const currentLeague = getLeagueLevel(leagues!, wantedLeague!);

  const [isPremium] = useState(hasPremiumLeagueAlready(wantedLeague!));
  const tutorialUpgradeRef = useRef<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    if (animation) {
      timer = setTimeout(() => {
        setFadeOut(true);
        clearTimeout(timer);
      }, 4500);
      removeTimer = setTimeout(() => {
        setAnimation(null);
        clearTimeout(removeTimer);
      }, 6000);
    }

    if (!animation) {
      setView('vault')
    }

  }, [animation]);

  useEffect(() => {
    if (user && !tutorialUpgradeRef.current) {
      tutorialUpgradeRef.current = user.tutorial ? true : false
    }
  }, [])

  return (   
    <div
      data-upgrade-type="not-paid"
      data-league-level={currentLeague?.league}
      className={`animate-bgColorChangeGreen bg flex flex-col px-[5.8%] items-center justify-center w-full h-dvh scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto ${fadeOut ? "fade-out" : ""
        }`}
    >

        <div
          className={`flex flex-col items-center justify-center w-full gap-10`}
        >
          <div
            className={`flex flex-col items-center justify-center gap-8`}
          >

            {
              isPremium ?

                <h1 className="text-[2.25em] text-center w-2/3 leading-none">
                  Congrats, {user?.username}!
                </h1>
                :
                <h1 className="text-[2.25em] text-center w-2/3  leading-none">
                  Great job, {user?.username}!
                </h1>
            }

            {
              isPremium ?
                <p className="text-[1.375em] font-bold font-josefin tracking-tight text-center">
                  You are now part of the Premium Leagues!!!

                </p> : <p className="text-[1.375em] font-bold font-josefin tracking-tight text-center">
                  {`You’ve upgraded your League ${TIERS_STARS[currentLeague?.leagueId as number].isTier ? "Tier " : ""}successfully!`}
                </p>
            }
          </div>

          <UserLeague
            league={currentLeague?.league as LeagueNames}
            leagueId={currentLeague?.leagueId as number}
            allowDetails={false}
            className="w-max !p-2"
          />

          {
            tutorialUpgradeRef.current &&

            (<div className="flex flex-col items-center justify-center  gap-8 text-center">
              <h2 className=" text-[2.25em] leading-none">
                Let’s go Steal some LOOT now!
              </h2>
              <span className="text-[1.375em] font-bold font-josefin tracking-tight">
                Let’s see what those thieves have in their pockets :)
              </span>
            </div>

            )}

          {
            isPremium &&

            (<div className="flex flex-col items-center justify-center  gap-8 text-center">
              <h2 className=" text-[2.25em] leading-none">
                Withdrawals Enabled!
              </h2>
              <span className="text-[1.375em] font-bold font-josefin tracking-tight">
                Happy Stealing!
              </span>
            </div>

            )}
        </div>
    </div>
  );
};


// const UpgradingAnimationNormal = () => {
//   const [hideSection, setHideSection] = useState(false);
//   const user = useRecoilValue(userState);
//   const [, setInfoView] = useRecoilState(infoViewState);
//   const [, setView] = useRecoilState(CurrentViewState);

//   const sheetRef = useRef<HTMLDivElement | null>(null);
//   const [sheetHeight, setSheetHeight] = useState(0);

//   const wantedLeague = useRecoilValue(wantedLeagueState);
//   const leagues = useRecoilValue(leagueState);
//   const currentLeague = getLeagueLevel(leagues!, wantedLeague!);

//   useLayoutEffect(() => {
//     if (sheetRef.current) {
//       setSheetHeight(sheetRef.current.offsetHeight + 20);
//     }
//   }, [hideSection]);

//   const handleClose = () => {
//     setInfoView(false);
//     setView(null);
//   };

//   const refOne = useRef<HTMLDivElement>(null);
//   const refTwo = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setHideSection(true);
//     }, 5000);
//   }, []);

//   useLayoutEffect(() => {
//     if (refOne.current && refTwo.current) {
//       let refOneHeight = refOne.current.getBoundingClientRect().height;
//       refTwo.current.style.transform = `translateY(${refOneHeight}px)`;
//     }
//   }, []);

//   useEffect(() => {
//     if (hideSection && refTwo.current) {
//       refTwo.current!.classList.remove("absolute");
//       refTwo.current!.style.transition = "transform 0.2s ease-out";
//       refTwo.current!.style.transform = "translateY(0)";
//     }
//   }, [hideSection]);

//   //!TODO :  get the selected league and use here.

//   return (
//     <>
//       <div
//        data-league-level={hideSection ? "" : currentLeague?.league}
//         className={`animate-bgColorChange bg-yellow flex flex-col px-[5.8%] items-start w-full h-full scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto ${
//           hideSection ? "justify-start" : "congrats-screen-bg justify-center"
//         }`}
//         style={{ paddingBottom: sheetHeight }}
//       >
//         {hideSection && (
//           <div className="flex flex-row items-start justify-between w-full mt-[5.8vh] text-left">
//             <h1 className=" text-[2.25em] capitalize ">
//               Successful League Upgrade
//             </h1>
//             <CloseButton handleClose={handleClose} />
//           </div>
//         )}
//         <div className="flex flex-col items-center justify-center w-full ">
//           <div
//             className={`flex flex-col items-center justify-center w-full opacity-1  my-6`}
//           >
//             {hideSection && (
//               <div className="congrats-screen-bg h-1/2 w-[110%] absolute pointer-events-none"></div>
//             )}
//             <div
//               ref={refOne}
//               className={`flex flex-col items-center justify-center gap-8  ${
//                 hideSection ? "hidden" : ""
//               }`}
//             >
//               <h1 className="text-[2.25em] text-center w-2/3 ">
//                 Great job, {user?.username}!
//               </h1>
//               <p className="text-center text-[1.375em] capitalize">
//                 You’ve got {currentLeague?.league} League.
//               </p>
//             </div>
//             <div
//               ref={refTwo}
//               className="absolute flex flex-col items-center justify-center w-full"
//             >
//               <UserLeague
//                 league={currentLeague?.league as LeagueNames}
//                 leagueId={currentLeague?.leagueId as number}
//                 allowDetails={false}
//                 className="w-max "
//               />

//               {hideSection && (
//                 <p className=" text-[1.25em] text-center font-medium font-josefin mt-3 text-[#5A1319B2]">
//                   Has been successfully purchased
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         {hideSection && (
//           <div
//             className={`content-slide space-y-6 transition-opacity duration-75  ${
//               hideSection ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Divider />

//             <div className="flex flex-col items-start justify-start w-full gap-9 ">
//               <p className="text-[1.375em] tracking-tighter font-josefin text-light-brown">
//                 Great job,{" "}
//                 <span className="font-bold uppercase ">{user?.username}!</span>
//                 <br /> Your new League allows you to:
//               </p>
//               <div className="flex flex-col items-start justify-start w-full gap-2">
//                 <div className="flex flex-row items-center justify-start gap-2">
//                   <div className="size-5 bg bg-icon-info"></div>
//                   <p className="text-[1em] text-light-brown">Rob more!</p>
//                 </div>

//                 <div className="flex flex-row items-center justify-start gap-2 ">
//                   <div className="size-5 bg bg-icon-info"></div>
//                   <p className="text-[1em]  text-light-brown">
//                     Withdraw $LOOT! (check settings Menu)
//                   </p>
//                 </div>

//                 <div className="flex flex-row items-center justify-start gap-2 ">
//                   <div className="size-5  bg bg-icon-info"></div>
//                   <p className="text-[1em]  text-light-brown">
//                     Productivity Items
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {hideSection && (
//         <div
//           ref={sheetRef}
//           id="sheet"
//           className="z-50 fixed bg-[#FFFBF9] w-full px-6 py-9 rounded-t-[32px] flex flex-col justify-center items-center gap-6 mt-auto bottom-0 left-0"
//         >
//           <Button
//             onClick={() => {
//               handleClose();
//               setView("hit-list");
//             }}
//             acent="white"
//             className="flex  border border-[#CEACA7] flex-row items-center justify-center w-full gap-[5px] px-4 py-3 rounded-2xl text-[1.25em]"
//           >
//             <span>Start robbing!</span>
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

export default UpgradingAnimationNormal;
