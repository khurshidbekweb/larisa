import { useRef } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import { useTranslation } from "react-i18next";

import user from '@/assets/image/review-user.jpg'
import star from '@/assets/image/star.png'
import prev from '@/assets/image/prev.png'
import next from '@/assets/image/next.png'

const SwiperReview = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const { t } = useTranslation()
    const slides = [
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('service_des1')
        }
    ]
    return (
        <div className="relative max-w-7xl mx-auto my-10 px-2">
            <Swiper
            spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Keyboard, Pagination,]}
                keyboard={{
                    enabled: true,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                centeredSlides={true} // Markazda joylashgan slayd
                loop={true} // Cheksiz aylanish
                breakpoints={{
                    350: {
                        width: 370,
                        slidesPerView: 1.5,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1.9,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 3.4,
                    }
                }}
                className="custom-swiper h-[420px] md:h-[440px] xl:h-[480px]"
                >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SlideItem image={slide.image} title={slide.title} desc={slide.description}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute bottom-0 md:-bottom-2 z-20 left-1/2 transform -translate-x-1/2">
                <button className="" onClick={() => swiperRef.current?.slidePrev()}> <img className="w-[40px] md:w-[50px]" src={prev} alt="prev" /> </button>
                <button className="" onClick={() => swiperRef.current?.slideNext()}> <img className="w-[40px] md:w-[50px]" src={next} alt="next" /> </button>
            </div>
        </div>
    );
};

export default SwiperReview;

// Slayd komponenti uchun tiplash
interface SlideItemProps {
    image: string;
    title: string;
    desc:string
}

// Har bir slayd elementi
const SlideItem: React.FC<SlideItemProps> = ({ image, title, desc }) => {

    return (
        <div className="w-[231px] bg-white p-6 h-[277px] md:w-[399px] md:h-[362px] relative rounded-[40px] overflow-hidden">
            <div className="flex items-center gap-3">
                <img
                    src={image}
                    alt={title}
                    className="w-[40px] h-[40px] rounded-full object-center"
                />
                <div className="flex flex-col space-y-1 items-start justify-center">
                    <h2 className="text-start">{title}</h2>
                    <img src={star} alt="" />
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-lg text-[12px] line-clamp-5 md:line-clamp-none md:text-[16px] xl:text-[18px] text-start text-[#A6A6A6]">{desc}</h2>
                <button className="p-2 px-8 absolute bottom-2 md:bottom-8 bg-[#D7EAF0] text-[14px] rounded-full">Диабет</button>
            </div>
        </div>
    );
};

