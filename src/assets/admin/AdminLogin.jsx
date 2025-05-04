import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Input from "../component/Input";
import supabase from "../../supabase";


function AdminLogin() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async ({ email, password }) => {
        const { data: userData, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            alert("錯誤: " + error.message);
            return;
        }
        navigate('/admin')
    }

    return (
        <div className="container mx-auto py-10 md:py-20">
            <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500">管理員登入</h1>
            <form action="" className="w-1/3 mx-auto py-10" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    errors={errors}
                    id="email"
                    labelText="帳號"
                    type="email"
                    rules={{
                        required: {
                            value: true,
                            message: '帳號為必填',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: '格式不正確',
                        },
                    }}
                    mark="*" />
                <Input
                    register={register}
                    errors={errors}
                    id="password"
                    labelText="密碼"
                    type="password"
                    rules={{
                        required: {
                            value: true,
                            message: '密碼為必填',
                        }
                    }}
                    mark="*" />
                <div className="mt-8 flex justify-center">
                    <button type="submit" className="mx-auto bg-secondary-400 text-primary-50 w-1/2 py-2 rounded-lg hover:bg-emerald-700 text-nowrap cursor-pointer">登入</button>
                </div>
            </form>
            <Link to="/" className="text-secondary-400 flex justify-center cursor-pointer ">回首頁</Link>
        </div>
    )
}

export default AdminLogin