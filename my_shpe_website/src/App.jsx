// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';
import UpcomingEvents from './UpcomingEvents';
import Options from './Options';
import Officers from './Officers'; 
import About from './About'; 

import gameNightFlyer from './assets/images/game_night_flyer.webp';
import pastEventFlyer from './assets/images/past_event_flyer.webp';
import pastEventFlyer2 from './assets/images/past_event_flyer_2.webp';
import hpEventFlyer from './assets/images/hp_event_flyer.webp';
import potluckEventFlyer from './assets/images/potluck_event_flyer.jpg';

// Component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
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
  const hasUpcomingEvents = false; // Set this to false, since all events are past

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <ScrollToUpcomingEvents />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <BackgroundImage />
                
                {/* Conditional Placeholder for Upcoming Events */}
                {hasUpcomingEvents ? (
                  <UpcomingEvents
                    flyerImage={potluckEventFlyer}
                    eventTitle="FRIENDSGIVING POTLUCK & GENERAL MEETING"
                    eventDescription="Join us for the SHPE Oregon Professional Friendsgiving Potluck, where we'll celebrate the season of gratitude and giving with our SHPE Familia and share a feast of favorite dishes!"
                    eventDetails="Thursday, November 7th, 6:30pm - 9pm. Location: EB315"
                    eventType="upcoming"
                  />
                ) : (
                  <section 
                    id="upcoming-events" 
                    style={{
                      minHeight: '1px',
                      padding: '0',
                      margin: '0',
                      visibility: 'hidden'
                    }}
                  />
                )}

                {/* Past Events */}
                <UpcomingEvents
                  flyerImage={potluckEventFlyer}
                  eventTitle="FRIENDSGIVING POTLUCK & GENERAL MEETING"
                  eventDescription="Join us for the SHPE Oregon Professional Friendsgiving Potluck, where we'll celebrate the season of gratitude and giving with our SHPE Familia and share a feast of favorite dishes!"
                  eventDetails="Thursday, November 7th, 6:30pm - 9pm. Location: EB315"
                  eventType="past"
                />
                <UpcomingEvents
                  flyerImage={hpEventFlyer}
                  eventTitle="Career Prep with HP"
                  eventDescription="Join our interactive workshop to learn more about HP and the upcoming 2024 SHPE convention!"
                  eventDetails="Thursday, October 17th, 6pm - 7pm. Location: EB365"
                  eventType="past"
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
          <Route path="/officers" element={<Officers />} />
          <Route path="/about" element={<About />} />
          <Route path="/options" element={<Options />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
