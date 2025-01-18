/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 // Agar pagination moduli ishlatilayotgan bo‘lsa
import { Keyboard, Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import SwiperCore from 'swiper'
import classNames from "classnames";
import user1 from '@/assets/image/user1.jpg';
import user2 from '@/assets/image/user2.jpg';
import user3 from '@/assets/image/user3.jpg';
import user4 from '@/assets/image/user4.jpg';
import prev from '@/assets/image/prev.png'
import next from '@/assets/image/next.png'


// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import 'swiper/css/navigation';
// @ts-expect-error
import 'swiper/css/pagination';


// Slayd obyekti uchun interfeys
interface Slide {
  id: number;
  image: string;
  title: string;
}

// Asosiy komponent
const SwiperCarousel: React.FC = () => {
  const slides: Slide[] = [
    { id: 1, image: user1, title: "Усталость" },
    { id: 2, image: user2, title: "Скачки веса" },
    { id: 3, image: user3, title: "Выпадение волос" },
    { id: 4, image: user4, title: "Сухость кожи" },
    { id: 5, image: user4, title: "Сухость кожи" },
    { id: 6, image: user4, title: "Сухость кожи" },
    { id: 7, image: user4, title: "Сухость кожи" },
  ];
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div className="relative max-w-7xl mx-auto my-10 px-2">
      <Swiper
       spaceBetween={5}
        pagination={{ clickable: true }}
        modules={[Keyboard, Pagination,]}
        keyboard={{
            enabled: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        breakpoints={{
            350: {
                width: 370,
                slidesPerView: 1.4,
            },
            768: {
                width: 768,
                slidesPerView: 2.5,
            },
            1400: {
                width: 1400,
                slidesPerView: 4.9,
            }
        }}
        className="mySwiper h-[350px] md:h-[420px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideItem image={slide.image} title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute -bottom-1 md:-bottom-2 z-20 left-1/2 transform -translate-x-1/2">
          <button className="" onClick={()=>swiperRef.current?.slidePrev()}> <img className="w-[40px] md:w-[50px]" src={prev} alt="prev" /> </button>
          <button onClick={()=>swiperRef.current?.slideNext()}> <img className="w-[40px] md:w-[50px]" src={next} alt="next" /> </button>
        </div>      
    </div>
  );
};

// Slayd komponenti uchun tiplash
interface SlideItemProps {
  image: string;
  title: string;
}

// Har bir slayd elementi
const SlideItem: React.FC<SlideItemProps> = ({ image, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% ko‘rinishida trigger
  });

  return (
    <div
      ref={ref}
      className={classNames(
        "relative  overflow-hidden w-[250px] md:w-[270px] xl:w-[240px] h-[270px] md:h-[350px]  rounded-[20px] shadow-lg transition-transform duration-300",
        {
          "scale-105": inView,
          "scale-100": !inView,
        }
      )}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[15px]"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3679A4] to-transparent p-5">
        <h3 className="text-white text-lg text-[20px] md:text-[32px] font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default SwiperCarousel;
