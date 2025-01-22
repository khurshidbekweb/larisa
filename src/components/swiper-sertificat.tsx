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

import slide_image_1 from '@/assets/image/ser_m_1.png';
import slide_image_2 from '@/assets/image/ser_m_2.png';
import slide_image_3 from '@/assets/image/sertifikat_2.png';
import slide_image_4 from '@/assets/image/sertifikat_3.png';
import { useRef } from 'react';
import SwiperCore from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SwiperTest() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const swiperSertificate = [
        { image: slide_image_1 },
        { image: slide_image_2 },
        { image: slide_image_3 },
        { image: slide_image_4 },
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
                    stretch: 2, // slides distance
                    depth: 200, // depth of the effect
                    modifier: 2, // influence of the effect
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
                    <SwiperSlide key={i} className="xl:-ml-[14px]">
                        <img
                            className="!w-[280px] h-[320px] mx-auto xl:w-[350px] xl:h-[400px] rounded-[20px] object-contain transition-all transform duration-300"
                            src={el.image}
                            alt="slide_image"
                            style={{
                                boxShadow: 'none', // Removes shadow
                                background: 'none', // Removes overlay background
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute bottom-0 xl:bottom-10 z-20 left-1/2 transform -translate-x-1/2">
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
