import React, { Component } from 'react';
import SideMenu from '../common/SideMenu';
import Lanyard from '../components/Lanyard';
import ProfileSection from './../components/ProfileSection';
import Baskets from './../components/Basket';
import Testimonials from './../components/Testimonials';
import MissionVision from './../components/MissionVision';
import Certificates from './../components/Certificates';
import Footer from './../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import ToggleButtons from '../components/ToggleButtons';

const About = () => {
    return (  
        <>
      <SideMenu/>
      <ToggleButtons/>
      <div className='main-wrapper'>
      <Lanyard />
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