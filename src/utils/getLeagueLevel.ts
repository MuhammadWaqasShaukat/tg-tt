import { LeagueLevelType, Leagues } from "@/types/LeagueLevel";

export function getLeagueLevel(data: LeagueLevelType, id: number) {
  let _id = id;

  if (_id < 1) {
    _id = 1;
  }

  for (const key of Object.keys(data) as Array<keyof LeagueLevelType>) {
    const index = data[key].findIndex((item: Leagues) => item.id === _id);
    if (index !== -1) {
      return { league: key, index, leagueId: id };
    }
  }
  return null;
}
