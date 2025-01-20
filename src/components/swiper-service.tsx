import { useRef } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import serviceImage from '@/assets/image/service.jpg'
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight,} from "lucide-react";
import MyService from "@/modal/my-service";

const SwiperService = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const { t } = useTranslation()
    const slides = [
        {
            id: 1,
            image: serviceImage,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: serviceImage,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: serviceImage,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: serviceImage,
            title: t('service_card1'),
            description: t('service_des1')
        },
        {
            id: 1,
            image: serviceImage,
            title: t('service_card1'),
            description: t('service_des1')
        }
    ]
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
                        slidesPerView: 1.2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2.2,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 3.2,
                    }
                }}
                className="mySwiper h-[420px] md:h-[440px] xl:h-[480px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SlideItem image={slide.image} title={slide.title} desc={slide.description}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center w-[190px] md:w-[200px] absolute bottom-0  z-20 left-1/2 transform -translate-x-1/2">
                <button className="text-[#E4C3AD]" onClick={() => swiperRef.current?.slidePrev()}> <ChevronLeft size={35}/> </button>
                <button className="text-[#E4C3AD]" onClick={() => swiperRef.current?.slideNext()}> <ChevronRight size={35}/> </button>
            </div>
        </div>
    );
};

export default SwiperService;

// Slayd komponenti uchun tiplash
interface SlideItemProps {
    image: string;
    title: string;
    desc:string
}

// Har bir slayd elementi
const SlideItem: React.FC<SlideItemProps> = ({ image, title, desc }) => {

    return (
        <div className="w-[300px] h-[365px] xl:w-[379px] xl:h-[420px] relative rounded-[40px] overflow-hidden bg-gradient-to-t from-[#FAE1DF] via-[#FAE1DF]/50 to-transparent">
            <img
                src={image}
                alt={title}
                className="w-full h-[70%] object-center"
            />
            <div className="absolute  service-bg bottom-0 w-full bg-gradient-to-t from-[#FAE1DF] via-[#FAE1DF]/50 to-transparent flex flex-col items-start space-y-2 p-6 px-7">
                <h3 className="text-lg text-[20px] md:text-[32px] font-semibold ">{title}</h3>
                <h2 className="text-lg text-[14px] md:text-[16px] xl:text-[18px] line-clamp-2 text-start text-[#A6A6A6]">{desc}</h2>
                <MyService/>
            </div>
        </div>
    );
};

