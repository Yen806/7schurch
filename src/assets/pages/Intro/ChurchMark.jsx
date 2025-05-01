import BannerImage from "../../component/BannerImage"

function ChurchMark() {
    return (
        <>
            <BannerImage image={'/images/church-01.png'} title={"教會標誌"} menu={"簡介"}/>
            <div className="container mx-auto py-10 my-0 md:my-15">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500">教會標誌</h1>
                <div className="flex flex-col md:flex-row  my-0 md:my-15">
                    <div className="w-full md:w-1/4 mr-0 md:mr-6 p-4 md:p-0 flex md:block justify-center ">
                        <img src="Logo_red_bg.png" alt="" className="w-3/4 " />
                    </div>
                    <div className="w-full md:w-3/4 p-4 md:p-0">
                        <div className="relative text-2xl text-primary-500 rounded-2xl px-4 py-20 text-center shadow-md shadow-primary-500/50 overflow-hidden mb-6">
                            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1588632205848-5789a592134b?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center z-0" />
                            <div className="absolute inset-0 bg-white/50 z-10" />
                            <div className="relative z-100">
                                <h3 className="text-4xl mb-4 font-bold">聖父</h3>
                                <p>白色線條代表「光」，上帝就是「光」。</p>
                            </div>
                        </div>
                        <div className="relative text-2xl text-primary-500 rounded-2xl px-4 py-20 text-center shadow-md shadow-primary-500/50 overflow-hidden mb-6">
                            <div className="absolute inset-0 bg-[url(https://plus.unsplash.com/premium_photo-1706727287973-1d68ac843597?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center z-0" />
                            <div className="absolute inset-0 bg-white/50 z-10" />
                            <div className="relative z-100">
                                <h3 className="text-4xl mb-4 font-bold">聖子</h3>
                                <p>紅色玻璃代表「耶穌基督的寶血」，那是捨己的愛。</p>
                            </div>
                        </div>
                        <div className="relative text-2xl text-primary-500 rounded-2xl px-4 py-20 text-center shadow-md shadow-primary-500/50 overflow-hidden mb-6">
                            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1507126882445-434b04530d1a?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center z-0" />
                            <div className="absolute inset-0 bg-white/50 z-10" />
                            <div className="relative z-100">
                                <h3 className="text-4xl mb-4 font-bold">聖靈</h3>
                                <p>「鴿子」代表「聖靈」，就是上帝的同在。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>)
}

export default ChurchMark