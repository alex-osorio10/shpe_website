// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';
import UpcomingEvents from './UpcomingEvents';
import Options from './Options';
import Officers from './Officers'; // Import Officers component
import About from './About'; // Import About component

import gameNightFlyer from './assets/images/game_night_flyer.jpg';
import pastEventFlyer from './assets/images/past_event_flyer.jpg';
import pastEventFlyer2 from './assets/images/past_event_flyer_2.jpg';

// Scroll to a specific section if location hash is present
const ScrollToUpcomingEvents = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#upcoming-events') {
      const element = document.getElementById('upcoming-events');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Ensure Header is present */}
        <ScrollToUpcomingEvents />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <BackgroundImage />
                <UpcomingEvents
                  flyerImage={gameNightFlyer}
                  eventTitle="Game Night"
                  eventDescription="+ Free food and drinks!"
                  eventDetails="Thursday, October 10th, 5pm - 7pm. Location: EB365 + Free Food & Drinks!"
                  eventType="upcoming"
                />
                <UpcomingEvents
                  flyerImage={pastEventFlyer}
                  eventTitle="SHPE PANEL EVENT"
                  eventDescription="With Professional Guest Speakers!"
                  eventDetails="Thursday, May 23rd, 6pm - 8pm. Location: EB315 + Free Food & Drinks!"
                  eventType="past"
                />
                <UpcomingEvents
                  flyerImage={pastEventFlyer2}
                  eventTitle="LinkedIn Workshop"
                  eventDescription="Profile and Resume Workshop"
                  eventDetails="Thursday, April 11th, 6pm - 8pm. Location: EB315"
                  eventType="past"
                />
              </main>
            }
          />
          {/* Officers Route */}
          <Route path="/officers" element={<Officers />} /> {/* Make sure this route is set */}
          
          {/* About Route */}
          <Route path="/about" element={<About />} /> {/* About Us section */}
          
          {/* Options Route */}
          <Route path="/options" element={<Options />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
