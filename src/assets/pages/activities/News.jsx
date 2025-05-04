import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import supabase from "../../../supabase";
import BannerImage from "../../component/BannerImage"
import SeemoreButton from "../../component/SeemoreButton";
import PaginationCom from "../../component/PaginationCom";


function News() {
    const [activities, setActivities] = useState([])
    const [currentPages, setCurrentPages] = useState({});
    const itemsPerPage = 4;
    const [activeTab, setActiveTab] = useState("activity");

    const activitiesType = [
        { id: "activity", label: "活動消息", icon: "notifications_active" },
        { id: "member", label: "肢體交通", icon: "favorite" },
        { id: "meeting", label: "開會通知", icon: "groups_2" },
        { id: "mission", label: "宣教消息", icon: "fireplace" }]

    const getAtivitiesList = async () => {
        const { data, error } = await supabase
            .from("activities")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            alert("錯誤: " + error.message);
            return;
        }

        setActivities(data);
    }
    useEffect(() => {
        getAtivitiesList()
    }, [])


    const filterActivities = (activities, type) => {
        return activities.filter((activity) => activity.type === type);
    }

    const handleType = (id) => {
        setActiveTab(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }




    return (
        <>
            <BannerImage image={'https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={"近期消息"} />
            <div className="container mx-auto py-10 md:py-20">
                <div className="mb-6 md:mb-15 flex justify-between border-b-1 border-primary-500">
                    {activitiesType.map(({ id, label, icon }) => {
                        return (<>
                            <button
                                key={id}
                                type="button"
                                className={`bottom-5 w-1/4 text-center text-lg md:text-2xl py-2 md:py-4 font-bold border-b-4 border-b-transparent text-primary-500 hover:border-b-primary-200 hover:text-primary-200 cursor-pointer ${activeTab === id ? 'active' : ''}`}
                                onClick={() => handleType(id)}>
                                <div className="hidden md:inline-block">
                                    <span className="material-symbols-outlined align-middle mr-2 ">{icon}</span>
                                </div>

                                {label}
                            </button>
                        </>)
                    })}
                </div>
                {activitiesType.map(({ id, label }) => {
                    const filteredActivities = filterActivities(activities, label);
                    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
                    const currentPage = currentPages[label] || 1;
                    const paginatedActivities = filteredActivities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
                    return (
                        <section className="mb-10 px-4 md:px-0" key={label} id={id}>
                            <h2 className="text-xl md:text-3xl text-left font-bold text-primary-100 bg-primary-400 p-2 md:p-4 md:rounded-2xl mb-6">{label}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                                {paginatedActivities.map((activity) => {
                                    return (
                                        <Link className="flex flex-row items-center md:items-start md:flex-col rounded-xl shadow-lg hover:shadow-2xl bg-white  hover:-translate-y-[3px] transition duration-300" key={activity.id} to={`/活動/${activity.id}`}>
                                            <img src={activity.imageUrl} alt="" className="w-[100px] md:w-full h-[100px] md:h-[250px] object-cover rounded-xl md:rounded-b-none md:mb-4 ml-4 md:ml-0" />
                                            <div className="w-3/5 md:w-full px-6 flex flex-col justify-between flex-grow">
                                                <div className="mb-4 md:mb-20 pt-4">
                                                    <h3 className="text-lg md:text-2xl text-primary-500  mb-0 md:mb-3">{activity.title}</h3>
                                                    <p className="text-sm md:text-base text-primary-500">{activity.event_time}</p>
                                                </div>
                                                <div className="mb-4 ml-auto md:ml-0">
                                                    <SeemoreButton />
                                                </div>
                                            </div>
                                        </Link>)
                                })}
                            </div>
                            {totalPages > 1 && (<PaginationCom label={label} currentPage={currentPage} setCurrentPages={setCurrentPages} totalPages={totalPages} />)}
                        </section>
                    )
                })}
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>
    )
}

export default News