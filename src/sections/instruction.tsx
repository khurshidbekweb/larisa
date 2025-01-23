
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

const Instruction = () => {
    const {t} = useTranslation()
    return (
        <div className="relative mx-auto text-center mt-10 md:mt-14 xl:mt-20 h-[119px] md:h-[113px] xl:h-[90px]">            
            <div className="w-full top-1 md:top-3 xl:top-5 bg-[#E4C3AD] overflow-hidden rotate-3 md:rotate-1 xl:rotate-0 line-clamp-1 text-white text-[18px] md:text-[24px] xl:text-[40px] font-semibold md:leading-10">
                <Marquee speed={70}>
                    <p className="text-lg text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')}
                    </p>
                </Marquee>
            </div>
            <div className="overflow-hidden z-20 top-4 md:top-5 xl:top-[27px] w-full bg-[#3679A4] absolute -rotate-2 xl:-rotate-2">
                <Marquee speed={70}>
                    <p className="text-lg text-white text-[18px] p-2 py-3 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')}
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default Instruction;