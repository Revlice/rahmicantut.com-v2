import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import Cards from "./Cards.jsx";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa"

function Home() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center bg-slate-950 flex-col">
                <Header />
                <div className="flex bg-slate-950 justify-center items-center flex-col text-white">
                    <div className="w-full flex justify-center items-center flex-col bg-slate-950 text-white overflow-hidden">
                        <HomePage />
                        <ul className="w-full flex lg:flex-row sm:flex-col justify-center items-center mt-6">
                            <li className="m-2 sm:m-4">
                                <Cards icons={<FaGithub />} title="Github" url="https://github.com/Revlice" />
                            </li>
                            <li className="m-2 sm:m-4">
                                <Cards icons={<FiInstagram />} title="Instagram" url="https://www.instagram.com/rahmicantut/" />
                            </li>
                            <li className="m-2 sm:m-4">
                                <Cards icons={<FaSpotify />} title="Spotify" url="https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk?si=29717a5b5f4e48ce" />
                            </li>
                        </ul>
                    </div>
                    <hr className="border-slate-600 border-2 w-full mt-8" />
                    <div className="w-full bg-slate-950 text-white flex justify-center items-center flex-col mt-12 p-6 lg:p-12">
                        <h1 className="text-center font-medium text-base sm:text-lg">
                            Copyright @ 2024 rahmicantut.com
                        </h1>
                        <h2 className="text-sm">coded by revlice</h2>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li className="text-2xl cursor-pointer hover:opacity-50">
                                <a href="https://github.com/Revlice" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </li>
                            <li className="text-2xl cursor-pointer hover:opacity-50">
                                <a href="https://www.instagram.com/rahmicantut/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram />
                                </a>
                            </li>
                            <li className="text-2xl cursor-pointer hover:opacity-50">
                                <a href="https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk?si=29717a5b5f4e48ce" target="_blank" rel="noopener noreferrer">
                                    <FaSpotify />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
