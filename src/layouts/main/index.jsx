import React from 'react';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;