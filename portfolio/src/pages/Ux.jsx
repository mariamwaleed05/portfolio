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

const Ux = () => {
          const projects = [
        {
            id: 'ux-transportation-app',
            title: 'Transportation App',
            description: 'Mobile app for booking private buses with real-time tracking and QR code verification',
            thumbnail: '/images/ux/transportation-app.jpg', 
            date: '2024',
            category: 'Mobile App',
            tags: ['UI Design', 'UX Research', 'Figma']
        },
        {
            id: 'ux-ecommerce-dashboard',
            title: 'E-Commerce Dashboard',
            description: 'Admin dashboard for managing online store inventory, sales analytics and customer data',
            thumbnail: '/images/ux/dashboard.jpg',
            date: '2023',
            category: 'Web Interface',
            tags: ['Dashboard', 'Data Viz', 'Wireframes']
        },
        {
            id: 'ux-healthcare-portal',
            title: 'Healthcare Portal',
            description: 'Patient management system with appointment scheduling and medical records',
            thumbnail: '/images/ux/healthcare.jpg',
            date: '2023',
            category: 'Web App',
            tags: ['Healthcare', 'UI/UX', 'Prototyping']
        },
        // Add more UX projects...
    ];

    return ( 
        <>
        <Helmet><title>UX/UI</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
                <ServiceProjects serviceName="UX/UI Design" serviceColor="#690600" projects={projects} />;
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Ux;