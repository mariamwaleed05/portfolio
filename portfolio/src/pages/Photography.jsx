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


const Photography = () => {
         const projects = [
        {
            id: 'ph-product-shoot',
            title: 'Luxury Watch Collection',
            description: 'High-end product photography for premium watchmaker with studio lighting',
            thumbnail: '/images/photography/watches.jpg',
            date: '2024',
            category: 'Product',
            tags: ['Product', 'Studio', 'Luxury']
        },
        {
            id: 'ph-portraits',
            title: 'Corporate Headshots',
            description: 'Professional portrait session for tech company executives',
            thumbnail: '/images/photography/portraits.jpg',
            date: '2023',
            category: 'Portrait',
            tags: ['Portrait', 'Corporate', 'Studio']
        },
        {
            id: 'ph-commercial',
            title: 'Restaurant Campaign',
            description: 'Food photography and commercial shoot for upscale restaurant brand',
            thumbnail: '/images/photography/food.jpg',
            date: '2024',
            category: 'Commercial',
            tags: ['Food', 'Commercial', 'Lifestyle']
        },
        {
            id: 'ph-lifestyle',
            title: 'Fashion Lifestyle Shoot',
            description: 'Outdoor lifestyle photography for sustainable fashion brand lookbook',
            thumbnail: '/images/photography/fashion.jpg',
            date: '2023',
            category: 'Fashion',
            tags: ['Fashion', 'Lifestyle', 'Editorial']
        },
        // Add more Photography projects...
    ];
    return (
        <>
        <Helmet><title>Photography</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
               <ServiceProjects serviceName="Photoghraphy" serviceColor="#690600" projects={projects} />;

</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        
        </>
      );
}
 
export default Photography;