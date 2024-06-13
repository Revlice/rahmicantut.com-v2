import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import Cards from "./Cards.jsx";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa"


function Home() {



    return (
    <div className="flex justify-center items-center bg-slate-950 flex-col">
        <Header/>
        <div className="flex bg-slate-950 justify-center items-center flex-col text-white">
            <div className="w-full flex justify-center items-center 2xl:mr-[4rem] flex-col bg-slate-950 text-white overflow-hidden">
                <HomePage/>
                <ul className="w-full sm:mx-auto md:flex-row md:flex justify-center 2xl:ml-[3rem]   items-center ml-12">
                    <li className="m-1"><Cards icons={<FaGithub/>} title="Github" url="https://github.com/Revlice"/></li>
                    <li className="m-1"><Cards icons={<FiInstagram/>} title="Instagram" url="https://www.instagram.com/rahmicantut/"/></li>
                    <li className="m-1"><Cards icons={<FaSpotify/>} title="Spotify" url="https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk?si=29717a5b5f4e48ce" /></li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <hr className="border-slate-600 border-2 w-full"/>
            <div className="w-full bg-slate-950 text-white flex justify-center items-center flex-col mt-12 p-12">
                <h1 className="text-center font-medium">
                    Copyright @ 2024 rahmicantut.com </h1>
                <h2 className="text-sm ">coded by revlice</h2>
                <ul className="flex px-5 ">
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
                        <a href="https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk?si=29717a5b5f4e48ce"
                           target="_blank" rel="noopener noreferrer">
                            <FaSpotify/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    </div>
    )
}

export default Home
