export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
  columns: any[];
  emptyStateMessage: string;
  loading: boolean;
}

export interface ColumnConfig extends React.HTMLAttributes<HTMLDivElement> {
  Header: JSX.Element;
  Cell?: (props: any, rowIndex?: number) => JSX.Element;
  accessor?: string;
}

export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  rowIndex: number;
  colIndex: number;
  isSelected: boolean;
  row?: any;
  onCellClick?: any;
}

export interface TableHeaderCellProps
  extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle: string;
}
