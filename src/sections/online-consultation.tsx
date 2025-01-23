import { useTranslation } from "react-i18next";
import one from '@/assets/image/online_1.png'
import two from '@/assets/image/online_2.png'
import doctor from '@/assets/image/larisa.png'
import SignUp from "@/modal/sign-up";

const Onlineonsultation = () => {
    const {t} = useTranslation()
    return (
        <section className="mt-10 max-w-7xl mx-auto container px-2 md:mt-14 xl:mt-20">
            <div className="my-info-inner relative  bg-[#1A5C7F99] rounded-[40px] xl:flex xl:flex-row-reverse p-4 overflow-hidden">
                <div className="flex flex-col space-y-4 text-white p-3 xl:w-[60%]">
                    <h1 className="text-[24px] md:text-[32px] xl:text-[40px]">{t('online_t')}</h1>
                    <p className="text-[14px] md:text-[16px] xl:text-[18px]">{t('online_d')}</p>
                    <ul className="flex flex-col md:flex-row xl:flex-col space-y-3 md:space-y-0 xl:space-y-4 md:justify-between md:w-[80%] xl:mt-4">
                        <li className="flex items-center gap-4">
                            <img src={one} alt="one" />
                            <p className="text-[16px] md:text-[20px] xl:text-[24px]">{t('online_1')}</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <img src={two} alt="one" />
                            <p className="text-[16px] md:text-[20px] xl:text-[24px]">{t('online_2')}</p>
                        </li>
                    </ul>
                </div>
                <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
                    <span className="absolute w-[500px] h-[500px] bg-[#1A5C7F1A] rounded-full -left-44 -bottom-64 md:-left-24 md:-bottom-44"></span>
                    <span className="absolute w-[500px] h-[500px] bg-[#1A5C7F1A] rounded-full -left-36 -bottom-56"></span>
                </div>
                <img className="absolute bottom-0 z-10 left-0 w-[190px] h-[270px] md:w-[255px] md:h-[372px] xl:left-20 object-cover" src={doctor} alt="doctor" />
                <button className="absolute inline-block -bottom-12 right-0 w-[160px] h-[160px] md:w-[270px] md:h-[270px] xl:w-[250px] xl:h-[250px] md:-bottom-24 md:right-4 xl:-bottom-16 xl:right-28 rounded-full bg-[#1A5C7F33] text-center">
                    <SignUp/>
                </button>
            </div>
        </section>
    );
};

export default Onlineonsultation;