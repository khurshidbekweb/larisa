import Larisa from '@/assets/image/hero_img.png'
import { useTranslation } from 'react-i18next';

const Hero = () => { 
    const {t} = useTranslation()   
    return (
        <section className="bg-[#89BFDB1A] hero_section overflow-hidden">
            <div className="max-w-7xl mx-auto relative text-center container px-4 h-[470px] md:h-[577px] xl:h-[620px] overflow-hidden">
                <div className="flex items-center relative gap-x-10 pt-7 md:mt-12">
                    <h5 className="text-[14px] md:text-[16px] text-[#C9A690] xl:mt-10 font-montserrat font-bold uppercase">{t('hero_doc')}</h5>
                    <h2 className="text-[32px] md:text-[48px] xl:text-[48px] font-montserrat xl:mt-10 z-10 text-start leading-9 font-semibold">
                        {t('hero_doc_larina')}
                    </h2>
                    <span className="absolute text-[50px] text-[#14274E1A] leading-[55px] md:leading-[65px] md:text-[65px] xl:text-[108px] md:p-4 xl:p-0 xl:leading-[250px] font-montserrat font-medium text-justify max-full xl:whitespace-pre-wrap">{t('hero_doc_fullname')}</span>
                </div>

                <div className="flex justify-between items-start md:items-end mt-14 md:mt-28 xl:mt-24">
                    <div className="max-w-[204px] flex flex-col justify-start  md:max-w-[361px] xl:max-w-[570px] xl:ml-28 z-10">
                        <p className="text-[15px] md:text-[24px] xl:text-[32px] font-montserrat font-medium mt-4 leading-4 md:leading-7 xl:leading-10 md:font-semibold text-start">
                            {t('hero_doc_d')}
                        </p>

                        <button className="mt-4 xl:mt-8 w-[170px] md:w-[194px] xl:w-[270px] rounded-[28px] bg-[#3679A4] text-white px-2 md:px-5 py-2 text-[14px] md:text-[16px] xl:text-[24px] font-bold">
                            {t('sign')}
                        </button>
                    </div>

                    <div className="mt-10 md:mt-0 bg-[#89BFD9] blur-[800]">
                        <img src={Larisa} alt="Doctor" className="!w-[229px] object-cover !h-[300px] md:!w-[382px] md:!h-[570px] xl:!w-[421px] xl:!h-[551px] absolute -right-2 md:right-5 bottom-0 md:-bottom-20 xl:bottom-0 xl:right-44 z-10"  />
                        <span className='absolute block w-[350px] h-[350px] md:w-[800px] md:h-[800px] -right-20 md:-right-36 xl:right-12 -bottom-40 md:-bottom-[400px] xl:-bottom-72 border-4 md:border-8 z-0 rounded-full border-white '></span>
                        <span className='absolute block w-[300px] h-[300px] md:w-[650px] md:h-[650px] -right-20  md:-right-16 xl:right-28 -bottom-40 md:-bottom-[340px] xl:-bottom-52 border-4 md:border-8  rounded-full border-white '></span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;