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
import arrow from '@/assets/image/arrow.png'
import shadow from '@/assets/image/Vector.png'
import { useState } from "react";
interface modalINfo{
    description:string,
    image:string,
    title:string
}

interface propsService{
    image:string,
    desc:string,
    title:string,
    modalInfo: modalINfo[],
    summa:string,
    mainImage:string
}

const MyService = ({desc, image, title, modalInfo, summa, mainImage}:propsService) => {
    const {t} = useTranslation()
    const [show, setShow] = useState(2)
    const [showDesk, setShowDesk] = useState(4)
    return (
        <Dialog>
            <DialogTrigger className="outline-none  w-full h-full">
                    <div className="w-[300px] h-[365px] xl:w-[379px] xl:h-[420px] relative rounded-[40px] overflow-hidden ">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-[300px] md:h-[354px] xl:h-[399px] object-cover"
                    />
                    <div className="absolute flex flex-col justify-end top-[175px] md:top-[165px] xl:top-[218px] w-full px-7 py-4 text-start h-[104px] bg-gradient-to-t from-[#FAE1DF] via-[#FAE1DF]/50 to-transparent">
                        <h3 className="bg-card-service text-lg text-[20px] md:text-[30px] font-semibold ">{title}</h3>
                    </div>
                    <div className="absolute  service-bg bottom-0 w-full bg-[#FAE1DF] flex flex-col items-start space-y-2 pb-3 px-7 bg-gradient-to-t from-[#FAE1DF] via-[#FAE1DF]/50 to-transparent">                            
                        <h2 className="text-lg text-[14px] md:text-[16px] xl:text-[18px] line-clamp-2 text-start text-[#A6A6A6]">{desc}</h2>
                        <p className="text-[#C9A690] text-[14px] md:text-[16px] xl:text-[18px] flex items-center gap-3">{t('open_service')} <MoveRight /></p>
                    </div>
                </div>
            </DialogTrigger>
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
                            <img className="w-[90%] mx-auto h-[180px] md:h-[300px] md:w-[430px]" src={mainImage} alt="modal info image" />
                            <div className="">
                                <ul className="mt-7 hidden md:flex flex-col space-y-2 md:flex-row md:flex-wrap md:gap-3">
                                    {modalInfo.slice(0,showDesk).map((el, i) => (
                                        <li key={i+1} className="flex items-start gap-x-4 md:w-[304px]">
                                            <img className="w-14 h-14" src={el.image} alt="modal icon info" />
                                            <div className="text-start text-black">
                                                <h3 className=" text-[14px] xl:text-[18px] font-semibold">{el.title}</h3>
                                                <p className="mt-1 text-[11px] md:text-[13px] xl:text-[16px] font-medium leading-4">{el.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                <li className="flex flex-col items-start">
                                    <li onClick={() => setShowDesk(modalInfo.length)} className={`${modalInfo.length==showDesk?'hidden':'block'} text-[#C9A690] cursor-pointer text-[14px] md:text-[16px] xl:text-[18px] flex items-center gap-3`}>{t('service_more_info')}  <MoveRight /></li>
                                    <li className="mt-1 text-[12px] md:text-[14px] xl:text-[16px] font-semibold leading-4 flex gap-x-2">{t('modal_sum')} <p className="font-medium">{summa} {t('sum')}</p></li>
                                </li>
                                </ul>
                                <ul className="mt-7 md:hidden flex flex-col space-y-2 md:flex-row md:flex-wrap md:gap-3">
                                    {modalInfo.slice(0, show).map((el, i) => (
                                        <li key={i+1} className="flex items-start gap-x-4 md:w-[304px]">
                                            <img className="w-14 h-14" src={el.image} alt="modal icon info" />
                                            <div className="text-start text-black">
                                                <h3 className=" text-[14px] xl:text-[18px] font-semibold">{el.title}</h3>
                                                <p className="mt-1 text-[11px] md:text-[13px] xl:text-[16px] font-medium leading-4">{el.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                <li  onClick={() => setShow(modalInfo.length)} className={`${modalInfo.length ===show?"hidden":"block"} text-[#C9A690] text-[14px] md:text-[16px] xl:text-[18px] flex items-center gap-3`}>{t('service_more_info')}  <MoveRight /></li>
                                <li className="mt-1 text-[12px] md:text-[14px] xl:text-[16px] font-semibold leading-4 flex gap-x-2">{t('modal_sum')} <p className="font-medium">{summa} {t('sum')}</p></li>
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