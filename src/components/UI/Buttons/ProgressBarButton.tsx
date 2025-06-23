import { ProgressBarButtonProp } from "@/types/Buttons.t";
import React from "react";

const ProgressBarButton: React.FC<ProgressBarButtonProp> = ({
  onClick,
  children,
  progress,
  className,
  disabled,
}) => {
  return (
    <button
      className={`relative btn w-full overflow-hidden bg-[#FFF4DB] ${className} border-3 border-yellow`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className="absolute left-0 top-0 h-full bg-yellow transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ProgressBarButton;
