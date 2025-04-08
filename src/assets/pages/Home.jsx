import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
    const [currentDate, setCurrentDate] = useState('');
    const [scripture, setScripture] = useState('');

    const dailyScriptures = [
        { date: "04/06", scripture: "羅馬書 8章1節" },
        { date: "04/07", scripture: "羅馬書 8章2節" },
        { date: "04/08", scripture: "羅馬書 8章3~4節" },
        { date: "04/09", scripture: "羅馬書 8章5~6節" },
        { date: "04/10", scripture: "羅馬書 8章7~9節" },
        { date: "04/11", scripture: "羅馬書 8章10~11節" },
        { date: "04/12", scripture: "羅馬書 8章12~13節" },
        { date: "04/13", scripture: "約翰福音12章12~19節" },
    ];

    useEffect(() => {
        const today = new Date();

        const month = today.getMonth() + 1;
        const day = today.getDate();
        const weekDay = today.getDay();
        const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
        const week = weekDays[weekDay];

        const formattedDate = `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
        setCurrentDate(`${formattedDate}(${week})`);

        const todayScripture = dailyScriptures.find(item => item.date === formattedDate);
        setScripture(todayScripture ? todayScripture.scripture : "今日經文尚未設定")
    }, [])
    return (<>
        <main className="frontpage">
            <div className="container mx-auto py-15">
                <div className="flex mx-auto justify-center">
                    <h2 className="text-3xl text-primary-500 pr-6">WORSHIP</h2>
                    <h2 className="border-l-4 border-primary-500 text-4xl text-primary-500 pl-6">崇拜時間</h2>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={3.8}
                spaceBetween={16}
                height={600}
                initialSlide={0}
            >
                <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                    <img src="images/da-jin.jpg" alt="" className="rounded-t-2xl h-[200px] w-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary-500">4/6舊寮崇拜</h3>
                        <div>
                            <p>時間：(日)9:30-11:00</p>
                            <p>地點：舊寮教會</p>
                            <p>講員：阮佳生傳道</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                    <img src="images/church-2.jpg" alt="" className="rounded-t-2xl h-[200px] w-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary-500">4/13主日崇拜</h3>
                        <div>
                            <p>時間：(日)9:30-11:00</p>
                            <p>地點：三樓大堂</p>
                            <p>講員：李偉帆弟兄</p>
                            <p>領會：陳怡如姊妹</p>
                            <p>司琴：李恩柔姊妹</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                    <img src="https://images.unsplash.com/photo-1485808269728-77bb07c059a8?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-t-2xl h-[200px] w-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary-500">4/13台語崇拜</h3>
                        <div>
                            <p>時間：(日)9:30-11:00</p>
                            <p>地點：台語堂</p>
                            <p>講員：蘇慈玲姊妹</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                    <img src="https://plus.unsplash.com/premium_photo-1661377118520-287ec60a32f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-t-2xl h-[200px] w-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary-500">4/5學青崇拜</h3>
                        <div>
                            <p>時間：(六)16:00-17:30</p>
                            <p>地點：六樓學青教室</p>
                            <p>講員：洪珩潔姊妹</p>
                            <p>領會：徐永欣姊妹</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                    <img src="images/da-jin.jpg" alt="" className="rounded-t-2xl h-[200px] w-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary-500">兒童主日學</h3>
                        <div>
                            <p>時間：(日)9:30-12:00</p>
                            <p>地點：一樓副堂</p>
                            <p>幼稚班同工：劉忠萱、陳道欣、洪珩潔、鄭嵩穎</p>
                            <p>國小班同工：張雅晴、李偉帆、黃茄玉、陳寶惠、林依茹、江丕華、陳道維</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
        <div className="container mx-auto py-15">
            <h2 className="text-4xl text-primary-500 font-bold mb-6">本日靈修經文</h2>
            <p className="text-2xl text-primary-400 mb-4">{currentDate} - {scripture}</p>
        </div>
        <div className="bg-primary 500">
            <div className="container mx-auto py-15">
                <div className="grid grid-cols-4 gap-4">
                    <Link className="bg-white text-center align-middle py-20 rounded-2xl shadow-lg">
                        <FontAwesomeIcon icon={faNewspaper} className="text-primary-500 mb-4" size="6x" />
                        <p className="text-2xl text-primary-400 mb-4">本週週報</p>
                    </Link>
                    <Link className="bg-white text-center align-middle py-20 rounded-2xl shadow-lg">
                        <span className="material-symbols-outlined text-6xl text-primary-500">description</span>
                        <p className="text-2xl text-primary-400 mb-4">本週禱告信</p>
                    </Link>
                    <Link className="bg-white text-center align-middle py-20 rounded-2xl shadow-lg">
                        <span className="material-symbols-outlined text-6xl text-primary-500">description</span>
                        <p className="text-2xl text-primary-400 mb-4">本季服事</p>
                    </Link>
                    <Link className="bg-white text-center align-middle py-20 rounded-2xl shadow-lg">
                        <span className="material-symbols-outlined text-6xl text-primary-500">description</span>
                        <p className="text-2xl text-primary-400 mb-4">線上奉獻表單</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home