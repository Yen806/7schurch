import { Link } from "react-router-dom"

function BannerImage({ image, title, menu = "" }) {
    return (
        <div className="relative h-[300px] md:h-[400px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/0 to-transparent pointer-events-none z-10" />
            <div className="absolute top-[60%] left-[10%] z-40">
                <h1 className="text-4xl md:text-5xl text-primary-100 mb-4 font-bold">{title}</h1>
                <div className="flex">
                    {menu && (<>
                        <Link to={`/${menu}`}>
                            <button type="button" className="text-primary-100 underline me-2">{menu}
                            </button>
                        </Link>
                        <div className="text-primary-100">/</div>
                    </>)}
                    <button type="button" className={`text-primary-200 ${menu ? "ml-2" : ""}`}>{title}
                    </button>
                </div>
            </div>
        </div>)
}

export default BannerImage