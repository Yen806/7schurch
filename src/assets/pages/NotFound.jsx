import { Link } from 'react-router-dom';

function Notfound() {
    return (
        <>
            <div className="container px-5  py-5 d-flex flex-column rounded-4 justify-content-center align-items-center">
                <div className="flex justify-center">
                    <span className="material-symbols-outlined text-red-600">cancel</span>
                </div>

                <h1 className="text-center p-3">找不到網頁</h1>
                <div className="flex justify-center">
                    <Link className="text-primary-500 cursor-pointer hover:underline" to="/">
                        回首頁
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Notfound;