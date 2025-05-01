import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const menu = [
        { title: "簡介", subMenu: ["認識我們", "教會歷史", "教會標誌", "教會組織", "60週年回顧"] },
        { title: "活動", subMenu: ["近期消息", "最新文章", "歡樂周末營", "姐妹會"] },
        { title: "講章" },
        { title: "造就", subMenu: ["成人主日學", "兒童主日學", "其他課程"] },
        { title: "團契", subMenu: ["A牧區", "B牧區", "C牧區", "社青牧區", "學青牧區", "長青", "大津/舊寮"] },
        { title: "教會服務", subMenu: ["奉獻專區", "文件下載",] },
    ]

    const handleManuClick = () => {
        setIsOpen(false);
    };

    const openMenu = () => {
        setIsOpen(prevState => !prevState);
    }
    const handleSubMenuClick = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (<>
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ease-in-out ${isScrolled ? 'bg-primary-400' : 'bg-transparent'}`}>
            <div className={`flex w-full items-center justify-between relative py-2 ${isScrolled && "bg-gradient-to-b from-transparent to-primary-300"}`}>
                <Link to="/" className='w-2/3 md:w-1/2 ml-3'>
                    <img src="images/Logo.png" alt="logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-4" aria-expanded={isOpen} onClick={openMenu}>
                    <span className="material-symbols-outlined text-primary-100">{isOpen ? "close" : "menu"}</span>
                </button>
                <div className="absolute top-0 right-0 mt-10 md:mt-0 w-1/2 md:w-3/4 md:static">
                    <div className={`${isOpen ? "block" : "hidden"} md:static md:block md:w-auto z-50`}>
                        <ul className="flex flex-col md:flex-row justify-center md:justify-between p-4 md:p-0 bg-primary-300 md:bg-transparent rounded-2xl md:rounded-none">
                            {menu.map((item, index) => (
                                <li key={index} className="md:w-1/6 relative" onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                                    onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}>
                                    <NavLink to={item.title}>
                                        <div
                                            className="w-full text-lg lg:text-xl text-primary-100 font-bold hover:text-white py-4 md:py-7 text-nowrap ml-5 md:ml-0 md:text-center"
                                            key={item.title}
                                            onClick={() => window.innerWidth < 768 ? handleSubMenuClick(index) : handleManuClick()}
                                        >{item.title}{item.subMenu && (
                                            <span className="material-symbols-outlined align-middle ml-2">arrow_drop_down</span>
                                        )}
                                        </div>
                                    </NavLink>
                                    {item.subMenu && activeIndex === index && (
                                        <ul className="absolute left-0 top-full w-full shadow-lg z-200 p-2 bg-primary-300 rounded-2xl">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li>
                                                    <NavLink key={subIndex} to={subItem} onClick={handleManuClick}>
                                                        <div
                                                            className="w-full text-sm md:text-lg bg-primary-300 text-primary-100 font-bold  hover:text-white py-2 px-4 text-left text-nowrap "
                                                        >{subItem}</div>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar