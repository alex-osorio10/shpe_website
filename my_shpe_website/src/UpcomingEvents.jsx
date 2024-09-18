import React from 'react';
import gameNightFlyer from './assets/images/game_night_flyer.jpg'; // Import the actual event image
import blankImage from './assets/images/blank_image.jpg'; // Import the blank white image

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events-container">
      <h2>Upcoming Events!</h2>
      <div className="event-content">
        {/* Flyer Image */}
        <div className="event-image-container">
          <img src={gameNightFlyer} alt="Game Night Flyer" className="event-image" />
        </div>

        {/* Text Overlay with Blank Image */}
        <div className="event-text-overlay">
          <img src={blankImage} alt="Blank Background" className="blank-image" />
          <div className="event-text">
            <h3>Game Night</h3>
            <p>Join us for a Game Night!</p>
            <p>Thursday, October 10th, 5pm - 7pm</p>
            <p>Location: EB365 + Free Food & Drinks!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
