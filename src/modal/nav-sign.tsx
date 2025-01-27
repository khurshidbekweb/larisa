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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToasModal from './toas-modal';

const NavSign= () => {
    const { t} = useTranslation()
    const [open, setOpen] = useState(false)
    const [toasInfo, setToasInfo] = useState(false)
    const addOrder = useMutation({
        mutationFn: orderPost.postOrder,
        onSuccess: () => {
            setOpen(false)
            const formElement = document.querySelector('form');
            if (formElement) {
                formElement.reset();
            }
            setTimeout(()=>setToasInfo(true), 500)       
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
    return (<>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='hidden xl:block'>
            <p className='text-[#C9A690] p-2 xl:w-[190px] text-center font-bold outline-none border border-[#C9A690] rounded-full xl:text-[16px]'>{t('sign')}</p>
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
        <ToasModal openModal={toasInfo} setToasInfo={setToasInfo}/>
        </>
    );
};

export default NavSign;