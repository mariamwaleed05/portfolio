import React from 'react';

import linkedinIcon from '../icons/ri_linkedin-fill.svg';
import behanceIcon from '../icons/ri_linkedin-fill-1.svg'; // Assuming you have this icon
import instagramIcon from '../icons/ri_linkedin-fill-2.svg'; // Assuming you have this icon
import whatsappIcon from '../icons/ri_linkedin-fill-3.svg'; // Assuming you have this icon
import emailIcon from '../icons/ri_linkedin-fill-4.svg'; // Assuming you have this icon
import footerImage from '../imgs/footer.png';

const Footer = () => {
    return (
        
        <footer className="footer-container">
            <div className="footer-content">
                <div className="flex-down">
                <div className="footer-section about">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#contact-me">Contact Me</a></li>
                    </ul>
                </div>

                 <div className="footer-section explore">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#recommended">Recommended</a></li>
                    </ul>
                </div>

        </div>
                <div className="footer-center">
                    <h2>Let's Create Something Big.</h2>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                            <img src={behanceIcon} alt="Behance" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                        <a href="mailto:example@example.com">
                            <img src={emailIcon} alt="Email" />
                        </a>
                    </div>
                </div>

                <div className="footer-section services">
                    <h3>Services</h3>
                    <ul>
                        <li>UX/UI</li>
                        <li>Graphic Design</li>
                        <li>Content Creation</li>
                        <li>Web Development</li>
                        <li>3D Modeling</li>
                        <li>Photography</li>
                        <li>Video Editing</li>
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