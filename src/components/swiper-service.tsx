import { useRef } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
// image import
import serviceImage1 from '@/assets/image/servicw1.jpg'
import serviceImage2 from '@/assets/image/usliga konsultatsiya.jpg'
import serviceImage3 from '@/assets/image/usluga diagnostika.jpg'
import serviceImage4 from '@/assets/image/usluga lichenya.jpg'
import serviceImage5 from '@/assets/image/larisa5.jpg'
import modal1 from '@/assets/image/modal1.png'
import modal2 from '@/assets/image/modal2.png'
import modal3 from '@/assets/image/modal3.png'
import modal4 from '@/assets/image/modal4.png'
import modal5 from '@/assets/image/modal5.png'
import modal6 from '@/assets/image/modal6.png'
import modal2_1 from '@/assets/image/modal2_1.png'
import modal2_2 from '@/assets/image/modal2_2.png'
import modal2_3 from '@/assets/image/modal2_3.png'
import modal2_4 from '@/assets/image/modal2_4.png'
import modal3_1 from '@/assets/image/modal3_1.png'
import modal3_2 from '@/assets/image/modal3_2.png'
import modal3_3 from '@/assets/image/modal3_3.png'
import modal3_4 from '@/assets/image/modal3_4.png'
import modal4_1 from '@/assets/image/modal4_1.png'
import modal4_2 from '@/assets/image/modal4_2.png'
import modal4_3 from '@/assets/image/modal4_3.png'
import modal4_4 from '@/assets/image/modal4_4.png'
import modal4_5 from '@/assets/image/modal4_5.png'
import modal4_6 from '@/assets/image/modal4_6.png'
import modal4_7 from '@/assets/image/modal4_7.png'
import modal5_1 from '@/assets/image/modal5_1.png'
import modal5_2 from '@/assets/image/modal5_2.png'
import modal5_3 from '@/assets/image/modal5_3.png'
import modal5_4 from '@/assets/image/modal5_4.png'
import modalmain1 from '@/assets/image/modal.png'
import modalmain2 from '@/assets/image/modal2main.png'
import modalmain3 from '@/assets/image/modal3main.png'
import modalmain4 from '@/assets/image/modal4main.png'
import modalmain5 from '@/assets/image/modal5main.png'
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight,} from "lucide-react";
import MyService from "@/modal/my-service";

const SwiperService = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const { t } = useTranslation()
    const slides = [
        {
            id: 1,
            image: serviceImage1,
            mainImage: modalmain1,
            title: t('service_card1'),
            description: t('service_des1'),
            summa: '400 000',
            modalInfo: [
                {
                    image: modal1,
                    title: t('service_1_1_t'),
                    description:t('service_1_1_d'),
                },
                {
                    image: modal2,
                    title: t('service_1_2_t'),
                    description:t('service_1_2_d'),
                },
                {
                    image: modal3,
                    title: t('service_1_3_t'),
                    description:t('service_1_3_d'),
                },
                {
                    image: modal4,
                    title: t('service_1_4_t'),
                    description:t('service_1_4_d'),
                },
                {
                    image: modal5,
                    title: t('service_1_5_t'),
                    description:t('service_1_5_d'),
                },
                {
                    image: modal6,
                    title: t('service_1_6_t'),
                    description:t('service_1_6_d'),
                },
            ]
        },        
        {
            id: 2,
            image: serviceImage3,
            mainImage: modalmain2,
            title: t('service_card2'),
            description: t('service_des2'),
            summa: '420 000',
            modalInfo: [
                {
                    image: modal2_1,
                    title: t('service_2_1_t'),
                    description:t('service_2_1_d'),
                },
                {
                    image: modal2_2,
                    title: t('service_2_2_t'),
                    description:t('service_2_2_d'),
                },
                {
                    image: modal2_3,
                    title: t('service_2_3_t'),
                    description:t('service_2_3_d'),
                },
                {
                    image: modal2_4,
                    title: t('service_2_4_t'),
                    description:t('service_2_4_d'),
                },
            ]
        },
        {
            id: 3,
            image: serviceImage4,
            mainImage: modalmain3,
            title: t('service_card3'),
            description: t('service_des3'),
            summa: t('service_price'),
            modalInfo: [
                {
                    image: modal3_1,
                    title: t('service_3_1_t'),
                    description:t('service_3_1_d'),
                },
                {
                    image: modal3_2,
                    title: t('service_3_2_t'),
                    description:t('service_3_2_d'),
                },
                {
                    image: modal3_3,
                    title: t('service_3_3_t'),
                    description:t('service_3_3_d'),
                },
                {
                    image: modal3_4,
                    title: t('service_3_4_t'),
                    description:t('service_3_4_d'),
                },
            ]
        },
        {
            id: 4,
            image: serviceImage5,
            mainImage: modalmain4,
            title: t('service_card4'),
            description: t('service_des4'),
            summa:t('service_price'),
            modalInfo: [
                {
                    image: modal4_1,
                    title: t('service_4_1_t'),
                    description:t('service_4_1_d'),
                },
                {
                    image: modal4_2,
                    title: t('service_4_2_t'),
                    description:t('service_4_2_d'),
                },
                {
                    image: modal4_3,
                    title: t('service_4_3_t'),
                    description:t('service_4_3_d'),
                },
                {
                    image: modal4_4,
                    title: t('service_4_4_t'),
                    description:t('service_4_4_d'),
                },
                {
                    image: modal4_5,
                    title: t('service_4_5_t'),
                    description:t('service_4_5_d'),
                },
                {
                    image: modal4_6,
                    title: t('service_4_6_t'),
                    description:t('service_4_6_d'),
                },
                {
                    image: modal4_7,
                    title: t('service_4_6_t'),
                    description:t('service_4_6_d'),
                },
            ]
        },
        {
            id: 5,
            image: serviceImage2,
            mainImage: modalmain5,
            title: t('service_card5'),
            description: t('service_des5'),
            summa: '1 000 000',
            modalInfo: [
                {
                    image: modal5_1,
                    title: t('service_5_1_t'),
                    description:t('service_5_1_d'),
                },
                {
                    image: modal5_2,
                    title: t('service_5_2_t'),
                    description:t('service_5_2_d'),
                },
                {
                    image: modal5_3,
                    title: t('service_5_3_t'),
                    description:t('service_5_3_d'),
                },
                {
                    image: modal5_4,
                    title: t('service_5_4_t'),
                    description:t('service_5_4_d'),
                },
            ]
        },
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
                        slidesPerView: 3.4,
                    }
                }}
                className="mySwiper h-[420px] md:h-[440px] xl:h-[500px]"
                >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SlideItem image={slide.image} mainImage={slide.mainImage} title={slide.title} desc={slide.description} modalInfo={slide.modalInfo} summa={slide.summa}/>
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

interface modalINfo{
    description:string,
    image:string,
    title:string
}

// Slayd komponenti uchun tiplash
interface SlideItemProps {
    image: string;
    title: string;
    desc:string
    modalInfo: modalINfo[],
    summa:string
    mainImage:string
}

// Har bir slayd elementi
const SlideItem: React.FC<SlideItemProps> = ({ image, title, desc, modalInfo, summa, mainImage }) => {

    return (
        <MyService desc={desc} image={image} title={title} modalInfo={modalInfo} summa={summa} mainImage={mainImage}/>
    );
};

