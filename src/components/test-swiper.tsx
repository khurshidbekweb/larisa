import { Swiper, SwiperSlide } from 'swiper/react';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import 'swiper/css/effect-coverflow';
// @ts-expect-error
import 'swiper/css/pagination';
// @ts-expect-error
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '@/assets/image/sertificate.png';
import { useRef } from 'react';
import SwiperCore from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SwiperTest() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const swiperSertificate = [
        { image: slide_image_1 },
        { image: slide_image_1 },
        { image: slide_image_1 },
        { image: slide_image_1 },
        { image: slide_image_1 },
        { image: slide_image_1 },
        { image: slide_image_1 }
    ];

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10, // slides distance
                    depth: 100, // depth of the effect
                    modifier: 2.5, // influence of the effect
                }}
                breakpoints={{
                    350: {
                        width: 370,
                        slidesPerView: 1.5,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2.5,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 4,
                    }
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="max-w-7xl h-[350px] xl:h-[400px] xl:px-5"
            >
                {swiperSertificate.map((el, i) => (
                    <SwiperSlide key={i} className="xl:-ml-2">
                        <img
                            className="w-[280px] h-[320px] mx-auto xl:w-[350px] xl:h-[400px] rounded-[20px] transition-all transform duration-300"
                            src={el.image}
                            alt="slide_image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute bottom-0 z-20 left-1/2 transform -translate-x-1/2">
                <button
                    className="text-[#1A5C7F]"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ChevronLeft size={35} />
                </button>
                <button
                    className="text-[#1A5C7F]"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRight size={35} />
                </button>
            </div>
        </>
    );
}

export default SwiperTest;
