import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

interface modalClose{
    openModal: boolean,
    setToasInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToasModal = ({openModal, setToasInfo}:modalClose) => {
    const {t} = useTranslation()
    return (
        <Dialog open={openModal}>
            <DialogTrigger></DialogTrigger>
            <DialogContent className="!max-w-[456px]">
                <DialogHeader>
                    <DialogTitle>
                        <span className="bg-[#3679A4] text-white p-4 rounded-full mx-auto w-[70px] h-[70px] flex justify-center items-center"><Check size={30}/></span>
                    </DialogTitle>
                    <DialogDescription className="text-center flex flex-col space-y-3">
                        <h4 className="text-[20px] md:text-[24px] xl:text-[30px] font-bold text-black">{t('toast_modal_t')}</h4>
                        <p className="text-[16px] md:text-[17px] xl:text-[17px] leading-6 font-normal">{t('toast_modal_d')}</p>
                    </DialogDescription>
                    <button onClick={() =>setToasInfo(false)} className="w-full rounded-full text-white !mt-5 bg-[#3679A4] py-2 text-[16px] md:text-[17px] xl:text-[18px] font-semibold">
                        Ok
                    </button>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default ToasModal;