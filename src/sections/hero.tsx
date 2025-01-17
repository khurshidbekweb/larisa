import Larisa from '@/assets/image/larisa.png'

const Hero = () => {
    console.log(localStorage.getItem('language')?'a':'b');
    
    return (
        <div className="bg-[#89BFDB1A]">
            <div className="max-w-7xl relative text-center container px-4 h-[470px] overflow-hidden">
                <div className="flex items-center relative gap-x-10 pt-10">
                    <h5 className="text-[14px] md:text-[16px] text-[#C9A690] font-montserrat font-bold uppercase">Доктор</h5>
                    <h2 className="text-[32px] md:text-[48px] font-montserrat text-start leading-9 font-semibold">
                        Ким Лариса Юрьевна
                    </h2>
                    <span className="absolute text-[60px] text-[#14274E1A] leading-[55px] font-montserrat font-medium">Лариса Юрьевна</span>
                </div>

                <div className="flex justify-between items-start mt-5">
                    <div className="max-w-[204px] flex flex-col justify-start md:w-[361px] xl:w-[560px]">
                        <p className="text-[15px] font-montserrat font-medium mt-4 leading-4  text-start">
                            Гармония науки и интеграции: современный подход к вашему здоровью
                        </p>

                        <button className="mt-4 w-[170px] md:w-[194px] rounded-[28px] bg-[#3679A4] text-white px-4 py-3 text-[14px] font-bold">
                            Записаться
                        </button>
                    </div>

                    <div className="doctor mt-10 bg-[#89BFD9] blur-[800]">
                        <img src={Larisa} alt="Doctor" className="!w-[229px] !h-[300px] absolute -right-2 bottom-0 z-10"  />
                        <span className='absolute block w-[350px] h-[350px] -right-20 -bottom-40 border-4 rounded-full border-white '></span>
                        <span className='absolute block w-[300px] h-[300px] -right-20 -bottom-40 border-4 rounded-full border-white '></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;