import Header from './Header.jsx';
import {motion} from "framer-motion";
const Muzikler = ()=>{

    return(
        <div className="bg-slate-950 w-full h-screen">
            <Header/>
            <motion.div initial={{translateY:150}} animate={{translateY:0}} className="grid place-items-center sm:flex sm:flex-col bg-slate-950 w-full ">
                <ul className="grid grid-cols-3 sm:flex sm:flex-col  gap-28 mt-12 ">
                    <li className="shadow-2xl shadow-white/50" style={{borderRadius: '12px', overflow: 'hidden'}}>
                        <iframe
                            style={{borderRadius: '12px'}}
                            src="https://open.spotify.com/embed/playlist/3HwfiAAOAkNDrEVLo7kse6?utm_source=generator"
                            width="500"
                            height="500"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                    <li className="shadow-2xl shadow-amber-600"  style={{borderRadius: '12px', overflow: 'hidden'}}>
                        <iframe
                            style={{borderRadius: '12px'}}
                            src="https://open.spotify.com/embed/playlist/1JYq7sAKTBW7Ad37rczxr1?utm_source=generator"
                            width="500"
                            height="500"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                </ul>


            </motion.div>
        </div>

    )
};

export default Muzikler;
