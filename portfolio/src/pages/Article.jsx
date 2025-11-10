import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from '../common/PreLoader';
import './Article.css';

const Article = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <PreLoader />
            <SideMenu />
            <ToggleButtons />

            <div className="main-wrapper">
                <header className="blog-header">
                    <div className="header-content animate-on-scroll">
                        <Title title="Blog" className="maintitle" />
                        <div className="header-decoration"></div>
                    </div>
                </header>

                <section className="my-ux-journey-section animate-on-scroll">
                    <h2 className="section-title">My UX Journey</h2>
                    <div className="ux-journey">
                        <div className="ux-journey-text">
                            <p>I began exploring UX/UI out of curiosity for Human Psychology - how we interact with, understand, and use things. I believe that understanding users is what truly drives great design.</p>
                        </div>
                        <div className="ux-journey-image">
                            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80" alt="Abstract UX journey visual" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>

                    <div className="two-column-grid">
                        <div className="grid-item animate-on-scroll">
                            <h4>Finding Inspiration in Design</h4>
                            <p>Inspiration can come from anywhere — nature, architecture, or even film. To keep creativity alive, I explore websites like Dribbble and Behance to see how other designers solve visual challenges. The key is not copying, but learning the principles behind what works and why.</p>
                        </div>
                        <div className="grid-item animate-on-scroll">
                            <h4>Graphic Design & UX/UI Connection</h4>
                            <p>Graphic design focuses on visual communication — colors, typography, and layout — while UX/UI adds structure and purpose to these visuals. A successful designer understands both aesthetics and usability to create an experience that's not just beautiful, but functional.</p>
                        </div>
                    </div>
                </section>

                <section className="three-tips-to-excel-in-ux-section animate-on-scroll">
                    <h2 className="section-title">How to Upload Your Work</h2>
                    <div className="image-grid">
                        <div className="image-grid-item">
                            <span className="grid-number">01</span>
                            Build a strong portfolio that showcases your process, not just the visuals.
                        </div>
                        <div className="image-grid-item">
                            <span className="grid-number">02</span>
                            Participate in design challenges and internships to gain experience.
                        </div>
                        <div className="image-grid-item">
                            <span className="grid-number">03</span>
                            Network with designers on LinkedIn and attend local design meetups.
                        </div>
                        <div className="image-grid-item">
                            <span className="grid-number">04</span>
                            Keep learning UX/UI is always evolving.
                        </div>
                    </div>
                </section>

                <section className="three-tips-to-find-work-on-upwork-section animate-on-scroll">
                    <h2 className="section-title">How to Find Work in UX/UI</h2>
                    <div className="fg">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" className="jj" alt="Illustration of people finding work" />
                        <div className="vertical-tabs">
                            <div className="tab-item" onMouseEnter={() => setActiveTab(0)} onMouseLeave={() => setActiveTab(null)}>
                                <div className={`tab-indicator ${activeTab === 0 ? 'active' : ''}`}></div>
                                <p>Freelancing platforms like Upwork and Fiverr are a good starting point.</p>
                            </div>
                            <div className="tab-item" onMouseEnter={() => setActiveTab(1)} onMouseLeave={() => setActiveTab(null)}>
                                <div className={`tab-indicator ${activeTab === 1 ? 'active' : ''}`}></div>
                                <p>Apply for internships even if unpaid — they help you build credibility.</p>
                            </div>
                            <div className="tab-item" onMouseEnter={() => setActiveTab(2)} onMouseLeave={() => setActiveTab(null)}>
                                <div className={`tab-indicator ${activeTab === 2 ? 'active' : ''}`}></div>
                                <p>Share case studies on LinkedIn to showcase your design thinking.</p>
                            </div>
                            <div className="tab-item" onMouseEnter={() => setActiveTab(3)} onMouseLeave={() => setActiveTab(null)}>
                                <div className={`tab-indicator ${activeTab === 3 ? 'active' : ''}`}></div>
                                <p>Collaborate with developers or startups to gain real-world exposure.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="three-values-i-live-with-design-section animate-on-scroll">
                    <h2 className="section-title">Main Values in UX/UI Design</h2>
                    <div className="image-grid values-grid">
                        <div className="image-grid-item kj">
                            <div className="value-icon">⚡</div>
                            Easy & Smooth UX/UI Experience
                        </div>
                        <div className="image-grid-item kj">
                            <div className="value-icon">✨</div>
                            Attractive & Consistent Design
                        </div>
                        <div className="image-grid-item kj">
                            <div className="value-icon">🎯</div>
                            Deep Understanding of Users
                        </div>
                    </div>
                </section>

                <section className="learning-growing-section animate-on-scroll">
                    <h2 className="section-title">Learning & Growing</h2>
                    <div className="learning-growing">
                        <p>I worked on several small projects, rebranded student startups, and collaborated with developers to bring ideas to life. I learned how to use tools like Figma, Illustrator, and HTML/CSS to prototype and communicate effectively.</p>
                    </div>
                </section>

                <div className="cta-button-wrapper animate-on-scroll">
                    <Link to="/Services"><button className="projj">View Projects</button></Link>
                </div>

                <section className="faq-section animate-on-scroll">
                    <h1 className="section-title">Frequently Asked Questions</h1>
                    <div className="flexv">
                        <h2 className="ssub">In UX/UI & Graphic Design</h2>
                        <h2 className="seeall">See All</h2>
                    </div>

                    <div className="faq-container">
                        <div className={`faq-item pink ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>
                            <div className="faq-summary">
                                <span>HOW FAST IS THE TURNAROUND?</span>
                                <div className={`arrow ${openFaq === 0 ? 'rotate' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>Our turnaround time varies depending on the complexity and scope of your request. Simple revisions or minor design tweaks can often be completed within 24-48 hours. Larger projects, such as full website designs or extensive branding packages, may take 1-2 weeks. We'll provide a clear timeline after discussing your specific needs during the initial consultation.</p>
                            </div>
                        </div>

                        <div className={`faq-item red ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>
                            <div className="faq-summary">
                                <span>WHAT DESIGN TYPES DO YOU HANDLE?</span>
                                <div className={`arrow ${openFaq === 1 ? 'rotate' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>We specialize in a broad range of design types including, but not limited to: UI/UX design (web and mobile apps), brand identity and logo design, marketing collateral (brochures, flyers, social media graphics), website design, and presentation design. If you have a unique design need, feel free to ask – chances are, we can help!</p>
                            </div>
                        </div>

                        <div className={`faq-item green ${openFaq === 2 ? 'open' : ''}`} onClick={() => toggleFaq(2)}>
                            <div className="faq-summary">
                                <span>THE DIFFERENCE BETWEEN UX AND UI?</span>
                                <div className={`arrow ${openFaq === 2 ? 'rotate' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p><strong>UX (User Experience)</strong> design focuses on the overall feeling and usability of a product. It's about how a user interacts with a system, ensuring it's intuitive, efficient, and enjoyable. This includes research, user flows, wireframing, and prototyping.</p>
                                <p><strong>UI (User Interface)</strong> design, on the other hand, is about the visual and interactive elements of a product. It's what the user sees and interacts with, such as buttons, typography, colors, and overall visual aesthetics. UI designers create the "look and feel" that the UX designer has mapped out.</p>
                            </div>
                        </div>

                        <div className={`faq-item blue ${openFaq === 3 ? 'open' : ''}`} onClick={() => toggleFaq(3)}>
                            <div className="faq-summary">
                                <span>HOW MANY REQUESTS CAN I MAKE?</span>
                                <div className={`arrow ${openFaq === 3 ? 'rotate' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>We operate on a flexible request system. Depending on your subscription plan or project agreement, you may have a certain number of active requests at any given time, or unlimited requests queued up. We prioritize requests based on urgency and complexity, ensuring a steady flow of deliverables. Please refer to your service agreement for specific details on request limits and processing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="recommended-section animate-on-scroll">
                    <h1 className="section-title">Recommended</h1>
                    <div className="flexv">
                        <h2 className="ssub">Top Designers in the Field</h2>
                        <Link to="/recommended"><h2 className="seeall">See All</h2></Link>
                    </div>

                    <div className="recommended-designers-grid">
                        <div className="designer-card">
                            <div className="card-header">
                                <div className="card-header-item">
                                    <img src="https://api.iconify.design/mdi:map-marker.svg?color=%23ff6b6b" alt="Location Pin Icon" className="iccom" />
                                    <p>Cairo, Egypt</p>
                                </div>
                                <div className="card-header-item h">
                                    <img src="https://api.iconify.design/mdi:clock-outline.svg?color=%23ff6b6b" alt="Time Icon" className="iccom" />
                                    <p>3+ Years Experience</p>
                                </div>
                            </div>
                            <div className="card-image-placeholder">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Designer" />
                            </div>
                            <div className="card-footer">
                                <h2>Rahma Magdy</h2>
                                <p>Creative Designer / Photographer</p>
                                <div className="arrow-icon">→</div>
                            </div>
                        </div>

                        <div className="designer-card">
                            <div className="card-header">
                                <div className="card-header-item">
                                    <img src="https://api.iconify.design/mdi:map-marker.svg?color=%23ff6b6b" alt="Location Pin Icon" className="iccom" />
                                    <p>Cairo, Egypt</p>
                                </div>
                                <div className="card-header-item h">
                                    <img src="https://api.iconify.design/mdi:clock-outline.svg?color=%23ff6b6b" alt="Time Icon" className="iccom" />
                                    <p>3+ Years Experience</p>
                                </div>
                            </div>
                            <div className="card-image-placeholder">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Designer" />
                            </div>
                            <div className="card-footer">
                                <h2>Seif Mohamed</h2>
                                <p>UX/UI Designer</p>
                                <div className="arrow-icon">→</div>
                            </div>
                        </div>

                        <div className="designer-card">
                            <div className="card-header">
                                <div className="card-header-item">
                                    <img src="https://api.iconify.design/mdi:map-marker.svg?color=%23ff6b6b" alt="Location Pin Icon" className="iccom" />
                                    <p>Cairo, Egypt</p>
                                </div>
                                <div className="card-header-item h">
                                    <img src="https://api.iconify.design/mdi:clock-outline.svg?color=%23ff6b6b" alt="Time Icon" className="iccom" />
                                    <p>3+ Years Experience</p>
                                </div>
                            </div>
                            <div className="card-image-placeholder">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Designer" />
                            </div>
                            <div className="card-footer">
                                <h2>Partinia Emad</h2>
                                <p>UX/UI Designer</p>
                                <div className="arrow-icon">→</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="references-section animate-on-scroll">
                    <h2 className="section-title">References</h2>
                    <ul>
                        <li><a href="https://www.nngroup.com/articles/" target="_blank" rel="noopener noreferrer">Nielsen Norman Group – UX Articles</a></li>
                        <li><a href="https://uxdesign.cc/" target="_blank" rel="noopener noreferrer">UX Design CC – Design Inspiration & Case Studies</a></li>
                        <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">Behance – Design Portfolio Inspiration</a></li>
                        <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble – Creative Design Showcase</a></li>
                        <li><a href="https://careerfoundry.com/en/blog/ux-design/" target="_blank" rel="noopener noreferrer">CareerFoundry – UX Career Advice</a></li>
                    </ul>
                </section>
            </div>

            <Footer />
            <BackToTop />
            <TextMeButton />
        </>
    );
}

export default Article;