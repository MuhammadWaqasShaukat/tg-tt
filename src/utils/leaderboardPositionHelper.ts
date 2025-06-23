import { TopUser } from "@/types/LeaderBoard.t";

export const getPositionedLeaderboard = (
  users: TopUser[],
  prizes?: { rank: number; prize: number }[]
) => {
  let lastScore: number | null = null;
  let position = 0;

  return users.map((user, index) => {
    if (user.score !== lastScore) {
      position += 1;
      lastScore = user.score;
    }

    const hasPrize = prizes && index < prizes.length;

    return {
      ...user,
      position,
      showPrize: hasPrize,
      prize: hasPrize ? prizes[index].prize : null,
    };
  });
};
