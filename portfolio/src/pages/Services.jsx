import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { supabase } from '../Supabase'; 
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import Footer from '../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import PreLoader from '../common/PreLoader';
import './Services.css'; 

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const { data, error } = await supabase
                    .from("Services")
                    .select("*")
                    .order('id', { ascending: true });

                if (error) throw error;
                
                setServicesData(data);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) return <PreLoader />;

    return (
        <>
            <Helmet>
                <title>My Services</title>
            </Helmet>
            
            <SideMenu />
            <ToggleButtons />
            
            <div className='main-wrapper'>
                <div className="services-container">
                    <div className="services-header">
                        <h1 className="services-title">Services</h1>
                        <p className="services-subtitle">WHAT I OFFER</p>
                    </div>
                   
                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                isHovered={hoveredCard === service.id}
                                onHover={() => setHoveredCard(service.id)}
                                onLeave={() => setHoveredCard(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <Footer />
            <BackToTop />
            <TextMeButton />
        </>
    );
}

const ServiceCard = ({ service, index, isHovered, onHover, onLeave }) => {
    
    const linkUrl = `/services/${service.Name_EN.replace(/\s+/g, '')}`;
    
    const tags = service.Tags_EN && Array.isArray(service.Tags_EN) 
        ? service.Tags_EN.map(tag => tag.Title) 
        : [];

    return (
        <Link to={linkUrl} className="service-card-link">
            <div
                className={`service-card ${isHovered ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <div className="card-pin">
                    <RealisticPin />
                </div>
                
                <div className="card-content">
                    <div className={`icon-container ${isHovered ? 'rotating' : ''}`}>
                        <img className='img'
                            src={service.Icon} 
                            alt={service.Name_EN}
                        />
                    </div>
                    
                    <h2 className="card-title">{service.Name_EN}</h2>
                    
                    <div className={`items-list ${isHovered ? 'visible' : ''}`}>
                        {tags.map((item, i) => (
                            <div key={i} className="item">• {item}</div>
                        ))}
                    </div>
                </div>
                
                <div className={`decorative-circle ${isHovered ? 'expanded' : ''}`}></div>
            </div>
        </Link>
    );
};

const RealisticPin = () => {
    return (
        <div className="pin-container">
            <div className="pin-card-shadow"></div>
            <div className="pin-body">
                <div className="pin-shine"></div>
                <div className="pin-tip-shadow"></div>
            </div>
            <div className="pin-needle"></div>
        </div>
    );
};

export default Services;