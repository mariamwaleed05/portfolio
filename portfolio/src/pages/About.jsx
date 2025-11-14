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
import LightRays from '../components/LightRays';

import id from '../imgs/id.png';

const About = () => {
    return (  
        <>
        <Helmet><title>Biography</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
      <SideMenu/>

  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffffff"
    raysSpeed={1.5}
    lightSpread={1.9}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.5}
    distortion={0.05}
    className="custom-rays"/>

    <ToggleButtons/>

<div className="idpic-container">
  <img src={id} alt="id" className="idpic" />
</div>

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