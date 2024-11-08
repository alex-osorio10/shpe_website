// Header.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import shpeLogo from './assets/images/shpe_logo_color.png'; 
import psuLogo from './assets/images/psu_vertical_logo_color.png'; 
import verticalLine from './assets/images/vertical_line_black.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="header-container">
      <div className="logo-group" onClick={handleLogoClick}>
        <img src={shpeLogo} alt="SHPE Logo" className="logo" />
        <img src={verticalLine} alt="Vertical Line" className="vertical-line" />
        <img src={psuLogo} alt="PSU Logo" className="logo" />
      </div>

      {/* Inline Menu for Larger Screens */}
      <nav className="inline-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" onClick={handleHomeClick}>Home</Link>
          </li>
          <li className="menu-item">
            <ScrollLink to="upcoming-events" smooth={true} duration={500} offset={-120} onClick={() => console.log('Scrolling to events')}>
              Events
            </ScrollLink>
          </li>
          <li className="menu-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="menu-item">
            <Link to="/officers">Officers</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Smaller Screens */}
      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/" onClick={handleHomeClick}>Home</Link>
            </li>
            <li className="dropdown-item">
              <ScrollLink to="upcoming-events" smooth={true} duration={500} offset={-120} onClick={toggleMenu}>
                Events
              </ScrollLink>
            </li>
            <li className="dropdown-item">
              <Link to="/about" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/officers" onClick={toggleMenu}>Officers</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
