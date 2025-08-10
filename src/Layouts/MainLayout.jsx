import React from 'react';
import Navbar from '../Components/Common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Common/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer/>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;