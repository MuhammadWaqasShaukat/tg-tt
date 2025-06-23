import React from "react";
import { ListType } from "../../../types/LIst.t";

const List: React.FC<ListType> = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
      {children}
    </div>
  );
};

export default List;
