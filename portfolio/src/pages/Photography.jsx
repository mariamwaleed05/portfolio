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
import { photographyProjects } from '../data/services/photographyProjects';


const Photography = () => {

    return (
        <>
        <Helmet><title>Photography</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
      <ServiceProjects serviceName="Photoghraphy" serviceColor="#690600" projects={photographyProjects} />;

</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        
        </>
      );
}
 
export default Photography;