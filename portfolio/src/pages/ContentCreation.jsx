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

const ContentCreation = () => {
        const projects = [
        {
            id: 'cc-social-campaign',
            title: 'Social Media Campaign',
            description: 'Multi-platform content strategy for sustainable fashion brand launch',
            thumbnail: '/images/content/social-campaign.jpg',
            date: '2024',
            category: 'Social Media',
            tags: ['Strategy', 'Copywriting', 'Instagram']
        },
        {
            id: 'cc-blog-series',
            title: 'Tech Blog Series',
            description: 'SEO-optimized blog content series on AI and machine learning trends',
            thumbnail: '/images/content/blog.jpg',
            date: '2023',
            category: 'Copywriting',
            tags: ['Blog', 'SEO', 'Tech Writing']
        },
        {
            id: 'cc-email-marketing',
            title: 'Email Marketing Flow',
            description: 'Automated email sequence for e-commerce customer retention',
            thumbnail: '/images/content/email.jpg',
            date: '2024',
            category: 'Email Marketing',
            tags: ['Email', 'Copywriting', 'Automation']
        },
        {
            id: 'cc-video-scripts',
            title: 'YouTube Video Scripts',
            description: 'Engaging scripts for educational YouTube channel on web development',
            thumbnail: '/images/content/youtube.jpg',
            date: '2023',
            category: 'Video Content',
            tags: ['Scripts', 'YouTube', 'Education']
        },
        // Add more Content Creation projects...
    ];
    return ( 
        <>
        <Helmet><title>Content Creation</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
         <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
               <ServiceProjects serviceName="Content Creation" serviceColor="#690600" projects={projects} />;
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        
        </>
     );
}
 
export default ContentCreation;