import { SlideItemProp } from "@/types/SwiperSlides.t";

export function updateSwiperSlides(
  swiperSlides: SlideItemProp[],
  leagueId: number
) {
  let foundMatch = false;

  return swiperSlides.map((slide: SlideItemProp) => {
    if (foundMatch) return slide;

    if (
      slide.leagueId === leagueId ||
      (slide.leagueId < leagueId && slide.levels.includes(leagueId))
    ) {
      foundMatch = true;
      return {
        ...slide,
        upgraded: true,
        leagueId,
      };
    } else if (
      !foundMatch &&
      leagueId > slide.leagueId &&
      !slide.levels.includes(leagueId)
    ) {
      return {
        ...slide,
        upgraded: true,
        leagueId: slide.maxLeagueLevel,
      };
    }

    return slide;
  });
}
