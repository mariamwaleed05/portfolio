import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { supabase } from '../Supabase'; 
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';

import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const { data, error } = await supabase
        .from('PortfolioBlog')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      setPortfolioData(data);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <PreLoader />;

  const mainContent = portfolioData[0] || {};
  
  const sections = portfolioData.filter(item => item.Process);

  const tipsList = portfolioData
    .map(item => item.Tips)
    .filter(tip => tip && tip.trim() !== "");

  return (
    <>
      <Helmet>
        <title>{mainContent.Title || "Portfolio Guide"}</title>
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />
      </Helmet>
      
      <SideMenu />
      <ToggleButtons />

      <div className='main-wrapper'>

        <div className='portfolio-container'>
          <header className="portfolio-header portfolio-header-animate">
            <h1 className="portfolio-main-title">
              {mainContent.Title}
            </h1>
            <p className="portfolio-subtitle">
              {mainContent.Subtitle}
            </p>
            <div className="portfolio-header-divider portfolio-divider-animate"></div>
          </header>

          <section className="portfolio-intro-section portfolio-intro-animate">
            <p className="portfolio-intro-text">
              {mainContent.Description}
            </p>
          </section>

          <div className="portfolio-sections-container">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`portfolio-section-card portfolio-card-animate-${index + 1} ${activeSection === section.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div 
                  className="portfolio-card-icon" 
                  style={{ transform: activeSection === section.id ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)' }}
                >
                  {section.Icon} 
                </div>
                <h2 
                  className="portfolio-card-title" 
                  style={{ color: activeSection === section.id ? '#dc2626' : '#f3f4f6' }}
                >
                  {section.Process}
                </h2>
                <p 
                  className="portfolio-card-content" 
                  style={{ color: activeSection === section.id ? '#d1d5db' : '#9ca3af' }}
                >
                  {section.Explantaion || section.Explanation}
                </p>
                <div 
                  className="portfolio-card-border" 
                  style={{ width: activeSection === section.id ? '100%' : '0' }}
                ></div>
              </div>
            ))}
          </div>

          <section className="portfolio-tips-section portfolio-tips-animate">
            <h2 className="portfolio-tips-title">Pro Tips</h2>
            <div className="portfolio-tips-grid">
              {tipsList.length > 0 ? (
                tipsList.map((tip, index) => (
                  <div key={index} className="portfolio-tip-card">
                    <span className="portfolio-tip-number">{String(index + 1).padStart(2, '0')}</span>
                    <p className="portfolio-tip-text">{tip}</p>
                  </div>
                ))
              ) : (
                <p style={{color: '#9ca3af'}}>No tips available currently.</p>
              )}
            </div>
          </section>

          <footer className="portfolio-footer portfolio-footer-animate">
            <div>
              <h3 className="portfolio-footer-title">
                {mainContent.FooterTitle}
              </h3>
              <p className="portfolio-footer-text">
                {mainContent.FooterBio}
              </p>
            </div>
          </footer>
        </div>
      </div>

      <Footer />
      <BackToTop />
      <TextMeButton />
    </>
  );
};

export default Portfolio;