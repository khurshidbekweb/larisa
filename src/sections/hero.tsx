import Larisa from '@/assets/image/larisa.png'

const Hero = () => {
    console.log(localStorage.getItem('language')?'a':'b');
    
    return (
        <div className="bg-[#89BFDB1A] hero_section">
            <div className="max-w-7xl mx-auto relative text-center container px-4 h-[470px] md:h-[577px] xl:h-[620px] overflow-hidden">
                <div className="flex items-center relative gap-x-10 pt-7 md:mt-12">
                    <h5 className="text-[14px] md:text-[16px] text-[#C9A690] font-montserrat font-bold uppercase">Доктор</h5>
                    <h2 className="text-[32px] md:text-[48px] font-montserrat text-start leading-9 font-semibold">
                        Ким Лариса Юрьевна
                    </h2>
                    <span className="absolute text-[60px] text-[#14274E1A] leading-[55px] md:leading-[65px] md:text-[80px] xl:text-[130px] md:p-4 xl:p-0 text-center font-montserrat font-medium">Лариса Юрьевна</span>
                </div>

                <div className="flex justify-between items-start md:items-end mt-5 md:mt-44">
                    <div className="max-w-[204px] flex flex-col justify-start  md:max-w-[361px] xl:max-w-[520px] xl:ml-28 z-10">
                        <p className="text-[15px] md:text-[24px] font-montserrat font-medium mt-4 leading-4 md:leading-7 xl:leading-10 md:font-semibold text-start">
                            Гармония науки и интеграции: современный подход к вашему здоровью
                        </p>

                        <button className="mt-4 w-[170px] md:w-[194px] rounded-[28px] bg-[#3679A4] text-white px-4 py-3 text-[14px] font-bold">
                            Записаться
                        </button>
                    </div>

                    <div className="mt-10 md:mt-0 bg-[#89BFD9] blur-[800]">
                        <img src={Larisa} alt="Doctor" className="!w-[229px] !h-[300px] md:!w-[382px] md:!h-[500px] xl:!w-[421px] xl:!h-[551px] absolute -right-2 md:right-5 bottom-0 md:-bottom-20 xl:bottom-0 xl:right-44 z-10"  />
                        <span className='absolute block w-[350px] h-[350px] md:w-[800px] md:h-[800px] -right-20 md:-right-36 xl:right-12 -bottom-40 md:-bottom-[400px] xl:-bottom-72 border-4 md:border-8 z-0 rounded-full border-white '></span>
                        <span className='absolute block w-[300px] h-[300px] md:w-[650px] md:h-[650px] -right-20  md:-right-16 xl:right-28 -bottom-40 md:-bottom-[340px] xl:-bottom-52 border-4 md:border-8  rounded-full border-white '></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;