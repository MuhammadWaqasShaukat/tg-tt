import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ViewType } from "../../../types/View.t";
import IconButton from "../Buttons/IconButton";
import { useRecoilState } from "recoil";
import { sheetState } from "@/store/sheetStatus";
import { serachQueryState } from "@/store/searchQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import { serachingState } from "@/store/searching";
import SheetPanel from "../Sheets/Sheet";
import { MINIMUM_DEVICE_WIDTH } from "@/constants/vars";

export const Page: React.FC<ViewType> = ({
  id,
  children,
  allowSearch = true,
  className,
  backBtnClkHandler,
  allowNavigatingBack = true,
  viewControls,
  viewTitle,
  Sheet,
  scrollable = true,
  hasPadding = true,
  handleBgClick,
}) => {
  const [searching, setSearching] = useRecoilState(serachingState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const [sheetHeight, setSheetHeight] = useState(0);

  const [sheetEnabled, setSheetEnabled] = useRecoilState(sheetState);
  const [searchQuery, setSearchQuery] = useRecoilState(serachQueryState);

  const [titleWidth, setTitleWidth] = useState(MINIMUM_DEVICE_WIDTH);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });
  const calculateDimensions = () => {
    if (!sheetRef.current) return;

    const parentElement = document.getElementById("token-thieves-miniapp");
    if (parentElement) {
      sheetRef.current.style.maxWidth = `${parentElement.clientWidth}px`;
     }
  };

  const calculateTitleWidth = () => {
    const parentElement = document.getElementById("token-thieves-miniapp");
    if (parentElement) {
      const reduction = parentElement.clientWidth * (0.058 * 2);
      const _titleWidth = parentElement.clientWidth - reduction;
      setTitleWidth(_titleWidth);
    }
  };

  const handleStartSearch = () => {
    setSearching(true);
  };

  useEffect(() => {
    return () => {
      setSheetEnabled(true);
    };
  }, []);

  useLayoutEffect(() => {
    if (sheetRef.current) {
      setSheetHeight(sheetRef.current.offsetHeight + 40);
      calculateDimensions();
    }
  }, [Sheet]);

  useLayoutEffect(() => {
    calculateTitleWidth();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setSearching(true);
    } else {
      const timeout = setTimeout(() => setSearching(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searching) {
      if (searchFieldRef.current) {
        searchFieldRef.current.focus();
      }
    }
  }, [searching]);

  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <>
      <div
        onClick={handleBgClick}
        ref={scrollRef}
        id={id ?? "page"}
        className={`flex flex-col items-start justify-start h-dvh w-full gap-6 bg-[#FFEEE4] relative    ${
          scrollable ? " overflow-y-scroll scroll-container" : ""
        } ${className}`}
        style={{ paddingBottom: Sheet ? sheetHeight : 0 }}
      >
        <div
          id="page-header"
          className={`flex flex-row items-start justify-start w-full gap-3 sticky top-0  z-30 bg-inherit max-w-full sm:max-w-[580px] ${
            hasPadding ? "px-[5.8%] pt-[5.8vh] pb-2 " : " "
          }`}
        >
          <div className=" absolute top-9 right-6 z-50">
            {!allowSearch && viewControls && viewControls()}
          </div>

          {allowNavigatingBack && (
            <IconButton
              data-navigation="true"
              acent="brown"
              className="rounded-lg aspect-square w-[18.35vw]  max-w-[42px]"
              onClick={backBtnClkHandler}
            >
              <div className="w-4 h-4 bg bg-icon-arrow"></div>
            </IconButton>
          )}

          {searching ? (
            <div className="flex flex-row items-center justify-start w-full gap-2 p-2 border rounded-lg border-light-brown/80">
              <div className="">
                <div className="w-4 h-4 bg bg-icon-search-bold"></div>
              </div>
              <input
                ref={searchFieldRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                className="w-full bg-transparent border-none outline-none "
              />
            </div>
          ) : (
            <motion.h1
              className="text-[2.25em] leading-10 capitalize"
              style={{ opacity: titleOpacity, width: titleWidth }}
            >
              {viewTitle}
            </motion.h1>
          )}

          {allowSearch && !viewControls && !searching && (
            <IconButton
              acent="ghost"
              className="ml-auto"
              onClick={handleStartSearch}
            >
              <div className="w-6 h-6 bg bg-icon-search"></div>
            </IconButton>
          )}
        </div>
        <div
          className={` flex flex-col justify-start items-start  w-full gap-6 ${
            hasPadding ? "px-[5.8%]" : ""
          }`}
        >
          {children}
        </div>
      </div>

      {Sheet && (
        <div id="sheet" ref={sheetRef}>
          <SheetPanel
            id={id || "page"}
            sheetEnabled={sheetEnabled}
            {...Sheet}
          />
        </div>
      )}
    </>
  );
};
