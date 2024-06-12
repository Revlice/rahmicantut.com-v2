import logo from '../assets/IMG_3813.jpeg';
import {NavLink,Link} from 'react-router-dom';

const Header = () => {

    const elemanlar = [
        { name: "Ekipmanlar", path: "/ekipmanlar" },
        { name: "Anılar", path: "/anilar" },
        { name: "Müzikler", path: "/muzikler" }
    ];



    return (
        <div className="lg:pt-6 2xl:pl-32 lg:pb-8 relative bg-slate-950 w-full top-0 left-0 pt-8  flex flex-col lg:flex-row items-center justify-evenly mx-auto">
            <div className="flex  items-center gap-x-4">
                <NavLink to="/">
                    <img className="w-24 sm:w-64 shadow-blue-300/30 shadow-2xl rounded-xl border-2 border-b-customCyan border-e-customYellow border-t-customYellow border-l-customCyan cursor-pointer" src={logo} alt="image" />
                </NavLink>
                <div className="sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="font-bold text-xl sm:text-2xl text-white cursor-text">Rahmican TUT</h1>
                    <h6 className="text-sm text-gray-300 sm:text-lg cursor-text mt-1">The Paramedic Student & Developer</h6>
                </div>
            </div>

            <ul className="flex flex-col lg:flex-row ">
                {elemanlar.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className="text-white font-semibold m-2 lg:m-4 hover:cursor-pointer hover:opacity-80"
                            activeClassName="bg-slate-800 text-customCyan p-1 rounded text-black"
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;