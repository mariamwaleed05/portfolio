import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom';
import { Monitor, Palette, FileText, Code, Camera, Box, Film } from 'lucide-react';
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import Footer from '../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import PreLoader from '../common/PreLoader';

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: 'UX/UI',
            icon: Monitor,
            color: '#690600',
            items: ['Mobile Apps', 'Web Interfaces', 'Wireframes'],
            link: '/ux' 
        },
        {
            id: 2,
            title: 'Graphic Design',
            icon: Palette,
            color: '#690600',
            items: ['Branding', 'Logos', 'Print Design'],
            link: '/GraphicDesign' 
        },
        {
            id: 3,
            title: 'Content Creation',
            icon: FileText,
            color: '#690600',
            items: ['Copywriting', 'Strategy', 'Social Media'],
            link: '/ContentCreation' 
        },
        {
            id: 4,
            title: 'Coding',
            icon: Code,
            color: '#690600',
            items: ['React', 'Node.js', 'Full Stack'],
            link: '/WebDevelopment' 
        },
        {
            id: 5,
            title: 'Photography',
            icon: Camera,
            color: '#690600',
            items: ['Product', 'Portrait', 'Commercial'],
            link: '/Photography' 
        },
        {
            id: 6,
            title: '3D Modeling',
            icon: Box,
            color: '#690600',
            items: ['Characters', 'Products', 'Environments'],
            link: '/Modeling' 
        },
        {
            id: 7,
            title: 'Motion Graphics',
            icon: Film,
            color: '#690600',
            items: ['Animation', 'Video Editing', 'Effects'],
            link: '/MotionGraphics' 
        }
    ];

    return (
        <>
            <Helmet>
                <title>My Services</title>
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
            </Helmet>
            <PreLoader />
            <SideMenu />
            <ToggleButtons />
            <div className='main-wrapper'>
                <div className="services-container">
                    <div className="services-header">
                        <h1 className="services-title">Services</h1>
                        <p className="services-subtitle">WHAT I OFFER</p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
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
    const Icon = service.icon;
    
    return (
        <Link to={service.link} className="service-card-link">
            <div
                className={`service-card ${isHovered ? 'hovered' : ''}`}
                style={{
                    backgroundColor: service.color,
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: isHovered 
                        ? `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${service.color}40`
                        : '0 10px 30px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <div className="card-pin">
                    <RealisticPin />
                </div>
                
                <div className="card-content">
                    <div className={`icon-container ${isHovered ? 'rotating' : ''}`}>
                        <Icon size={48} color="#ffffffff" strokeWidth={2} />
                    </div>
                    
                    <h2 className="card-title">{service.title}</h2>
                    
                    <div className={`items-list ${isHovered ? 'visible' : ''}`}>
                        {service.items.map((item, i) => (
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