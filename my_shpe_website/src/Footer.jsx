// src/Footer.jsx
import React from 'react';
import facebookLogo from './assets/images/facebook_logo_orange.png';
import instagramLogo from './assets/images/instagram_logo_orange.png';
import emailLogo from './assets/images/email_logo_orange.png'; // Assuming SHPE logo for email icon

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* New Section: Join the Familia */}
        <h2>Join the Familia!</h2>
        <p>Discover how SHPE can empower you in your career and education!</p>
        <a 
          href="https://shpe.org"
          target="_blank" 
          rel="noopener noreferrer"
          className="ideal-logic-button"
        >
          Learn More
        </a>
        
        {/* Follow Us Section */}
        <h2>Follow Us!</h2>
        <div className="social-media">
          <a href="https://www.instagram.com/psu_shpe/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/PSUSHPE/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
          </a>
          <a href="mailto:shpe@pdx.edu" target="_blank" rel="noopener noreferrer">
            <img src={emailLogo} alt="Email Icon" className="social-icon" />
          </a>
        </div>

        <p>"The most important thing is to try and inspire people so that they can be great in whatever they want to do." </p>
      </div>
    </footer>
  );
}

export default Footer;
