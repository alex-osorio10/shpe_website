// src/App.jsx
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BackgroundImage from './BackgroundImage.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';

import gameNightFlyer from './assets/images/game_night_flyer.jpg';
import pastEventFlyer from './assets/images/past_event_flyer.jpg';
import pastEventFlyer2 from './assets/images/past_event_flyer_2.jpg'; // Import the new flyer

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <BackgroundImage />

        {/* First Event */}
        <UpcomingEvents 
          flyerImage={gameNightFlyer} 
          eventTitle="Game Night"
          eventDescription="Join us for a Game Night!"
          eventDetails="Thursday, October 10th, 5pm - 7pm. Location: EB365 + Free Food & Drinks!"
          eventType="upcoming"
        />

        {/* First Past Event */}
        <UpcomingEvents 
          flyerImage={pastEventFlyer}
          eventTitle="SHPE PANEL EVENT"
          eventDescription="With Professional Guest Speakers!"
          eventDetails="Thursday, May 23rd, 6pm - 8pm. Location: EB365 + Free Food & Drinks!"
          eventType="past"
        />

        {/* Second Past Event */}
        <UpcomingEvents 
          flyerImage={pastEventFlyer2} // Use the new flyer here
          eventTitle="LinkedIn Workshop"
          eventDescription="Profile and Resume Workshop"
          eventDetails="Thursday, April 11th, 6pm - 8pm. Location: ENG 315"
          eventType="past"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
