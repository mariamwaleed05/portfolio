import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import burgerMenuIcon from '../icons/Vector.png';
import closeIcon from '../icons/close.png';
import logo from '../imgs/logo.png';
import whoAmIIcon from '../imgs/Component 3.png';
import servicesIcon from '../imgs/Component 4.png';
import contactIcon from '../imgs/Component 8.png';
import blogIcon from '../imgs/blog.png';

const SideMenu = () => {
  // Check if screen is mobile to set initial state
  const isMobile = window.innerWidth <= 768;
  
  // State: Default open on Desktop, Default closed on Mobile
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle CSS classes for the main content wrapper
  useEffect(() => {
    const mainWrapper = document.querySelector('.main-wrapper');
    if (mainWrapper) {
      if (isOpen) {
        mainWrapper.classList.remove('sidebar-closed');
      } else {
        mainWrapper.classList.add('sidebar-closed');
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* --- 1. MOBILE ONLY FIXED BUTTON (Lives outside the aside) --- */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <img 
          src={isOpen ? closeIcon : burgerMenuIcon} 
          alt="Menu Toggle" 
        />
      </div>

      {/* --- 2. SIDEBAR CONTAINER --- */}
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          {/* --- Desktop Only Button (Hidden on Mobile) --- */}
          <div className="desktop-menu-btn">
            <img
              src={isOpen ? closeIcon : burgerMenuIcon}
              className="burgermenu"
              alt="Menu Icon"
              onClick={toggleMenu}
            />
          </div>

          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          
          <div className="nav-items">
            <div className="image-container">
              <Link to="/about">
                <img src={whoAmIIcon} className="img" alt="Who Am I" />
              </Link>
            </div>
            <Link to="/about">
              <p className="t">Who Am I?</p>
            </Link>
            <div className="line"></div>
            
            <div className="image-container">
              <Link to="/services">
                <img src={servicesIcon} className="img" alt="Services" />
              </Link>
            </div>
            <Link to="/services">
              <p className="t">Services</p>
            </Link>
            <div className="line"></div>
            
            <div className="image-container">
              <Link to="/contact">
                <img src={contactIcon} className="img" alt="Contact" />
              </Link>
            </div>
            <Link to="/contact">
              <p className="t">Contact Me</p>
            </Link>
            <div className="line"></div>
            
            <div className="image-container">
              <Link to="/blog">
                <img src={blogIcon} className="img" alt="Blogs" />
              </Link>
            </div>
            <Link to="/blog">
              <p className="t">Blogs</p>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Mobile Overlay (Background Dimmer) */}
      {isOpen && window.innerWidth <= 768 && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default SideMenu;