import React, { useMemo } from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';
import ServiceProjects from './../components/ServiceProjects';
import { uxProjects } from './../data/services/uxProjects';
import { graphicDesignProjects } from './../data/services/graphicDesignProjects';
import { contentCreationProjects } from './../data/services/contentCreationProjects';
import { webDevelopmentProjects } from './../data/services/webDevelopmentProjects';
import { photographyProjects } from './../data/services/photographyProjects';
import { modelingProjects } from './../data/services/modelingProjects';
import { motionGraphicsProjects } from './../data/services/motionGraphicsProjects';

const ServicePage = () => {
    const { serviceType } = useParams();
    
    const serviceConfig = useMemo(() => {
        const configs = {
            'Ux': {
                title: 'UX/UI',
                serviceName: 'UX/UI Design',
                serviceColor: '#690600',
                projects: uxProjects || []
            },
            'GraphicDesign': {
                title: 'Graphic Design',
                serviceName: 'Graphic Design',
                serviceColor: '#690600',
                projects: graphicDesignProjects || []
            },
            'ContentCreation': {
                title: 'Content Creation',
                serviceName: 'Content Creation',
                serviceColor: '#690600',
                projects: contentCreationProjects || []
            },
            'WebDevelopment': {
                title: 'Coding',
                serviceName: 'Web Development',
                serviceColor: '#690600',
                projects: webDevelopmentProjects || []
            },
            'Photography': {
                title: 'Photography',
                serviceName: 'Photography',
                serviceColor: '#690600',
                projects: photographyProjects || []
            },
            'Modeling': {
                title: '3D Modeling',
                serviceName: '3D Modeling',
                serviceColor: '#690600',
                projects: modelingProjects || []
            },
            'MotionGraphics': {
                title: 'Motion Graphics',
                serviceName: 'Motion Graphics',
                serviceColor: '#690600',
                projects: motionGraphicsProjects || []
            }
        };

        
        return configs[serviceType] || { 
            title: 'Service Not Found',
            serviceName: 'Unknown Service',
            serviceColor: '#690600',
            projects: []
        };
    }, [serviceType]);
    
    if (!serviceConfig || !serviceConfig.projects) {
        console.error('ServiceConfig or projects is missing:', serviceConfig);
        return (
            <>
                <Helmet>
                    <title>Service Not Found</title>
                    <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
                </Helmet>
                <PreLoader/>
                <SideMenu/>
                <ToggleButtons/>
                <div className='main-wrapper'>
                    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                        <h1>Service Not Found</h1>
                        <p>The service "{serviceType}" could not be loaded.</p>
                        <a href="/services" style={{ color: '#690600' }}>Back to Services</a>
                    </div>
                </div>
                <Footer/>
                <BackToTop/>
                <TextMeButton/>
            </>
        );
    }

    return ( 
        <>
            <Helmet>
                <title>{serviceConfig.title}</title>
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
            </Helmet>
            <PreLoader/>
            <SideMenu/>
            <ToggleButtons/>
            <div className='main-wrapper'>
               <ServiceProjects 
                    serviceName={serviceConfig.serviceName} 
                    serviceColor={serviceConfig.serviceColor} 
                    projects={serviceConfig.projects} 
                    serviceType={serviceType} 
                />
            </div>
            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}
 
export default ServicePage;