import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, Sparkles } from 'lucide-react';
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        timeline: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    service: '',
                    timeline: ''
                });
            }, 3000);
        }, 2000);
    };

    return (
        <>
            <Helmet>
                <title>Get In Touch</title>
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
            </Helmet>
            <PreLoader/>
            <SideMenu/>
            <ToggleButtons/>
            
            <div className='main-wrapper'>
                <div className="contact-container">
                    <div className="floating-shapes-contact">
                        <div className="shape-contact shape-1-contact"></div>
                        <div className="shape-contact shape-2-contact"></div>
                    </div>

                    <div className="contact-header">
                        <div className="sparkle-container-contact">
                            <Sparkles className="sparkle-contact sparkle-1-contact" size={24} color="#690600" />
                            <Sparkles className="sparkle-contact sparkle-2-contact" size={16} color="#690600" />
                        </div>
                        <h1 className="contact-title">Let's Get In Touch</h1>
                        <p className="contact-subtitle">
                            If you're looking for a creative UX/UI Designer who blends strategy with design, 
                            let's create something meaningful together.
                        </p>
                        <div className="title-underline-contact">
                            <div className="underline-glow-contact"></div>
                        </div>
                    </div>

                    <div className="contact-content-grid">
                        <div className="contact-info-section">
                            <div className="info-card-contact">
                                <div className="info-icon-circle">
                                    <Mail size={24} color="#690600" />
                                </div>
                                <h3 className="info-card-title">Email Me</h3>
                                <a href="mailto:mariamwaleed2005@gmail.com" className="info-card-link">
                                    mariamwaleed2005@gmail.com
                                </a>
                            </div>

                            <div className="info-card-contact">
                                <div className="info-icon-circle">
                                    <Phone size={24} color="#690600" />
                                </div>
                                <h3 className="info-card-title">Call Me</h3>
                                <a href="tel:01275843440" className="info-card-link">
                                  01275843440   </a>
                            </div>

                            <div className="info-card-contact">
                                <div className="info-icon-circle">
                                    <MapPin size={24} color="#690600" />
                                </div>
                                <h3 className="info-card-title">Location</h3>
                                <p className="info-card-text">
                                    Cairo, Egypt
                                </p>
                            </div>

                            <div className="social-links-contact">
                                <h3 className="social-title">Connect With Me</h3>
                                <div className="social-icons-contact">
                                    <a href="https://www.linkedin.com/in/mariammwaleed/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://www.behance.net/mariamwaleed7" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.5 4.5h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H6.5V4.5zm0 6.5H10c1.66 0 3 1.34 3 3s-1.34 3-3 3H6.5v-6zM3 2v20h7c3.31 0 6-2.69 6-6 0-2.14-1.12-4.02-2.81-5.09C14.84 9.88 16 8.06 16 6c0-3.31-2.69-6-6-6H3zm12.5 7h6v1.5h-6V9zM15 13.5c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/mariammwaleedd/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>

                            <a href="https://pdflink.to/e161e6e3/" target="_blank" download className="cv-download-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                <span>Download My CV</span>
                            </a>

                            <div className="availability-badge">
                                <div className="status-dot"></div>
                                <span>Available for new projects</span>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <div className="form-card">
                                <h2 className="form-title">Send Me a Message</h2>
                                <p className="form-description">
                                    Fill out the form below and I'll get back to you.
                                </p>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Full Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`form-input ${errors.name ? 'error' : ''}`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                Email Address <span className="required">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`form-input ${errors.email ? 'error' : ''}`}
                                                placeholder="youremail@example.com"
                                            />
                                            {errors.email && <span className="error-message">{errors.email}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="+20 123 456 78"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="service" className="form-label">
                                                Service Needed
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="form-select"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ux-ui">UX/UI Design</option>
                                                <option value="graphic-design">Graphic Design</option>
                                                <option value="content-creation">Content Creation</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="photography">Photography</option>
                                                <option value="3d-modeling">3D Modeling</option>
                                                <option value="motion-graphics">Motion Graphics</option>
                                                <option value="multiple">Multiple Services</option>
                                                <option value="consultation">Consultation</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="timeline" className="form-label">
                                                Timeline
                                            </label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="form-select"
                                            >
                                                <option value="">Select timeline</option>
                                                <option value="asap">ASAP</option>
                                                <option value="1-2weeks">1-2 weeks</option>
                                                <option value="1month">1 month</option>
                                                <option value="2-3months">2-3 months</option>
                                                <option value="flexible">Flexible</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                                            placeholder="Tell me about your project..."
                                            rows="6"
                                        />
                                        {errors.message && <span className="error-message">{errors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        className={`submit-button ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
                                        disabled={isSubmitting || isSubmitted}
                                    >
                                        {isSubmitted ? (
                                            <>
                                                <CheckCircle size={20} />
                                                <span>Message Sent!</span>
                                            </>
                                        ) : isSubmitting ? (
                                            <>
                                                <div className="spinner"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}

export default Contact;