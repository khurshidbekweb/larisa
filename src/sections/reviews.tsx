import ReviewSwiper from "@/components/review-review";
import { useTranslation } from "react-i18next";

const Reviews = () => {
    const {t} = useTranslation()
    return (
        <section id="review" className="max-w-7xl mx-auto container px-2 mt-10 md:mt-14 xl:mt-20">
            <div className="my-info-inner  bg-[#FAE1DFCC] rounded-[40px] p-4">
                <h4 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('reviews_t')}</h4>
                <h2 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-3 md:mt-5 px-4">{t('reviews_d')}</h2>
                <ReviewSwiper/>
            </div>
        </section>
    );
};

export default Reviews;