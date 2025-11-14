import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Tag, ExternalLink, Github, Globe, Layers, Clock, Users, Award } from 'lucide-react';
import './ProjectDetails.css';
import { Helmet } from "react-helmet";

import Footer from './../common/Footer';
import PreLoader from './../common/PreLoader';
import ToggleButtons from '../components/ToggleButtons';
import SideMenu from '../common/SideMenu';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';

const ProjectDetails = ({ project, serviceColor = '#690600' }) => {
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
           <Helmet>
     <title>Mariam's Portfolio</title>
     <meta name="description" content="Explore the design and development portfolio of Mariam, showcasing creative projects in UX/UI & Graphic Design." />
     <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
   </Helmet>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sloop" rel="stylesheet" />
   
<PreLoader/>
<SideMenu/>
<div className='main-wrapper'>
    <ToggleButtons/>
        <div className="project-details-container">
            <div 
                className="floating-shapes-details"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <div className="shape shape-1" style={{ backgroundColor: `${serviceColor}20` }}></div>
                <div className="shape shape-2" style={{ backgroundColor: `${serviceColor}15` }}></div>
            </div>

            <div className="project-header">
                <a href={project.backLink || '/ServicePage'} className="back-button-details">
                    <ArrowLeft size={20} />
                    <span>Back to Projects</span>
                    <div className="button-shine"></div>
                </a>

                <div className="project-hero">
                    <div className="hero-content">
                        <div className="hero-tags">
                            {project.tags.map((tag, i) => (
                                <span 
                                    key={i} 
                                    className="hero-tag"
                                    style={{ 
                                        backgroundColor: `${serviceColor}15`,
                                        borderColor: `${serviceColor}30`,
                                        color: serviceColor,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h1 className="project-title-hero">{project.title}</h1>
                        <p className="project-subtitle-hero">{project.description}</p>

                        <div className="project-meta-hero">
                            <div className="meta-item-hero">
                                <Calendar size={18} />
                                <span>{project.date}</span>
                            </div>
                            <div className="meta-divider-hero"></div>
                            <div className="meta-item-hero">
                                <Tag size={18} />
                                <span>{project.category}</span>
                            </div>
                            {project.duration && (
                                <>
                                    <div className="meta-divider-hero"></div>
                                    <div className="meta-item-hero">
                                        <Clock size={18} />
                                        <span>{project.duration}</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {project.links && (
                            <div className="project-links">
                                {project.links.live && (
                                    <a 
                                        href={project.links.live} 
                                        className="project-link-btn"
                                        style={{ backgroundColor: serviceColor }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe size={18} />
                                        <span>View Live</span>
                                    </a>
                                )}
                                {project.links.github && (
                                    <a 
                                        href={project.links.github} 
                                        className="project-link-btn secondary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="hero-image-container">
                        <div className="pin-container-hero">
                            <RealisticPin />
                        </div>
                        <img 
                            src={project.heroImage || project.thumbnail} 
                            alt={project.title}
                            className="hero-image"
                        />
                        <div className="hero-image-overlay" style={{ background: `linear-gradient(135deg, ${serviceColor}40, transparent)` }}></div>
                    </div>
                </div>
            </div>

            <div className="project-nav-sticky">
                <div className="project-nav">
                    <button 
                        className={`nav-tab ${activeSection === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveSection('overview')}
                        style={{ '--accent-color': serviceColor }}
                    >
                        Overview
                    </button>
                    <button 
                        className={`nav-tab ${activeSection === 'details' ? 'active' : ''}`}
                        onClick={() => setActiveSection('details')}
                        style={{ '--accent-color': serviceColor }}
                    >
                        Details
                    </button>
                    <button 
                        className={`nav-tab ${activeSection === 'gallery' ? 'active' : ''}`}
                        onClick={() => setActiveSection('gallery')}
                        style={{ '--accent-color': serviceColor }}
                    >
                        Gallery
                    </button>
                </div>
            </div>

            <div className="project-content">
                {activeSection === 'overview' && (
                    <div className="content-section">
                        <div className="section-grid">
                            <div className="main-column">
                                <div className="content-card">
                                    <h2 className="section-title">Project Overview</h2>
                                    <p className="section-text">{project.overview}</p>
                                </div>

                                {project.challenge && (
                                    <div className="content-card">
                                        <h2 className="section-title">The Challenge</h2>
                                        <p className="section-text">{project.challenge}</p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div className="content-card">
                                        <h2 className="section-title">The Solution</h2>
                                        <p className="section-text">{project.solution}</p>
                                    </div>
                                )}
                            </div>

                            <div className="sidebar-column">
                                {project.role && (
                                    <div className="info-card">
                                        <div className="info-icon" style={{ color: serviceColor }}>
                                            <Users size={24} />
                                        </div>
                                        <h3 className="info-title">My Role</h3>
                                        <p className="info-text">{project.role}</p>
                                    </div>
                                )}

                                {project.technologies && (
                                    <div className="info-card">
                                        <div className="info-icon" style={{ color: serviceColor }}>
                                            <Layers size={24} />
                                        </div>
                                        <h3 className="info-title">Technologies</h3>
                                        <div className="tech-list">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="tech-item">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.achievements && (
                                    <div className="info-card">
                                        <div className="info-icon" style={{ color: serviceColor }}>
                                            <Award size={24} />
                                        </div>
                                        <h3 className="info-title">Key Achievements</h3>
                                        <ul className="achievement-list">
                                            {project.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'details' && (
                    <div className="content-section">
                        <div className="details-grid">
                            {project.features && (
                                <div className="content-card full-width">
                                    <h2 className="section-title">Key Features</h2>
                                    <div className="features-grid">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="feature-card">
                                                <div className="feature-number" style={{ color: serviceColor }}>{i + 1}</div>
                                                <h4 className="feature-title">{feature.title}</h4>
                                                <p className="feature-description">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.process && (
                                <div className="content-card full-width">
                                    <h2 className="section-title">Design Process</h2>
                                    <div className="process-timeline">
                                        {project.process.map((step, i) => (
                                            <div key={i} className="process-step">
                                                <div className="step-marker" style={{ backgroundColor: serviceColor }}></div>
                                                <div className="step-content">
                                                    <h4 className="step-title">{step.title}</h4>
                                                    <p className="step-description">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeSection === 'gallery' && (
                    <div className="content-section">
                        <div className="gallery-grid">
                            {project.gallery && project.gallery.map((image, i) => (
                                <div key={i} className="gallery-item">
                                    <div className="gallery-pin">
                                        <RealisticPin />
                                    </div>
                                    <img src={image.url} alt={image.caption || `Gallery ${i + 1}`} />
                                    {image.caption && <p className="gallery-caption">{image.caption}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
<BackToTop/>
<TextMeButton/> 

</div>

<Footer/>
        </>
    );
};

const RealisticPin = () => {
    return (
        <div className="pin-details">
            <div className="pin-shadow-details"></div>
            <div className="pin-body-details">
                <div className="pin-shine-details"></div>
            </div>
            <div className="pin-needle-details"></div>
        </div>
    );
};

export default ProjectDetails;