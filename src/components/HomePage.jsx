import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import {motion} from "framer-motion";



const HomePage = () => {

    return(
        <motion.div initial={{opacity:0,translateX:200}} animate={{opacity:1,translateX:0}} className=" h-screen min-w-full w-full lg:pl-10 flex justify-center items-center flex-col ">
            <div className="p-2  border-4 rounded-md bg-blue-300/5 border-blue-300/30 shadow-blue-300/30 shadow-2xl  ">
                <h1 className="font-bold text-2xl lg:p-6 p-6">
                    Web Siteme,
                    <br/>
                    Hoşgeldin!

                </h1>
                <p className="text-gray-300 cursor-text p-6 lg:p-6  ">
                    4 Ocak 2005'te Yalova'da dünyaya geldim.
                    Sakarya Uygulamalı Bilimler Üniversitesi İlk ve Acil Yardım(Paramedik) 2.sınıf öğrencisiyim.
                    <br/>
                    Ayrıyetten 2.üniversite olarak Ankara Üniversitesi Web Tasarım ve Kodlama bölümünü okumaktayım.
                    <br/>

                    Bir taraftanda yazılım öğrenmeye devam ediyorum ve kendimi geliştirmek için çabalıyorum.
                    <br/>
                    <br/>

                    <hr className="border-blue-300/30 "/>
                    <br/>

                    Bu sitedeki amaç hem kendi portfölyeme bir proje eklemek hemde benim hakkımda birkaç bilgi edinmen!

                </p>
                <ul className="flex px-5">
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50 ">
                        <a href="https://github.com/Revlice" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>


                    </li>
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50">
                        <a href="https://www.instagram.com/rahmicantut/" target="_blank" rel="noopener noreferrer">
                            <FiInstagram/>
                        </a>
                    </li>
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50">
                        <a href="https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk?si=29717a5b5f4e48ce" target="_blank" rel="noopener noreferrer">
                        <FaSpotify/>
                        </a>
                    </li>
                </ul>

            </div>


        </motion.div>
)
};

export default HomePage;

