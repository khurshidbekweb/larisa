import { MenuIcon } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "./ui/sheet";
import logo from '@/assets/image/logo.png'
import { useTranslation } from "react-i18next";
import MenuSign from "@/modal/menu-sign";

const Menu = () => {
    const {t} = useTranslation()
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
        <Sheet>
            <SheetTrigger className="text-white xl:hidden"><MenuIcon/></SheetTrigger>
            <SheetContent side={'right'}>
                <SheetHeader>
                    <SheetTitle className="bg-[#3679A4] py-2">
                        <img className="w-[125px] ml-4" src={logo} alt="" />
                    </SheetTitle>
                    <SheetDescription className="w-full flex flex-col space-y-5 items-center justify-center">
                        <SheetClose>
                            <button onClick={()=>handleScroll('home')} className="text-[20px] md:text-[32px] font-semibold mt-10 text-black">{t('nav_one')}</button>
                        </SheetClose>                        
                            <p onClick={() => handleScroll('services')}  className="text-[20px] md:text-[32px] font-semibold text-black">
                                <SheetClose>
                                    {t('nav_two')}
                                </SheetClose>
                            </p>
                        <SheetClose>
                            <button onClick={(e) => {
            e.preventDefault(); // Default harakatni bloklash
            handleScroll('review'); // Scrollingni amalga oshirish
        }}  className="text-[20px] md:text-[32px] font-semibold text-black">{t('nav_three')}</button>
                        </SheetClose>
                        <SheetClose>
                            <button onClick={() => handleScroll('contact')} className="text-[20px] md:text-[32px] font-semibold text-black">{t('nav_four')}</button>
                        </SheetClose>
                        <MenuSign/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
};

export default Menu;