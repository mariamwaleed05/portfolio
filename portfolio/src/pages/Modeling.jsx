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

const Modeling = () => {
    const projects = [
        {
            id: 'md-character',
            title: 'Game Character Design',
            description: '3D character modeling and rigging for indie RPG game with detailed textures',
            thumbnail: '/images/3d/character.jpg',
            date: '2024',
            category: 'Character',
            tags: ['Character', 'Blender', 'Game Asset']
        },
        {
            id: 'md-product-viz',
            title: 'Product Visualization',
            description: 'Photorealistic 3D renders for furniture catalog and marketing materials',
            thumbnail: '/images/3d/furniture.jpg',
            date: '2023',
            category: 'Product',
            tags: ['Product', 'Rendering', 'Photorealistic']
        },
        {
            id: 'md-environment',
            title: 'Sci-Fi Environment',
            description: 'Futuristic cityscape environment for VR experience with lighting and atmosphere',
            thumbnail: '/images/3d/environment.jpg',
            date: '2024',
            category: 'Environment',
            tags: ['Environment', 'Sci-Fi', 'VR']
        },
        {
            id: 'md-architectural',
            title: 'Architectural Visualization',
            description: '3D architectural renders for residential real estate development project',
            thumbnail: '/images/3d/architecture.jpg',
            date: '2023',
            category: 'Architecture',
            tags: ['Architecture', 'Rendering', 'Real Estate']
        },
        // Add more 3D Modeling projects...
    ];

    return ( 
        <>
        <Helmet><title>3D Modeling</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <ServiceProjects serviceName="3D Modeling" serviceColor="#690600" projects={projects} />;
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Modeling;