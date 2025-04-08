import BannerImage from "../../component/BannerImage"

function ChurchMark() {
    return (
    <>
        <BannerImage image={'/images/church-1.jpg'} title={"教會標誌"}/>
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-6 gap-4 my-15">
                <div className="col-span-4 py-10">
                    <h1 className="text-4xl text-center font-bold text-primary-500 mb-10">教會標誌</h1>
                    <h2 className="text-3xl text-left text-primary-500 mb-10 font-bold">教會標誌有三種不同意義：</h2>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 text-2xl text-primary-500 border-2 border-primary-500 rounded-2xl px-4 py-20 text-center h-full shadow-md shadow-primary-500/50">
                            <h3 className="text-2xl mb-4">聖父</h3>
                            <p>白色線條代表「光」，<br />上帝就是「光」。</p>
                        </div>
                        <div className="col-span-2 text-2xl text-primary-500 border-2 border-primary-500 rounded-2xl px-4 py-20 text-center h-full shadow-md shadow-primary-500/50">
                            <h3 className="text-2xl mb-4">聖子</h3>
                            <p>紅色玻璃代表「耶穌基督的寶血」，<br />那是捨己的愛。</p>
                        </div>
                        <div className="col-span-2 text-2xl text-primary-500 border-2 border-primary-500 rounded-2xl px-4 py-20 text-center h-full shadow-md shadow-primary-500/50">
                            <h3 className="text-2xl mb-4">聖靈</h3>
                            <p>「鴿子」代表「聖靈」，<br />就是上帝的同在。</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <img src="images/Logo.png" alt="" className="w-1/2" />
                </div>
            </div>
        </div>
    </>)
}

export default ChurchMark