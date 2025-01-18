import { useTranslation } from "react-i18next";
import Image from '@/assets/image/dieta.png'
import homle from '@/assets/image/homla.svg'
import analez from '@/assets/image/two.png'
import semizlik from '@/assets/image/semiz.png'
import soglom from '@/assets/image/soglom.png'


const Recommunded = () => {
    const {t} = useTranslation()
    const diateInfo = [
        {
            image: homle,
            title: t('homla')
        },
        {
            image: analez,
            title: t('analiz')
        },
        {
            image: semizlik,
            title: t('semizlik')
        },
        {
            image: soglom   ,
            title: t('soglom')
        },
    ]
    return (
        <section className="max-w-7xl mx-auto relative container mt-10 md:mt-14 xl:mt-20">
            <div className="recommunded-inner ">
                <h2 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('whom_')}</h2>
                <h4 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('whom_me')}</h4>
            </div>
            <div className="flex flex-col xl:flex-row space-y-4 md:space-y-6 xl:space-y-0 justify-between items-center mt-5 md:mt-8 xl:mt-10">
                <img className="xl:w-[519px] px-4 bg-white" src={Image} alt="" />
                <ul className="flex flex-col md:space-y-0 bg-[#89BFDB1A] w-full md:flex-row md:gap-5 md:flex-wrap space-y-3 px-4 md:p-4 xl:py-8 xl:p-6">
                    {diateInfo.map((el, i) => (
                        <li key={i} className="flex items-center gap-x-3 max-w-[328px] md:max-w-[322px] xl:max-w-[320px]">
                            <img src={el.image} alt="image" />
                            <h4 className="text-[14px] md:text-[16px] xl:text-[18px]">{el.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Recommunded;