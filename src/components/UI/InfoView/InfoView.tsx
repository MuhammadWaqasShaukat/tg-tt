import { InfoViewProps } from "@/types/InfoView.t";
import React from "react";

const InfoView: React.FC<InfoViewProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default InfoView;
