import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const menu = [
        { title: "簡介", subMenu: ["教會歷史", "教會標誌", "六十週年回顧", "教會組織", "教會路線"] },
        { title: "活動", subMenu: ["近期活動", "歡樂周末營", "姐妹會"] },
        { title: "講章" },
        { title: "造就", subMenu: ["慕道", "信徒", "初信/基礎", "進深學習", "其他課程"] },
        { title: "團契", subMenu: ["A牧區", "B牧區", "C牧區", "社青牧區", "學青牧區", "長青", "大津/舊寮"] },
        { title: "見證" },
        { title: "教會服務", subMenu: ["奉獻專區", "文件下載",] },
    ]

    const openMenu = () => {
        setIsOpen(prevState => !prevState);
    }


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
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ease-in-out  ${isScrolled ? 'bg-primary-400' : 'bg-transparent'}`}>
            <div className="flex w-full items-center">
                <Link to="/" className="mr-4">
                    <img src="images/title.png" alt="logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isOpen} onClick={openMenu}>
                    <span className="material-symbols-outlined text-primary-100">menu</span>
                </button>
                <div className="relative w-3/4">
                    <div className={`${isOpen ? "block" : "hidden"} w-1/2 absolute top-0 left-0 md:static md:block md:w-auto z-50`}>
                        <ul className="md:flex justify-center">
                            {menu.map((item, index) => (
                                <li key={index} className="flex-1 md:w-auto" onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}>
                                    <NavLink to={item.title}>
                                        <button
                                            type="button"
                                            className={`w-full text-lg md:text-xl text-primary-100 font-bold hover:text-primary-500 py-7 relative ${isScrolled && "bg-gradient-to-b from-transparent to-primary-300"}`}
                                        >{item.title}
                                            <div className="">
                                                {item.subMenu && activeIndex === index && (
                                                    <ul className="absolute left-0 top-full w-full bg-white shadow-lg z-50">
                                                        {item.subMenu.map((subItem, subIndex) => (
                                                            <NavLink key={subIndex} to={subItem}>
                                                                <li>
                                                                    <div
                                                                        className="w-full text-sm md:text-lg bg-primary-300 text-primary-100 font-bold hover:bg-primary-100 hover:text-primary-500 py-2 px-4 text-left"
                                                                    >{subItem}</div>
                                                                </li>
                                                            </NavLink>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </button>
                                    </NavLink>

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