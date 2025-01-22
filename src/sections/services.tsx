import SwiperService from "@/components/swiper-service";
import { useTranslation } from "react-i18next";

const Services = () => {
    const {t} = useTranslation()
    return (
        <section id="services" className="max-w-7xl mx-auto mt-16 md:mt-26">
            <div className="servixe-inner text-center">
                <h4 className="text-[#C9A690] text-[14px] font-bold md:text-[15px] xl:text-[16px]">{t('services')}</h4>
                <h2 className="text-[24px] md:text-[32px] xl:text-[40px]">{t('service_des')}</h2>
                <SwiperService/>
            </div>
        </section>
    );
};

export default Services;