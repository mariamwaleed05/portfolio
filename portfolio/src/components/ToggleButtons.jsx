import React, { Component } from 'react';
import languageIcon from '../icons/material-symbols_language.svg';
import darkModeIcon from '../icons/ix_light-dark.svg';

const ToggleButtons = () => {
    return ( 
        <>
                <nav className="iconns top-bar">
                  <a href="indexarabic.html">
                    <img src={languageIcon} className="lang" alt="Language Icon" />
                  </a>
                  <p className="lang-text">ENG</p>
                  <img src={darkModeIcon} className="light" alt="Dark Mode Icon" />
                  <p className="lang-text">DARK</p>
                </nav>
        </>
     );
}
 
export default ToggleButtons;