import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const menu = [
        { title: "簡介", subMenu: ["教會歷史", "教會目標", "教會標誌", "六十週年回顧", "教會組織", "教會路線"] },
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
        <div>
            <div className="relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}>
                    <SwiperSlide className="relative">
                        <img src="images/church-6.jpg" alt="Slide 1" className="w-full h-screen object-cover" />
                        <div className="absolute top-[50%] left-[20%]">
                            <h1 className="text-6xl text-primary-100 mb-2 font-bold">歡迎來到七賢路禮拜堂</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="images/news-01.png" alt="Slide2" className="w-full h-screen object-cover" />
                        <div className="absolute top-[50%] left-[20%]">
                            <h2 className="text-6xl text-primary-100 mb-2 font-bold">我們要的是什麼?</h2>
                            <h2 className="text-4xl text-primary-100 mb-4 font-bold">社青牧區4月聯合聚會</h2>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                                <h4 className="text-primary-100 text-3xl font-bold">4/12週六晚上7:30</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                                <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://images.unsplash.com/photo-1431263154979-0982327fccbb?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                        <div className="absolute top-[50%] left-[20%]">
                            <h2 className="text-6xl text-primary-100 mb-2 font-bold">屬神的人打美好的仗</h2>
                            <h2 className="text-4xl text-primary-100 mb-4 font-bold">姐妹會</h2>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                                <h4 className="text-primary-100 text-3xl font-bold">4/18週五上午10:00</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                                <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">person</span>
                                <h4 className="text-primary-100 text-3xl font-bold">講員：杜鴻模長老</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://images.unsplash.com/photo-1616548321627-3c1d17305545?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                        <div className="absolute top-[50%] left-[20%]">
                            <h2 className="text-6xl text-primary-100 mb-2 font-bold text-shadow-lg">耶穌基督受難日禱告會</h2>
                            <h2 className="text-4xl text-primary-100 mb-4 font-bold">默想主耶穌背負十字架走苦路的經過</h2>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                                <h4 className="text-primary-100 text-3xl font-bold">4/18週五晚上7:30</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                                <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://images.unsplash.com/photo-1504122398460-c635d6377010?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                        <div className="absolute top-[50%] left-[20%]">
                            <h2 className="text-6xl text-primary-100 mb-2 font-bold">生命因愛而動聽</h2>
                            <h2 className="text-4xl text-primary-100 mb-4 font-bold">特兒家庭歡聚日</h2>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                                <h4 className="text-primary-100 text-3xl font-bold">4/19週六下午1:30</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                                <h4 className="text-primary-100 text-3xl font-bold">教會二樓</h4>
                            </div>
                            <div className="flex mb-2 items-center">
                                <span class="material-symbols-outlined text-primary-100 text-3xl mr-2">person</span>
                                <h4 className="text-primary-100 text-3xl font-bold">講員：劉承恩唐芯寧 伉儷</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
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