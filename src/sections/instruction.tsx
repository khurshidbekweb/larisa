import { useTranslation } from "react-i18next";

const Instruction = () => {
    const {t} = useTranslation()
    return (
        <div className="relative mx-auto text-center mt-10 md:mt-20">
            <div className="w-full bg-[#E4C3AD] absolute overflow-hidden line-clamp-1 p-2 text-white text-[18px] md:text-[24px] xl:text-[40px] font-semibold md:leading-10">
                <div className="flex animate-marquee whitespace-nowrap ">
                    <p className="text-lg text-white text-[18px] md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')} 
                        {t('instruction')} 
                    </p>
                </div>
            </div>
            <div className="overflow-hidden w-full bg-[#3679A4] -rotate-3 top-2 md:top-5 absolute xl:-rotate-2 xl:top-[29px]">
                <div className="flex animate-marquee whitespace-nowrap ">
                    <p className="text-lg text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')} 
                    </p>
                    <p className="text-lg ml-[300px] text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')} 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Instruction;