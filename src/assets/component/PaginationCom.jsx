
function PaginationCom({ label, currentPage, setCurrentPages, totalPages }) {
    // 分頁計算和顯示
    const handlePageChange = (type, page) => {
        setCurrentPages(prev => ({
            ...prev,
            [type]: page
        }));
    };
    return (<>
        <nav className="flex justify-center">
            <ul className="flex">
                <li>
                    <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-primary-500 text-primary-100 hover:bg-primary-200 hover:text-primary-500 mr-3 cursor-pointer disabled:bg-primary-300 disabled:pointer-events-none"
                        onClick={() => handlePageChange(label, currentPage - 1)}
                        disabled={currentPage === 1}>
                        <span className="material-symbols-outlined text-primary align-middle"
                        >chevron_left</span>
                    </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => {
                    return (
                        <li key={index + 1}>
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? "bg-primary-200 text-primary-500" : "bg-primary-500 text-primary-100"} text-primary-100 hover:bg-primary-200 hover:text-primary-500 mr-3  cursor-pointer`}
                                onClick={() => handlePageChange(label, index + 1)}>{index + 1}</button>
                        </li>
                    )
                })}
                <li>
                    <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-primary-500 text-primary-100 hover:bg-primary-200 hover:text-primary-500 mr-3 cursor-pointer disabled:bg-primary-300 disabled:pointer-events-none"
                        onClick={() => handlePageChange(label, currentPage + 1)}
                        disabled={currentPage === totalPages}>
                        <span className="material-symbols-outlined text-primary align-middle"
                        >chevron_right</span>
                    </button>
                </li>
            </ul>
        </nav>
    </>)
}

export default PaginationCom