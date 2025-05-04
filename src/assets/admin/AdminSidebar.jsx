import { NavLink } from "react-router-dom"

function AdminSidebar() {
    return (<ul className="w-1/6 ">
        <li className="border-b-2 border-b-secondary-400">
            <NavLink>
                <button type="button" className="text-primary-500 py-2">活動管理
                </button>
            </NavLink>
        </li>
        <li className="border-b-2 border-b-secondary-400">
            <NavLink>
                <button type="button" className="text-primary-500 py-2">文章管理
                </button>
            </NavLink>
        </li>
        <li className="border-b-2 border-b-secondary-400">
            <NavLink>
                <button type="button" className="text-primary-500 py-2">靈修管理
                </button>
            </NavLink>
        </li>
        <li className="border-b-2 border-b-secondary-400">
            <NavLink>
                <button type="button" className="text-primary-500 py-2">講章管理
                </button>
            </NavLink>
        </li>
        <li className="border-b-2 border-b-secondary-400">
            <NavLink>
                <button type="button" className="text-primary-500 py-2">主日學管理
                </button>
            </NavLink>
        </li>
        <li>
            <NavLink>
                <button type="button" className="text-primary-500 py-2">連結管理
                </button>
            </NavLink>
        </li>
    </ul>)
}

export default AdminSidebar