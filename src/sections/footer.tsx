import logo from '@/assets/image/logo.png'
import telegram from '@/assets/image/telegran.png'
import phone from '@/assets/image/phone-footer.png'
import { useTranslation } from 'react-i18next'
import reultLogo from '@/assets/icons/logo-result.svg'
import { useMutation } from '@tanstack/react-query'
import { orderPost } from '@/utils/post'

const Footer = () => {
    const {t, i18n} = useTranslation()
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }
    const countCall = useMutation({
        mutationFn: orderPost.countControl,
        onSuccess: ()=>{
            console.log('success');            
        },
        onError: (err) => {
            console.log(err);            
        }
    })
    return (
        <footer className="bg-[#1A5C7F]"> 
            <div className="footer-inner max-w-7xl xl:py-20 md:py-10 py-5 p-4 mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-start">
                <div className="flex flex-col md:flex-row md:justify-between xl:flex-col xl:items-start xl:w-[30%]">
                    <img onClick={() => handleScroll('home')} className='w-[187px]' src={logo} alt="footer logo" />
                    <ul className="flex items-center gap-x-3 mt-5">
                        <li className="border p-2 rounded-full">
                            <a href="https://t.me/endokimlarisa" target='_blank'>
                                <img className='w-[30px] h-[30px]' src={telegram} alt="instagram "/>
                            </a>
                        </li>
                        <li onClick={() => countCall.mutate({name: 'PHONE_CALL'})} className="border p-2 rounded-full">
                            <a href="tel:+998909418549">
                                <img className='w-[30px] h-[30px]' src={phone} alt="instagram "/>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="text-white mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between xl:flex-1 xl:mt-0">
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('services')}</h2>
                        <span onClick={() => handleScroll('faq')} className='text-[14px] md:text-[16px] xl:text-[18px] mt-3 cursor-pointer'>{t('faq_t')}</span>
                        <span onClick={() => handleScroll('semptom')}  className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('footer_deagnostik')}</span>
                        <span onClick={() => handleScroll('services')}  className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('services')}</span>
                    </li>
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('nav_one')}</h2>
                        <a onClick={()=> handleScroll('home')} className='text-[14px] md:text-[16px] xl:text-[18px] mt-3' href="#">{t('nav_one')}</a>
                        <span onClick={() => handleScroll('contact')} className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('nav_four')}</span>
                        <span onClick={() => handleScroll('review')} className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('reviews_t')}</span>
                    </li>
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('nav_four')}</h2>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-3' href="tel:+998909418549">+(998) 90 941 85 49</a>
                        <span className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('footer_org')}</span>
                        <span className='text-[14px] md:text-[16px] xl:text-[18px] mt-2 cursor-pointer'>{t('constact_2_d')}</span>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white xl:py-[35px] p-4">
                <h4 className='text-[12px] md:text-[15px] xl:text-[16px] w-[150px] md:w-[80%]'>{t('footer_botton')}</h4>
                <a href={`https://result-me.uz/${i18n.language}`} className='w-[120px]'>
                    <img src={reultLogo} alt="logo result" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;