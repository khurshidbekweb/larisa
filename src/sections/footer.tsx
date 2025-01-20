import logo from '@/assets/image/logo.png'
import insta from '@/assets/image/instagram.png'
import telegram from '@/assets/image/telegran.png'
import whatsUp from "@/assets/image/whats'up.png"
import phone from '@/assets/image/phone-footer.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="bg-[#1A5C7F]"> 
            <div className="footer-inner max-w-7xl xl:py-20 md:py-10 py-5 mx-auto flex flex-col xl:flex-row xl:justify-between">
                <div className="flex flex-col md:flex-row md:justify-between xl:flex-col xl:items-start xl:w-[30%]">
                    <img src={logo} alt="footer logo" />
                    <ul className="flex items-center gap-x-3 mt-5">
                        <li className="border p-2 rounded-full">
                            <img className='w-[30px] h-[30px]' src={insta} alt="instagram "/>
                        </li>
                        <li className="border p-2 rounded-full">
                            <img className='w-[30px] h-[30px]' src={telegram} alt="instagram "/>
                        </li>
                        <li className="border p-2 rounded-full">
                            <img className='w-[30px] h-[30px]' src={whatsUp} alt="instagram "/>
                        </li>
                        <li className="border p-2 rounded-full">
                            <img className='w-[30px] h-[30px]' src={phone} alt="instagram "/>
                        </li>
                    </ul>
                </div>
                <ul className="text-white mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between xl:flex-1">
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('services')}</h2>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-3' href="#">{t('service_card1')}</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('footer_deagnostik')}</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('modal_4_t')}</a>
                    </li>
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('nav_one')}</h2>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-3' href="#">{t('nav_one')}</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('nav_four')}</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('reviews_t')}</a>
                    </li>
                    <li className='flex flex-col items-start'>
                        <h2 className='text-[20px] md:text-[20px] xl:text-[24px] font-bold'>{t('Контакты')}</h2>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-3' href="#">+(998) 93 248 10 50</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('footer_org')}</a>
                        <a className='text-[14px] md:text-[16px] xl:text-[18px] mt-2' href="#">{t('footer_adsres')}</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white xl:py-[35px] py-4">
                <h4 className='text-[12px] md:text-[15px] xl:text-[16px]'>2024 © Ким Лариса Юрьевна. Все права защищены</h4>
                <p className='text-[12px] md:text-[15px] xl:text-[16px]'>Result agency</p>
            </div>
        </footer>
    );
};

export default Footer;