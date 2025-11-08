import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    
    if (sidebarRef.current && sidebarRef.current.classList.contains('closed')) {
      setIsClosed(true);
    }
  }, []);

  const handleBurgerClick = () => {
    console.log("Burger menu clicked!");
    
    const newState = !isClosed;
    setIsClosed(newState);
    
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
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          
          <div className="image-container">
            <Link to="/about">
              <img src={whoAmIIcon} className="img" alt="Who Am I Icon" />
            </Link>
          </div>
          <Link to="/about">
            <p className="t">Who Am I?</p>
          </Link>
          <div className="line"></div>
          
          <div className="image-container">
            <Link to="/services">
              <img src={servicesIcon} className="img" alt="User Interface Icon" />
            </Link>
          </div>
          <Link to="/services">
            <p className="t">Services</p>
          </Link>
          <div className="line"></div>
          
          <div className="image-container">
            <Link to="/contact">
              <img src={contactIcon} className="img" alt="Contact Me Icon" />
            </Link>
          </div>
          <Link to="/contact">
            <p className="t">Contact Me</p>
          </Link>
          <div className="line"></div>
          
          <div className="image-container">
            <Link to="/blog">
              <img src={blogIcon} className="img" alt="Blog Icon" />
            </Link>
          </div>
          <Link to="/blog">
            <p className="t">Blogs</p>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;