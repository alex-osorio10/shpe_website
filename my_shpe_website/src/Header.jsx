// src/Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import shpeLogo from './assets/images/shpe_logo_color.png';
import psuLogo from './assets/images/psu_vertical_logo_color.png';
import verticalLine from './assets/images/vertical_line_black.png';

function Header() {
  const handleMenuClick = () => {
    // Add functionality here, like opening a menu
    console.log("Menu button clicked");
  };

  return (
    <header>
      <div className="logo-container">
        <img src={shpeLogo} alt="SHPE Logo" className="logo" />
        <img src={verticalLine} alt="Vertical Line" className="vertical-line" />
        <img src={psuLogo} alt="PSU Logo" className="logo" />
      </div>
      <div className="menu-button">
        {/* Make the button clickable */}
        <button onClick={handleMenuClick} className="menu-icon-button">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
