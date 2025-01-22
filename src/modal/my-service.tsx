import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from '@/assets/image/modal.png'
import Icon from '@/assets/image/modal-icon.png'
import arrow from '@/assets/image/arrow.png'
import shadow from '@/assets/image/Vector.png'

const MyService = () => {
    const {t} = useTranslation()
    const mySerivceInfo = [
        {
            image: Icon,
            title: t('modal_1_t'),
            description:t('modal_1_d')
        },
        {
            image: Icon,
            title: t('modal_2_t'),
            description:t('modal_2_d')
        },
        {
            image: Icon,
            title: t('modal_3_t'),
            description:t('modal_4_d')
        },
        {
            image: Icon,
            title: t('modal_4_t'),
            description:t('modal_4_d')
        }
    ]
    return (
        <Dialog>
            <DialogTrigger className="outline-none"><p className="text-[#C9A690] text-[14px] md:text-[16px] xl:text-[18px] flex items-center gap-3">Подробнее <MoveRight /></p></DialogTrigger>
            <DialogContent className="bg-[#FFFFFF] overflow-hidden">
                <span className="p-12 absolute bg-gradient-to-r from-[#e9dddc] to-[#FAD4D1] -top-4 rounded-full -right-8 block"></span>
                <span className="p-16 md:hidden absolute bg-gradient-to-r from-[#b0a7a13a] to-[#dbcabf7c] top-1/4 rounded-lg -z-10 -left-8 block"></span>
                <img className="absolute bottom-1 right-1" src={shadow} alt="" />
                <DialogHeader>
                    <DialogTitle className="text-center">
                        <p className="text-[#C9A690] text-[14px] md:text-[16px] xl:text-[18px] font-bold">{t('my_service_t')}</p>
                        <p className="text-[24px] md:text-[32px] xl:text-[40px] font-semibold">{t('my-service_de')}</p>
                    </DialogTitle>
                    <DialogDescription className="xl:max-w-[90%] mx-auto">
                        <div className="mt-5 xl:flex xl:flex-row-reverse">
                            <img className="w-[90%] mx-auto h-[180px] md:h-[300px] md:w-[430px]" src={Image} alt="modal info image" />
                            <div className="">
                                <ul className="mt-7 flex flex-col space-y-2 md:flex-row md:flex-wrap md:gap-3">
                                    {mySerivceInfo.map((el, i) => (
                                        <li key={i+1} className="flex items-start gap-x-4 md:w-[304px]">
                                            <img className="w-14 h-14" src={el.image} alt="modal icon info" />
                                            <div className="text-start text-black">
                                                <h3 className=" text-[16px] xl:text-[20px] font-semibold">{el.title}</h3>
                                                <p className="mt-1 text-[12px] md:text-[14px] xl:text-[18px] font-medium leading-4">{el.description}</p>
                                                <p className="mt-1 text-[12px] md:text-[14px] xl:text-[16px] font-semibold leading-4 flex gap-x-2">{t('modal_sum')} <p className="font-medium">400 000</p></p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="relative w-full mt-2 md:mt-8 md:p-3">
                                    <p className="text-start text-[13px] md:text-[18px] w-full xl:text-[20px] md:w-[88%]">{t('modal_u')}</p>
                                    <img className="ml-10 md:ml-80" src={arrow} alt="arrow" />
                                    <button className="absolute text-[#C9A690] p-2 px-7 bottom-10 md:bottom-14 md:right-14 xl:right-20 font-bold outline-none border border-[#C9A690] rounded-full">{t('sign')}</button>
                                </div>
                            </div>
                                
                        </div>                        
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default MyService;