import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';
import ServiceProjects from './../components/ServiceProjects';
import { contentCreationProjects } from './../data/services/contentCreationProjects';

const ContentCreation = () => {
       
    return ( 
        <>
        <Helmet><title>Content Creation</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
         <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
               <ServiceProjects serviceName="Content Creation" serviceColor="#690600" projects={contentCreationProjects} />;
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        
        </>
     );
}
 
export default ContentCreation;