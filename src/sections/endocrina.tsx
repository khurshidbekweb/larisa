import { useTranslation } from "react-i18next";
import mobile from '@/assets/image/mobile.png'
import desktop from '@/assets/image/dectop_e.png'
import soglom from '@/assets/image/soglom.png'

const Endocrina = () => {
    const {t} = useTranslation()
    return (
        <section className="max-w-7xl mx-auto relative container mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner">
                <h2 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('endoc_t')}</h2>
                <h4 className="text-[24px] xl:w-[850px] mx-auto font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('endoc_d')}</h4>
                <div className="w-full relative bg-[#89BFDB1A] mt-36 xl:mt-24 xl:flex xl:items-center xl:justify-between rounded-lg">
                    <img className="block md:hidden absolute -top-20" src={mobile} alt="mobile" />
                    <img className="hidden md:block absolute left-1/4 -top-28 xl:relative xl:left-0 xl:top-0" src={desktop} alt="mobile" />
                    <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between space-y-3 md:space-y-0 md:gap-5 pt-48 px-4 xl:w-[60%] xl:mt-[0px] xl:pt-0 xl:px-4">
                        <li className="flex items-center gap-x-5 w-[328px] md:w-[322px] !xl:w-[320px]">
                            <img src={soglom} alt="soglom bo'l" />
                            <p className="text-[14px] md:text-[16px]">{t('endoc_1')}</p>
                        </li>
                        <li className="flex items-center gap-x-5 w-[328px] md:w-[322px] xl:w-[320px]">
                            <img src={soglom} alt="soglom bo'l" />
                            <p className="text-[14px] md:text-[16px]">{t('endoc_2')}</p>
                        </li>
                        <li className="flex items-center gap-x-5 w-[328px] md:w-[322px] !xl:w-[320px]">
                            <img src={soglom} alt="soglom bo'l" />
                            <p className="text-[14px] md:text-[16px]">{t('endoc_3')}</p>
                        </li>
                        <li className="flex items-center gap-x-5 w-[328px] md:w-[322px] !xl:w-[320px]">
                            <img src={soglom} alt="soglom bo'l" />
                            <p className="text-[14px] md:text-[16px]">{t('endoc_4')}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Endocrina;