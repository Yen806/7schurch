import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import BannerImage from "../../component/BannerImage"
import axios from "axios";
import supabase from "../../../supabase";

function ActivityDetail() {
    const [activity, setActivity] = useState({})
    const [activities, setActivities] = useState([])
    const { id: acitvity_id } = useParams();

    const getAtivityDetail = async () => {
        const { data, error } = await supabase
            .from("activities")
            .select("*")
            .eq("id", acitvity_id)
            .single();

        if (error) {
            alert("錯誤: " + error.message);
            return;
        }

        setActivity(data);
    }

    const getAtivitiesList = async () => {
        const { data, error } = await supabase
            .from("activities")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(5);

        if (error) {
            alert("錯誤: " + error.message);
            return;
        }

        setActivities(data);
    }
    useEffect(() => {
        getAtivityDetail()
        getAtivitiesList()
    }, [acitvity_id])


    return (<>
        <BannerImage image={'https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={activity.title || activity.sub_title} menu={"近期消息"} />
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h1 className="text-4xl text-primary-500 font-bold mb-4">{activity.title}</h1>
                    <h2 className="text-2xl text-primary-500 mb-10">{activity.sub_title}</h2>
                    <div className="flex mb-3">
                        <span className="material-symbols-outlined text-primary-200 mr-2">schedule</span>
                        <h4 className="text-primary-200">時間：{activity.event_time
                        }</h4>
                    </div>
                    <div className="flex mb-3">
                        <span className="material-symbols-outlined text-primary-200 mr-2">location_on</span>
                        <h4 className="text-primary-200">地點：{activity.location
                        }</h4>
                    </div>
                    <div className="flex mb-10">
                        <span className="material-symbols-outlined text-primary-200 mr-2">person</span>
                        <h4 className="text-primary-200">講員：{activity.speaker}</h4>
                    </div>
                    <p className="mb-4">{activity.content}</p>
                    <p className="mb-10">{activity.description}</p>
                    <img src={activity.imageUrl} alt="" />
                </div>
                <div>
                    <ul className=" bg-primary-200 rounded-2xl p-4">
                        <li>
                            <button type="button" className="w-full text-center bg-primary-400 text-primary-100 py-4 rounded-2xl text-xl mb-4">最新消息</button>
                        </li>
                        {activities.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/活動/${item.id}`} className="py-2 ">
                                        <button type="button" className="w-full text-left text-primary-400  text-xl mb-4 truncate cursor-pointer pr-4">
                                            <span className="material-symbols-outlined mr-2 align-middle ml-4">radio_button_unchecked</span>
                                            {item.title || item.sub_title}</button>
                                    </Link>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
        <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
    </>)
}

export default ActivityDetail