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

const GraphicDesign = () => {
       const projects = [
        {
            id: 'gd-brand-identity',
            title: 'Tech Startup Branding',
            description: 'Complete brand identity package including logo, color palette, and brand guidelines',
            thumbnail: '/images/graphic/branding.jpg',
            date: '2024',
            category: 'Branding',
            tags: ['Logo Design', 'Brand Guide', 'Identity']
        },
        {
            id: 'gd-poster-campaign',
            title: 'Concert Poster Series',
            description: 'Series of promotional posters for annual music festival with bold typography',
            thumbnail: '/images/graphic/posters.jpg',
            date: '2023',
            category: 'Print Design',
            tags: ['Posters', 'Typography', 'Print']
        },
        {
            id: 'gd-packaging',
            title: 'Product Packaging Design',
            description: 'Eco-friendly packaging design for organic skincare product line',
            thumbnail: '/images/graphic/packaging.jpg',
            date: '2024',
            category: 'Packaging',
            tags: ['Packaging', 'Print', 'Branding']
        },
        {
            id: 'gd-magazine',
            title: 'Fashion Magazine Layout',
            description: 'Editorial design and layout for quarterly fashion and lifestyle magazine',
            thumbnail: '/images/graphic/magazine.jpg',
            date: '2023',
            category: 'Editorial',
            tags: ['Editorial', 'Layout', 'Typography']
        },
        // Add more Graphic Design projects...
    ];

    return (
        <>
        <Helmet><title>Graphic Design</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    

        </Helmet>
        <PreLoader/>
         <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <ServiceProjects serviceName="Graphic Design" serviceColor="#690600" projects={projects} />;
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
      );
}
 
export default GraphicDesign;