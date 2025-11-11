import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import './Blog.css';

import Preloader from '../common/PreLoader';

const Blog = () => {
    const boxes = [
        {
            id: 1,
            title: "UX/UI & Graphic Design",
            description: "Explore the fundamentals of user experience, interface design, and visual aesthetics that create memorable digital products.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
            category: "Design",
            readTime: "8 min read",
            link: "/article"
        },
        {
            id: 2,
            title: "How to Build Portfolio?",
            description: "A comprehensive guide to creating a stunning portfolio that showcases your best work and lands your dream opportunities.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
            category: "Career",
            readTime: "12 min read",
            link: "/portfolio"
        },
        {
            id: 3,
            title: "Recommended Designers",
            description: "Discover talented designers making waves in the industry with their innovative approaches and exceptional creativity.",
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
            category: "Inspiration",
            readTime: "5 min read",
            link: "/recommended"
        }
    ];

    const handleBoxClick = (link) => {
        window.location.href = link;
    };

    return (  
        <>
            <Helmet><title>Blog</title></Helmet>
        <Preloader/>
            <SideMenu/>
            <ToggleButtons/>
            <div className='main-wrapper'>
                <Title title="Blogs" className="maintitle vb" />
                
                <div className="blog-section">
                    <div className="blog-wrapper">
                        <div className="blog-intro">
                            <p className="blog-subtitle">Insights, tips, and inspiration from designers, to designers.</p>
                        </div>
                        
                        <div className="boxes-grid">
                            {boxes.map((box, index) => (
                                <div
                                    key={box.id}
                                    className="box"
                                    onClick={() => handleBoxClick(box.link)}
                                    style={{ animationDelay: `${index * 150}ms`, cursor: 'pointer' }}
                                >
                                    <div className="box-image-wrapper">
                                        <img
                                            src={box.image}
                                            alt={box.title}
                                            className="box-image"
                                        />
                                        
                                        <div className="box-badge-wrapper">
                                            <span className="box-badge">
                                                {box.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="box-content">
                                        <h3 className="box-title">
                                            {box.title}
                                        </h3>
                                        
                                        <p className="box-description">
                                            {box.description}
                                        </p>

                                        <div className="box-footer">
                                            <span className="box-read-time">{box.readTime}</span>
                                            <span className="box-button">
                                                Read More
                                                <svg className="box-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="box-border" />
                                </div>
                            ))}
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
 
export default Blog;