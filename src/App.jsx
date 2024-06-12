import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Equipments from "./components/Equipments.jsx";

function App() {
    return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/ekipmanlar" element={<Equipments />} />
                </Routes>
            </>
    );
}

export default App;
