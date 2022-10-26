import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import NavigationBar from '../layout/navbar/NavigationBar';
const Main = () => {
    return (
        <div id='main'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;