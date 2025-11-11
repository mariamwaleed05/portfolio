import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';

const Modeling = () => {
    return ( 
        <>
        <Helmet><title>3D Modeling</title></Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <Title title="Modeling" className="maintitle" />
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Modeling;