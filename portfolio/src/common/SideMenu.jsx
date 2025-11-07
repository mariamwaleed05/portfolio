import React, { useState, useEffect, useRef } from 'react';

import burgerMenuIcon from '../icons/Vector.png';
import closeIcon from '../icons/close.png';


import logo from '../imgs/logo.png';
import whoAmIIcon from '../imgs/Component 3.png';
import servicesIcon from '../imgs/Component 4.png';
import contactIcon from '../imgs/Component 8.png';
import blogIcon from '../imgs/blog.png';

const SideMenu = () => {
  const [isClosed, setIsClosed] = useState(false);
  const sidebarRef = useRef(null);
  const mainWrapperRef = useRef(null);

  useEffect(() => {
    console.log("Component mounted.");
    console.log("sidebar element:", sidebarRef.current);
    console.log("mainWrapper element:", mainWrapperRef.current);
    
    // Check initial state
    if (sidebarRef.current && sidebarRef.current.classList.contains('closed')) {
      setIsClosed(true);
    }
  }, []);

  const handleBurgerClick = () => {
    console.log("Burger menu clicked!");
    
    const newState = !isClosed;
    setIsClosed(newState);
    
    // Toggle classes on refs
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle('closed');
      console.log("Sidebar classes:", sidebarRef.current.classList);
    }
    
    if (mainWrapperRef.current) {
      mainWrapperRef.current.classList.toggle('sidebar-closed');
      console.log("Main wrapper classes:", mainWrapperRef.current.classList);
    }
  };

  return (
    <>
      <aside ref={sidebarRef}>
        <nav>
          <img
            src={isClosed ? closeIcon : burgerMenuIcon}
            className="burgermenu"
            id="burgerMenu"
            alt="Menu Icon"
            onClick={handleBurgerClick}
            data-open-src={burgerMenuIcon}
            data-close-src={closeIcon}
          />
          <a href="index.html">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          
          <div className="image-container">
            <a href="about.html">
              <img src={whoAmIIcon} className="img" alt="Who Am I Icon" />
            </a>
          </div>
          <a href="about.html">
            <p className="t">Who Am I?</p>
          </a>
          <div className="line"></div>
          
          <div className="image-container">
            <a href="services.html">
              <img src={servicesIcon} className="img" alt="User Interface Icon" />
            </a>
          </div>
          <a href="services.html">
            <p className="t">Services</p>
          </a>
          <div className="line"></div>
          
          <div className="image-container">
            <a href="contact.html">
              <img src={contactIcon} className="img" alt="Contact Me Icon" />
            </a>
          </div>
          <a href="contact.html">
            <p className="t">Contact Me</p>
          </a>
          <div className="line"></div>
          
          <div className="image-container">
            <a href="blog.html">
              <img src={blogIcon} className="img" alt="Blog Icon" />
            </a>
          </div>
          <a href="blog.html">
            <p className="t">Blog</p>
          </a>
        </nav>
      </aside>

    
    </>
  );
};

export default SideMenu;