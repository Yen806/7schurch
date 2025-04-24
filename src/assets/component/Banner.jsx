import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'



function Banner() {
    return (<>
        <div className="relative hidden md:block">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}>
                <SwiperSlide className="relative">
                    <img src="images/church-6.jpg" alt="Slide 1" className="w-full h-screen object-cover" />
                    <div className="absolute top-[30%] left-[10%] w-full">
                        <h1 className="text-6xl text-primary-100 font-bold font-display mb-10">歡迎來到七賢路禮拜堂</h1>
                        <div>
                            <h1 className="text-4xl text-left font-bold  text-primary-100 mb-6 ml-10">意象----</h1>
                            <h3 className="text-2xl text-center font-bold  text-primary-100 mb-10">一群蒙恩的人，在教會裡時常經歷神的恩典與大能，榮耀主的名。</h3>
                            <h2 className="text-4xl text-left font-bold  text-primary-100 mb-6 ml-10">目標----</h2>
                            <h3 className="text-2xl text-center font-bold  text-primary-100 mb-10">建立以基督為標竿的教會，以敬拜、團契、成長、事奉、宣教為教會的五大目標。</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="images/news-01.png" alt="Slide2" className="w-full h-screen object-cover" />
                    <div className="absolute top-[50%] left-[10%]">
                        <h2 className="text-6xl text-primary-100 mb-2 font-bold">我們要的是什麼?</h2>
                        <h2 className="text-4xl text-primary-100 mb-4 font-bold">社青牧區4月聯合聚會</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-3xl font-bold">4/12週六晚上7:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1431263154979-0982327fccbb?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                    <div className="absolute top-[50%] left-[10%]">
                        <h2 className="text-6xl text-primary-100 mb-2 font-bold">屬神的人打美好的仗</h2>
                        <h2 className="text-4xl text-primary-100 mb-4 font-bold">姐妹會</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-3xl font-bold">4/18週五上午10:00</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">person</span>
                            <h4 className="text-primary-100 text-3xl font-bold">講員：杜鴻模長老</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1616548321627-3c1d17305545?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                    <div className="absolute top-[50%] left-[10%]">
                        <h2 className="text-6xl text-primary-100 mb-2 font-bold text-shadow-lg">耶穌基督受難日禱告會</h2>
                        <h2 className="text-4xl text-primary-100 mb-4 font-bold">默想主耶穌背負十字架走苦路的經過</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-3xl font-bold">4/18週五晚上7:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-3xl font-bold">教會一樓副堂</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1504122398460-c635d6377010?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-screen object-cover" />
                    <div className="absolute top-[50%] left-[10%]">
                        <h2 className="text-6xl text-primary-100 mb-2 font-bold">生命因愛而動聽</h2>
                        <h2 className="text-4xl text-primary-100 mb-4 font-bold">特兒家庭歡聚日</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-3xl font-bold">4/19週六下午1:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-3xl font-bold">教會二樓</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">person</span>
                            <h4 className="text-primary-100 text-3xl font-bold">講員：劉承恩唐芯寧 伉儷</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="relative md:hidden">
            <Swiper
                modules={[Pagination]}
                loop={true}
                pagination={{
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return `<span className="${currentClass}"></span> / <span className="${totalClass}"></span>`;
                    },
                }}
            >
                <SwiperSlide className="relative">
                    <img src="images/church-6.jpg" alt="Slide2" className="w-full h-screen object-cover" />
                    <div className="absolute top-[20%] left-[10%] pr-4">
                        <h1 className="text-4xl text-primary-100 font-bold font-display mb-6">歡迎來到七賢路禮拜堂</h1>
                        <div className="w-2/3 mx-auto">
                            <h1 className="text-xl text-left font-bold  text-primary-100 mb-3 ml-10">意象----</h1>
                            <h3 className="text-lg text-center font-bold  text-primary-100 mb-6">一群蒙恩的人，在教會裡時常經歷神的恩典與大能，榮耀主的名。</h3>
                            <h2 className="text-xl text-left font-bold  text-primary-100 mb-3 ml-10">目標----</h2>
                            <h3 className="text-lg text-center font-bold  text-primary-100 mb-6">建立以基督為標竿的教會，以敬拜、團契、成長、事奉、宣教為教會的五大目標。</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="images/news-01.png" alt="Slide2" className="w-full h-screen object-cover" />
                    <div className="absolute top-[30%] left-[10%] pr-4 z-100">
                        <h2 className="text-4xl text-primary-100 mb-2 font-bold">我們要的是什麼?</h2>
                        <h2 className="text-2xl text-primary-100 mb-4 font-bold">社青牧區4月聯合聚會</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-3xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-xl font-bold">4/12週六晚上7:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-xl font-bold">教會一樓副堂</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1431263154979-0982327fccbb?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" className="w-full h-screen object-cover" />
                    <div className="absolute top-[30%] left-[10%] pr-4">
                        <h2 className="text-4xl text-primary-100 mb-2 font-bold">屬神的人打美好的仗</h2>
                        <h2 className="text-2xl text-primary-100 mb-4 font-bold">姐妹會</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-xl font-bold">4/18週五上午10:00</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-xl font-bold">教會一樓副堂</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">person</span>
                            <h4 className="text-primary-100 text-xl font-bold">講員：杜鴻模長老</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1616548321627-3c1d17305545?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" className="w-full h-screen object-cover" />
                    <div className="absolute top-[30%] left-[10%] pr-4">
                        <h2 className="text-4xl text-primary-100 mb-2 font-bold text-shadow-lg">耶穌基督受難日禱告會</h2>
                        <h2 className="text-2xl text-primary-100 mb-4 font-bold">默想主耶穌背負十字架走苦路的經過</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-xl font-bold">4/18週五晚上7:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-xl font-bold">教會一樓副堂</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://images.unsplash.com/photo-1504122398460-c635d6377010?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" className="w-full h-screen object-cover" />
                    <div className="absolute top-[30%] left-[10%] pr-4">
                        <h2 className="text-4xl text-primary-100 mb-2 font-bold">生命因愛而動聽</h2>
                        <h2 className="text-2xl text-primary-100 mb-4 font-bold">特兒家庭歡聚日</h2>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">schedule</span>
                            <h4 className="text-primary-100 text-xl font-bold">4/19週六下午1:30</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">location_on</span>
                            <h4 className="text-primary-100 text-xl font-bold">教會二樓</h4>
                        </div>
                        <div className="flex mb-2 items-center">
                            <span className="material-symbols-outlined text-primary-100 text-xl mr-2">person</span>
                            <h4 className="text-primary-100 text-3xl font-bold">講員：劉承恩唐芯寧 伉儷</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
    )
}

export default Banner