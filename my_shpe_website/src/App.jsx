// src/App.jsx
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BackgroundImage from './BackgroundImage.jsx';
import UpcomingEvents from './UpcomingEvents.jsx'; // Import the new component

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <BackgroundImage />
        <UpcomingEvents /> {/* Render the new component here */}
        {/* Add more content as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
