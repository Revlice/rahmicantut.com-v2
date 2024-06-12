import Header from './Header.jsx';
import resim1 from '../assets/anilar/IMG_0989.jpeg';
import resim2 from '../assets/anilar/IMG_0172.jpeg';
import resim3 from '../assets/anilar/IMG_2005.jpeg';
import resim4 from '../assets/anilar/IMG_4698.jpeg';
import resim5 from '../assets/anilar/IMG_0722.jpeg';
import resim6 from '../assets/anilar/IMG_3040.jpeg'

const Anilar = ()=>{

    const anilar = [
        {src:resim1, name:'2023 Japonfest,İstanbul',aciklama:'Her erkeğin dünya gözüyle Skyline R-34 görmesi şart.'},
        {src:resim2, name:'Sahil',aciklama:'Kafa dinlemelik mekan'},
        {src:resim3, name:'112 İstasyonu',aciklama:'Ambulans tanıtımına gelmiştik, gerekli ekipmanların nerelerde nasıl bulunduğuna dair eğitim aldık'},
        {src:resim4, name:'Opet', aciklama:'Pahalı mekanlar serisi...'},
        {src:resim5, name:'Bilmem neresii', aciklama:'fav'},
        {src:resim6, name:'Konum : Marmaray', aciklama:'Açıköğretim sınavına yetişmece'},
    ]

    return(

        <div className="bg-slate-950 h-screen w-full ">
            <Header/>
            <div className="flex justify-center flex-col items-center w-full bg-slate-950">
                {anilar.map((item,index)=>(
                    <div key={index} className="flex justify-center items-center w-full flex-col mt-32">
                        <h1 className="text-white text-xl mb-12 border-2 border-blue-300/30 bg-blue-300/30 rounded-xl p-2"> {item.name} </h1>
                        <div>
                            <img className="w-96 rounded-lg" src={item.src} alt=""/>
                        </div>
                        <h6 className="text-gray-400 bg-white/10 w-auto h-auto p-4 px-7 text-base rounded-xl mt-12 ">
                            {item.aciklama}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Anilar;