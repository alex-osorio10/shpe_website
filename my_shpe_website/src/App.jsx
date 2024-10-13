// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';
import UpcomingEvents from './UpcomingEvents';
import Options from './Options';
import Officers from './Officers'; // Import Officers component
import About from './About'; // Import About component

import gameNightFlyer from './assets/images/game_night_flyer.webp';
import pastEventFlyer from './assets/images/past_event_flyer.webp';
import pastEventFlyer2 from './assets/images/past_event_flyer_2.webp';
import hpEventFlyer from './assets/images/hp_event_flyer.webp'; // Import HP event flyer

// Component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes (new page navigation)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <ScrollToTop /> {/* Ensure scroll to top on every page load */}
      <div className="app-container">
        <Header /> {/* Ensure Header is present */}
        <ScrollToUpcomingEvents /> {/* Ensure scrolls to upcoming events if hash is present */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <BackgroundImage />
                <UpcomingEvents
                  flyerImage={hpEventFlyer}
                  eventTitle="SHPE Convention Prep"
                  eventDescription="Join our interactive workshop to learn more about HP and the upcoming 2024 SHPE convention!"
                  eventDetails="October 17, 2024, 6:00 PM - 7:00 PM PDT"
                  eventType="upcoming"
                />
                <UpcomingEvents
                  flyerImage={gameNightFlyer}
                  eventTitle="Game Night"
                  eventDescription="+ Free food and drinks!"
                  eventDetails="Thursday, October 10th, 5pm - 7pm. Location: EB365 + Free Food & Drinks!"
                  eventType="past"
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
          <Route path="/officers" element={<Officers />} /> {/* Officers section */}
          
          {/* About Route */}
          <Route path="/about" element={<About />} /> {/* About Us section */}
          
          {/* Options Route */}
          <Route path="/options" element={<Options />} /> {/* Options section */}
        </Routes>
        <Footer /> {/* Ensure Footer is present */}
      </div>
    </Router>
  );
}

export default App;
