import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';

import uxxImage from '../imgs/uxx.png';
import jjjImage from '../imgs/jjj.png';
import pinIcon from '../icons/pin.png';
import timeIcon from '../icons/time.png';
import arrowIcon from '../icons/arrow.png';
import arrow from '../icons/arrow.svg';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';

const Blog = () => {
    return (  
        <>
        <SideMenu/>
        <ToggleButtons/>

        <div className="main-wrapper">
            <header className="blog-header">
                <h1>Blog</h1>
            </header>

            <section className="my-ux-journey-section">
                <h2 className="section-title">My ux Journey</h2>
                <div className="ux-journey">
                    <div className="ux-journey-text">
                        <p>I began exploring UX/UI out of curiosity for Human Psychology - how we interact with, understand, and use things. I believe that understanding users is what truly drives great design.</p>
                    </div>
                    <div className="ux-journey-image">
                        <img src={uxxImage} alt="Abstract UX journey visual" />
                    </div>
                </div>

                <div className="two-column-grid">
                    <div className="grid-item">
                        <h4>Finding Inspiration in Design</h4>
                        <p>Inspiration can come from anywhere — nature, architecture, or even film. To keep creativity alive, I explore websites like Dribbble and Behance to see how other designers solve visual challenges. The key is not copying, but learning the principles behind what works and why.</p>
                    </div>
                    <div className="grid-item">
                        <h4>Graphic design & ux/ui Connection</h4>
                        <p>Graphic design focuses on visual communication — colors, typography, and layout — while UX/UI adds structure and purpose to these visuals. A successful designer understands both aesthetics and usability to create an experience that’s not just beautiful, but functional.</p>
                    </div>
                </div>
            </section>

            <section className="three-tips-to-excel-in-ux-section">
                <h2 className="section-title">How to Upload Your Work</h2>
                <div className="image-grid">
                    <div className="image-grid-item">Build a strong portfolio that showcases your process, not just the visuals.</div>
                    <div className="image-grid-item">Participate in design challenges and internships to gain experience.</div>
                    <div className="image-grid-item">Network with designers on LinkedIn and attend local design meetups.</div>
                    <div className="image-grid-item">Keep learning UX/UI is always evolving.</div>
                </div>
            </section>

            <section className="three-tips-to-find-work-on-upwork-section">
                <h2 className="section-title">How to Find Work in ux/ui</h2>
                <div className="fg">
                    <img src={jjjImage} className="jj" alt="Illustration of people finding work" />
                    <div className="vertical-tabs">
                        <div className="tab-item">
                            <p>Freelancing platforms like Upwork and Fiverr are a good starting point.</p>
                        </div>
                        <div className="tab-item">
                            <p>Apply for internships even if unpaid — they help you build credibility.</p>
                        </div>
                        <div className="tab-item">
                            <p>Share case studies on LinkedIn to showcase your design thinking.</p>
                        </div>
                        <div className="tab-item">
                            <p>Collaborate with developers or startups to gain real-world exposure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="three-values-i-live-with-design-section">
                <h2 className="section-title">Main Values in ux/ui Design</h2>
                <div className="image-grid">
                    <div className="image-grid-item kj">Easy & Smooth UX/UI Experience</div>
                    <div className="image-grid-item kj">Attractive & Consistent Design</div>
                    <div className="image-grid-item kj">Deep Understanding of Users</div>
                </div>
            </section>

            <section className="learning-growing-section">
                <h2 className="maintitlee">Learning & Growing</h2>
                <div className="learning-growing">
                    <p>I worked on several small projects, rebranded student startups, and collaborated with developers to bring ideas to life. I learned how to use tools like Figma, Illustrator, and HTML/CSS to prototype and communicate effectively.</p>
                </div>
            </section>

           <Link to="/Services"><button className="projj">View Projects</button></Link>

            <h1 className="maintitlee">Frequenlty Asked Questions</h1>
            <div className="flexv">
                <h2 className="ssub">In UX/UI & graphic Design</h2>
                <h2 className="seeall">See All</h2>
            </div>

            <div className="faq-container">
                <details className="faq-item pink">
                    <summary>
                        HOW FAST IS THE TURNAROUND?
                        <div className="arrow"><img src={arrow}/></div>
                    </summary>
                    <div className="faq-answer">
                        <p>Our turnaround time varies depending on the complexity and scope of your request. Simple revisions or minor design tweaks can often be completed within 24-48 hours. Larger projects, such as full website designs or extensive branding packages, may take 1-2 weeks. We'll provide a clear timeline after discussing your specific needs during the initial consultation.</p>
                    </div>
                </details>

                <details className="faq-item red">
                    <summary>
                        WHAT DESIGN TYPES DO YOU HANDLE?
                        <div className="arrow"><img src={arrow}/></div>
                    </summary>
                    <div className="faq-answer">
                        <p>We specialize in a broad range of design types including, but not limited to: UI/UX design (web and mobile apps), brand identity and logo design, marketing collateral (brochures, flyers, social media graphics), website design, and presentation design. If you have a unique design need, feel free to ask – chances are, we can help!</p>
                    </div>
                </details>

                <details className="faq-item green">
                    <summary>
                        THE DIFFERENCE BETWEEN UX AND UI?
                        <div className="arrow"><img src={arrow}/></div>
                    </summary>
                    <div className="faq-answer">
                        <p><strong>UX (User Experience)</strong> design focuses on the overall feeling and usability of a product. It's about how a user interacts with a system, ensuring it's intuitive, efficient, and enjoyable. This includes research, user flows, wireframing, and prototyping.</p>
                        <p><strong>UI (User Interface)</strong> design, on the other hand, is about the visual and interactive elements of a product. It's what the user sees and interacts with, such as buttons, typography, colors, and overall visual aesthetics. UI designers create the "look and feel" that the UX designer has mapped out.</p>
                    </div>
                </details>

                <details className="faq-item blue">
                    <summary>
                        HOW MANY REQUESTS CAN I MAKE?
                        <div className="arrow"><img src={arrow}/></div>
                    </summary>
                    <div className="faq-answer">
                        <p>We operate on a flexible request system. Depending on your subscription plan or project agreement, you may have a certain number of active requests at any given time, or unlimited requests queued up. We prioritize requests based on urgency and complexity, ensuring a steady flow of deliverables. Please refer to your service agreement for specific details on request limits and processing.</p>
                    </div>
                </details>
            </div>

            <h1 className="maintitlee">Recommended</h1>
            <section className="recommended-section">
                <div className="flexv">
                    <h2 className="ssub">Top Designers in the field</h2>
                    <Link to="/recommended"><h2 className="seeall">See All</h2></Link>
                </div>

                <div className="recommended-designers-grid">
                    {/* Designer Card 1 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                            {/* Placeholder for designer's profile image if any */}
                        </div>
                        <div className="card-footer">
                            <h2>Rahma Magdy</h2>
                            <p>Creative Designer / Photoghrapher</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>

                    {/* Designer Card 2 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                        </div>
                        <div className="card-footer">
                            <h2>Seif Mohamed</h2>
                            <p>UX/UI Designer</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>

                    {/* Designer Card 3 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                        </div>
                        <div className="card-footer">
                            <h2>Partinia Emad</h2>
                            <p>UX/UI Designer</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>

                    {/* Designer Card 4 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                        </div>
                        <div className="card-footer">
                            <h2>Nour Ashraf</h2>
                            <p>UX/UI Designer</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>

                    {/* Designer Card 5 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                        </div>
                        <div className="card-footer">
                            <h2>Enjy Amir</h2>
                            <p>UX/UI Designer</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>

                    {/* Designer Card 6 */}
                    <div className="designer-card">
                        <div className="card-header">
                            <div className="card-header-item">
                                <img src={pinIcon} alt="Location Pin Icon" className="iccom" />
                                <p>Cairo, Egypt</p>
                            </div>
                            <div className="card-header-item h">
                                <img src={timeIcon} alt="Time Icon" className="iccom" />
                                <p>3+ Years Experience</p>
                            </div>
                        </div>
                        <div className="card-image-placeholder">
                        </div>
                        <div className="card-footer">
                            <h2>Mariam Essam</h2>
                            <p>UX/UI Designer</p>
                            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="references-section">
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

            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}
 
export default Blog;