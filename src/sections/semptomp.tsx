import SwiperCarousel from "@/components/swiper-septomp";
import { useTranslation } from "react-i18next";

const Semptomp = () => {
    const {t} = useTranslation()
    return (
        <section id="semptom" className="max-w-7xl mx-auto relative container px-4 mt-10 md:mt-14 xl:mt-20">
            <div className="semtomps-inner text-center">
                <h2 className="text-[#C9A690] text-[14px] font-bold md:text-[15px] xl:text-[16px]">{t('septomps')}</h2>
                <h5 className="text-[24px] md:text-[32px] xl:text-[40px]">{t('septomps_desc')}</h5>
                <SwiperCarousel/>
            </div>
        </section>
    );
};

export default Semptomp;