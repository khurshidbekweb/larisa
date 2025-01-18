import { useTranslation } from "react-i18next";

const Services = () => {
    const {t} = useTranslation()
    return (
        <section className="max-w-7xl mx-auto mt-10 md:mt-20">
            <div className="servixe-inner">
                <h4>{t('services')}</h4>
                <h2>{t('service_des')}</h2>
            </div>
        </section>
    );
};

export default Services;