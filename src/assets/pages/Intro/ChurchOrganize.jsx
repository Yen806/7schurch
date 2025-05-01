import BannerImage from "../../component/BannerImage"

function ChurchOrganize() {
    return (
        <>
            <BannerImage image={'/images/church-01.png'} title={"教會組織"} menu={"簡介"}/>
            <div className="container mx-auto py-10 md:py-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500">教會組織</h1>
                <div className="flex justify-center my-15">
                    <img src="images/org.png" alt="" />
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>)
}

export default ChurchOrganize