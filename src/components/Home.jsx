import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import Cards from "./Cards.jsx";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";


function Home() {

    return (
    <>
        <Header/>
        <div className="flex bg-slate-950 justify-center items-center flex-col text-white">
            <div className="w-full flex justify-center items-center 2xl:mr-38 flex-col bg-slate-950 text-white overflow-hidden">
                <HomePage/>
                <ul className="w-full sm:mx-auto md:flex-row md:flex justify-center items-center ml-12">
                    <li className="m-1"><Cards icons={<FaGithub/>} title="Github"/></li>
                    <li className="m-1"><Cards icons={<FiInstagram/>} title="Instagram"/></li>
                    <li className="m-1"><Cards icons={<FaSpotify/>} title="Spotify"/></li>
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
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50"><FaGithub/></li>
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50"><FiInstagram/></li>
                    <li className="text-2xl m-1 cursor-pointer hover:opacity-50"><FaSpotify/></li>
                </ul>

            </div>

        </div>
    </>
    )
}

export default Home
