import React from 'react';
import Navbar from '../Components/Common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Common/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer/>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;