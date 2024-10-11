import Header from './Header.jsx';
import Photos from './Photos.jsx';
import {motion} from "framer-motion";
const Equipments = () => {


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950">
            <Header />
            <div className="w-full pt-8 flex flex-col justify-center items-center">
                <div className="py-6 container mx-auto pb-14 text-white bg-slate-950 w-full sm:px-4">
                        <h1 className="font-bold text-2xl text-center">
                        EKİPMANLAR
                    </h1>
                    <p className="text-gray-300 mt-2 text-center">
                        Ekipmanlarımdan birkaçı
                    </p>
                </div>
                <div className="py-6 container mx-auto pb-14 w-full">
                    <Photos />
                </div>
            </div>
        </div>
        </div>
    );

};

export default Equipments;
