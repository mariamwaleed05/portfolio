import React, { useState, useEffect } from 'react';
import './PreLoader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); 

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader">
            <div className="preloader-content">
                        <div className="loading-text">
                    <span className="letter">L</span>
                    <span className="letter">o</span>
                    <span className="letter">a</span>
                    <span className="letter">d</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter">g</span>
                    <span className="dots-animation">...</span>
                </div>

                <div className="bouncing-dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                </div>
                
            </div>
        </div>
    );
};

export default Preloader;