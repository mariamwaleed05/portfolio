import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';
import ServiceProjects from './../components/ServiceProjects';
import { modelingProjects } from './../data/services/modelingProjects';

const Modeling = () => {
   
    return ( 
        <>
        <Helmet><title>3D Modeling</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <ServiceProjects serviceName="3D Modeling" serviceColor="#690600" projects={modelingProjects} />;
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Modeling;