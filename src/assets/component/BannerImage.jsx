function BannerImage({image, title}) {
    return (
    <div className="relative h-[350px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute top-[60%] left-[10%]">
            <h1 className="text-5xl text-primary-100 mb-2 font-bold">{title}</h1>
        </div>
    </div>)
}

export default BannerImage