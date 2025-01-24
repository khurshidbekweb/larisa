import { useTranslation } from "react-i18next";

const Statisics = () => {
    const {t} = useTranslation()
    const lines = t('statisics_info').split("\n");
    console.log(lines);
    
    const statisicsInfo = [
        {
            num: 12,
            title: t('statisics_age')
        },
        {
            num: 10000,
            title: t('statisics_total')
        },
        {
            num: 20,
            title: t('statisics_sertifikat')
        },
    ]
    return (
        <section className="max-w-7xl mx-auto relative container px-4  mt-10 md:mt-14 xl:mt-16">
            <div className="statisics-inner flex flex-col xl:flex-row xl:items-start xl:gap-10">
                <div className="flex justify-between items-start gap-x-6 md:gap-x-10 w-full xl:w-[45%]">
                    <h3 className="w-[70px] md:w-20 text-[#C9A690] text-[14px] md:text-[16px] font-montserrat font-bold">{t('statisics_me')}</h3>
                    <p className="flex-1 text-[#A6A6A6] text-[14px] md:text-[18px] xl:text-[19px] xl:text-justify font-medium leading-5">
                    {lines.map((line, index) => (
                        <p key={index}>{line}</p> 
                    ))}
                    </p>
                </div>
                <ul className="flex flex-col w-full xl:w-[50%] space-y-8  md:space-y-0 md:flex-row justify-between items-center text-center mt-10 xl:mt-0">
                    {statisicsInfo.map((el, i) => (
                        <li key={i+1} className="flex flex-col space-y-3">
                            <h2 className="text-[#1A5C7F] text-[40px] md:text-[] xl:text-[64px] xl:font-bold font-mono font-semibold leading-10 flex justify-center gap-1">{el.num} <p className="text-[35px] md:text-[42px]">+</p></h2>
                            <p className="text-[#C9A690] text-[18px] font-semibold leading-5">{el.title}</p>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </section>
    );
};

export default Statisics;