import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingsInline from "../Ratings/RatingsInline";
import IconButton from "../Buttons/IconButton";
import PillButton from "../Buttons/PillButton";
import { SlideItemProp } from "@/types/SwiperSlides.t";
import usePageInfo from "@/hooks/usePageInfo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myLeagueState } from "@/store/myLeague";
import { nameToTierMap } from "@/types/LeagueLevel";
import { LeagueNames } from "@/types/User.t";
import { CurrentViewState } from "@/store/currentView";

const SlideItem: React.FC<SlideItemProp> = ({
  leagueId,
  upgraded,
  imageUrl,
  league,
}) => {
  const setView = useSetRecoilState(CurrentViewState);

  const handleUpgradeLeagueLevel = () => {
    setView("upgrade-league-faster-selection");
  };

  return (
    <div className="relative z-20 flex flex-col items-center p-4 aspect-square">
      <RatingsInline
        leagueId={leagueId}
        className={` ${
          upgraded
            ? " bg-green opacity-1"
            : "bg-[#FFEEE4] opacity-70 !text-brown "
        } text-[.875em]`}
      />
      {upgraded && (
        <div className="w-[60%] blur-2xl aspect-square bg-green/55 absolute top-[50%] -translate-y-[50%] rounded-full"></div>
      )}
      <img
        src={imageUrl ?? "./images/avatars/burgler.svg"}
        alt={league ?? "thief"}
        className={`${upgraded ? " opacity-1" : " opacity-35"} z-10 my-auto`}
      />

      {!upgraded && (
        <PillButton
          className=" absolute bottom-10 w-max z-30 text-[.8em] px-3 py-1"
          onClick={handleUpgradeLeagueLevel}
        >
          <span className="capitalize ">upgrade</span>
        </PillButton>
      )}

      {!upgraded && (
        <div className=" absolute top-[50%] -translate-y-[50%] w-[15.46vw] aspect-square  max-h-16 max-w-16 z-20 ">
          <div className="bg bg-img-carousel-lock bg-center h-[100%] w-[100%] rounded-xl"></div>
        </div>
      )}
    </div>
  );
};

const ThiefCarousel = ({
  slides,
  setActiveLeague,
}: {
  slides: SlideItemProp[];
  setActiveLeague: (slide: SlideItemProp) => void;
}) => {
  const getPageHeaderPosition = usePageInfo();
  const position = getPageHeaderPosition();

  const myLeague = useRecoilValue(myLeagueState);

  const initialSlide = Math.max(
    nameToTierMap[myLeague?.league as LeagueNames] - 1,
    0
  );

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span data-bullet-index=${index}  class="${className} custom-bullet"></span>`;
    },
  };

  return (
    <div
      className=" sticky w-full bg-[#FFEEE4] z-30"
      style={{ top: position.height }}
    >
      <div className="relative h-max">
        {/* <div className="flex flex-row w-full justify-between absolute top-[50%] -translate-y-[50%] z-20 p-3"> */}
        <IconButton
          acent="brown"
          className="swiper-button-prev-custom rounded-md !max-h-[32px] !max-w-[32px] absolute top-[50%] z-20 -translate-y-[50%] left-2"
        >
          <span className="w-4 h-4 bg bg-icon-arrow aspect-square"></span>
        </IconButton>
        <IconButton
          acent="brown"
          className="swiper-button-next-custom rounded-md !max-h-[32px] !max-w-[32px] absolute top-[50%] z-20 -translate-y-[50%] right-2"
        >
          <span className="w-4 h-4 rotate-180 bg bg-icon-arrow aspect-square"></span>
        </IconButton>
        {/* </div> */}
        <Swiper
          initialSlide={initialSlide}
          className="bg-white swiper-radial-gradient"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={2}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={pagination}
          onSlideChange={(swiper) =>
            setActiveLeague(slides[swiper.activeIndex])
          }
        >
          {slides.map((slide: SlideItemProp) => {
            return (
              <SwiperSlide className="w-[76vw]" key={slide.league}>
                <SlideItem {...slide} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ThiefCarousel;
