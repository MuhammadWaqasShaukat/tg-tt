import { LeagueNames } from "./User.t";

export interface BuyStashCardProp extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  counts: number;
  isPopular: boolean;
  pkgId: number;
}

export interface LeagueCardProp extends React.HTMLAttributes<HTMLDivElement> {
  league: LeagueNames;
  leagueId: number;
  allowDetails: boolean;
}
