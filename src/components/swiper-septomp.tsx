/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import classNames from "classnames";
import prev from "@/assets/image/prev.png";
import next from "@/assets/image/next.png";
// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/pagination";
import { SliderData } from '@/constants/semtoms';
import { SlideItemProps } from '@/lib/types/slider';
import { useTranslation } from 'react-i18next';

const SwiperCarousel = () => {
  const { i18n } = useTranslation();
  const lng: 'ru' | 'uz' = i18n.language as 'ru' | 'uz';

  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-7xl mx-auto my-10 px-2">
      <Swiper
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
            spaceBetween: 10
          },
          768: {
            width: 768,
            slidesPerView: 2.5,
            spaceBetween:5
          },
          1400: {
            width: 1400,
            slidesPerView: 4.9,
            spaceBetween:15
          },
        }}
        className="septom-swiper relative h-[350px] md:h-[420px]"
      >
        {SliderData.map((slide, index) => (
          <SwiperSlide key={slide.id} className="">
            <SlideItem
              image={slide.image}
              title={slide.title[lng]}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center w-[200px] md:w-[220px] absolute -bottom-1 md:-bottom-2 z-20 left-1/2 transform -translate-x-1/2">
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



const SlideItem: React.FC<SlideItemProps> = ({ image, title, isActive }) => {
  return (
    <div
      className={classNames(
        "absolute top-1/2 transform -translate-y-1/2 transition-all bg-white duration-300 ease-in-out overflow-hidden rounded-[20px]",
    {
      "left-0 w-[300px] md:w-[370px] xl:w-[350px] h-[80%] !md:h-[350px] z-30 cursor-pointer shadow-none overflow-hidden": isActive,
      "left-[40px] md:left-[80px] xl:left-[70px] w-[200px] md:w-[270px] h-[80%] z-10 opacity-75": !isActive,
    }
  )}

    >
      <img
        src={image}
        loading='lazy'
        alt={title}
        className="w-full h-full object-cover overflow-hidden rounded-[20px]"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3679A4] to-transparent p-4">
        <h3 className="text-white text-lg text-[20px] md:text-[27px] font-semibold text-start">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SwiperCarousel;
