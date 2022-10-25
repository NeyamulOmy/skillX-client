import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../layout/navbar/NavigationBar';
const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;