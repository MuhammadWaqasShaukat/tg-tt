import React, { useLayoutEffect, useRef, useState } from "react";
import { ListType } from "../../../types/LIst.t";

const List: React.FC<ListType> = ({ children, className }) => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateHeight = () => {
    if (containerRef.current) {
      const viewportHeight = window.innerHeight;
      const topOffset = containerRef.current.getBoundingClientRect().top;
      setHeight(viewportHeight - topOffset - 30);
    }
  };

  useLayoutEffect(() => {
    setTimeout(updateHeight, 500);
    return () => window.removeEventListener("resize", updateHeight);
  }, [children]);

  return (
    <div
      id="list"
      ref={containerRef}
      style={{ height }}
      className={`flex flex-col ralative items-start justify-start w-full flex-1 scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto  ${className}`}
    >
      {children}
    </div>
  );
};

export default List;
