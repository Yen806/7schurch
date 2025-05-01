import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import Banner from "../component/Banner";
import axios from "axios";
import VideoModal from "../component/VideoModal";
import SeemoreButton from "../component/SeemoreButton";

import 'swiper/css';
import 'swiper/css/navigation';

const API_URL = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = "AIzaSyDUWKehi9RMnKyvNdlVALztOoQOMS-289k";
const CHANNEL_ID = "UCgXS9R3SHJZClOJlR-0-ahw";
const CHURCH_CHANNEL_ID = "UCMVpHVsxxSChRJugilyIo-g"
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
    const [currentDate, setCurrentDate] = useState('');
    const [scripture, setScripture] = useState('');
    const [lastManaVideo, setLastManaVideo] = useState('')
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [liveVideoId, setLiveVideoId] = useState('')
    const [activities, setActivities] = useState([])
    const [articles, setArticles] = useState([])

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

    const getYoutubeLink = async () => {
        // 找playlists
        try {
            const res = await axios.get(`${API_URL}playlists`, {
                params: {
                    key: API_KEY,
                    channelId: CHANNEL_ID,
                    part: "snippet",
                    maxResults: 3
                }
            });

            const playlistId = res.data.items[0]?.id;
            if (!playlistId) {
                alert("找不到播放清單");
                return;
            }
            // 找影片
            const videoRes = await axios.get(`${API_URL}playlistItems`, {
                params: {
                    key: API_KEY,
                    playlistId: playlistId,
                    part: "snippet",
                    maxResults: 1
                }
            });

            const lasVideo = videoRes.data.items[0];
            const videoId = lasVideo.snippet.resourceId.videoId;
            setLastManaVideo(videoId)
        } catch (error) {
            alert(error?.response?.data?.error?.message || error.message)
        }
    }
    // 主日崇拜直播
    const getLatestLiveStream = async () => {
        try {
            const res = await axios.get(`${API_URL}search`, {
                params: {
                    key: API_KEY,
                    channelId: CHURCH_CHANNEL_ID,
                    part: "snippet",
                    maxResults: 1,
                    eventType: "live",
                    type: "video",
                    order: "date"
                }
            });
            const liveVideo = res.data.items[0]

            if (liveVideo) {
                setLiveVideoId(liveVideo.id.videoId);
                return
            }
            const completedRes = await axios.get(`${API_URL}search`, {
                params: {
                    key: API_KEY,
                    channelId: CHURCH_CHANNEL_ID,
                    part: "snippet",
                    maxResults: 1,
                    eventType: "completed",
                    type: "video",
                    order: "date",
                },
            });
            const completedVideo = completedRes.data.items[0];
            if (completedVideo) {
                setLiveVideoId(completedVideo.id.videoId);
                return
            }
        } catch (error) {
            alert(error?.response?.data?.error?.message || error.message);
        }
    };

    // useEffect(() => {
    //     getYoutubeLink()
    //     getLatestLiveStream()
    // }, [])

    const handleOpenModal = () => {
        setIsVideoModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsVideoModalOpen(false);
    };
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
    // 取得活動
    const getAtivitiesList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/rest/v1/activities?limit=5&order=created_at.desc`, {
                headers: {
                    apikey: apiKey,
                    Authorization: `Bearer ${apiKey}`
                }
            })
            setActivities(res.data)
        } catch (error) {
            alert('錯誤:', error.response);
        }
    }
    //取得文章
    const getArticlesList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/rest/v1/articles?limit=1&order=created_at.desc`, {
                headers: {
                    apikey: apiKey,
                    Authorization: `Bearer ${apiKey}`
                }
            })
            setArticles(res.data)
        } catch (error) {
            alert('錯誤:', error.response);
        }
    }
    useEffect(() => {
        getAtivitiesList()
        getArticlesList()
    }, [])
    return (<>
        <Banner />
        {/* 最新活動、文章 */}
        <div className="container mx-auto py-15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-0">
                {articles.map((article) => {
                    return (
                        <div className="relative rounded-xl bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${article.image})` }} key={article.id}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 h-1/2 mt-auto rounded-b-xl z-0"></div>
                            <div className="flex flex-col justify-end p-6 mt-auto h-full pb-10">
                                <h3 className="text-lg md:text-xl text-white font-bold py-2 text-center block bg-primary-300 rounded-xl w-1/3 md:w-1/4 mb-10 z-10">最新文章</h3>
                                <div className="z-10">
                                    <h3 className="text-2xl md:text-4xl text-white font-bold mb-3">{article.title}</h3>
                                    <p className="text-white line-clamp-2 pl-3">{article.description1}{articles.description2}
                                    </p>
                                </div>
                                <div className="mt-4 w-full text-end z-10">
                                    <Link to={'最新文章'}>
                                        <SeemoreButton />
                                    </Link>
                                </div>
                            </div>
                        </div>)
                })}

                <div>
                    <div>
                        <h3 className="text-lg md:text-xl text-primary-500 font-bold py-2 text-center block bg-primary-200 rounded-xl w-1/3 md:w-1/4">最新消息</h3>
                    </div>
                    <ul className="list-disc px-4 marker:text-primary-200">
                        {activities.map((activity) => {
                            return (
                                <li className="py-4 border-b-1 border-primary-200" key={activity.id}>
                                    <Link to={`近期消息/${activity.id}`}>
                                        <div className="flex items-center mb-2">
                                            <h3 className="text-lg md:text-xl text-gray-800 font-bold hover:underline hover:text-primary-400">{activity.title}</h3>
                                            <time dateTime="2025-04-03" className="text-sm text-gray-400 ml-auto">{new Date(activity.created_at).toLocaleDateString()}</time>
                                        </div>
                                        <p className="text-sm md:text-base truncate text-gray-500">{activity.content}{activity.description}
                                        </p>
                                    </Link>
                                </li>)
                        })}
                    </ul>
                    <div className="mt-4 w-full text-end">
                        <Link to={'近期消息'}>
                            <SeemoreButton />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* 崇拜時間 */}
        <main className="frontpage">
            <div className="container mx-auto py-15">
                <div className="flex mx-auto justify-center mb-10">
                    <h2 className="text-xl md:text-3xl text-primary-500 pr-6">WORSHIP</h2>
                    <h2 className="border-l-4 border-primary-500 text-xl md:text-4xl text-primary-500 pl-6">崇拜時間</h2>
                </div>
                <div className="mb-10 px-4">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        initialSlide={0}
                        breakpoints={{
                            0: { slidesPerView: 1.2, spaceBetween: 16 },
                            500: { slidesPerView: 1.2, spaceBetween: 16 },
                            776: { slidesPerView: 3.3, spaceBetween: 20 },
                            1200: { slidesPerView: 3.3, spaceBetween: 20 },
                        }}
                    >
                        <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                            <img src="images/da-jin.jpg" alt="" className="rounded-t-2xl h-[180px] md:h-[250px] w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary-500">4/6舊寮崇拜</h3>
                                <div>
                                    <p>時間：(日)9:30-11:00</p>
                                    <p>地點：舊寮教會</p>
                                    <p>講員：阮佳生傳道</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                            <img src="images/church-02.jpg" alt="" className="rounded-t-2xl h-[180px] md:h-[250px] w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary-500">4/13主日崇拜</h3>
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
                            <img src="images/church-09.jpg" alt="" className="rounded-t-2xl h-[180px] md:h-[250px] w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary-500">4/13台語崇拜</h3>
                                <div>
                                    <p>時間：(日)9:30-11:00</p>
                                    <p>地點：台語堂</p>
                                    <p>講員：蘇慈玲姊妹</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                            <img src="https://plus.unsplash.com/premium_photo-1661377118520-287ec60a32f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-t-2xl h-[180px] md:h-[250px] w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary-500">4/5學青崇拜</h3>
                                <div>
                                    <p>時間：(六)16:00-17:00</p>
                                    <p>地點：六樓學青教室</p>
                                    <p>講員：洪珩潔姊妹</p>
                                    <p>領會：徐永欣姊妹</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl shadow-lg">
                            <img src="images/church-07.jpg" alt="" className="rounded-t-2xl h-[180px] md:h-[250px] w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary-500">4月兒童主日學</h3>
                                <div>
                                    <p>時間：(日)9:30-12:00</p>
                                    <p>地點：一樓副堂</p>
                                    <p>幼稚班同工：劉忠萱、陳道欣、洪珩潔、鄭嵩穎</p>
                                    <p>國小班同工：張雅晴、李偉帆、黃茄玉、陳寶惠、林依茹、江丕華、陳道維</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </main>
        {/* 靈修 */}
        <div className="relative bg-[url(https://plus.unsplash.com/premium_photo-1668624618388-f5ced9f651c7?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[300px] md:h-[400px] bg-no-repeat bg-cover flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7DF]/100 to-[#FFF7DF]/10 z-0"></div>
            <div className="container mx-auto py-10 z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <h2 className="text-3xl md:text-4xl text-primary-500 font-bold mb-6 mr-4">本日靈修經文</h2>
                    <p className="text-xl md:text-2xl text-primary-400 mb-4">{currentDate} - {scripture}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-4 mr-4">
                    <Link className="w-full text-center hover:bg-gradient-to-r hover:from-transparent hover:to-primary-300 rounded-2xl py-4 text-primary-400 hover:text-primary-100 cursor-pointer col-span-1 col-start-3 flex justify-center items-center mb-4" to="https://drive.google.com/file/d/1B2RH5thbPkO8KTM8ng2HU-9AsJuyw_bQ/view">
                        <h4 className="text-xl md:text-2xl mr-2 md:mr-4">靈修筆記</h4>
                        <span className="material-symbols-outlined text-4xl">expand_circle_right</span>
                    </Link>
                    {/* <div className="w-full text-center hover:bg-gradient-to-r hover:from-transparent hover:to-primary-300 rounded-2xl py-4 text-primary-400 hover:text-primary-100 cursor-pointer col-span-1 col-start-3 flex justify-center items-center mb-4" onClick={handleOpenModal}>
                        <h4 className="text-2xl mr-4">嗎哪廚房</h4>
                        <span className="material-symbols-outlined text-4xl">expand_circle_right</span>
                    </div> */}
                </div>
            </div>
        </div>

        {/* 檔案區 */}
        <section className="container mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl text-center p-4">
                    <h3 className="text-xl md:text-4xl text-primary-500 mb-4">主日信息</h3>
                    <div className="aspect-video w-full mt-4">
                        {liveVideoId ? (<iframe
                            className="md:h-[400px]"
                            width="100%"
                            src={`https://www.youtube.com/embed/${liveVideoId}`}
                            title="Live video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        >
                        </iframe>) : (<p>載入中或暫無直播影片</p>)}
                    </div>
                    <Link to="https://www.youtube.com/@%E9%AB%98%E9%9B%84%E4%B8%83%E8%B3%A2%E8%B7%AF%E7%A6%AE%E6%8B%9C%E5%A0%82/streams">
                        <button type='button' className="bg-primary-200 rounded-xl text-primary-500 hover:bg-primary-300 hover:text-primary-100 py-4 px-6 text-2xl">
                            <p className=" me-2">更多信息錄影
                                <span className="material-symbols-outlined align-bottom ml-2">arrow_right_alt</span>
                            </p>
                        </button>
                    </Link>
                </div>
                <div className="mt-3 md:mt-20">
                    <div>
                        <div className="grid grid-cols-2 gap-4 md:gap-6 pl-4 md:pl-0">
                            <Link className="bg-white text-center align-middle py-5 md:py-5 rounded-2xl shadow-lg" to="https://www.kc7schurch.org.tw/kc7_pdf/20250420.pdf">
                                <img src="images/icon/weekly.png" alt="" className="w-16 h-16 mx-auto mb-3" />
                                <p className="text-xl md:text-2xl text-primary-400 mb-4">本週週報</p>
                            </Link>
                            <Link className="bg-white text-center align-middle py-5 md:py-5 rounded-2xl shadow-lg">
                                <img src="images/icon/letter.png" alt="" className="w-16 h-16 mx-auto mb-3" />
                                <p className="text-xl md:text-2xl text-primary-400 mb-4">本週禱告信</p>
                            </Link>
                            <Link className="bg-white text-center align-middle py-5 md:py-5 rounded-2xl shadow-lg" to="https://www.beclass.com/rid=294db31674b4274a0321">
                                <img src="images/icon/camp.png" alt="" className="w-16 h-16 mx-auto mb-3 object-contain" />
                                <p className="text-xl md:text-2xl text-primary-400 mb-4">歡樂周末營報名</p>
                            </Link>
                            <Link className="bg-white text-center align-middle py-5 md:py-5 rounded-2xl shadow-lg">
                                <img src="images/icon/serve.png" alt="" className="w-16 h-16 mx-auto mb-3" />
                                <p className="text-xl md:text-2xl text-primary-400 mb-4">本季服事表</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* 禱告會 */}
        <section className="relative bg-[url(images/pray.jpg)] bg-no-repeat bg-cover bg-center">
            <div className="absolute inset-0 bg-white/60 md:bg-gradient-to-t md:from-[#FFF7DF]/100 md:to-[#FFF7DF]/10 z-0"></div>
            <div className="relative container mx-auto pt-15 mb-15 md:pb-30">
                <div className="flex mx-auto justify-center mb-10">
                    <h2 className="text-xl md:text-3xl text-primary-500 pr-6">PRAYER</h2>
                    <h2 className="border-l-4 border-primary-500 text-xl md:text-4xl text-primary-500 pl-6">禱告會</h2>
                </div>
                <div className="w-full md:w-1/2 ml-auto mr-6 py-10 md:py-15">
                    <h4 className="text-2xl text-primary-500 text-center md:text-right mb-6">每周三晚上19:30</h4>
                    <div className="flex justify-center md:justify-end">
                        <Link>
                            <button type='button' className="flex items-center justify-center bg-primary-200 rounded-xl px-4 py-1 md:py-2 text-primary-500 hover:bg-primary-300 hover:text-primary-100 cursor-pointer text-sm md:text-base">
                                <p className=" me-2 ">加入禱告會</p>
                                <span className="material-symbols-outlined">arrow_right_alt</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
        <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        {isVideoModalOpen && (
            <VideoModal
                videoId={lastManaVideo}
                onClose={handleCloseModal}
            />
        )}
    </>
    )
}

export default Home