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
  // Initialize state based on screen width (start closed on mobile)
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  // Optional: Handle window resize to auto-adjust if user rotates screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // If you have a main wrapper for the content, you should handle its class 
    // in the parent component or via global context. 
    // For now, if you need to touch the Main Wrapper specifically:
    const mainWrapper = document.querySelector('.main-wrapper'); // Replace with your actual main wrapper ID/Class
    if (mainWrapper) {
       if (isOpen) {
         mainWrapper.classList.add('sidebar-closed');
       } else {
         mainWrapper.classList.remove('sidebar-closed');
       }
    }
  };

  return (
    <>
      {/* We apply the class based on the state */}
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          {/* Burger Menu Button */}
          <div className="menu-toggle-container">
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
            {/* We conditionally render text or hide it via CSS based on parent class */}
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
      
      {/* Mobile Overlay: Optional, adds a dark background when menu is open on mobile */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default SideMenu;