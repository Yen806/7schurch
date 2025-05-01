import { useEffect, useState } from "react"

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [bottomOffset, setBottomOffset] = useState(32)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.body.offsetHeight
            const distanceFromBottom = documentHeight - (scrollY + windowHeight)
            setIsVisible(scrollY > 500)

            const offset = distanceFromBottom < 350
                ? 32 + (350 - distanceFromBottom)
                : 32

            setBottomOffset(offset)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (<>
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-secondary-100 text-white px-2 py-2 rounded-full shadow-lg hover:bg-primary-600 transition-opacity duration-300 z-50 cursor-pointer"
                aria-label="Scroll to top"
                style={{ bottom: `${bottomOffset}px` }}>
                <span className="material-symbols-outlined align-middle">arrow_upward</span>
            </button>)}
    </>)
}

export default ScrollToTop