import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ProfileSection from './../components/ProfileSection';
import Baskets from './../components/Basket';
import Testimonials from './../components/Testimonials';
import MissionVision from './../components/MissionVision';
import Certificates from './../components/Certificates';
import Footer from './../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import ToggleButtons from '../components/ToggleButtons';
import PreLoader from '../common/PreLoader';

const About = () => {
    return (  
        <>
        <Helmet><title>Biography</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
      <SideMenu/>
      <ToggleButtons/>

      <div className='main-wrapper'>
      <ProfileSection />
      <Baskets />
      <Testimonials />
      <MissionVision />
      <Certificates />
      </div>

      <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}
 
export default About;