// src/UpcomingEvents.jsx
import React from 'react';

const UpcomingEvents = ({ flyerImage, eventTitle, eventDescription, eventDetails, eventType }) => {
  return (
    <section id={eventType === 'upcoming' ? 'upcoming-events' : ''} className="upcoming-events-container">
      <h2 className="events-heading">
        {eventType === 'upcoming' ? 'Upcoming Events!' : 'Past Events'}
      </h2>
      <div className="event-content">
        {/* Flyer Image */}
        <div className="event-image-container">
          <img src={flyerImage} alt={eventTitle} className="event-image" />
        </div>

        {/* Text Overlay */}
        <div className="event-text-overlay">
          <div className="event-text">
            <h3 className="event-title">{eventTitle}</h3>
            <p className="event-description">{eventDescription}</p>
            <p className="event-details">{eventDetails}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
