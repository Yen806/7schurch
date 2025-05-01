import BannerImage from "../../component/BannerImage"

function ChurchSect() {
    return (
        <>
            <BannerImage image={'/images/church-01.png'} title={"認識我們"} menu={"簡介"} />
            <div className="container mx-auto pt-10 md:pt-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary-500 mb-15">認識我們</h1>
                <div className="pt-0 md:pt-20 pb-6">
                    <div className="text-xl md:text-xl text-center md:text-left text-primary-500 px-4 md:px-20">
                        <h2 className="mb-1">本教會所持守的是福音派信仰，與靈恩派信仰有別</h2>
                        <h2 className="mb-1">福音派信仰以聖經作為信仰的中心，重視研讀聖經，以聖經的教訓作為生活事奉的準則。</h2>
                        <h2 className="mb-1">靈恩派教會所舉辦的特會中，諸如被擊倒、大哭、大笑、大叫、嘔吐…等是聖經中沒有的現象，</h2>
                        <h2 className="mb-1">因此不是我們追求的目標。</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="bg-primary-200">
                        <p className="px-4 py-10 md:p-20">也許有人會問，我們是否不追求聖靈？不要神蹟嗎？絕對不是。<br /><br />福音派也追求聖靈充滿，只是我們更追求的是內住的聖靈，讓聖靈隨時與我們同在，不是只在靈恩特會時的同在。我們期望聖靈隨時作我們的主，管理我的思想、言語、行為，作我們隨時的幫助。不只早上靈修禱告時聖靈與你同在，你要上班，聖靈與你一同出門，聖靈與你一同工作，加給你力量作好每一件工作；你休息，聖靈也與你同在，使你靈魂體都得安舒；你與人談話，聖靈也與你同在，使你口中所出的是造就人的好話；你遇到問題，有麻煩，聖靈與你一同面對；身體有病痛，可以向神禱告，求聖靈醫治。若在生活中有聖靈同在，你會從生活中經歷許多神蹟。</p>
                    </div>
                    <div className="relative bg-[url(https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-0"></div>
                        <p className="relative px-4 pt-10 pb-10 md:pt-60 md:pb-20 md:px-20 z-10 text-primary-100">福音派的神蹟是充滿在生活中，而不是在靈恩特會中。神把醫病的神蹟賜給有信心的人，藉著眾人的禱告，神一樣會叫病人得醫治。我們不禁止個人說方言，但禁止在聚會中說不能翻的方言，這是明記在哥林多前書十四章中的。<br /><br />教會鼓勵你們多讀聖經，多禱告親近神，多從神那裡支取聖靈的大能，使自己的靈命成長，工作事奉有能力，每個人都結滿了聖靈的果子，仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制…等，但不鼓勵弟兄姐妹去參加追求外顯靈恩的特會。</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url(https://images.unsplash.com/photo-1502987846294-e7ec70f4b393?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-no-repeat bg-cover bg-center">
                <div className="container mx-auto py-10 md:py-20 bg-white/65 md:bg-white/0">
                    <div className="w-full md:w-1/2 ml-auto ">
                        <p className="text-primary-500 px-4 py-10 md:p-20 ">在教會的治理上，我們採用長老治會。保羅等使徒們在各處傳福音，當有許多人得救，建立了教會，使徒們就在當地選立長老，接手治理教會。在提摩太前書三章，聖經教導我們如何在教會中按立長老和執事在教會中服事。<br /><br />地方教會的長老與一般教會的牧師同樣都是牧養教會，職份雖相同，但兩者卻有一些不同。我們教會的長老是經過慎重遴選，禱告尋求後才按立的，是終身職，要終身委身在這個教會，牧養教會。<br /><br />執事是負責執行某項事工的，是因著工作的需要而按立，就如使徒行傳六章中使徒們選了七人當執事，辦理飯食的事。執事也不是自己包辦所有的工作，也需要有人同工，這樣才能把教會的事工作好，因此我們也有許多的同工一起參與服事。教會期待人人事奉，每個人都參與在事工裡。教會是每個人的，每個成員都負有責任，每個人都愛教會，每個人都動起來，則教會必要大大復興。
                        </p>
                        <p className="text-right text-primary-500 px-20">2011 年 9 月 04 日 長老會議決議</p>
                    </div>
                </div>
            </div>
            <img src="images/icon/church.png" alt="" className="ml-auto mr-6 w-[80px] md:w-[120px]" />
        </>)
}

export default ChurchSect