import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, PanInfo } from "framer-motion"; // Assuming framer-motion is installed
import { SheetProps } from "@/types/View.t";

const SheetPanel: React.FC<
  SheetProps & { sheetEnabled: boolean; id: string }
> = (props) => {
  if (!props) return;

  const { DragableSheet, StaticSheet, sheetEnabled = true } = props;

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetHeight, setSheetHeight] = useState(0);
  const sheetOneRef = useRef<HTMLDivElement>(null);
  const sheetTwoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const targetNode = document.getElementById(props.id);
    if (!targetNode) return;

    let padding = 0;
    if (sheetTwoRef.current) {
      padding = sheetTwoRef.current.offsetHeight;
    } else if (sheetOneRef.current) {
      padding = sheetOneRef.current.offsetHeight;
    }
    targetNode.style.paddingBottom = `${padding}px`;
  }, [sheetHeight, DragableSheet, StaticSheet, props.id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSheetOpen(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (sheetOneRef.current) {
      setSheetHeight(sheetOneRef.current.offsetHeight);
    }
  }, [isSheetOpen]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.point.y > window.innerHeight - sheetHeight * 0.4) {
      setIsSheetOpen(false);
    } else {
      setIsSheetOpen(true);
    }
  };

  useEffect(() => {
    if (sheetTwoRef.current && sheetOneRef.current) {
      sheetTwoRef.current.style.paddingBottom = `${
        sheetOneRef.current.offsetHeight + 20
      }px`;
    }
  }, [sheetHeight, StaticSheet]);

  return (
    <>
      {StaticSheet && (
        <div
          id="static-sheet"
          className={`z-50 absolute w-full   flex flex-col justify-center items-center gap-4 mt-auto bottom-0 left-0 max-w-[580px] `}
        >
          <div
            ref={sheetOneRef}
            className={` relative px-[5.8%] py-6 w-full rounded-t-[32px] space-y-4 ${
              DragableSheet ? " shadow-custom-4" : ""
            } ${sheetEnabled ? "bg-[#FFFBF9]" : "bg-[#FFE5EB]"}`}
          >
            {StaticSheet}
          </div>
        </div>
      )}

      {DragableSheet && (
        <motion.div
          id="dragable-sheet"
          ref={sheetTwoRef}
          initial={{ y: "80%" }}
          animate={{ y: isSheetOpen ? 0 : "50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: sheetHeight * 0.5 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "none" }}
          className={`z-40 fixed w-full px-[5.8%] pt-14 pb-14 rounded-t-[32px] flex flex-col justify-center items-center gap-4 mt-auto bottom-0 left-0 max-w-[580px] ${
            sheetEnabled ? "bg-[#FFFBF9]" : "bg-[#FFE5EB]"
          }`}
        >
          <button
            className="h-2 rounded-full w-14 bg-[#F7E3DA] absolute top-3 left-1/2 -translate-x-1/2 my-2"
            onClick={() => setIsSheetOpen((prev) => !prev)}
            aria-label={isSheetOpen ? "Close sheet" : "Open sheet"}
          ></button>
          {DragableSheet}
        </motion.div>
      )}
    </>
  );
};

export default SheetPanel;
