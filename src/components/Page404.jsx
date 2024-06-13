import {Link} from 'react-router-dom'
const Page404 = ()=>{
    return(
        <div className="bg-slate-950 text-white w-full h-screen">
            <div className="p-44 flex justify-center items-center flex-col">
                <h1 className="mt-5 text-3xl font-bold">Sayfa Bulunamadı</h1>
                <button className="px-2 mt-5 text-xl border-2 border-blue-300/30 hover:bg-blue-300/30 transition-colors">
                    <Link to="/home">Anasayfaya Dön</Link>
                </button>
            </div>

        </div>
    )
};

export default Page404;
