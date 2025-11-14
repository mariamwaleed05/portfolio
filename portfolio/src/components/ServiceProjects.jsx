import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Tag, ExternalLink, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './ServiceProjects.css';

const ServiceProjects = ({ serviceName, serviceColor = '#690600', projects, serviceType }) => { 
        const [hoveredProject, setHoveredProject] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();



    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleProjectClick = (projectId) => {
navigate(`/project/${projectId}`, { state: { fromServiceType: serviceType } });    };

    return (
        <div className="service-projects-container">
            <div 
                className="floating-shapes"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
                <div className="shape shape-1" style={{ backgroundColor: `${serviceColor}20` }}></div>
                <div className="shape shape-2" style={{ backgroundColor: `${serviceColor}15` }}></div>
                <div className="shape shape-3" style={{ backgroundColor: `${serviceColor}10` }}></div>
            </div>

            <div className="projects-header">
                <a href="/services" className="back-button">
                    <ArrowLeft size={20} />
                    <span>Back to Services</span>
                    <div className="button-shine"></div>
                </a>
                
                <div className="title-section">
                    <div className="sparkle-container">
                        <Sparkles className="sparkle sparkle-1" size={24} color={serviceColor} />
                        <Sparkles className="sparkle sparkle-2" size={16} color={serviceColor} />
                    </div>
                    <h1 className="service-title">{serviceName}</h1>
                    <p className="service-subtitle">PORTFOLIO PROJECTS</p>
                    <div className="title-underline" style={{ backgroundColor: serviceColor }}>
                        <div className="underline-glow" style={{ backgroundColor: serviceColor }}></div>
                    </div>
                    <div className="projects-count">{projects.length} Projects</div>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        isHovered={hoveredProject === project.id}
                        onHover={() => setHoveredProject(project.id)}
                        onLeave={() => setHoveredProject(null)}
                        serviceColor={serviceColor}
                        onClick={() => handleProjectClick(project.id)}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index, isHovered, onHover, onLeave, serviceColor, onClick }) => {
    return (
        <div
            className="project-card-link"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <div
                className={`project-card ${isHovered ? 'hovered' : ''}`}
                style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--service-color': serviceColor,
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${serviceColor}40, transparent)` }}></div>
                
                <div className="pin-container">
                    <RealisticPin />
                </div>

                <div className="image-container">
                    <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="project-image"
                    />
                    <div className="image-overlay" style={{ backgroundColor: `${serviceColor}dd` }}>
                        <div className="overlay-content">
                            <ExternalLink size={20} />
                            <span className="view-text">View Project</span>
                        </div>
                    </div>
                    <div className="image-gradient"></div>
                </div>

                <div className="card-content">
                    <div className="content-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="title-decoration" style={{ backgroundColor: serviceColor }}></div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-meta">
                        <div className="meta-item">
                            <div className="meta-icon">
                                <Calendar size={14} />
                            </div>
                            <span className="meta-text">{project.date}</span>
                        </div>
                        <div className="meta-divider"></div>
                        <div className="meta-item">
                            <div className="meta-icon">
                                <Tag size={14} />
                            </div>
                            <span className="meta-text">{project.category}</span>
                        </div>
                    </div>

                    <div className="tags-container">
                        {project.tags.map((tag, i) => (
                            <span 
                                key={i} 
                                className="tag"
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
                </div>

                <div className="decorative-corner" style={{ backgroundColor: serviceColor }}>
                    <div className="corner-shine"></div>
                </div>

                <div className="card-particles">
                    <div className="particle particle-1" style={{ backgroundColor: serviceColor }}></div>
                    <div className="particle particle-2" style={{ backgroundColor: serviceColor }}></div>
                    <div className="particle particle-3" style={{ backgroundColor: serviceColor }}></div>
                </div>
            </div>
        </div>
    );
};

const RealisticPin = () => {
    return (
        <div className="pin">
            <div className="pin-shadow"></div>
            <div className="pin-body">
                <div className="pin-shine"></div>
            </div>
            <div className="pin-needle"></div>
        </div>
    );
};

export default ServiceProjects;