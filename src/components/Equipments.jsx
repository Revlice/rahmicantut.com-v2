import Header from './Header.jsx';
import Photos from './Photos.jsx';
const Equipments = () => {

    return(
        <div className="bg-slate-950 overflow-x-hidden">
            <Header/>
            <div className="w-full 2xl:ml-8">
                <div className="py-6 container mx-auto pb-14 text-black bg-slate-950 w-full ml-[330px]">
                    <h1 className=" font-bold text-white text-2xl">
                        EKİPMANLAR
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Ekipmanlarımdan birkaçı
                    </p>
            </div>
                <div className="py-6 container mx-auto pb-14 text-black bg-slate-950 w-full ml-44">
                    <Photos/>
                </div>


        </div>
</div>
)
};

export default Equipments;
