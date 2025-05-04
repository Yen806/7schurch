import { NavLink } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import AdminSidebar from "./AdminSidebar"

function AdminLayout() {
    return (<>
        <AdminNavbar />
        <div className="container  mx-auto py-10 md:py-20">
            <AdminSidebar />
        </div>
    </>)
}

export default AdminLayout