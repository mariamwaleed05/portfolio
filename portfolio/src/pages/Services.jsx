import React, { Component } from 'react';
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import Footer from '../common/Footer';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';

const Services = () => {
    return ( 
        <>
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
                    <a href="uxui.html"><span className="service-title">UX/UI</span></a>
                    <a href="uxui.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">02</span>
                    <a href="graphicd.html"><span className="service-title">Graphic Design</span></a>
                    <a href="graphicd.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">03</span>
                    <a href="branding.html"><span className="service-title">Branding</span></a>
                    <a href="branding.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">04</span>
                    <a href="contentcreation.html"><span className="service-title">Content Creation</span></a>
                    <a href="contentcreation.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                <div className="service-item">
                    <span className="service-number">05</span>
                    <a href="webdevelopment.html"><span className="service-title">Web Development</span></a>
                    <a href="webdevelopment.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
            </div>
                <div className="service-item">
                    <span className="service-number">06</span>
                    <a href="webdevelopment.html"><span className="service-title">Photography</span></a>
                    <a href="webdevelopment.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                 <div className="service-item">
                    <span className="service-number">07</span>
                    <a href="webdevelopment.html"><span className="service-title">3D Modeling</span></a>
                    <a href="webdevelopment.html"><span className="service-arrow">&gt;&gt;</span></a>
                </div>
                <div className="service-divider"></div>
                 <div className="service-item">
                    <span className="service-number">08</span>
                    <a href="webdevelopment.html"><span className="service-title">Motion Graphics</span></a>
                    <a href="webdevelopment.html"><span className="service-arrow">&gt;&gt;</span></a>
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