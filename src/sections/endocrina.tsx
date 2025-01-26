import { useTranslation } from "react-i18next";
import mobile from '@/assets/image/mobile.png'
import desktop from '@/assets/image/dectop_e.png'
import desktop_uz from '@/assets/image/desktop_e_uz.png'
import mobile_uz from '@/assets/image/mobile_e_uz.png'
import soglom from '@/assets/image/soglom.png'

const Endocrina = () => {
    const {t, i18n} = useTranslation()
    return (
        <section className=" relative mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner">
                <h2 className="text-[#C9A690] font-bold  text-[14px] md:text-[16px] text-center">{t('endoc_t')}</h2>
                <h4 className="text-[24px] xl:w-[850px] mx-auto font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('endoc_d')}</h4>
                <div className=" bg-[#89BFDB1A] ">
                    <div className="max-w-7xl mx-auto mt-32 xl:mt-12 xl:flex xl:items-center xl:justify-between">
                        {i18n.language=='uz'?
                        <>
                            <img className="block md:hidden relative mx-auto -top-24" src={mobile_uz} alt="mobile" />
                            <img className="hidden md:block relative left-1/4 md:-top-28 xl:relative xl:left-0 xl:top-0" src={desktop_uz} alt="mobile" />
                        </>
                        :<>
                            <img className="block md:hidden relative mx-auto -top-24" src={mobile} alt="mobile" />
                            <img className="hidden md:block relative left-1/4 md:-top-28 xl:relative xl:left-0 xl:top-0" src={desktop} alt="mobile" />
                        </>}
                        <ul className="-mt-16 md:-mt-28 flex flex-col md:flex-row md:flex-wrap md:justify-between space-y-3 md:space-y-0 md:gap-5 pb-5 px-4 xl:w-[55%] xl:mt-[0px] xl:py-0 xl:px-4">
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
            </div>
        </section>
    );
};

export default Endocrina;