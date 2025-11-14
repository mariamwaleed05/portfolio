import React from 'react';

const ServicesInHome = () => {
  const services = [
    {
      title: 'UX/UI',
      path: '/Ux',
      icon: '📱'
    },
    {
      title: 'GRAPHIC DESIGN',
      path: '/GraphicDesign',
      icon: '🎨'
    },
    {
      title: 'CONTENT CREATION',
      path: '/ContentCreation',
      icon: '📸'
    },
    {
      title: 'WEB DEVELOPMENT',
      path: '/WebDevelopment',
      icon: '💻'
    },
    {
      title: 'PHOTOGRAPHY',
      path: '/Photography',
      icon: '📷'
    },
    {
      title: 'MODELING',
      path: '/Modeling',
      icon: '🎭'
    },
    {
      title: 'MOTION GRAPHICS',
      path: '/MotionGraphics',
      icon: '🎬'
    }
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="services-section">
    
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            onClick={() => handleNavigation(service.path)}
          >
            <div className="pin"></div>
            <div className="card-content">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesInHome;