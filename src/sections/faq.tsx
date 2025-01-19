import { useTranslation } from "react-i18next";

const Faq = () => {
    const {t} = useTranslation()
    return (
        <section className="max-w-7xl mx-auto relative container mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner ">
                <h2 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('whom_')}</h2>
                <h4 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('whom_me')}</h4>
            </div>
        </section>
    );
};

export default Faq;