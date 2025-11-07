import React, { Component } from 'react';
import SideMenu from '../common/SideMenu';
import Lanyard from '../components/Lanyard';
import ProfileSection from './../components/ProfileSection';
import Baskets from './../components/Basket';
import Testimonials from './../components/Testimonials';
import MissionVision from './../components/MissionVision';
import Certificates from './../components/Certificates';

const About = () => {
    return (  
        <>
      <SideMenu/>
      <div className='main-wrapper'>
      <Lanyard />
      <ProfileSection />
      <Baskets />
      <Testimonials />
      <MissionVision />
      <Certificates />
      </div>
        </>
    );
}
 
export default About;