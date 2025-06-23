import { serachQueryState } from "@/store/searchQuery";
import { TableProps } from "@/types/Table.t";
import React, {
  Fragment,
  memo,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilValue } from "recoil";

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  className,
  loading,
}) => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchQuery = useRecoilValue(serachQueryState);

  const updateHeight = () => {
    if (containerRef.current) {
      const viewportHeight = window.innerHeight;
      const topOffset = containerRef.current.getBoundingClientRect().top;
      setHeight(viewportHeight - topOffset); // - 30);
    }
  };

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    setTimeout(updateHeight, 700);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const filteredData = data?.filter((row: any) =>
    row.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="grid w-full py-4 place-content-center">loading...</div>
      ) : data?.length === 0 ? (
        <div className="grid w-full py-4 place-content-center">
          No Data Available
        </div>
      ) : (
        <>
          <div className={`${className} w-full py-2`}>
            {/* Table Header */}
            {columns.map((column, index: number) => (
              <Fragment key={"row" + index}>{column.Header}</Fragment>
            ))}
          </div>
          <div
            className="flex flex-col items-start justify-start flex-1 w-full overflow-y-auto ralative scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 "
            ref={containerRef}
            style={{ height }}
          >
            {/* Table Rows */}
            {filteredData?.map((row: any, rowIndex: number) => (
              <div
                key={rowIndex}
                className={`${className} w-full py-2 flex flex-row justify-between items-center  gap-3 border-t border-[#5A1319] border-opacity-20`}
              >
                {columns.map((column, columnIndex: number) => (
                  <React.Fragment key={columnIndex + "column"}>
                    {column.Cell && column.accessor
                      ? column.Cell(row[column.accessor], rowIndex)
                      : column.Cell(row, rowIndex)}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default memo(Table);
