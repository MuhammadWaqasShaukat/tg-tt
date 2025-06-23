export type InfoViews = "deposited" | "purchase-success" | "upgraded-league";

export interface InfoViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
