import macbook from '../assets/photos/apple-macbook-air-2020-space-grey-01-800x800.webp';
import airpods from '../assets/photos/airpods.png';
import mouse from '../assets/photos/77828084.webp';
import keyboard from '../assets/photos/redragon.webp';
import monitor from '../assets/photos/james-donkey-jd27fg1ms144.webp';
import hub from '../assets/photos/hub-Photoroom.png';
import {motion} from "framer-motion";


const Photos = ()=>{
    const photos = [
        {src:macbook, name:'MacBook Air M1 16GB' },
        {src:monitor, name:'James Donkey 1MS 144HZ' },
        {src:keyboard, name:'Redragon K552' },
        {src:mouse, name:'Razer Deathadder Essential White ' },
        {src:hub, name:'Çoklu Type-C Dönüştürücü' },
        {src:airpods, name:'Airpods Pro' }


    ]

    return (
        <motion.div initial={{opacity:0,translateY:-150}} animate={{opacity:1,translateY:0}} className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {photos.map((item, index) => (
                <div key={index} className="flex flex-col text-white border-2 border-blue-300/30 p-4 rounded-md justify-center items-center h-full">
                    <div className="mb-4 flex justify-center items-center">
                        <h1 className="text-lg sm:text-md"> {item.name} </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-48 h-48 object-contain" src={item.src} alt={item.name} />
                    </div>
                </div>
            ))}
        </motion.div>
    );
};


export default Photos;
