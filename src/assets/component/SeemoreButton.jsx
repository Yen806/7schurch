function SeemoreButton() {
    return (
        <button type='button' className="flex items-center justify-center bg-primary-200 rounded-xl px-4 py-1 md:py-2 text-primary-500 hover:bg-primary-300 hover:text-primary-100 cursor-pointer text-sm md:text-base">
            <p className=" me-2 ">看更多</p>
            <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
    )
}

export default SeemoreButton