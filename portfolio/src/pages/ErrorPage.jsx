import React, { Component } from 'react';
import './ErrorPage.css';
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';

const ErrorPage = () => {
    return ( 
        <>
        <SideMenu/>
        <ToggleButtons/>
        <h1 className='error'>ERROR 404</h1>
        </>
     );
}
 
export default ErrorPage;