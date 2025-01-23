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
                            <a className="text-[20px] md:text-[32px] font-semibold mt-10 text-black" href="#">{t('nav_one')}</a>
                        </SheetClose>
                        <SheetClose>
                            <a className="text-[20px] md:text-[32px] font-semibold text-black" href="#">{t('nav_two')}</a>
                        </SheetClose>
                        <SheetClose>
                            <a className="text-[20px] md:text-[32px] font-semibold text-black" href="#">{t('nav_three')}</a>
                        </SheetClose>
                        <SheetClose>
                            <a className="text-[20px] md:text-[32px] font-semibold text-black" href="#">{t('nav_four')}</a>
                        </SheetClose>
                        <MenuSign/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
};

export default Menu;