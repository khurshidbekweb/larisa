import { useTranslation } from "react-i18next";
import advantage from '@/assets/image/advantage.png'
import one from '@/assets/image/modal-icon.png'
import two from '@/assets/image/advantage_2.png'
import three from '@/assets/image/advantage_3.png'
import four from '@/assets/image/advantage_4.png'

const Advantage = () => {
  const {t} = useTranslation()
  const diateInfo = [
    {
        image: one,
        title: t('advantage_1')
    },
    {
        image: two,
        title: t('advantage_2')
    },
    {
        image: three,
        title: t('advantage_3')
    },
    {
        image: four,
        title: t('advantage_4')
    },
]
  return (
    <section className="max-w-7xl mx-auto container mt-10 md:mt-14 xl:mt-20">
        <div className="my-info-inner px-2">
            <h4 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('advantage_t')}</h4>
            <h2 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-3 md:mt-5 px-4">{t('advantage_d')}</h2>
            <div className="flex flex-col xl:flex-row-reverse space-y-4 md:space-y-6 xl:space-y-0 justify-between items-center mt-5 md:mt-8 xl:mt-10">
                <img className="xl:w-[519px] px-4 bg-white" src={advantage} alt="advantage image" />
                <ul className="flex flex-col md:space-y-0 bg-[#E4C3AD1A] w-full md:flex-row md:gap-5 py-4 md:flex-wrap space-y-3 px-4 md:p-4 xl:py-8 xl:p-6">
                    {diateInfo.map((el, i) => (
                        <li key={i} className="flex items-center gap-x-3 max-w-[328px] md:max-w-[322px] xl:max-w-[320px]">
                            <img src={el.image} alt="image" />
                            <h4 className="text-[14px] md:text-[16px] xl:text-[18px]">{el.title}</h4>
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
    </section>
    );
};

export default Advantage;