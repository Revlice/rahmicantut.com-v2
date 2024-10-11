import logo from '../assets/IMG_3813.jpeg';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const elemanlar = [
        {name:'Projeler',path:"/projeler"},
        { name: "Ekipmanlar", path: "/ekipmanlar" },
        { name: "Anılar", path: "/anilar" },
        { name: "Müzikler", path: "/muzikler" }
    ];

    const handleReSize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setOpen(false); // Ekran genişlediğinde bottom sheet'i kapat
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleReSize);
        return () => {
            window.removeEventListener('resize', handleReSize);
        };
    }, []);

    const navbarItems = (
        <ul className={`flex flex-col lg:flex-row ${isMobile ? 'bg-slate-900 text-center' : ''}`}>
            {elemanlar.map((item, index) => (
                <li key={index} className={`${isMobile ? 'm-2 p-2' : 'm-2 lg:m-4'}`}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? 'bg-slate-800 text-customCyan p-1 rounded'
                                : `text-white font-semibold hover:cursor-pointer hover:opacity-80 ${isMobile ? 'block' : ''}`}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <motion.div className="lg:pt-6 2xl:pl-32 lg:pb-8 relative bg-slate-950 w-full top-0 left-0 pt-8 flex flex-col lg:flex-row items-center justify-evenly mx-auto">
            <div className="flex items-center gap-x-4">
                <NavLink to="/">
                    <img className="w-24 sm:w-64 shadow-blue-300/30 shadow-2xl rounded-xl border-2 border-b-customCyan border-e-customYellow border-t-customYellow border-l-customCyan cursor-pointer" src={logo} alt="image" />
                </NavLink>
                <div className="sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="font-bold text-xl sm:text-2xl text-white cursor-text">Rahmican TUT</h1>
                    <h6 className="text-sm text-gray-300 sm:text-lg cursor-text mt-1">The Paramedic Student & Developer</h6>
                </div>
            </div>

            {isMobile ? (
                <button onClick={() => setOpen(true)} className="text-white font-semibold m-2 lg:m-4 hover:cursor-pointer hover:opacity-80">
                    <FaBars />
                </button>
            ) : (
                navbarItems
            )}

            <BottomSheet open={open} onDismiss={() => setOpen(false)}>
                <div className="p-4 bg-slate-950">
                    {navbarItems}
                </div>
            </BottomSheet>
        </motion.div>
    );
};

export default Header;
