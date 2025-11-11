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

const WebDevelopment = () => {
         const projects = [
        {
            id: 'wd-saas-platform',
            title: 'SaaS Dashboard Platform',
            description: 'Full-stack web application with React, Node.js, and MongoDB for project management',
            thumbnail: '/images/coding/saas.jpg',
            date: '2024',
            category: 'Full Stack',
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 'wd-ecommerce',
            title: 'E-Commerce Store',
            description: 'Custom online store with payment integration and inventory management',
            thumbnail: '/images/coding/ecommerce.jpg',
            date: '2023',
            category: 'Web App',
            tags: ['React', 'Stripe', 'PostgreSQL']
        },
        {
            id: 'wd-portfolio',
            title: 'Creative Portfolio Site',
            description: 'Animated portfolio website with custom CMS and smooth interactions',
            thumbnail: '/images/coding/portfolio.jpg',
            date: '2024',
            category: 'Website',
            tags: ['React', 'GSAP', 'Headless CMS']
        },
        {
            id: 'wd-api',
            title: 'RESTful API Service',
            description: 'Scalable backend API with authentication and real-time data processing',
            thumbnail: '/images/coding/api.jpg',
            date: '2023',
            category: 'Backend',
            tags: ['Node.js', 'Express', 'JWT']
        },
        // Add more Web Development projects...
    ];
    return ( 
        <>
        <Helmet><title>Web Development</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <ServiceProjects serviceName="Web Development" serviceColor="#690600" projects={projects} />;

</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default WebDevelopment;