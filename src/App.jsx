import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Equipments from "./components/Equipments.jsx";
import Muzikler from './components/Muzikler.jsx';
import Anilar from './components/Anilar.jsx';

function App() {
    return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/ekipmanlar" element={<Equipments />} />
                    <Route path="/anilar" element={<Anilar />} />
                    <Route path="/muzikler" element={<Muzikler />} />
                </Routes>
            </>
    );
}

export default App;
