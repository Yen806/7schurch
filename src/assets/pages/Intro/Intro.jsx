import { useState } from "react"
import BannerImage from "../../component/BannerImage"

function IntroHome() {
    const [isExtend, setIsExtend] = useState(false)

    const textExtend = () => {
        setIsExtend(prevState => !prevState)
    }

    return (
        <>
            <BannerImage image={'/images/church-01.png'} title={"教會簡介"} />
            <div className="container mx-auto py-10 md:py-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500">七賢路禮拜堂簡介</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 my-4 md:my-15">
                    <div className="p-4">
                        <img src="https://images.unsplash.com/photo-1699974627415-1f3c5387af51?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl" alt="" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-500 text-center md:text-left">教會的宗旨</h2>
                        <p className="text-lg md:text-2xl text-primary-500 text-center md:text-left">本教會以事奉獨一真神<br />遵行聖經真理<br />增進聖徒信德<br />廣傳基督福音<br />引領世人歸主為宗旨。</p>
                    </div>
                    <div className="mt-0 md:mt-8 p-4 md:hidden">
                        <img src="images/church-15.png" className="rounded-2xl max-h-[230px] w-full object-cover object-top" alt="" />
                    </div>
                    <div className="mt-0 md:mt-8 p-4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-500 text-center md:text-left">教會的信仰</h2>
                        <div className={`relative transition-all duration-500 ease-in-out overflow-hidden ${isExtend ? 'max-h-full' : 'max-h-[400px]'
                            }`}>
                            <ul className="text-lg md:text-2xl md:list-disc pl-0 md:pl-6 text-primary-500">
                                <li className="mb-4">我們相信自有永有的獨一真神，聖父、聖子、聖靈三位一體，同榮同尊，是創造萬有的主宰。</li>
                                <li className="mb-4">我們相信耶穌基督是神的獨生子，道成肉身，因聖靈成孕，從童女馬利亞所生，兼具神、人二性，為世人的罪釘死在十字架上、埋葬、第三天復活、升天，坐在全能父神的右邊，將來必定再臨，提接聖徒，審判世界。</li>
                                <li className="mb-4">我們相信聖靈已經降臨，為基督作見證，住在信的人心中作保惠師，引人進入真理，賜人恩賜和能力，以服事榮耀主基督。</li>
                                <li className="mb-4">我們相信新舊約聖經六十六卷全部都是神所默示的，其原文真實無誤，完全可靠，絕對權威，是聖徒信仰、生活與事奉的唯一準則。</li>
                                <li className="mb-4">我們相信人是照神形像所造，因犯罪而墮落，與神隔絕，如今卻蒙神的恩典與耶穌基督的救贖，可以因信白白稱義，得著永生。</li>
                                <li className="mb-4">我們相信教會是基督的身體，以基督為元首，由一切重生得救的人組成彼此相愛，合而為一，負有傳揚福音造就聖徒的使命。</li>
                            </ul>
                            {!isExtend && (
                                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-light-100 to-transparent pointer-events-none" />
                            )}
                        </div>
                        <button type="button" className="mx-auto text-lg md:text-2xl w-full my-0 md:my-4 text-primary-500" onClick={textExtend}>{isExtend ? 'Read Less' : 'Read More'}<span className="ms-4s material-symbols-outlined align-middle">{isExtend ? "keyboard_arrow_up" : "keyboard_arrow_down"}</span></button>
                    </div>
                    <div className="mt-0 md:mt-8 p-4 hidden md:block">
                        <img src="images/church-15.png" className="rounded-2xl max-h-[500px] w-full object-cover object-top" alt="" />
                    </div>
                    <div className="mt-0 md:mt-8 p-4">
                        <img src="https://images.unsplash.com/photo-1481624362406-b7817fa45ecf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl" alt="" />
                    </div>
                    <div className="p-4 mt-8">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-500 text-center md:text-left">教會的治理</h2>
                        <span className="text-lg md:text-2xl text-primary-500 text-center md:text-left">教會本於「長老治會」與「地方教會」的原則進行治理，與跨地方的「宗派性教會」以及「聘請牧師治會」的牧師制度有很大的不同。<br /><br />我們認定的地方教會是一個教會，由該地方性會堂的信徒中栽培出領袖，並按立為長老，來治理監督牧養教會。<br /><br />根據聖經的記載長老係多數，是全群的監督（徒２０：２８上），牧養教會的人（徒２０：２８下；彼前５：２上），照管教會的人（提前３：５、５：１７；多１：７；彼前５：２下）。<br /><br />「地方教會」與「長老治會」是聖經中的教導，也是聖經中的榜樣。故我們遵行地方教會路線，並行長老治會</span>
                    </div>
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>
    )
}

export default IntroHome