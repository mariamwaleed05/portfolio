import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import Footer from '../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import PreLoader from './../common/PreLoader';

const Services = () => {
    return ( 
        <>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>
        <div className='main-wrapper'>
        <section className="services-section">
            <div className="services-header">
                <h1>Services</h1>
                <p>WHAT I OFFER</p>
            </div>
            <div className="service-list">
                <div className="service-item">
                    <span className="service-number">01</span>
                    <Link to ="/ux"><span className="service-title">UX/UI</span></Link>
                     <Link to ="/ux"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">02</span>
                     <Link to ="/GraphicDesign"><span className="service-title">Graphic Design</span></Link>
                     <Link to ="/GraphicDesign"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">03</span>
                     <Link to ="/ContentCreation"><span className="service-title">Content Creation</span></Link>
                     <Link to ="/ContentCreation"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">04</span>
                     <Link to ="/WebDevelopment"><span className="service-title">Web Development</span></Link>
                    <Link to ="/WebDevelopment"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
            </div>
                <div className="service-item">
                    <span className="service-number">05</span>
                    <Link to ="/Photography"><span className="service-title">Photography</span></Link>
                    <Link to ="/Photography"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
                 <div className="service-item">
                    <span className="service-number">06</span>
                    <Link to ="/Modeling"><span className="service-title">3D Modeling</span></Link>
                    <Link to ="/Modeling"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider"></div>
                 <div className="service-item">
                    <span className="service-number">07</span>
                    <Link to ="/MotionGraphics"><span className="service-title">Motion Graphics</span></Link>
                    <Link to ="/MotionGraphics"><span className="service-arrow">&gt;&gt;</span></Link>
                </div>
                <div className="service-divider down"></div>
        </section>
        
</div>

<Footer/>
<BackToTop/>
<TextMeButton/>
        </>
     );
}
 
export default Services;