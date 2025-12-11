import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../Supabase'; 
import burgerMenuIcon from '../icons/Vector.png';
import closeIcon from '../icons/close.png';
import logo from '../imgs/logo.png';

const SideMenu = () => {
  const isMobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSideMenu = async () => {
      try {
        const { data, error } = await supabase
          .from('SideMenu')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching SideMenu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSideMenu();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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


  const getPathFromUrl = (urlStr) => {
    try {
      const url = new URL(urlStr);
      return url.pathname;
    } catch (e) {
      return urlStr;
    }
  };

  return (
    <>
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <img 
          src={isOpen ? closeIcon : burgerMenuIcon} 
          alt="Menu Toggle" 
        />
      </div>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
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
            {!loading && menuItems.map((item) => {
              const linkPath = getPathFromUrl(item.Path);
              
              return (
                <div key={item.id}>
                  <div className="image-container">
                    <Link to={linkPath}>
                      <img 
                        src={item.SideMenuImage} 
                        className="img" 
                        alt={item.SideMenuFieldsEN} 
                      />
                    </Link>
                  </div>
                  
                  <Link to={linkPath}>
                    <p className="t">{item.SideMenuFieldsEN}</p>
                  </Link>
                  
                  <div className="line"></div>
                </div>
              );
            })}
          </div>
        </nav>
      </aside>

      {isOpen && window.innerWidth <= 768 && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default SideMenu;