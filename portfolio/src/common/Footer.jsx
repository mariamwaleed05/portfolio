import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import linkedinIcon from '../icons/ri_linkedin-fill.svg';
import behanceIcon from '../icons/ri_linkedin-fill-1.svg'; 
import instagramIcon from '../icons/ri_linkedin-fill-2.svg'; 
import whatsappIcon from '../icons/ri_linkedin-fill-3.svg'; 
import emailIcon from '../icons/ri_linkedin-fill-4.svg'; 
import footerImage from '../imgs/footer.png';

const Footer = () => {
    return (
        
        <footer className="footer-container">
            <div className="footer-content">
                <div className="flex-down">
                <div className="footer-section about">
                    <h3>About</h3>
                    <ul>
                        <Link to="/About"><li>About Mariam</li></Link> 
                        <Link to="/Contact"><li>Contact Mariam</li></Link> 
                    </ul>
                </div>

                 <div className="footer-section explore">
                    <h3>Explore</h3>
                    <ul>
                       <Link to="/Blog"><li>Blogs</li></Link> 
                         <Link to="/Recommended"><li>Recommended</li></Link> 
                    </ul>
                </div>

        </div>
                <div className="footer-center">
                    <h2>Let's Create Something Big.</h2>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/mariammwaleed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.behance.net/mariamwaleed7" target="_blank" rel="noopener noreferrer">
                            <img src={behanceIcon} alt="Behance" />
                        </a>
                        <a href="https://www.instagram.com/mariammwaleedd/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                       <a href="https://wa.me/2001275843440" target="_blank" rel="noopener noreferrer">
                     <img src={whatsappIcon} alt="WhatsApp" />
                       </a>
                        <a href="mailto:mariamwaleed2005@gmail.com">
                            <img src={emailIcon} alt="Email" />
                        </a>
                    </div>
                </div>

                <div className="footer-section services">
                    <h3>Services</h3>
                    <ul>
                        <Link to="/Ux"><li>UX/UI</li></Link>
                        <Link to="/GraphicDesign"><li>Graphic Design</li></Link>
                        <Link to="/ContentCreation"><li>Content Creation</li></Link>
                        <Link to="/WebDevelopment"><li>Web Development</li></Link>
                        <Link to="/Modeling"><li>3D Modeling</li></Link>
                        <Link to="/Photography"><li>Photography</li></Link>
                        <Link to="/MotionGraphics"><li>Motion Graphics</li></Link>
                    </ul>
                </div>

          
            </div>
            <div className="footer-bottom-image">
                <img src={footerImage} alt="Creative tools and objects" />
            </div>
        </footer>
    );
}

export default Footer;