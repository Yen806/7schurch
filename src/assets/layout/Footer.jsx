import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-primary-400">
            <div className="container mx-auto py-12">
                <div className="flex">
                    <div className="w-1/2">
                        <img src="images/title.png" alt="logo" className="mb-4 w-2/3" />
                        <div className="flex px-4 mb-8">
                            <Link className="text-primary-100 w-6 h-6 text-center align-middle mr-2" to="https://www.facebook.com/kc7schurch">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className="text-primary-100 w-6 h-6 text-center align-middle mr-2" to="https://www.youtube.com/@%E9%AB%98%E9%9B%84%E4%B8%83%E8%B3%A2%E8%B7%AF%E7%A6%AE%E6%8B%9C%E5%A0%82">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                            <Link className="text-primary-100 w-6 h-6 text-center align-middle ">
                                <FontAwesomeIcon icon={faLine} />
                            </Link>
                        </div>
                        <div className="ml-4 mb-4">
                            <img src="images/happycamp.jpg" alt="logo" className="w-15 mr-4" />
                        </div>
                        <div className="flex px-4 mb-8">
                            <Link className="text-primary-100 w-6 h-6 text-center align-middle mr-2" to="https://www.facebook.com/7SHappyCamp">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className="text-primary-100 w-6 h-6 text-center align-middle">
                                <FontAwesomeIcon icon={faLine} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 mt-6 font-display">
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">location_on</span>
                            <h4 className="text-white hover:text-primary-100">80053 高雄市新興區七賢一路467號</h4>
                        </div>
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">location_on</span>
                            <h4 className="text-white hover:text-primary-100">467 CHI-HSIEN FIRST ROAD KAOHSIUNG TAIWAN</h4>
                        </div>
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">call</span>
                            <a href="tel:072351622" className="text-white hover:text-primary-100">
                                (07)235-1622
                            </a>
                        </div>
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">print</span>
                            <h4 className="text-white hover:text-primary-100">(07)236-2106</h4>
                        </div>
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">mail</span>
                            <a href="mailto:church7s@ms4.hinet.net" className="text-white hover:text-primary-100">
                                church7s@ms4.hinet.net
                            </a>
                        </div>
                        <div className="flex mb-2">
                            <span class="material-symbols-outlined text-primary-100 text-xs mr-2">receipt_long</span>
                            <h4 className="text-white hover:text-primary-100">統一編號：98586630</h4>
                        </div>
                    </div>
                </div>
                <div className="border-t-1 border-primary-100">
                    <p className="text-primary-100 py-6">Copyright ©2024 – 高雄基督徒七賢路禮拜堂 All Rights Reserved. 本站僅供學習使用，不提供商業用途</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer   