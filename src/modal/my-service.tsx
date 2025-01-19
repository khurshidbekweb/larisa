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
            <DialogContent className="bg-[#FBE7E5]">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        <p className="text-[#C9A690] text-[14px] md:text-[16px] xl:text-[18px] font-bold">{t('my_service_t')}</p>
                        <p className="text-[24px] md:text-[32px] xl:text-[40px] font-semibold">{t('my-service_de')}</p>
                    </DialogTitle>
                    <DialogDescription>
                        <div className="mt-5">
                            <img className="w-[70%] mx-auto h-[150px] md:w-[430px]" src={Image} alt="modal info image" />
                            <ul className="mt-7 flex flex-col space-y-2">
                                {mySerivceInfo.map((el, i) => (
                                    <li key={i+1} className="flex items-center gap-x-4">
                                        <img className="w-14 h-14" src={el.image} alt="modal icon info" />
                                        <div className="text-start text-black">
                                            <h3 className=" text-[16px] xl:text-[20px] font-bold">{el.title}</h3>
                                            <p className="mt-1 text-[12px] md:text-[14px] xl:text-[16px] font-medium leading-4">{el.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative mt-2">
                            <p className="text-start">{t('modal_u')}</p>
                            <img className="ml-10" src={arrow} alt="arrow" />
                            <button className="absolute text-[#C9A690] p-2 px-7 bottom-10 font-bold outline-none border border-[#C9A690] rounded-full">{t('sign')}</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default MyService;