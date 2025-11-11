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


const MotionGraphics = () => {
        const projects = [
        {
            id: 'mg-explainer',
            title: 'Product Explainer Video',
            description: 'Animated explainer video for SaaS platform showcasing key features and benefits',
            thumbnail: '/images/motion/explainer.jpg',
            date: '2024',
            category: 'Animation',
            tags: ['Animation', 'After Effects', 'Explainer']
        },
        {
            id: 'mg-logo-reveal',
            title: 'Brand Logo Animation',
            description: 'Dynamic logo reveal and brand animation package for social media',
            thumbnail: '/images/motion/logo-reveal.jpg',
            date: '2023',
            category: 'Branding',
            tags: ['Logo Animation', 'Branding', '2D']
        },
        {
            id: 'mg-social-ads',
            title: 'Social Media Ad Campaign',
            description: 'Series of animated social media ads for mobile app launch campaign',
            thumbnail: '/images/motion/social-ads.jpg',
            date: '2024',
            category: 'Advertising',
            tags: ['Social Media', 'Ads', 'Motion Design']
        },
        {
            id: 'mg-music-video',
            title: 'Music Video Effects',
            description: 'Visual effects and motion graphics for indie music video production',
            thumbnail: '/images/motion/music-video.jpg',
            date: '2023',
            category: 'Music Video',
            tags: ['VFX', 'Music Video', 'Editing']
        },
        {
            id: 'mg-title-sequence',
            title: 'Film Title Sequence',
            description: 'Opening title sequence for short film with kinetic typography',
            thumbnail: '/images/motion/title-sequence.jpg',
            date: '2024',
            category: 'Film',
            tags: ['Typography', 'Film', 'Cinema 4D']
        },
        // Add more Motion Graphics projects...
    ];
    return ( 
        <>
        <Helmet><title>Motion Graphics</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
         <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <ServiceProjects serviceName="Motion Graphics" serviceColor="#690600" projects={projects} />;
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default MotionGraphics;