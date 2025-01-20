/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import classNames from "classnames";
import user1 from "@/assets/image/user1.jpg";
import user2 from "@/assets/image/user2.jpg";
import user3 from "@/assets/image/user3.jpg";
import user4 from "@/assets/image/user4.jpg";
import prev from "@/assets/image/prev.png";
import next from "@/assets/image/next.png";
// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
  title: string;
}

const SwiperCarousel: React.FC = () => {
  const slides: Slide[] = [
    { id: 1, image: user1, title: "Усталость" },
    { id: 2, image: user2, title: "Скачки веса" },
    { id: 3, image: user3, title: "Выпадение волос" },
    { id: 4, image: user4, title: "Сухость кожи" },
    { id: 5, image: user1, title: "Сухость кожи" },
    { id: 6, image: user2, title: "Сухость кожи" },
  ];

  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-7xl mx-auto my-10 px-2">
      <Swiper
        spaceBetween={1}
        pagination={{ clickable: true }}
        modules={[Keyboard, Pagination]}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        breakpoints={{
          370: {
            width: 370,
            slidesPerView: 1.4,
          },
          768: {
            width: 768,
            slidesPerView: 2.5,
          },
          1400: {
            width: 1400,
            slidesPerView: 4,
          },
        }}
        className="relative h-[350px] md:h-[420px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <SlideItem
              image={slide.image}
              title={slide.title}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute -bottom-1 md:-bottom-2 z-20 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="z-50"
        >
          <img className="w-[40px] md:w-[50px]" src={prev} alt="prev" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="z-50"
        >
          <img className="w-[40px] md:w-[50px]" src={next} alt="next" />
        </button>
      </div>
    </div>
  );
};

interface SlideItemProps {
  image: string;
  title: string;
  isActive: boolean;
}

const SlideItem: React.FC<SlideItemProps> = ({ image, title, isActive }) => {
  return (
    <div
      className={classNames(
        "absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out overflow-hidden rounded-[20px] shadow-lg",
    {
      "left-0 w-[300px] md:w-[370px] xl:w-[400px] h-[80%] !md:h-[350px] z-30": isActive,
      "left-[40px] md:left-[80px] xl:left-[70px] w-[200px] md:w-[270px] h-[80%] z-10 opacity-75": !isActive,
    }
  )}

    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3679A4] to-transparent p-5">
        <h3 className="text-white text-lg text-[20px] md:text-[32px] font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SwiperCarousel;
