import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import SocialBar from '../components/SocialBar';

const HomeLayouts = () => {
    return (
        <div className="bg">
            <Navbar></Navbar>
            <SocialBar></SocialBar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;