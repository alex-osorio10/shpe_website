// Header.jsx by Alex
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import shpeLogo from './assets/images/shpe_logo_color.png'; // Your SHPE logo
import psuLogo from './assets/images/psu_vertical_logo_color.png'; // Your PSU logo
import verticalLine from './assets/images/vertical_line_black.png'; // Vertical line image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={shpeLogo} alt="SHPE Logo" className="logo" />
        <img src={verticalLine} alt="Vertical Line" className="vertical-line" />
        <img src={psuLogo} alt="PSU Logo" className="logo" />
      </div>

      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/#upcoming-events" onClick={toggleMenu}>Events</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/about" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/officers" onClick={toggleMenu}>Officers</Link> {/* Officers link */}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
