import { useTranslation } from "react-i18next";
import phone from '@/assets/image/phone.png'
import location from '@/assets/image/location.png'
import time from '@/assets/image/time.png'

const Contact = () => {
    const {t} = useTranslation()
    return (
        <section className="max-w-7xl mx-auto relative container mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner ">
                <h4 className="text-[24px] xl:w-[850px] mx-auto font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('contact')}</h4>
                <ul className="flex flex-col space-y-3 items-start justify-center px-4 xl:flex-row xl:justify-between xl:items-center xl:mt-6">
                    <li className="flex items-center gap-x-5">
                        <img src={phone} alt="telefon " />
                        <div className="flex flex-col space-y-2">
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] font-semibold">{t('constact_1')}</p>
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#A6A6A6] font-semibold">+998 50 900 47 38</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-5">
                        <img src={location} alt="telefon " />
                        <div className="flex flex-col space-y-2">
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] font-semibold">{t('constact_2')}</p>
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#A6A6A6] font-semibold">{t('constact_2_d')}</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-5">
                        <img src={time} alt="telefon " />
                        <div className="flex flex-col space-y-2">
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] font-semibold">{t('constact_3')}</p>
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#A6A6A6] font-semibold">8:00-18:00</p>
                        </div>
                    </li>
                </ul>
                <div className="relative w-full max-w-7xl mx-auto mt-8 overflow-hidden">
                    <iframe className="w-full" src="https://yandex.ru/map-widget/v1/?um=constructor%3A361b19da28139a544398a1c050c74f3521016dc1cedc5fd31f1c26f2f86100eb&amp;source=constructor" width="1133" height="400"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;