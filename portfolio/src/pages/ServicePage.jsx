import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';
import ServiceProjects from './../components/ServiceProjects';
import { fetchProjectsByCategory } from '../data/services/api'; 

const ServicePage = () => {
    const { serviceType } = useParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const standardServiceKey = useMemo(() => {
        if (serviceType === 'Coding') return 'WebDevelopment';
        if (serviceType === 'UX' || serviceType === 'UX-UI') return 'Ux';
        if (serviceType === 'Graphic Design') return 'GraphicDesign';
        if (serviceType === 'Content Creation') return 'ContentCreation';
        if (serviceType === '3D Modeling') return 'Modeling';
        if (serviceType === 'Motion Graphics') return 'MotionGraphics';
        return serviceType;
    }, [serviceType]);

    const serviceConfig = useMemo(() => {
        const configs = {
            'Ux': { title: 'UX/UI', serviceName: 'UX/UI Design', serviceColor: '#690600' },
            'GraphicDesign': { title: 'Graphic Design', serviceName: 'Graphic Design', serviceColor: '#690600' },
            'ContentCreation': { title: 'Content Creation', serviceName: 'Content Creation', serviceColor: '#690600' },
            'WebDevelopment': { title: 'Coding', serviceName: 'Web Development', serviceColor: '#690600' },
            'Photography': { title: 'Photography', serviceName: 'Photography', serviceColor: '#690600' },
            'Modeling': { title: '3D Modeling', serviceName: '3D Modeling', serviceColor: '#690600' },
            'MotionGraphics': { title: 'Motion Graphics', serviceName: 'Motion Graphics', serviceColor: '#690600' }
        };
        return configs[standardServiceKey] || null;
    }, [standardServiceKey]);

    useEffect(() => {
        if (!serviceConfig) {
            setLoading(false);
            return;
        }

        const loadProjects = async () => {
            setLoading(true);
            try {
                const data = await fetchProjectsByCategory(standardServiceKey);
                setProjects(data);
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, [standardServiceKey, serviceConfig]);

    if (loading) return <PreLoader />;

    if (error || !serviceConfig) {
        return (
            <>
                <Helmet>
                    <title>Service Not Found</title>
                </Helmet>
                <SideMenu/>
                <ToggleButtons/>
                <div className='main-wrapper'>
                    <div style={{ padding: '150px 20px', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                            {!serviceConfig ? 'Service Not Found' : 'Error Loading Projects'}
                        </h1>
                        <p style={{ marginBottom: '30px' }}>
                            {!serviceConfig 
                                ? `The service "${serviceType}" does not exist.` 
                                : 'We encountered an issue connecting to the database.'}
                        </p>
                        <a href="/services" className="btn-hover" style={{ 
                            color: '#690600', 
                            textDecoration: 'underline', 
                            fontSize: '1.2rem' 
                        }}>
                            Return to Services
                        </a>
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
            <SideMenu/>
            <ToggleButtons/>
            <div className='main-wrapper'>
               <ServiceProjects 
                    serviceName={serviceConfig.serviceName} 
                    serviceColor={serviceConfig.serviceColor} 
                    projects={projects} 
                    serviceType={standardServiceKey} 
                />
            </div>
            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}
 
export default ServicePage;