// src/App.jsx
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BackgroundImage from './BackgroundImage.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <BackgroundImage />
        {/* Add more content as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
