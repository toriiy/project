import React from 'react';
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;