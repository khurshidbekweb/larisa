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
    const handleScroll = (id: string, close: () => void) => {
        close(); 
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 300);
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
                            <button onClick={()=>handleScroll('home', () => document.body.click())} className="text-[20px] md:text-[32px] font-semibold mt-4 text-black">{t('nav_one')}</button>
                        </SheetClose>                        
                        <SheetClose>
                                <button onClick={() => handleScroll('services', () => document.body.click())}  className="text-[20px] md:text-[32px] font-semibold text-black">
                                        {t('nav_two')}
                                </button>
                        </SheetClose>
                        <SheetClose asChild>
                            <button onClick={() => handleScroll('review', () => document.body.click()) }  className="text-[20px] md:text-[32px] font-semibold text-black">{t('nav_three')}</button>
                        </SheetClose>
                        <MenuSign/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
};

export default Menu;