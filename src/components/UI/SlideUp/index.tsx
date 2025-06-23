import React from "react";

const SlideUp = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed bottom-0 left-[50%] -translate-x-[50%] w-full h-full z-20 flex justify-center items-center transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {children}
    </div>
  );
};

export default SlideUp;
