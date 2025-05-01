import BannerImage from "../../component/BannerImage"

function HappyCamp() {
    return (
        <>
            <BannerImage image={'/images/happycamp_photo.jpg'} title={"歡樂周末營"} menu={"活動"} />
            <div className="container mx-auto py-10 md:py-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500">歡樂周末營</h1>
                <div className="flex justify-center my-15">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary-500">讓小孩子到我這裡來～社區工作感恩</h2>
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>)
}

export default HappyCamp