import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Define Your Purpose",
      icon: "🎯",
      content: "Before diving into design, ask yourself: What do I want to achieve? Are you showcasing development skills, design work, or creative projects? Your portfolio should tell a clear story about who you are and what you can do."
    },
    {
      id: 2,
      title: "Choose Your Best Work",
      icon: "⭐",
      content: "Quality over quantity is key. Select 4-6 projects that showcase your strongest skills and diverse abilities. Each project should demonstrate problem-solving, creativity, and technical expertise. Remember, your portfolio is only as strong as your weakest project."
    },
    {
      id: 3,
      title: "Craft Compelling Case Studies",
      icon: "📝",
      content: "Don't just show the final product. Walk viewers through your process: the problem, your approach, challenges faced, and solutions implemented. Include visuals, code snippets, or design iterations. This demonstrates your thinking process and professionalism."
    },
    {
      id: 4,
      title: "Design for User Experience",
      icon: "✨",
      content: "Your portfolio itself is a project that showcases your skills. Keep navigation intuitive, load times fast, and mobile responsiveness perfect. Use white space effectively, maintain consistent typography, and ensure accessibility. A clean, professional design speaks volumes."
    },
    {
      id: 5,
      title: "Write an Engaging About Section",
      icon: "👤",
      content: "Make it personal but professional. Share your journey, passions, and what drives you. Include your skills, experience, and what makes you unique. Add a professional photo and contact information. People hire people, not just portfolios."
    },
    {
      id: 6,
      title: "Optimize and Launch",
      icon: "🚀",
      content: "Before launching, test everything. Check all links, proofread content, optimize images, and ensure fast loading. Get feedback from peers. Use SEO best practices for better visibility. Finally, share your portfolio on LinkedIn, Twitter, and relevant communities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Build Your Portfolio</title>
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />
      </Helmet>
      <PreLoader />
      <SideMenu />
      <ToggleButtons />

      <div className='main-wrapper'>

        <div className='portfolio-container'>
          <header className="portfolio-header portfolio-header-animate">
            <h1 className="portfolio-main-title">How to Make a Standout Portfolio</h1>
            <p className="portfolio-subtitle">A comprehensive guide to building a portfolio that gets you noticed</p>
            <div className="portfolio-header-divider portfolio-divider-animate"></div>
          </header>

          <section className="portfolio-intro-section portfolio-intro-animate">
            <p className="portfolio-intro-text">
              In today's competitive landscape, a portfolio isn't just a collection of work it's your personal brand, 
              your story, and often your ticket to amazing opportunities. Whether you're a developer, designer, or 
              creative professional, your portfolio should captivate, inform, and inspire action.
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
                <div className="portfolio-card-icon" style={{ transform: activeSection === section.id ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)' }}>
                  {section.icon}
                </div>
                <h2 className="portfolio-card-title" style={{ color: activeSection === section.id ? '#dc2626' : '#f3f4f6' }}>
                  {section.title}
                </h2>
                <p className="portfolio-card-content" style={{ color: activeSection === section.id ? '#d1d5db' : '#9ca3af' }}>
                  {section.content}
                </p>
                <div className="portfolio-card-border" style={{ width: activeSection === section.id ? '100%' : '0' }}></div>
              </div>
            ))}
          </div>

          <section className="portfolio-tips-section portfolio-tips-animate">
            <h2 className="portfolio-tips-title">Pro Tips</h2>
            <div className="portfolio-tips-grid">
              {[
                "Keep your portfolio updated with recent work every 3-6 months",
                "Include a clear call-to-action on every page",
                "Use analytics to understand which projects resonate most",
                "Make contact information easily accessible throughout"
              ].map((tip, index) => (
                <div key={index} className="portfolio-tip-card">
                  <span className="portfolio-tip-number">{String(index + 1).padStart(2, '0')}</span>
                  <p className="portfolio-tip-text">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="portfolio-footer portfolio-footer-animate">
            <div>
              <h3 className="portfolio-footer-title">Ready to Build?</h3>
              <p className="portfolio-footer-text">
                Remember, your portfolio is a living document. Start now, iterate often, and let your work speak for itself.
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