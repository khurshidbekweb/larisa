/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/pagination";
import user from '@/assets/image/review-user.jpg'
import star from '@/assets/image/star.png'
import prev from '@/assets/image/prev.png'
import next from '@/assets/image/next.png'
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import SwiperCore from 'swiper'


interface Testimonial {
    id: number;
    title: string;
    image:string,
    description:string
}


const ReviewSwiper: React.FC = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const {t} = useTranslation()
    const testimonials: Testimonial[] = [
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_1')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_2')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_3')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_4')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_5')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_6')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_7')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_8')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_9')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_10')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_11')
        },
        {
            id: 1,
            image: user,
            title: t('service_card1'),
            description: t('commit_12')
        },
    ];
    return (
        <div className="py-10 relative">
            <Swiper
                pagination={{ clickable: true }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                modules={[Pagination,]} 
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="max-w-7xl mx-auto test-swiper h-[500px]"
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
            >
                {testimonials.map((slide, index) => {
                    return (<SwiperSlide key={index} className="flex justify-center items-end">
                        <SlideItem image={slide.image} title={slide.title} desc={slide.description}/>
                    </SwiperSlide>)
                })}
            </Swiper>
            <div className="flex justify-between items-center w-[280px] md:w-[300px] absolute bottom-0 md:bottom-8 z-20 left-1/2 transform -translate-x-1/2">
                <button className="" onClick={() => swiperRef.current?.slidePrev()}> <img className="w-[40px] md:w-[50px]" src={prev} alt="prev" /> </button>
                <button className="" onClick={() => swiperRef.current?.slideNext()}> <img className="w-[40px] md:w-[50px]" src={next} alt="next" /> </button>
            </div>
        </div>
    );
};

export default ReviewSwiper;

// Slayd komponenti uchun tiplash
interface SlideItemProps {
    image: string;
    title: string;
    desc:string
}

// Har bir slayd elementi
const SlideItem: React.FC<SlideItemProps> = ({ image, title, desc }) => {

    return (
        <div className="w-[270px] bg-white p-6 h-[300px] md:w-[399px] md:h-[362px] relative rounded-[40px] overflow-hidden">
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
                <h2 className="text-lg text-[12px] line-clamp-5 md:line-clamp-6 md:text-[16px] xl:text-[18px] text-start text-[#A6A6A6]">{desc}</h2>
                <button className="p-2 px-8 absolute bottom-2 md:bottom-8 bg-[#D7EAF0] text-[14px] rounded-full">Диабет</button>
            </div>
        </div>
    );
};