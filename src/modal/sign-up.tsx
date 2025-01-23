import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { orderPost } from '@/utils/post';
import { useMutation } from '@tanstack/react-query';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const SignUp = () => {
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const addOrder = useMutation({
        mutationFn: orderPost.postOrder,
        onSuccess: () => {
            toast.success("Success")
            setOpen(false)
            const formElement = document.querySelector('form');
            if (formElement) {
                formElement.reset();
            }
        },
        onError: (err)=> {
                console.log(err);                
        }
    })
    const hnadleOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;    
        addOrder.mutate({
            firstName: form.firsname.value,
            lastName: form.lastname.value,
            phone: form.phone.value,
            service: form.service.value,
        },
    );
        console.log(addOrder.variables);
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className=''>
                <p className="text-white text-[20px] md:text-[24px] xl:text-[20px] font-bold">{t('sign')}</p>
                <MoveRight size={35} className={`text-white md:ml-24 xl:ml-12 ${i18n.language=='uz'?'hidden md:block':''}`} />
            </DialogTrigger>
            <DialogContent className='xl:max-w-[680px] sm:max-w-[687px]'>
                <DialogHeader>
                    <DialogTitle className='text-[28px] md:text-[40px] xl:text-[50px] text-center'>{t('sign')}</DialogTitle>
                    <DialogDescription>
                        <form onSubmit={hnadleOrder}>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('ism_input')}</span>
                                <input required name='firsname' className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('familya_input')}</span>
                                <input required name='lastname' className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('number_input')}</span>
                                <input required name='phone' className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <label className="">
                                <span className='text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2'>{t('hizmat_input')}</span>
                                <input required name='service' className='p-3 w-full border rounded-md bg-[#F8FAFC]' type="text" />
                            </label>
                            <button type='submit' className='bg-[#3679A4] w-full text-[14px] md:text-[16px] xl:text-[18px] mt-3 text-white py-2 rounded-lg font-bold'>{t('sign')}</button>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default SignUp;