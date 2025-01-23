import { useTranslation } from "react-i18next";
import phone from '@/assets/image/phone.png'
import location from '@/assets/image/location.png'
import time from '@/assets/image/time.png'

const Contact = () => {
    const {t} = useTranslation()
    return (
        <section id="contact" className=" relative mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner max-w-7xl mx-auto ">
                <h4 className="text-[24px] xl:w-[850px] mx-auto font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('contact')}</h4>
                <ul className="flex flex-col space-y-3 items-start justify-center px-4 xl:flex-row xl:justify-between xl:items-center xl:mt-6">
                    <li className="flex items-center gap-x-5">
                        <img src={phone} alt="telefon " />
                        <div className="flex flex-col space-y-2">
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] font-semibold">{t('constact_1')}</p>
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#A6A6A6] font-semibold">+998 90 941 85 49</p>
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
                            <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#A6A6A6] font-semibold">9:00-15:00</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative w-full  mx-auto mt-8">
                <iframe className="w-full" src="https://yandex.com/map-widget/v1/?um=constructor%3Aa0f405ac06dd572f8e33bb7d368099cd72d3c83a44775e281efc14c5084a1c70&amp;source=constructor" width="955" height="465"></iframe>
            </div>
        </section>
    );
};

export default Contact;