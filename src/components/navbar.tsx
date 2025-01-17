import logo from '../assets/image/logo.png'

const Navbar = () => {
    return (
        <div className="w-full bg-[#3679A4]">
            <div className="navbar-inner md:max-w-7xl mx-auto container flex justify-between items-center py-3">
                <img className="logo text-white" src={logo} alt="" />
                <nav className='flex items-center text-white gap-x-5 text-[18px] font-normal'>
                    <a href="">Обо мне</a>
                    <a href="">Мои услуги</a>
                    <a href="">Oтзывы</a>
                    <a href="">Контакты</a>
                </nav>
                <div className="flex items-center gap-x-4">
                    <select name="" id="" className='bg-inherit text-white outline-none'>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                    </select>
                    <button className='text-[#C9A690] p-2 px-9 font-bold outline-none border border-[#C9A690] rounded-full'>Записаться</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;