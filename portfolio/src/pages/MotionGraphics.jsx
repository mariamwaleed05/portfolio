import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';
import ServiceProjects from './../components/ServiceProjects';
import { fetchProjectsByCategory } from '../data/services/api';

const MotionGraphics = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjectsByCategory('MotionGraphics');
                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    if (loading) return <PreLoader />;
       
    return ( 
        <>
            <Helmet>
                <title>Motion Graphics</title>
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
            </Helmet>
            <SideMenu/>
            <ToggleButtons/>
            <div className='main-wrapper'>
                <ServiceProjects 
                    serviceName="Motion Graphics" 
                    serviceColor="#690600" 
                    projects={projects} 
                    serviceType="MotionGraphics"
                />
            </div>
            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
     );
}
 
export default MotionGraphics;