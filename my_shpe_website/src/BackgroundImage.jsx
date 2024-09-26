import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import psuBackground from './assets/images/psu_background_switch.png';
import speakersImage from './assets/images/speakers_switch.png';
import membersImage from './assets/images/members_shpe_switch.png';
import psuLogo from './assets/images/psu_main_logo_green.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [psuBackground, speakersImage, membersImage];

// Array holding text content for each slide
const slideContent = [
  {
    title: 'PORTLAND STATE UNIVERSITY',
    description: '"Let Knowledge Serve the City."',
    buttonText: 'GET STARTED',
    buttonAction: 'external', // Type of action for the button
    buttonLink: 'https://www.pdx.edu/civil-environmental-engineering/student-organizations', // External URL for this button
  },
  {
    title: 'SPEAKER SERIES',
    description: 'Join us for talks from industry leaders.',
    buttonText: 'SEE UPCOMING EVENTS',
    buttonAction: 'scrollToUpcomingEvents', // Custom action for scrolling
  },
  {
    title: 'MEET OUR MEMBERS',
    description: 'Connect with our SHPE community.',
    buttonText: 'OFFICERS',
    buttonAction: 'navigateToOfficers', // Custom action for routing to officers page
  },
];

const BackgroundImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Handle slide transition
  const [isFading, setIsFading] = useState(false); // Handle fade in/out
  const navigate = useNavigate(); // Use React Router's navigate hook

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setIsTransitioning(false);
      }, 250);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setIsTransitioning(false);
      }, 250);
    }
  };

  // Handle button click based on the current slide's action type
  const handleButtonClick = () => {
    const { buttonAction, buttonLink } = slideContent[currentImageIndex];

    if (buttonAction === 'external') {
      window.open(buttonLink, '_blank'); // Open external link in a new tab
    } else if (buttonAction === 'scrollToUpcomingEvents') {
      const upcomingEventsSection = document.getElementById('upcoming-events');
      if (upcomingEventsSection) {
        upcomingEventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (buttonAction === 'navigateToOfficers') {
      navigate('/officers'); // Navigate to officers page
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false); // Reset transition flag after 1s
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  return (
    <div className="background-image-container">
      <div
        className="images-container"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div className="image-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} className="background-slide-image" />
          </div>
        ))}
      </div>

      {/* Arrows for navigation */}
      <div className="arrow-left" onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="arrow-right" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>

      {/* Overlay content with fading */}
      <div className={`overlay-content ${isFading ? 'fade-out' : 'fade-in'}`}>
        <h1>{slideContent[currentImageIndex].title}</h1> {/* Dynamic title */}
        <p>{slideContent[currentImageIndex].description}</p> {/* Dynamic description */}
        <img src={psuLogo} alt="PSU Logo" className="psu-logo" />
        <button className="learn-more-button" onClick={handleButtonClick}>
          {slideContent[currentImageIndex].buttonText} {/* Dynamic button text */}
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
