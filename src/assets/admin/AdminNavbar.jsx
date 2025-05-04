import { Link } from "react-router-dom"

function AdminNavbar() {
    return (
        <nav className="bg-primary-400">
            <div className="flex w-full items-center justify-between py-2 bg-gradient-to-b from-transparent to-primary-300">
                <Link to="/" className='w-2/3 md:w-1/2 ml-3'>
                    <img src="images/Logo.png" alt="logo" />
                </Link>
                <div className="flex justify-end items-center">
                    <Link to="/admin">
                        <h1 className="text-primary-100 mr-8">管理中心</h1>
                    </Link>
                    <Link to="/" className="mr-6 cursor-pointer text-primary-100">
                        <button type="button" className="cursor-pointer">
                            <span className="material-symbols-outlined">logout</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>)
}

export default AdminNavbar