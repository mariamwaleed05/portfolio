import React, { Component } from 'react';
import './ErrorPage.css';
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import PreLoader from './../common/PreLoader';

const ErrorPage = () => {
    return ( 
        <>
<PreLoader/>
        <SideMenu/>
        <div className='main-wrapper'>
        <ToggleButtons/>
        <h1 className='error'>ERROR 404</h1>
        </div>
        </>
     );
}
 
export default ErrorPage;