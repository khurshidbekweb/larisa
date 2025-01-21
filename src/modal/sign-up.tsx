import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { MoveRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const { t } = useTranslation()
    return (
        <Dialog>
            <DialogTrigger className=''>
                <p className="text-white text-[20px] md:text-[24px] xl:text-[20px] font-bold">{t('sign')}</p>
                <MoveRight className="text-white ml-10 md:ml-16 xl:ml-12" />
            </DialogTrigger>
            <DialogContent className='xl:max-w-[680px] sm:max-w-[687px]'>
                <DialogHeader>
                    <DialogTitle className='text-[28px] md:text-[40px] xl:text-[50px] text-center'>{t('sign')}</DialogTitle>
                    <DialogDescription>
                        <form>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('ism_input')}</span>
                                <input className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('familya_input')}</span>
                                <input className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('number_input')}</span>
                                <input className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('hizmat_input')}</span>
                                <input className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <button className='bg-[#3679A4] w-full text-[14px] md:text-[16px] xl:text-[18px] mt-3 text-white py-2 rounded-lg font-bold'>{t('sign')}</button>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default SignUp;