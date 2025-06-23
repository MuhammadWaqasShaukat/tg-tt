import { SwiperSlides } from "@/constants/SwiperSlides";

export const getLeagueGroup = (leagueId: number): number | null => {
  const index = SwiperSlides.findIndex((slide) =>
    slide.levels.includes(leagueId)
  );
  return index !== -1 ? index + 1 : null;
};
