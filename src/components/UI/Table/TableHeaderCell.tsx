import { TableHeaderCellProps } from "@/types/Table.t";

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  headerTitle,
  className,
}) => {
  return (
    <div className={`${className}`} key={headerTitle}>
      <span className="table-header-title">{headerTitle}</span>
    </div>
  );
};
