import { useTranslation } from 'react-i18next';
import logo from '../assets/image/logo.png'
import React from 'react';
import Menu from './menu';
import NavSign from '@/modal/nav-sign';

const Navbar = () => {
    const {t, i18n} = useTranslation()
    const hanleLanguage = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        i18n.changeLanguage(e.target.value)
        localStorage.setItem("language", e.target.value)
    }
    const language = localStorage.getItem('language') || 'uz'
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
    return (
        <div className="w-full bg-[#3679A4]">
            <div className="navbar-inner md:max-w-7xl mx-auto container flex justify-between items-center py-2 md:py-3 px-2 xl:px-0">
                <a href="/"><img className="logo text-white w-[125px] md:w-[187px]" src={logo} alt="logo-image" /></a>
                <nav className='items-center text-white gap-x-7 text-[16px] font-normal hidden xl:flex'>
                    <a onClick={()=>handleScroll('home')} className='xl:text-[18px]' href="#">{t('nav_one')}</a>
                    <a onClick={() => handleScroll('services')} className='xl:text-[18px]' href="#">{t('nav_two')}</a>
                    <a onClick={() => handleScroll('review')} className='xl:text-[18px]' href="#">{t('nav_three')}</a>
                    <a onClick={() => handleScroll('contact')} className='xl:text-[18px]' href="#">{t('nav_four')}</a>
                </nav>
                <div className="flex items-center gap-x-4">
                    <select value={language} onChange={hanleLanguage} className='bg-inherit text-[18px] text-white outline-none'>
                        <option className='bg-[#3679A4] text-[18px]' value="uz">Uz</option>
                        <option className='bg-[#3679A4] text-[18px]' value="ru">Ru</option>
                    </select>
                    <Menu/>
                    <NavSign/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;