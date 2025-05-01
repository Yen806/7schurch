import { Outlet } from "react-router-dom"
import AutoOnTop from "../src/assets/layout/AutoOnTop"
import Navbar from "../src/assets/layout/Navbar"
import Footer from "../src/assets/layout/Footer"
import ScrollToTop from "./assets/component/ScrollToTop"

function App() {
    return (<>
        <AutoOnTop />
        <Navbar />
        <div className="bg-light-100">
            <Outlet />
        </div>
        <ScrollToTop />
        <Footer />
    </>)
}

export default App
