import { useTranslation } from "react-i18next";
// import twoRow from '@/assets/image/two row.png'
// import my1 from '@/assets/icons/my1.svg';
import desktop from '@/assets/image/my-doc.png'
import table from '@/assets/image/my_table.png'
import mobile from '@/assets/image/my_mobile.png'

const MyInfo = () => {
    const {t} = useTranslation()
  return (
    <div className="max-w-7xl mx-auto container mt-10 md:mt-14 xl:mt-20">
        <div className="my-info-inner px-2">
            <h4 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('my_info_t')}</h4>
            <h2 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-3 md:mt-5 px-4">{t('my_info_d')}</h2>
           <div className="body mt-5 md:mt-8 xl:mt-12">
            <img className="hidden xl:block w-full text-center" src={desktop} alt="" />
                <img className="hidden md:block xl:hidden min-w-[490px] mx-auto" src={table} alt="" />
                <img className="block md:hidden mx-auto min-w-[320px]" src={mobile} alt="" />
           </div>
            {/* <ul className="relative mt-10 w-[70%] mx-auto flex flex-col xl:flex-row space-y-20">
                <li className="flex gap-x-4 items-center">
                    <p className="text-[14px] md:text-[18px]">{t('my_info_1')}</p>
                    <img className="w-[50px]" src={twoRow} alt="" />
                    <span className="bg-[#3679A4] w-[84px]  rounded-full block">
                        <img className="p-3" src={my1} alt="" />
                    </span>
                </li>
                <li className="flex gap-x-5 items-center">
                    <span className="bg-[#3679A4] w-[84px]  rounded-full block">
                        <img className="p-2" src={my1} alt="" />
                    </span>
                    <img src={twoRow} alt="" />
                    <p className="text-[14px] md:text-[18px]">{t('my_info_2')}</p>
                </li>
                <li className="flex gap-x-5 items-center">
                    <p className="text-[14px] md:text-[18px]">{t('my_info_3')}</p>
                    <img src={twoRow} alt="" />
                    <span className="bg-[#3679A4] w-[84px]  rounded-full block">
                        <img className="p-3" src={my1} alt="" />
                    </span>
                </li>
                <li className="">
                    <img src={twoRow} alt="" />
                    <span className="bg-[#3679A4] w-[84px]  rounded-full block">
                        <img className="p-3" src={my1} alt="" />
                    </span>
                    <p className="text-[14px] md:text-[18px]">{t('my_info_4')}</p>
                </li>
                <li className="">
                    <p className="text-[14px] md:text-[18px]">{t('my_info_5')}</p>
                    <img src={twoRow} alt="" />
                    <span className="bg-[#3679A4] w-[84px]  rounded-full block">
                        <img className="p-3" src={my1} alt="" />
                    </span>
                </li>
            </ul> */}
        </div>
    </div>
  );
};

export default MyInfo;