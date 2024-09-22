import React, { useState, useEffect } from 'react';
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
    buttonText: 'GET STARTED!',
  },
  {
    title: 'SPEAKER SERIES',
    description: 'Join us for talks from industry leaders.',
    buttonText: 'SEE UPCOMING EVENTS',
  },
  {
    title: 'MEET OUR MEMBERS',
    description: 'Connect with our SHPE community.',
    buttonText: 'JOIN THE COMMUNITY',
  },
];

const BackgroundImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Handle slide transition
  const [isFading, setIsFading] = useState(false); // Handle fade in/out

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
  
      // Immediately slide the image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  
      // Start fading out the text and logo
      setIsFading(true);
  
      // Delay the content update by 0.25s (250ms) to let the fade-out happen first
      setTimeout(() => {
        // Change the text and logo after 0.25s, and then fade in the new content
        setIsFading(false); // Trigger the fade-in of the new content
        setIsTransitioning(false); // Reset transition state
      }, 250); // 0.25-second delay
    }
  };
  
  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
  
      // Immediately slide the image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  
      // Start fading out the text and logo
      setIsFading(true);
  
      // Delay the content update by 0.25s (250ms) to let the fade-out happen first
      setTimeout(() => {
        // Change the text and logo after 0.25s, and then fade in the new content
        setIsFading(false); // Trigger the fade-in of the new content
        setIsTransitioning(false); // Reset transition state
      }, 250); // 0.25-second delay
    }
  };
  
  
  
  
  


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false); // Reset transition flag after 1s
    }, 1000); // Set the delay to match the transition duration

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
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
            <img
              src={image}
              alt={`Slide ${index}`}
              className="background-slide-image"
            />
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
        <a href="#" className="learn-more-button">
          {slideContent[currentImageIndex].buttonText} {/* Dynamic button text */}
        </a>
      </div>
    </div>
  );
};

export default BackgroundImage;
