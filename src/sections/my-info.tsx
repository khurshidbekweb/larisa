import { useTranslation } from "react-i18next";
import desktop from '@/assets/image/my-doc.png'
import table from '@/assets/image/my_table.png'
import mobile from '@/assets/image/my_mobile.png'
import uzDesktop from '@/assets/image/my_desktop_uz.png'
import uzTable from '@/assets/image/my_table_uz.png'
import uzMobile from '@/assets/image/my_mobile_uz.png'
// import my1 from '@/assets/image/my_1.png'
// import twoRow from '@/assets/image/two row.png'
// import leftCrook from '@/assets/image/left_crook.png'
// import rightCrook from '@/assets/image/right_crook.png'

const MyInfo = () => {
    const {t, i18n} = useTranslation()
  return (
    <div className="max-w-7xl mx-auto container mt-10 md:mt-14 xl:mt-20">
        <div className="my-info-inner px-2">
            <h4 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('my_info_t')}</h4>
            <h2 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-3 md:mt-5 px-4">{t('my_info_d')}</h2>
           <div className="body mt-5 md:mt-8 xl:mt-12">
                {i18n.language =='ru' ? <>
                        <img className="hidden xl:block w-full text-center" src={desktop} alt="" />
                    <img className="hidden md:block xl:hidden min-w-[490px] mx-auto" src={table} alt="" />
                    <img className="block md:hidden mx-auto min-w-[320px]" src={mobile} alt="" />
                </>:
                    <>
                        <img className="hidden xl:block w-full text-center" src={uzDesktop} alt="" />
                        <img className="hidden md:block xl:hidden min-w-[490px] mx-auto" src={uzTable} alt="" />
                        <img className="block md:hidden mx-auto min-w-[320px]" src={uzMobile} alt="" />
                    </>
                }
           </div>
            {/* <ul className="mt-10 w-[328px] mx-auto">
                <li className="flex gap-x-4 items-center">
                    <p className="text-[14px] md:text-[18px] font-bold">{t('my_info_1')}</p>
                    <div className="relative w-[200px] flex items-center gap-3">
                        <img className="w-[50px]" src={twoRow} alt="" />
                        <img className="w-[84px]" src={my1} alt="" />
                        <img className="absolute -z-10 top-0 right-[52px]" src={rightCrook} alt="crookle shadow" />
                    </div>
                </li>
            </ul> */}
        </div>
    </div>
  );
};

export default MyInfo;