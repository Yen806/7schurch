import { Outlet } from "react-router-dom"
import AutoOnTop from "../src/assets/layout/AutoOnTop"
import Navbar from "../src/assets/layout/Navbar"
import Footer from "../src/assets/layout/Footer"

function App() {
    return (<>
        <AutoOnTop />
        <Navbar />
        <div className="bg-light-100">
            <Outlet />
        </div>
        <Footer />
    </>)
}

export default App
