import React, { useEffect, useRef } from "react";

export const SlideUp = ({
  isVisible,
  direction = "up",
  children,
}: {
  isVisible: boolean;
  direction?: "up" | "down";
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    requestAnimationFrame(() => {
      if (containerRef.current) {
        const translateY =
          direction === "up"
            ? isVisible
              ? "0"
              : "100%"
            : isVisible
            ? "0"
            : "-100%";

        containerRef.current.style.transform = `translateX(-50%) translateY(${translateY})`;
      }
    });

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [isVisible, direction]);

  const calculateDimensions = () => {
    if (!containerRef.current) return;

    const parentElement = document.getElementById("token-thieves-miniapp");
    if (parentElement) {
      containerRef.current.style.maxWidth = `${parentElement.clientWidth}px`;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform:
          direction === "up"
            ? "translateX(-50%) translateY(100%)"
            : "translateX(-50%) translateY(-100%)",
        width: "100%",
        maxWidth: "580px",
        height: "100%",
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};
