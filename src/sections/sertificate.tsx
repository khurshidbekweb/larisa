import SwiperTest from "@/components/swiper-sertificat";
import { useTranslation } from "react-i18next";

const Sertificate = () => {
    const {t} = useTranslation()
    return (
        <section className="max-w-7xl mx-auto relative container mt-20 md:mt-36 xl:mt-40">
            <div className="recommunded-inner bg-[#F3F9FB] rounded-[40px] py-10">
                <h2 className="text-[#C9A690] font-bold text-[16px] md:text-[18px] text-center px-4">{t('sertificate_t')}</h2>
                <h4 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('sertificate_d')}</h4>
                <SwiperTest/>
            </div>
        </section>
    );
};

export default Sertificate;