import { Swiper, SwiperSlide } from 'swiper/react';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import 'swiper/css/effect-coverflow';
// @ts-expect-error
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import slide_image_1 from '@/assets/image/sertificate.png';
import slide_image_2 from '@/assets/image/ser_d_2.png';
import slide_image_3 from '@/assets/image/ser_d_3.png';
import slide_image_4 from '@/assets/image/ser_d_4.png';
import slide_image_5 from '@/assets/image/ser_d_5.png';
import slide_image_6 from '@/assets/image/ser_d_6.png';
import slide_image_7 from '@/assets/image/ser_d_7.png';
import slide_image_8 from '@/assets/image/ser_d_8.png';
import slide_image_9 from '@/assets/image/ser_d_9.png';
import slide_image_10 from '@/assets/image/ser_d_10.png';
import slide_image_11 from '@/assets/image/ser_d_11.png';
import slide_image_12 from '@/assets/image/ser_d_12.png';
import slide_image_13 from '@/assets/image/ser_d_13.png';
import slide_image_14 from '@/assets/image/ser_d_14.png';
import slide_image_15 from '@/assets/image/ser_d_15.png';
import slide_image_16 from '@/assets/image/ser_d_16.png';
import slide_image_17 from '@/assets/image/ser_d_17.png';
import slide_image_18 from '@/assets/image/ser_d_18.png';
import slide_image_19 from '@/assets/image/ser_d_19.png';
import slide_image_20 from '@/assets/image/ser_d_20.png';
import slide_image_21 from '@/assets/image/ser_d_21.png';
import slide_image_22 from '@/assets/image/ser_d_22.png';
import slide_image_23 from '@/assets/image/ser_d_23.png';
import slide_image_24 from '@/assets/image/ser_d_24.png';
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
        { image: slide_image_5 },
        { image: slide_image_6 },
        { image: slide_image_7 },
        { image: slide_image_8 },
        { image: slide_image_9 },
        { image: slide_image_10 },
        { image: slide_image_11 },
        { image: slide_image_12 },
        { image: slide_image_13 },
        { image: slide_image_14 },
        { image: slide_image_15 },
        { image: slide_image_16 },
        { image: slide_image_17 },
        { image: slide_image_18 },
        { image: slide_image_19 },
        { image: slide_image_20 },
        { image: slide_image_21 },
        { image: slide_image_22 },
        { image: slide_image_23 },
        { image: slide_image_24 },
    ];

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 2, // slides distance
                    depth: 200, // depth of the effect
                    modifier: 2, // influence of the effect
                    slideShadows:false
                }}
                breakpoints={{
                    350: {
                        width: 370,
                        slidesPerView: 1.5,
                        centeredSlides:true
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2.5,
                        centeredSlides:true

                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 3.5,
                        centeredSlides:true

                    }
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Navigation]}
                className="sertificate-swiper max-w-7xl h-[350px] xl:h-[400px] xl:px-5"
            >
                {swiperSertificate.map((el, i) => (
                    <SwiperSlide key={i} className="w-[280px] h-[320px] z-10 mx-auto xl:w-[350px] xl:h-[400px] rounded-[20px] transition-all transform duration-300">
                        <img
                            className="w-full h-full object-contain"
                            src={el.image}
                            alt="slide_image"
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
