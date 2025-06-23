import { Button } from "@/components/UI/Buttons";
import CloseButton from "@/components/UI/Buttons/CloseButton";
import Divider from "@/components/UI/Divider";
import Pill2 from "@/components/UI/Pills/Pill2";
import { boughtStashPackageState } from "@/store/boughtStashPackage";
import { CurrentViewState } from "@/store/currentView";
import { infoViewState } from "@/store/InfoView";
import { userState } from "@/store/User";
import { PageProps } from "@/types/Page.t";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const SuccessScreen: React.FC<PageProps> = ({ onClose }) => {
  const [hideSection, setHideSection] = useState(false);
  const [, setInfoView] = useRecoilState(infoViewState);
  const [, setView] = useRecoilState(CurrentViewState);
  const user = useRecoilValue(userState);
  const [boughtStashPackage, setBoughtStashPackage] = useRecoilState(
    boughtStashPackageState
  );

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const [sheetHeight, setSheetHeight] = useState(0);

  useLayoutEffect(() => {
    if (sheetRef.current) {
      setSheetHeight(sheetRef.current.offsetHeight + 20);
    }
  }, [hideSection]);

  const handleClose = () => {
    setInfoView(false);
    setBoughtStashPackage(null);
    if (onClose) onClose();
  };

  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setHideSection(true);
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    if (refOne.current && refTwo.current) {
      let refOneHeight = refOne.current.getBoundingClientRect().height;
      refTwo.current.style.transform = `translateY(${refOneHeight}px)`;
    }
  }, []);

  useEffect(() => {
    if (hideSection && refTwo.current) {
      // setTimeout(() => {
      refTwo.current!.classList.remove("absolute");
      refTwo.current!.style.transition = "transform 0.2s ease-out";
      refTwo.current!.style.transform = "translateY(0)";
      // }, 50); // Ensure transition applies after hideSection update
    }
  }, [hideSection]);

  return (
    <>
      <div
        className={`animate-bgColorChange bg-yellow flex flex-col px-[5.8%] items-start w-full h-full scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto ${
          hideSection ? "justify-start" : "congrats-screen-bg justify-center"
        }
        `}
        style={{ paddingBottom: sheetHeight }}
      >
        {hideSection && (
          <div className="flex flex-row items-start justify-between w-full mt-[5.8vh] text-left">
            <h1 className=" text-[2.25em] capitalize">Successful Purchase</h1>
            <CloseButton handleClose={handleClose} />
          </div>
        )}
        <div className=" flex flex-col justify-center items-center w-full ">
          <div
            className={`flex flex-col items-center justify-center w-full opacity-1  my-6`}
          >
            {hideSection && (
              <div className="congrats-screen-bg h-1/2 w-[110%] absolute pointer-events-none"></div>
            )}
            <div
              ref={refOne}
              className={`flex flex-col items-center justify-center gap-8  ${
                hideSection ? "hidden" : ""
              }`}
            >
              <h1 className="text-[2.25em] text-center w-2/3">
                Great job, {user?.username}!
              </h1>
              <p className="text-center text-[1.375em]">
                You’ve got {boughtStashPackage?.count} $STASH.
              </p>
            </div>
            <div
              ref={refTwo}
              className="absolute w-full flex flex-col justify-center items-center"
            >
              <Pill2
                accent="red"
                count={boughtStashPackage!.count.toString()}
                className="text-[3.375em] text-white -ml-2 pl-1"
              >
                <div className="w-[28.99vw] max-w-[120px] max-h-[120px] aspect-square mx-auto flex flex-col justify-center items-center z-10 relative">
                  <div className="bg bg-chip-coin bg-center h-[100%] w-[100%]"></div>
                </div>
              </Pill2>
              {hideSection && (
                <p className="text-center text-[1.375em]  font-josefin">
                  You have successfully purchased.
                </p>
              )}
            </div>
          </div>
        </div>
        {hideSection && (
          <div
            className={`content-slide space-y-6 transition-opacity duration-75 w-full  ${
              hideSection ? "opacity-100" : "opacity-0"
            }`}
          >
            <Divider />

            <div className="flex flex-col items-start justify-start w-full gap-2 ">
              <p className="text-[1.375em] tracking-tight font-josefin text-light-brown">
                Great job, {user?.username}! You can use them to get:
              </p>
              <div className="flex flex-row items-center justify-between w-full ">
                <div className="flex flex-row items-center justify-start gap-2 ">
                  <div className="size-5 bg bg-icon-info"></div>
                  <p className="text-[1em]  text-light-brown">Home Items</p>
                </div>
                <div className="ml-auto flex flex-row justify-start items-center">
                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-gaurd-dog bg-center h-[100%] w-[100%] rounded-md"></div>
                  </div>

                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-vault-3 bg-center h-[100%] w-[100%] rounded-md"></div>
                  </div>

                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-alarm bg-center h-[70%] w-[70%] rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full ">
                <div className="flex flex-row items-center justify-start gap-2 ">
                  <div className="size-5 bg bg-icon-info"></div>
                  <p className="text-[1em]  text-light-brown">Thief Items</p>
                </div>
                <div className="ml-auto flex flex-row justify-start items-center">
                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-decoy bg-center h-[100%] w-[100%] rounded-md"></div>
                  </div>

                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-huge-bag bg-center h-[70%] w-[70%] rounded-md"></div>
                  </div>

                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-crowbar bg-center h-[100%] w-[100%] rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full ">
                <div className="flex flex-row items-center justify-start gap-2 ">
                  <div className="size-5 bg bg-icon-info"></div>
                  <p className="text-[1em]  text-light-brown">
                    Productivity Items
                  </p>
                </div>
                <div className="ml-auto flex flex-row justify-start items-center">
                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-fake-id bg-center h-[70%] w-[70%] rounded-md"></div>
                  </div>
                  <div className=" border-3 border-[#F0DAD2] bg-white aspect-square w-[18.35vw]  max-w-[42px]  -ml-2 first:ml-0 z-10 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg bg-img-snack bg-center h-[70%] w-[70%] rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {hideSection && (
        <div
          ref={sheetRef}
          id="sheet"
          className="z-50 fixed bg-[#FFFBF9] w-full px-6 py-9 rounded-t-[32px] flex flex-col justify-center items-center gap-6 mt-auto bottom-0 left-0"
        >
          <Button
            onClick={handleClose}
            acent="yellow"
            className="flex flex-row w-full items-center justify-center gap-[5px] px-4 py-3 rounded-2xl text-[1.25em]"
          >
            <span>Continue</span>
          </Button>
          <Button
            onClick={() => {
              handleClose();
              setView("thief-shop");
            }}
            acent="white"
            className="flex  border border-[#CEACA7] flex-row items-center justify-center w-full gap-[5px] px-4 py-3 rounded-2xl text-[1.25em]"
          >
            <span>Go to Thief Shop</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default SuccessScreen;
