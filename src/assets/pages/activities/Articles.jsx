import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../component/BannerImage"
import supabase from "../../../supabase";
import SeemoreButton from "../../component/SeemoreButton";

function Articles() {
    const [articles, setArticles] = useState([])
    //取得文章
    const getArticlesList = async () => {
        const { data, error } = await supabase
            .from("articles")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            alert("錯誤: " + error.message);
            return;
        }
        setArticles(data);
    }
    useEffect(() => {
        getArticlesList()
    }, [])
    return (
        <>
            <BannerImage image={'https://images.unsplash.com/photo-1550592704-6c76defa9985?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={"最新文章"} menu={"活動"} />
            <div className="container mx-auto py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {articles.map((article) => {
                        return (
                            <Link className="flex flex-row items-center md:items-start md:flex-col rounded-xl shadow-lg bg-white hover:shadow-2xl hover:-translate-y-[3px] transition duration-300" key={article.id} to={`/最新文章/${article.id}`}>
                                <img src={article.imageUrl} alt="" className="w-[100px] md:w-full h-[100px] md:h-[250px] object-cover rounded-xl md:rounded-b-none md:mb-4 ml-4 md:ml-0" />
                                <div className="w-3/5 md:w-full px-6 flex flex-col justify-between flex-grow hover:transform-gpu">
                                    <div className="text-gray-500">{new Date(article.created_at).toLocaleDateString()}</div>
                                    <div className="mb-4 md:mb-20 pt-4">
                                        <h3 className="text-lg md:text-2xl text-primary-500  mb-0 md:mb-3">{article.title}</h3>
                                        <p className="text-primary-500 line-clamp-3">{article.description1}<br />{article.description2}</p>
                                    </div>

                                    <div className="mb-4 ml-auto md:ml-0">
                                        <SeemoreButton />
                                    </div>
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>

    )
}

export default Articles