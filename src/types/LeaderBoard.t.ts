export interface LeaderBoardRowPropType
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  score: number | string;
  position: number;
  showTokens: boolean;
}
