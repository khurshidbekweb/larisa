import React from "react";
import { useTranslation } from "react-i18next";

const Instruction = () => {
    const {t} = useTranslation()
    return (
        <div className="relative max-w-screen-2xl mx-auto text-center mt-10 md:mt-14 xl:mt-20 h-[119px] md:h-[113px] xl:h-[186px]">            
            <div className="w-full top-1/3 md:top-3 xl:top-5 bg-[#E4C3AD] absolute overflow-hidden rotate-1 xl:rotate-[2px] line-clamp-1 text-white text-[18px] md:text-[24px] xl:text-[40px] font-semibold md:leading-10">
                <div className="flex">
                    {React.createElement(
                        "marquee",
                        {
                        className:"text-lg text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10",
                        scrollamount: "8", // Animatsiya tezligi
                        direction: "left" 
                        },
                        t('instruction'), t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction')
                    )}
                </div>
            </div>
            <div className="overflow-hidden top-1/2 md:top-1/3 xl:top-[50px] w-full bg-[#3679A4] -rotate-2 absolute xl:-rotate-2">
                <div className="flex ">
                    {React.createElement(
                        "marquee",
                        {
                        className:"text-lg text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10",
                        scrollamount: "8", // Animatsiya tezligi
                        direction: "left" 
                        },
                        t('instruction'), t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction'),t('instruction')
                    )}
                    {/* <p className="text-lg ml-[230px] text-white text-[18px] p-2 md:text-[24px] xl:text-[40px] font-semibold md:font-bold md:leading-10">
                        {t('instruction')} 
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Instruction;