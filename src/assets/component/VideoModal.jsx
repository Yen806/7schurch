
const VideoModal = ({ videoId, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-1000">
            <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold text-white mr-5"
                >
                    X
                </button>
                <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}  // 使用 YouTube 提供的嵌入 URL
                    title="YouTube video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default VideoModal